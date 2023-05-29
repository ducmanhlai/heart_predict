#include <Arduino.h>
#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif
#include <Firebase_ESP_Client.h>
// Provide the token generation process info.
#include "addons/TokenHelper.h"
// Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"
// Insert your network credentials
#define WIFI_SSID "Vivo U10"
#define WIFI_PASSWORD "09022001"
// Insert Firebase project API Key
#define API_KEY "AIzaSyD8f6u7pcZS96aDABfvlVB06B4PVw5CUQY"
// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "https://fir-authall-37df8-default-rtdb.firebaseio.com/"
// Define Firebase Data object
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool signupOK = false;
/*-----------------------------------------------------------------------------------*/

#include <Wire.h>
#include "MAX30105.h"
#include "heartRate.h"
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "spo2_algorithm.h"
#define SCREEN_WIDTH 128  // Chiều rộng màn hình OLED
#define SCREEN_HEIGHT 32  // Chiều cao màn hình OLED

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);
MAX30105 particleSensor;

const byte RATE_SIZE = 4;  // Increase this for more averaging. 4 is good.
byte rates[RATE_SIZE];     // Array of heart rates
byte rateSpot = 0;
long lastBeat = 0;  // Time at which the last beat occurred
float temp = 0;
float validTemp = 0;
int validHR = 0;
int validSpO2 = 0;
int buzzer = 0;

long curentTime = millis();

int32_t bufferLength;   // data lengthr
int32_t spO2;           // SPO2 value
int8_t validSPO2;       // indicator to show if the SPO2 calculation is valid
int32_t heartRate;      // heart rate value
int8_t validHeartRate;  // indicator to show if the heart rate calculation is valid

uint32_t irBuffer[100];   // infrared LED sensor data
uint32_t redBuffer[100];  // red LED sensor data
// byte pulseLED = 11;       //Must be on PWM pin
// byte readLED = 13;        //Blinks with each data read

/*-----------------------------------------------------------*/

float beatsPerMinute;
int beatAvg;


long timewait1, timewait2;
bool canSend = false;


void setup() {
  Serial.begin(9600);
  Serial.println("Initializing...");
  configFirebase();
  pinMode(buzzer, OUTPUT);
  // Initialize sensor
  while (!particleSensor.begin(Wire, I2C_SPEED_FAST))  // Use default I2C port, 400kHz speed
  {
    Serial.println("MAX30105 was not found.");
  }
  while (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("OLED was not found.");
  }
  configSensor();
  display.clearDisplay();
  display.display();
}
void loop() {
  long irValue = particleSensor.getIR();
  if (irValue < 5000) {
    Serial.println("No finger ?");
    displayNoFinger();
    //    turnOnBuzzer(500);
  } else {
    displayValues();
    if (checkForBeat(irValue) == true) {
      //We sensed a beat!
      long delta = millis() - lastBeat - (timewait2- timewait1);
      lastBeat = millis();
      
      
      beatsPerMinute = 60 / (delta / 1000.0);

      if (beatsPerMinute < 255 && beatsPerMinute > 20) {
        rates[rateSpot++] = (byte)beatsPerMinute;  //Store this reading in the array
        rateSpot %= RATE_SIZE;                     //Wrap variable

        //Take average of readings
        beatAvg = 0;
        for (byte x = 0; x < RATE_SIZE; x++)
          beatAvg += rates[x];
        beatAvg /= RATE_SIZE;
      }

      timewait1 = millis();
      readHeartRateAndSpO2();
      temp = particleSensor.readTemperature();
      checkValidvalues();
      displaySerial();
      displayValues();
      sendDataToFireBase();
      timewait2 = millis();
    }
  }
}

void readHeartRateAndSpO2() {
  bufferLength = 40;  // buffer length of 100 stores 4 seconds of samples running at 25sps

//  particleSensor.setSampleRate(100);


  // read the first 100 samples, and determine the signal range
  for (byte i = 0; i < bufferLength; i++) {
    while (particleSensor.available() == false)  // do we have new data?
      particleSensor.check();                    // Check the sensor for new data

    redBuffer[i] = particleSensor.getRed();
    irBuffer[i] = particleSensor.getIR();
    
    particleSensor.nextSample();  // We're finished with this sample so move to next sample
    
  }

  // calculate heart rate and SpO2 after first 100 samples (first 4 seconds of samples)
  maxim_heart_rate_and_oxygen_saturation(irBuffer, bufferLength, redBuffer, &spO2, &validSPO2, &heartRate, &validHeartRate);
}
void displayValues() {
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 0);
  display.print("Nhip tim: ");
  display.setCursor(58, 0);
  display.print(validHR, 0);
  display.print(" bpm");
  display.setCursor(0, 12);
  display.print("Nhiet do: ");
  display.setCursor(58, 12);
  display.print(validTemp, 1);
  display.print(" *C");
  display.setCursor(0, 24);
  display.print("SpO2: ");
  display.setCursor(58, 24);
  display.print(validSpO2, 0);
  display.print(" %");
  display.display();
}
void checkValidvalues() {
  if (beatAvg >= 50 && beatAvg <= 130) {
    validHR = beatAvg;
    canSend = true;
  }
  
  if (temp >= 30 && temp <= 40) {
    validTemp = temp;
    canSend = true;
  }
  if (spO2 >= 85 && spO2 <= 100) {
    validSpO2 = spO2;
    canSend = true;
  }
}

void displaySerial() {
  Serial.print("HeartRate= ");
  Serial.print(heartRate, 0);
  Serial.print(" ,temperatureC= ");
  Serial.print(temp, 1);
  Serial.print(" ,SpO2= ");
  Serial.print(spO2, 0);
  Serial.print(" ,beatsPerMinute= ");
  Serial.print(beatsPerMinute, 0);
  Serial.print(" ,beatAvg= ");
  Serial.println(beatAvg, 0);
}
void configSensor() {
  particleSensor.setup();                     // Configure sensor with default settings
  particleSensor.setPulseAmplitudeRed(0x0A);  // Turn Red LED to low to indicate sensor is running
  particleSensor.setPulseAmplitudeGreen(0);   // Turn off Green LED
}
void configFirebase() {
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  /* Assign the api key (required) */
  config.api_key = API_KEY;
  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;
  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("ok");
    signupOK = true;
  } else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }
  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback;  // see addons/TokenHelper.h
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}
void sendDataToFireBase() {

  if (Firebase.ready() && signupOK && canSend ==true) {
    canSend  = false;

    // Write an Int number on the database path test/spo2
    if (Firebase.RTDB.setInt(&fbdo, "test/spo2", validSpO2)) {

    } else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    if (Firebase.RTDB.setInt(&fbdo, "test/led", 1)) {

    } else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }


    // Write an Float number on the database path test/bmp
    if (Firebase.RTDB.setInt(&fbdo, "test/bmp", validHR)) {

    } else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    // Write an Float number on the database path test/temp
    if (Firebase.RTDB.setFloat(&fbdo, "test/temp", validTemp)) {

    } else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
  }
}
void turnOnBuzzer(long time) {
  digitalWrite(buzzer, HIGH);
  delay(time);
  digitalWrite(buzzer, LOW);
}
void displayNoFinger() {
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(10, 5);
  display.print("Hay deo thiet");
  display.setCursor(10, 25);
  display.print("bi vao tay !");
  display.display();
}