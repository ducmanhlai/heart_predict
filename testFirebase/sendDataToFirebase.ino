#include <Arduino.h>
#if defined(ESP32)
  #include <WiFi.h>
#elif defined(ESP8266)
  #include <ESP8266WiFi.h>
#endif
#include <Firebase_ESP_Client.h>


//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

// Insert your network credentials
#define WIFI_SSID "Vivo U10"
#define WIFI_PASSWORD "09022001"

// Insert Firebase project API Key
#define API_KEY "AIzaSyD8f6u7pcZS96aDABfvlVB06B4PVw5CUQY"

// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "https://fir-authall-37df8-default-rtdb.firebaseio.com/" 

//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
int count = 0;
bool signupOK = false;

const int ledPin = 2;
int val=0;

// =================MAX30105============================
#include <Wire.h>
#include "MAX30100_PulseOximeter.h"
#include "heartRate.h"
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define REPORTING_PERIOD_MS 1000

#define SCREEN_WIDTH 128 // Chiều rộng màn hình OLED
#define SCREEN_HEIGHT 32 // Chiều cao màn hình OLED

PulseOximeter pox;
MAX30100 sensor;


Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

uint32_t tsLastReport = 0;
int heartRate = 0;
int spo2 = 0;
float temperature = 0;
void configFirebase(){
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting to Wi-Fi");
    while (WiFi.status() != WL_CONNECTED){
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
    if (Firebase.signUp(&config, &auth, "", "")){
      Serial.println("ok");
      signupOK = true;
    }
    else{
      Serial.printf("%s\n", config.signer.signupError.message.c_str());
    }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
  }

void sendDataToFireBase(){
  val = digitalRead(ledPin);
  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 1000 || sendDataPrevMillis == 0)){
    sendDataPrevMillis = millis();
    // Write an Int number on the database path test/spo2
    if (Firebase.RTDB.setInt(&fbdo, "test/spo2", spo2)){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
    count++;
    if (Firebase.RTDB.setInt(&fbdo, "test/led", val)){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
    if(val==0)
    digitalWrite(ledPin, HIGH);
    else digitalWrite(ledPin, LOW);
    
    // Write an Float number on the database path test/bmp
    if (Firebase.RTDB.setInt(&fbdo, "test/bmp", heartRate)){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    // Write an Float number on the database path test/temp
    if (Firebase.RTDB.setFloat(&fbdo, "test/temp",temperature)){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
  }
}

void setup(){
  Serial.begin(9600);
  Serial.println("Initializing...");
  configFirebase();
  
  // Initialize oled
  while(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("OLED was not found !"));    
  }
  // Xóa màn hình OLED
  display.clearDisplay();
  display.display();
  // Initialize sensor
  while (!sensor.begin()) //Use default I2C port, 400kHz speed
  {
    Serial.println("MAX30100 was not found! ");    
  }
  while (!pox.begin()) //Use default I2C port, 400kHz speed
  {
    Serial.println("PulseOximeter was not found!");    
  }
  Serial.println("Place your index finger on the sensor with steady pressure.");
  configureMax30100();
  
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);
}

void loop(){
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  sensor.update();
  
  if(millis() - tsLastReport > REPORTING_PERIOD_MS ){  
    heartRate = pox.getHeartRate();
    spo2 =   pox.getSpO2();
     if (sensor.isTemperatureReady()) {
    temperature = sensor.retrieveTemperature();}
    displaySerial();
    displayOled();
    sendDataToFireBase();
    tsLastReport = millis();
  }
}

void configureMax30100() {
  sensor.setMode(MAX30100_MODE_SPO2_HR);
  sensor.setLedsCurrent(MAX30100_LED_CURR_50MA, MAX30100_LED_CURR_27_1MA);
  sensor.setLedsPulseWidth(MAX30100_SPC_PW_1600US_16BITS);
  sensor.setSamplingRate(MAX30100_SAMPRATE_100HZ);
  sensor.setHighresModeEnabled(true);
}
void displayOled(){
  display.setCursor(0, 0);
  display.print("Nhip tim: ");
  display.print(heartRate,0);
  display.println(" bpm");
  display.setCursor(0, 12);        
  display.print("Nhiet do: ");
  sensor.startTemperatureSampling();  
  display.print(temperature,1);
  display.println("*C");  
  display.setCursor(0, 24);
  display.print("Nong do oxy: ");
  display.print(spo2);
  display.println(" %");
}
void displaySerial(){
  Serial.print("Heart rate:");
  Serial.print(heartRate,0);
  Serial.print("bpm / SpO2:");
  Serial.print(spo2);
  Serial.print("%, temp: "); 
  Serial.print(temperature,1);
  Serial.println(" *C");  
}  
