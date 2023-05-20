// Use at least Nodemailer v4.1.0
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tuanhungtester@gmail.com",
    pass: "vckkyhvzvelxajsq",
  },
});

export async function sendResult(
  mail,
  bpm = 65,
  spo2 = 95,
  temp = 36.5,
  dateTest = new Date(),
  text
) {
  let message = {
    from: "Sender Name <health-monitor.com>",
    to: mail,
    subject: "Cảnh báo từ health-monitor.com",
    text: "Xin chào!",
    // html: `<p> Click vào <a href="${process.env.BASE_URL}/account/change-password-form?token=${token}"> đây </a> để đổi mật khẩu!<p/>
    // <p>Link chỉ có hiệu lực trong 5 phút</p>
    // `
    html: `<div
    class="adn ads"
    style="display: "
    data-message-id="#msg-f:1766190394547587327"
    data-legacy-message-id="1882c4ce60b748ff"
  >
    <div class="gs">
      <div id=":nc">
        <div class="qQVYZb"></div>
        <div class="utdU2e"></div>
        <div class="lQs8Hd" jsaction="SN3rtf:rcuQ6b" jscontroller="i3Ohde"></div>
        <div class="btm"></div>
      </div>
      <div class="">
        <div class="aHl"></div>
        <div id=":np" tabindex="-1"></div>
        <div
          id=":ne"
          class="ii gt"
          jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTc2NjE5MDM5NDU0NzU4NzMyNyIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d; 4:WyIjbXNnLWY6MTc2NjE5MDM5NDU0NzU4NzMyNyIsbnVsbCxbXV0."
        >
          <div id=":nd" class="a3s aiL">
            <table
              style="
                line-height: 1.8;
                border-collapse: collapse;
                display: block;
                font-size: 13.5px;
                font-family: Times New Roman;
                color: #1f497d;
              "
            >
              <tbody>
                <tr style="height: 40px">
                  <td>
                    <img
                      alt=""
                      src="https://www.healthkart.com/connect/wp-content/uploads/2021/09/900x500_banner_HK-Connect_How-to-Improve-Heart-Health-_-Points-To-Keep-In-Mind.jpg"
                      class="CToWUd a6T"
                      data-bit="iit"
                      tabindex="0"
                    />
                    <div
                      class="a6S"
                      dir="ltr"
                      style="opacity: 0.01; left: 653px; top: 109px"
                    >
                      <div
                        id=":ol"
                        class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q"
                        role="button"
                        tabindex="0"
                        aria-label="Tải xuống tệp đính kèm "
                        jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTc2NjE5MDM5NDU0NzU4NzMyNyIsbnVsbCxbXV0."
                        data-tooltip-class="a1V"
                        data-tooltip="Tải xuống"
                      >
                        <div class="akn"><div class="aSK J-J5-Ji aYr"></div></div>
                      </div>
                    </div>
                    <br />
                  </td>
                </tr>
                <tr style="height: 40px">
                  <td
                    style="font-size: medium; color: #1f497d; margin-left: 10px"
                  >
                    <span>Xin chào bạn, </span>
                  </td>
                </tr>
                <tr style="height: 40px">
                  <td
                    style="font-size: medium; color: #1f497d; margin-left: 10px"
                  >
                    <span
                      >Ứng dụng giám sát sức khỏe Health Monitor xin cảnh báo về
                      vấn đề sức khỏe của bạn như sau:</span
                    >
                  </td>
                </tr>
                <tr style="height: 40px">
                  <td>
                    <table
                      style="margin-left: 30px; font-size: medium; color: #1f497d"
                    >
                      <tbody>
                        <tr style="height: 40px">
                          <td style="width: 200px">
                            <span style="font-weight: bold"
                              >Nhịp tim bạn hiện tại</span
                            >
                          </td>
                          
                          <td><span>${bpm}</span> <span>% </span></td>
                        </tr>
                        <tr style="height: 40px">
                          <td style="width: 200px">
                            <span style="font-weight: bold"
                              >Nồng độ oxy trong máu</span
                            >
                          </td>
                          <td><span>${spo2}</span> <span>% </span></td>
                        </tr>
                        <tr style="height: 40px">
                          <td style="width: 200px">
                            <span style="font-weight: bold"
                              >Nhiệt độ của cơ thể</span
                            >
                          </td>
                          <td><span>${temp}</span> <span> oC </span></td>
                        </tr>
                        <tr style="height: 40px">
                          <td style="width: 200px">
                            <span style="font-weight: bold"
                              >Ngày và giờ thực hiện</span
                            >
                          </td>
                          <td>${dateTest}</td>
                        </tr>
                        <tr style="height: 40px">
                          <td style="width: 200px">
                            <span style="font-weight: bold">Chuẩn đoán</span>
                          </td>
                          <td>${text}<br /></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr style="height: 40px">
                  <td
                    style="font-size: medium; color: #1f497d; margin-left: 10px"
                  >
                    <br />
                  </td>
                </tr>
                <tr style="height: 40px">
                  <td
                    style="font-size: medium; color: #1f497d; margin-left: 10px"
                  >
                    Trân trọng cảm ơn bạn đã sử dụng dịch vụ giám sát sức
                    khỏe của Health Monitor!
                    <br />
                  </td>
                </tr>
                <tr style="height: 40px">
                  <td>
                    <br /><br />
                    <img
                      alt=""
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVeO2L04SG3L2c2k12Shw_eNzTGSLVBdkxSQ&usqp=CAU"
                      class="CToWUd a6T"
                      data-bit="iit"
                      tabindex="0"
                    />
                    <div
                      class="a6S"
                      dir="ltr"
                      style="opacity: 0.01; left: 653px; top: 787.9px"
                    >
                      <div
                        id=":om"
                        class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q"
                        role="button"
                        tabindex="0"
                        aria-label="Tải xuống tệp đính kèm "
                        jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTc2NjE5MDM5NDU0NzU4NzMyNyIsbnVsbCxbXV0."
                        data-tooltip-class="a1V"
                        data-tooltip="Tải xuống"
                      >
                        <div class="akn"><div class="aSK J-J5-Ji aYr"></div></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="yj6qo"></div>
        </div>
        <div id=":nt" class="ii gt" style="display: none">
          <div id=":nu" class="a3s aiL"></div>
        </div>
        <div class="hi"></div>
      </div>
    </div>
    <div class="ajx"></div>
  </div>
  `,
  };
  let rs = await transporter.sendMail(message);
  console.log(rs);
  return rs;
}

// Message object
async function sendChangePassMail(mail, token) {
  let message = {
    from: "Sender Name <health-monitor.com>",
    to: mail,
    subject: "Đổi mật khẩu health-monitor.com",
    text: "Xin chào!",
    // html: `<p> Click vào <a href="${process.env.BASE_URL}/account/change-password-form?token=${token}"> đây </a> để đổi mật khẩu!<p/>
    // <p>Link chỉ có hiệu lực trong 5 phút</p>
    // `
    html: `<table
    width="100%"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="background-color: #f7f7f7"
  >
    <tbody>
      <tr>
        <td>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="background-color: #f7f7f7"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    class="m_-4396642744106805998row-content m_-4396642744106805998stack"
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="background-color: #f7f7f7; color: #000; width: 600px"
                    width="600"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="m_-4396642744106805998column"
                          width="100%"
                          style="
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 30px;
                            padding-bottom: 0;
                            border-top: 0;
                            border-right: 0;
                            border-bottom: 0;
                            border-left: 0;
                          "
                        >
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Roboto, Tahoma, Verdana, Segoe,
                                        sans-serif;
                                      text-align: center;
                                    "
                                    align="center"
                                  >
                                    <div
                                      style="
                                        display: none;
                                        max-height: 0px;
                                        overflow: hidden;
                                      "
                                    >
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<wbr />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<wbr />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<wbr />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<wbr />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<wbr />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            class="m_-4396642744106805998image_block"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    width: 100%;
                                    padding-right: 0;
                                    padding-left: 0;
                                  "
                                >
                                  <div align="center" style="line-height: 10px">
                                    <img
                                      class="m_-4396642744106805998big CToWUd"
                                      src="https://www.healthkart.com/connect/wp-content/uploads/2021/09/900x500_banner_HK-Connect_How-to-Improve-Heart-Health-_-Points-To-Keep-In-Mind.jpg"
                                      style="
                                        display: block;
                                        height: auto;
                                        border: 0;
                                        width: 600px;
                                        max-width: 100%;
                                      "
                                      width="600"
                                      alt="Đổi mật khẩu"
                                      title="Đổi mật khẩu"
                                      data-bit="iit"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="background-color: #f7f7f7"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    class="m_-4396642744106805998row-content m_-4396642744106805998stack"
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="background-color: #fff; color: #000; width: 600px"
                    width="600"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="m_-4396642744106805998column"
                          width="100%"
                          style="
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 0;
                            padding-bottom: 0;
                            border-top: 0;
                            border-right: 0;
                            border-bottom: 0;
                            border-left: 0;
                          "
                        >
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="word-break: break-word"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    padding-left: 48px;
                                    padding-right: 48px;
                                    padding-top: 48px;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #17262b;
                                        line-height: 1.5;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 16px;
                                          text-align: left;
                                        "
                                      >
                                        <span style="font-size: 16px"
                                          >Chào bạn,</span
                                        >
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 16px;
                                          text-align: left;
                                        "
                                      >
                                        &nbsp;
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 16px;
                                          text-align: left;
                                        "
                                      >
                                        Chúng tôi đã nhận được yêu cầu quyên mật
                                        khẩu của bạn.
                                      </p>
                                      <ul
                                        style="line-height: 1.5; font-size: 16px"
                                      >
                                        <li style="text-align: left">
                                          Chúng tôi đã
                                          <strong> xác nhận </strong> tài khoản
                                          của bạn là hợp lệ.
                                        </li>
                                        <li style="text-align: left">
                                          Vì thế chúng tôi<strong>
                                            cung cấp</strong
                                          >
                                          cho bạn cách thức để có thể đăng nhập
                                          bình thường trở lại.
                                        </li>
                                        <li style="text-align: left">
                                          Bạn cần
                                          <strong> nhanh chóng click</strong> vào
                                          nút bên dưới để tiến hành đổi mật khẩu
                                          tài khoản của bạn.
                                        </li>
                                      </ul>
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 16px;
                                          text-align: left;
                                        "
                                      >
                                        &nbsp;
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 16px;
                                          text-align: left;
                                        "
                                      >
                                        Hiệu lực mail chỉ có 5 phút!
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    class="m_-4396642744106805998row-content m_-4396642744106805998stack"
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="background-color: #fff; color: #000; width: 600px"
                    width="600"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="m_-4396642744106805998column"
                          width="100%"
                          style="
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 48px;
                            padding-bottom: 0;
                            border-top: 0;
                            border-right: 0;
                            border-bottom: 0;
                            border-left: 0;
                          "
                        >
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                          >
                            <tbody>
                              <tr>
                                <td style="text-align: center">
                                  <div align="center">
                                    <a
                                      href="${process.env.BASE_URL}/account/change-password-form?token=${token}"
                                      style="
                                        text-decoration: none;
                                        display: inline-block;
                                        color: #ffffff;
                                        background-color: #29ab51;
                                        border-radius: 3px;
                                        width: auto;
                                        border-top: 1px solid #29ab51;
                                        font-weight: 400;
                                        border-right: 1px solid #29ab51;
                                        border-bottom: 1px solid #29ab51;
                                        border-left: 1px solid #29ab51;
                                        padding-top: 9px;
                                        padding-bottom: 9px;
                                        font-family: 'Roboto', Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 16px;
                                        text-align: center;
                                        word-break: keep-all;
                                      "
                                      target="_blank"
                                      ><span
                                        style="
                                          padding-left: 31px;
                                          padding-right: 31px;
                                          font-size: 16px;
                                          display: inline-block;
                                          letter-spacing: normal;
                                        "
                                        ><span
                                          dir="ltr"
                                          style="word-break: break-word"
                                          ><span
                                            style="line-height: 28.8px"
                                            dir="ltr"
                                            >Đổi mật khẩu ngay</span
                                          ></span
                                        ></span
                                      ></a
                                    >
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="background-color: #f7f7f7"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    class="m_-4396642744106805998row-content m_-4396642744106805998stack"
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="background-color: #fff; color: #000; width: 600px"
                    width="600"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="m_-4396642744106805998column"
                          width="100%"
                          style="
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 0;
                            padding-bottom: 0;
                            border-top: 0;
                            border-right: 0;
                            border-bottom: 0;
                            border-left: 0;
                          "
                        >
                          <table
                            width="100%"
                            border="0"
                            cellpadding="48"
                            cellspacing="0"
                            role="presentation"
                            style="word-break: break-word"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Tahoma, Verdana, sans-serif;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 14px;
                                        font-family: Roboto, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        color: #17262b;
                                        line-height: 1.5;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 16px;
                                          text-align: left;
                                        "
                                      >
                                        <em
                                          ><span style="font-size: 16px"
                                            >Nếu mail đã hết hạn
                                            <div
                                              style="
                                                text-decoration: underline;
                                                color: #29ab51;
                                              "
                                              rel="noopener"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZE1NbE05dEJWeVUiLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjo1NTV9/065af7fe6ed9b4bd13ce0da2397882aff489f9e17a6bedf487e6b52fe5d25422&amp;source=gmail&amp;ust=1679238707720000&amp;usg=AOvVaw2QOVMe0-XElB3fjitzQVPJ"
                                            >
                                              bạn hãy quay trở lại app và bấm quên
                                              mật khẩu
                                            </div>
                                            để nhận mail mới.</span
                                          ></em
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Roboto, Tahoma, Verdana, Segoe,
                                        sans-serif;
                                      text-align: center;
                                    "
                                    align="center"
                                  >
                                    <div
                                      style="
                                        background-image: url(https://ci3.googleusercontent.com/proxy/B8r31cYc-wmwWKlnEO7dVMChj470SXzSfUYLfDKDJ3j44JKuwT_zrlc-wjfCvXnmcxJAcgh616qhRMtfcUr2bTOr1pN963BS9cTKxmtr9siOTzsylJciyDAkIBsC99Au6CFwKCnaZJgUEg=s0-d-e1-ft#https://userimg-bee-eu.customeriomail.com/images/client-env-106806/CTA%20background.png);
                                        background-position: 90% 20%;
                                        background-size: contain;
                                        background-repeat: no-repeat;
                                        border: solid 1px #e3e4e5;
                                        border-radius: 15px;
                                        margin: 0px 48px 0px 48px;
                                        text-align: center;
                                        background-size: cover;
                                      "
                                    >
                                      <div
                                        style="
                                          height: auto;
                                          display: table;
                                          width: 100%;
                                        "
                                      >
                                        <div
                                          style="
                                            vertical-align: middle;
                                            text-align: center;
                                          "
                                        >
                                          <h2
                                            style="
                                              color: #17262b;
                                              font-size: 28px;
                                              font-weight: 600;
                                              font-family: 'Helvetica', sans-serif;
                                              vertical-align: middle;
                                              margin-top: 0px;
                                              margin-bottom: 20px;
                                              padding: 30px 40px 10px 40px;
                                            "
                                          >
                                            Cảm ơn bạn đã tin tưởng sử dụng dịch vụ của chúng tôi!
                                          </h2>
                                          <a
                                            href="https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vcHJpbnRpZnkuY29tL2Jsb2cvYmVzdC1zaXRlcy10by1zZWxsLW9ubGluZS1hLWJyaWVmLW92ZXJ2aWV3Lz91dG1fc291cmNlPW5ld3NsZXR0ZXJcdTAwMjZ1dG1fbWVkaXVtPWVtYWlsXHUwMDI2dXRtX2NhbXBhaWduPU9uYm9hcmRpbmdcdTAwMjZ1dG1fY29udGVudD1IZWF0aGVyLVN1Y2Nlc3MtU3RhZ2UtMS1UUkUiLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjo1MzcyfQ/81561d1987c3ed73a221a2b6547ed03edc0227ad8000ac7840e3706e3069d701"
                                            target="_blank"
                                            data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vcHJpbnRpZnkuY29tL2Jsb2cvYmVzdC1zaXRlcy10by1zZWxsLW9ubGluZS1hLWJyaWVmLW92ZXJ2aWV3Lz91dG1fc291cmNlPW5ld3NsZXR0ZXJcdTAwMjZ1dG1fbWVkaXVtPWVtYWlsXHUwMDI2dXRtX2NhbXBhaWduPU9uYm9hcmRpbmdcdTAwMjZ1dG1fY29udGVudD1IZWF0aGVyLVN1Y2Nlc3MtU3RhZ2UtMS1UUkUiLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjo1MzcyfQ/81561d1987c3ed73a221a2b6547ed03edc0227ad8000ac7840e3706e3069d701&amp;source=gmail&amp;ust=1679238707720000&amp;usg=AOvVaw0CdcoSz0Ws8zWZHuckZeID"
                                            ><button
                                              style="
                                                font-weight: 600;
                                                font-size: 16px;
                                                line-height: 24px;
                                                color: #17262b;
                                                background: #ffffff;
                                                border: 2px solid #e3e4e5;
                                                border-radius: 5px;
                                                padding: 10px 20px;
                                                margin-bottom: 30px;
                                              "
                                            >
                                              Chúc bạn ngày mới tốt lành!
                                            </button></a
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    class="m_-4396642744106805998row-content m_-4396642744106805998stack"
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="background-color: #fff; color: #000; width: 600px"
                    width="600"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="m_-4396642744106805998column"
                          width="100%"
                          style="
                            font-weight: 400;
                            text-align: left;
                            padding-left: 48px;
                            vertical-align: top;
                            padding-top: 32px;
                            padding-bottom: 0;
                            border-top: 0;
                            border-right: 0;
                            border-bottom: 0;
                            border-left: 0;
                          "
                        >
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Roboto, Tahoma, Verdana, Segoe,
                                        sans-serif;
                                      text-align: center;
                                    "
                                    align="center"
                                  >
                                    <div
                                      id="m_-4396642744106805998contact-box"
                                      style="
                                        border: solid 1px #ffffff;
                                        border-radius: 15px;
                                        width: 100%;
                                        vertical-align: center;
                                        padding-top: 10px;
                                        padding-right: 10px;
                                        text-align: left;
                                      "
                                    >
                                      <div
                                        id="m_-4396642744106805998contact-child-one"
                                        style="
                                          text-align: left;
                                          margin: 0px;
                                          display: inline-block;
                                          vertical-align: middle;
                                        "
                                      >
                                        <img
                                          id="m_-4396642744106805998contact-photo"
                                          src="https://img.freepik.com/free-icon/user_318-370513.jpg"
                                          style="
                                            width: 60px;
                                            height: 60px;
                                            margin: 0px;
                                            margin-top: 2px;
                                            margin-right: 12px;
                                          "
                                          class="CToWUd"
                                          data-bit="iit"
                                        />
                                      </div>
                                      <div
                                        id="m_-4396642744106805998contact-child-two"
                                        style="
                                          text-align: left;
                                          margin: 0px;
                                          display: inline-block;
                                          vertical-align: middle;
                                        "
                                      >
                                        <p
                                          style="
                                            font-size: 16px;
                                            line-height: 24px;
                                            margin-top: 0px;
                                            margin-bottom: 0px;
                                          "
                                        >
                                          Admin
                                        </p>
                                        <p
                                          style="
                                            font-size: 16px;
                                            line-height: 24px;
                                            font-weight: 600;
                                            margin-top: 0px;
                                            margin-bottom: 0px;
                                          "
                                        >
                                          Vietname bookingtour
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    class="m_-4396642744106805998row-content m_-4396642744106805998stack"
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="background-color: #fff; color: #000; width: 600px"
                    width="600"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="m_-4396642744106805998column"
                          width="100%"
                          style="
                            font-weight: 400;
                            text-align: left;
                            border-bottom: 4px solid #18c75a;
                            vertical-align: top;
                            padding-top: 60px;
                            padding-bottom: 40px;
                            border-top: 0;
                            border-right: 0;
                            border-left: 0;
                          "
                        >
                          <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Roboto, Tahoma, Verdana, Segoe,
                                        sans-serif;
                                      text-align: center;
                                    "
                                    align="center"
                                  ></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="background-color: #f7f7f7"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    class="m_-4396642744106805998row-content m_-4396642744106805998stack"
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="background-color: #f7f7f7; color: #000; width: 600px"
                    width="600"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="m_-4396642744106805998column"
                          width="100%"
                          style="
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            border-top: 0;
                            border-right: 0;
                            border-bottom: 0;
                            border-left: 0;
                          "
                        >
                          <div
                            style="
                              height: 32px;
                              line-height: 32px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                          <table
                            class="m_-4396642744106805998mobile_hide"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Roboto, Tahoma, Verdana, Segoe,
                                        sans-serif;
                                      text-align: center;
                                    "
                                    align="center"
                                  >
                                    <table
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td>
                                            <a
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9QcmludGlmeS8iLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjoxNTN9/4f123bce4c88f4ad89b64531f16b4abe4d2ca6cced0928c59c1b404e15e801d3&amp;source=gmail&amp;ust=1679238707720000&amp;usg=AOvVaw3vjwYy2cyWVIcae_YvA9vF"
                                              ><img
                                                src="https://ci5.googleusercontent.com/proxy/DVriEpwWigY2MCuumBr0QYd8MfcKX9-saCLAcdpKipKDeMqEhr5m6FPqn3tkrQaw9irGnx4Jxly-ZWLLxji2SAb-uSHWymczlQ5G0FzhD3d9gGNR2WXF5srhcFfr3XxQO94dUlh1rA=s0-d-e1-ft#https://userimg-bee-eu.customeriomail.com/images/client-env-106806/facebook_icon.png"
                                                alt="Facebook logo"
                                                height="40"
                                                width="40"
                                                style="width: 40px; height: 40px"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                          </td>
                                          <td style="width: 14px" width="14"></td>
                                          <td>
                                            <a
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcHJpbnRpZnkvIiwiaW50ZXJuYWwiOiJiNmMyMDY3Zjk3YmYwMWU4ODRlYTAxIiwibGlua19pZCI6MTU0fQ/3238a892cd62ac6944b904bd8da15a224a364a772e4e3409a2e56d29a93e5195&amp;source=gmail&amp;ust=1679238707721000&amp;usg=AOvVaw2Z2EtrrT99JebQe2L-0ABj"
                                              ><img
                                                src="https://ci3.googleusercontent.com/proxy/Xs4hKk5IcoSZTkEv006WjEIducKLt6rxXYbOIoDomDPZ5FRtiWBGat4NndgokX2MH7NvSehi7nxtwRbo3ELk8KSvpKP0TQFJeGHmxWkSCQOlT7Wy3ZHNDVwCdCyjXT-jO23SYMwkjcM=s0-d-e1-ft#https://userimg-bee-eu.customeriomail.com/images/client-env-106806/instagram_icon.png"
                                                alt="Instagram logo"
                                                height="40"
                                                width="40"
                                                style="width: 40px; height: 40px"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                          </td>
                                          <td style="width: 14px" width="14"></td>
                                          <td>
                                            <a
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vdHdpdHRlci5jb20vcHJpbnRpZnkiLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjoxNTV9/b657cdb9a8d76ec5de9d5d6a0704bb8bb896095de625dfbb4cd25e53673967d3&amp;source=gmail&amp;ust=1679238707721000&amp;usg=AOvVaw27hZbLqZAHzpVDqG5zH4w_"
                                              ><img
                                                src="https://ci3.googleusercontent.com/proxy/mcQ1Jtfy76tv2O_QvXxjAb3VU_cE4v_mM8f_B_S_Hie6rwcTww4Gkse3YpRVROJ0mgcvdB-0iu1B-xjUrz_VBcbeSb0RkCqP96qlCwEX7JT5LNdlXPXm_QrtfW7WA3kvR-K2uhAF=s0-d-e1-ft#https://userimg-bee-eu.customeriomail.com/images/client-env-106806/twitter_icon.png"
                                                alt="Twitter logo"
                                                height="40"
                                                width="40"
                                                style="width: 40px; height: 40px"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                          </td>
                                          <td style="width: 14px" width="14"></td>
                                          <td>
                                            <a
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3ByaW50aWZ5LyIsImludGVybmFsIjoiYjZjMjA2N2Y5N2JmMDFlODg0ZWEwMSIsImxpbmtfaWQiOjE1Nn0/6bf1d781162f25bbcba42d9e0da9f3bc0b7de7abb26235b1849463d844792cd6&amp;source=gmail&amp;ust=1679238707721000&amp;usg=AOvVaw2v-_EUMdIRmfchdet8t1PR"
                                              ><img
                                                src="https://ci3.googleusercontent.com/proxy/qXxNxgKWdrfFy7X9twNHpNEB2jyf0_7PWjF4tgJaZ4kPk3ORYCYPUNBOhY3enmGXqT217usK3WRKdUHlrqCOSGRm8MRe1jkSEERa1BMqDUCMjnSci5jKxoesZ5JwEjoDY81HrKkSfw=s0-d-e1-ft#https://userimg-bee-eu.customeriomail.com/images/client-env-106806/linkedin_icon.png"
                                                alt="LinkedIn logo"
                                                height="40"
                                                width="40"
                                                style="width: 40px; height: 40px"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                          </td>
                                          <td style="width: 14px" width="14"></td>
                                          <td>
                                            <a
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNELW1QamQ4Y04zcWpveGNFLV9GcjVnIiwiaW50ZXJuYWwiOiJiNmMyMDY3Zjk3YmYwMWU4ODRlYTAxIiwibGlua19pZCI6MTU3fQ/15e54258f505460d42f17a9919346836c14923ef29993bd7e0f324aa334bd742&amp;source=gmail&amp;ust=1679238707721000&amp;usg=AOvVaw05zaAwufxi3glRwlKKfZVs"
                                              ><img
                                                src="https://ci3.googleusercontent.com/proxy/bZoR_zERmV7L6lTQB3cZcZwlWwzAnFxkL8_wdevOeSE1FPwcy5KVhgxE3dbX_PNC2YDPQn7CaegkLqSZXpVedL2LidFxTTsFDfhZGNgNzKuCG6pU8m0jpFynLAmNt6DQrAsE1PIc=s0-d-e1-ft#https://userimg-bee-eu.customeriomail.com/images/client-env-106806/youtube_icon.png"
                                                alt="Youtube logo"
                                                height="40"
                                                width="40"
                                                style="width: 40px; height: 40px"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
  
                                    <table
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                        text-align: center;
                                      "
                                    >
                                      <tbody>
                                        <tr
                                          style="height: 24px; width: 100%"
                                        ></tr>
                                        <tr>
                                          <td
                                            style="
                                              color: black;
                                              font-size: 16px;
                                              line-height: 20px;
                                              font-weight: 700;
                                              font-family: 'Roboto', sans-serif;
                                              margin-top: 0px;
                                              margin-bottom: 0px;
                                            "
                                          >
                                            Health Monitor
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            style="
                                              color: black;
                                              font-size: 16px;
                                              line-height: 20px;
                                              font-weight: 400;
                                              font-family: 'Roboto', sans-serif;
                                              margin-top: 0px;
                                              margin-bottom: 0px;
                                              text-decoration: none;
                                            "
                                          >
                                            Thành phố Hồ Chí Minh, Việt Nam
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
  
                                    <table
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tbody>
                                        <tr
                                          style="height: 32px; width: 100%"
                                        ></tr>
                                        <tr
                                          style="
                                            margin-left: auto;
                                            margin-right: auto;
                                          "
                                        >
                                          <td
                                            style="
                                              font-family: 'Roboto', sans-serif;
                                              font-size: 16px;
                                              line-height: 22px;
                                              margin-top: 0px;
                                              margin-bottom: 0px;
                                              padding: 0px 10px 0px 10px;
                                              display: table-cell;
                                              vertical-align: middle;
                                              color: #29ab51;
                                            "
                                          >
                                            <a
                                              style="
                                                color: #29ab51;
                                                text-decoration: none;
                                              "
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vcHJpbnRpZnkuY29tL2FwcC9wcm9kdWN0cy9uZXctYXJyaXZhbHMiLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjoxOTB9/20ea2d91a554ecbdd37513ccc332a64cceb3bc036a3951b28d80cda3d7daf0cd&amp;source=gmail&amp;ust=1679238707721000&amp;usg=AOvVaw3pubU1mOrSJMs2pFlncHw5"
                                              >Giám sát sức khỏe của bạn mọi lúc - mọi nơi</a
                                            >
                                          
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
  
                                    <!-- <table
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tbody>
                                        <tr
                                          style="height: 32px; width: 100%"
                                        ></tr>
                                        <tr
                                          style="
                                            margin-left: auto;
                                            margin-right: auto;
                                            text-align: center;
                                          "
                                        >
                                          <td>
                                            <p
                                              style="
                                                color: black;
                                                font-size: 16px;
                                                line-height: 20px;
                                                font-weight: 400;
                                                font-family: 'Roboto', sans-serif;
                                                margin-top: 0px;
                                                margin-bottom: 0px;
                                                text-decoration: none;
                                              "
                                            >
                                              Phát hành chính thức
                                              <br />
                                              năm 2023.
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
  
                                    <table
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tbody>
                                        <tr
                                          style="height: 32px; width: 100%"
                                        ></tr>
                                        <tr
                                          style="
                                            text-align: center;
                                            height: 100%;
                                            width: 100%;
                                          "
                                        >
                                          <td
                                            style="
                                              font-family: 'Roboto', sans-serif;
                                              font-size: 16px;
                                              line-height: 22px;
                                              margin-top: 0px;
                                              margin-bottom: 0px;
                                              padding: 0px 10px 0px 10px;
                                              display: table-cell;
                                              vertical-align: middle;
                                              color: #29ab51;
                                            "
                                          >
                                            <a
                                              href="https://email.printify.com/unsubscribe/dgS2wgYAAOiE6gHnhOoBAYbwW8WY_SDi9j7MQoxHPw=="
                                              style="
                                                color: #29ab51;
                                                text-decoration: none;
                                              "
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/unsubscribe/dgS2wgYAAOiE6gHnhOoBAYbwW8WY_SDi9j7MQoxHPw%3D%3D&amp;source=gmail&amp;ust=1679238707721000&amp;usg=AOvVaw1DccbMRqvEMpAkxrLVS1xa"
                                              >Unsubscribe</a
                                            >
                                            -
                                            <a
                                              href="https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vcHJpbnRpZnkuY29tL2FwcC9sb2dpbiIsImludGVybmFsIjoiYjZjMjA2N2Y5N2JmMDFlODg0ZWEwMSIsImxpbmtfaWQiOjE5MX0/a783d9fba130ae307ef66fa6d44b64adc564c7c82baae149084d52e9f0b3387e"
                                              style="
                                                color: #29ab51;
                                                text-decoration: none;
                                              "
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vcHJpbnRpZnkuY29tL2FwcC9sb2dpbiIsImludGVybmFsIjoiYjZjMjA2N2Y5N2JmMDFlODg0ZWEwMSIsImxpbmtfaWQiOjE5MX0/a783d9fba130ae307ef66fa6d44b64adc564c7c82baae149084d52e9f0b3387e&amp;source=gmail&amp;ust=1679238707721000&amp;usg=AOvVaw2pL8H2XQPan38CkSKw4NQb"
                                              >Manage Preferences</a
                                            >
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            class="m_-4396642744106805998desktop_hide"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="display: none; max-height: 0; overflow: hidden"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div
                                    style="
                                      font-family: Roboto, Tahoma, Verdana, Segoe,
                                        sans-serif;
                                      text-align: center;
                                    "
                                    align="center"
                                  >
                                    <table
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td>
                                            <a
                                              href="https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9QcmludGlmeS8iLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjoxNTN9/4f123bce4c88f4ad89b64531f16b4abe4d2ca6cced0928c59c1b404e15e801d3"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9QcmludGlmeS8iLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjoxNTN9/4f123bce4c88f4ad89b64531f16b4abe4d2ca6cced0928c59c1b404e15e801d3&amp;source=gmail&amp;ust=1679238707721000&amp;usg=AOvVaw1sj3PkWVLDI70H1HSPt_YR"
                                              ><img
                                                src="https://ci5.googleusercontent.com/proxy/DVriEpwWigY2MCuumBr0QYd8MfcKX9-saCLAcdpKipKDeMqEhr5m6FPqn3tkrQaw9irGnx4Jxly-ZWLLxji2SAb-uSHWymczlQ5G0FzhD3d9gGNR2WXF5srhcFfr3XxQO94dUlh1rA=s0-d-e1-ft#https://userimg-bee-eu.customeriomail.com/images/client-env-106806/facebook_icon.png"
                                                alt="Facebook logo"
                                                height="34"
                                                width="34"
                                                style="width: 34px; height: 34px"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                          </td>
                                          <td style="width: 10px" width="10"></td>
                                          <td>
                                            <a
                                              href="https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcHJpbnRpZnkvIiwiaW50ZXJuYWwiOiJiNmMyMDY3Zjk3YmYwMWU4ODRlYTAxIiwibGlua19pZCI6MTU0fQ/3238a892cd62ac6944b904bd8da15a224a364a772e4e3409a2e56d29a93e5195"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcHJpbnRpZnkvIiwiaW50ZXJuYWwiOiJiNmMyMDY3Zjk3YmYwMWU4ODRlYTAxIiwibGlua19pZCI6MTU0fQ/3238a892cd62ac6944b904bd8da15a224a364a772e4e3409a2e56d29a93e5195&amp;source=gmail&amp;ust=1679238707721000&amp;usg=AOvVaw2Z2EtrrT99JebQe2L-0ABj"
                                              ><img
                                                src="https://ci3.googleusercontent.com/proxy/Xs4hKk5IcoSZTkEv006WjEIducKLt6rxXYbOIoDomDPZ5FRtiWBGat4NndgokX2MH7NvSehi7nxtwRbo3ELk8KSvpKP0TQFJeGHmxWkSCQOlT7Wy3ZHNDVwCdCyjXT-jO23SYMwkjcM=s0-d-e1-ft#https://userimg-bee-eu.customeriomail.com/images/client-env-106806/instagram_icon.png"
                                                alt="Instagram logo"
                                                height="34"
                                                width="34"
                                                style="width: 34px; height: 34px"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                          </td>
                                          <td style="width: 10px" width="10"></td>
                                          <td>
                                            <a
                                              href="https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vdHdpdHRlci5jb20vcHJpbnRpZnkiLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjoxNTV9/b657cdb9a8d76ec5de9d5d6a0704bb8bb896095de625dfbb4cd25e53673967d3"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vdHdpdHRlci5jb20vcHJpbnRpZnkiLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjoxNTV9/b657cdb9a8d76ec5de9d5d6a0704bb8bb896095de625dfbb4cd25e53673967d3&amp;source=gmail&amp;ust=1679238707721000&amp;usg=AOvVaw27hZbLqZAHzpVDqG5zH4w_"
                                              ><img
                                                src="https://ci3.googleusercontent.com/proxy/mcQ1Jtfy76tv2O_QvXxjAb3VU_cE4v_mM8f_B_S_Hie6rwcTww4Gkse3YpRVROJ0mgcvdB-0iu1B-xjUrz_VBcbeSb0RkCqP96qlCwEX7JT5LNdlXPXm_QrtfW7WA3kvR-K2uhAF=s0-d-e1-ft#https://userimg-bee-eu.customeriomail.com/images/client-env-106806/twitter_icon.png"
                                                alt="Twitter logo"
                                                height="34"
                                                width="34"
                                                style="width: 34px; height: 34px"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                          </td>
                                          <td style="width: 10px" width="10"></td>
                                          <td>
                                            <a
                                              href="https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3ByaW50aWZ5LyIsImludGVybmFsIjoiYjZjMjA2N2Y5N2JmMDFlODg0ZWEwMSIsImxpbmtfaWQiOjE1Nn0/6bf1d781162f25bbcba42d9e0da9f3bc0b7de7abb26235b1849463d844792cd6"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3ByaW50aWZ5LyIsImludGVybmFsIjoiYjZjMjA2N2Y5N2JmMDFlODg0ZWEwMSIsImxpbmtfaWQiOjE1Nn0/6bf1d781162f25bbcba42d9e0da9f3bc0b7de7abb26235b1849463d844792cd6&amp;source=gmail&amp;ust=1679238707721000&amp;usg=AOvVaw2v-_EUMdIRmfchdet8t1PR"
                                              ><img
                                                src="https://ci3.googleusercontent.com/proxy/qXxNxgKWdrfFy7X9twNHpNEB2jyf0_7PWjF4tgJaZ4kPk3ORYCYPUNBOhY3enmGXqT217usK3WRKdUHlrqCOSGRm8MRe1jkSEERa1BMqDUCMjnSci5jKxoesZ5JwEjoDY81HrKkSfw=s0-d-e1-ft#https://userimg-bee-eu.customeriomail.com/images/client-env-106806/linkedin_icon.png"
                                                alt="LinkedIn logo"
                                                height="34"
                                                width="34"
                                                style="width: 34px; height: 34px"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                          </td>
                                          <td style="width: 10px" width="10"></td>
                                          <td>
                                            <a
                                              href="https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNELW1QamQ4Y04zcWpveGNFLV9GcjVnIiwiaW50ZXJuYWwiOiJiNmMyMDY3Zjk3YmYwMWU4ODRlYTAxIiwibGlua19pZCI6MTU3fQ/15e54258f505460d42f17a9919346836c14923ef29993bd7e0f324aa334bd742"
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNELW1QamQ4Y04zcWpveGNFLV9GcjVnIiwiaW50ZXJuYWwiOiJiNmMyMDY3Zjk3YmYwMWU4ODRlYTAxIiwibGlua19pZCI6MTU3fQ/15e54258f505460d42f17a9919346836c14923ef29993bd7e0f324aa334bd742&amp;source=gmail&amp;ust=1679238707722000&amp;usg=AOvVaw1Cek3CPAYI1Lm63hjxwwy4"
                                              ><img
                                                src="https://ci3.googleusercontent.com/proxy/bZoR_zERmV7L6lTQB3cZcZwlWwzAnFxkL8_wdevOeSE1FPwcy5KVhgxE3dbX_PNC2YDPQn7CaegkLqSZXpVedL2LidFxTTsFDfhZGNgNzKuCG6pU8m0jpFynLAmNt6DQrAsE1PIc=s0-d-e1-ft#https://userimg-bee-eu.customeriomail.com/images/client-env-106806/youtube_icon.png"
                                                alt="Youtube logo"
                                                height="34"
                                                width="34"
                                                style="width: 34px; height: 34px"
                                                class="CToWUd"
                                                data-bit="iit"
                                            /></a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
  
                                    <table
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                        text-align: center;
                                      "
                                    >
                                      <tbody>
                                        <tr style="height: 24px"></tr>
                                        <tr>
                                          <td
                                            style="
                                              color: black;
                                              font-size: 16px;
                                              line-height: 20px;
                                              font-weight: 700;
                                              font-family: 'Roboto', sans-serif;
                                              margin-top: 0px;
                                              margin-bottom: 0px;
                                            "
                                          >
                                            The Printify Team
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
  
                                    <table
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                        text-align: center;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td style="width: 60px" width="60"></td>
                                          <td
                                            style="
                                              color: black;
                                              font-size: 16px;
                                              line-height: 20px;
                                              font-weight: 400;
                                              font-family: 'Roboto', sans-serif;
                                              margin-top: 0px;
                                              margin-bottom: 0px;
                                              text-decoration: none;
                                            "
                                          >
                                            814 Mission St, San Francisco, CA
                                            94103
                                          </td>
                                          <td style="width: 60px" width="60"></td>
                                        </tr>
                                      </tbody>
                                    </table>
  
                                    <table
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tbody>
                                        <tr
                                          style="height: 32px; width: 100%"
                                        ></tr>
                                        <tr
                                          style="
                                            margin-left: auto;
                                            margin-right: auto;
                                            text-align: center;
                                          "
                                        >
                                          <td style="width: 70px" width="70"></td>
                                          <td
                                            style="
                                              font-family: 'Roboto', sans-serif;
                                              font-size: 16px;
                                              line-height: 22px;
                                              margin-top: 0px;
                                              margin-bottom: 0px;
                                              padding: 0px 10px 0px 10px;
                                              display: table-cell;
                                              vertical-align: middle;
                                              color: #29ab51;
                                            "
                                          >
                                            <a
                                              href="https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vcHJpbnRpZnkuY29tL2FwcC9wcm9kdWN0cy9uZXctYXJyaXZhbHMiLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjoxOTB9/20ea2d91a554ecbdd37513ccc332a64cceb3bc036a3951b28d80cda3d7daf0cd"
                                              style="
                                                color: #29ab51;
                                                text-decoration: none;
                                              "
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vcHJpbnRpZnkuY29tL2FwcC9wcm9kdWN0cy9uZXctYXJyaXZhbHMiLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjoxOTB9/20ea2d91a554ecbdd37513ccc332a64cceb3bc036a3951b28d80cda3d7daf0cd&amp;source=gmail&amp;ust=1679238707722000&amp;usg=AOvVaw2iHl5zYvGE8ZdHZzwqihq9"
                                              >New Arrivals</a
                                            >
                                            -
                                            <a
                                              href="https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vcHJpbnRpZnkuY29tL2FwcC9sb2dpbiIsImludGVybmFsIjoiYjZjMjA2N2Y5N2JmMDFlODg0ZWEwMSIsImxpbmtfaWQiOjE5MX0/a783d9fba130ae307ef66fa6d44b64adc564c7c82baae149084d52e9f0b3387e"
                                              style="
                                                color: #29ab51;
                                                text-decoration: none;
                                              "
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vcHJpbnRpZnkuY29tL2FwcC9sb2dpbiIsImludGVybmFsIjoiYjZjMjA2N2Y5N2JmMDFlODg0ZWEwMSIsImxpbmtfaWQiOjE5MX0/a783d9fba130ae307ef66fa6d44b64adc564c7c82baae149084d52e9f0b3387e&amp;source=gmail&amp;ust=1679238707722000&amp;usg=AOvVaw22jz7eVOh55ACrDHPoZPbF"
                                              >Log in</a
                                            >
                                            -
                                            <a
                                              href="https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vaGVscC5wcmludGlmeS5jb20vaGMvZW4tdXMiLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjoyNTh9/2eeef92d02d096926d916974cc5ca7e890722d5539bc6d9e772a7a90270b4a25"
                                              style="
                                                color: #29ab51;
                                                text-decoration: none;
                                              "
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vaGVscC5wcmludGlmeS5jb20vaGMvZW4tdXMiLCJpbnRlcm5hbCI6ImI2YzIwNjdmOTdiZjAxZTg4NGVhMDEiLCJsaW5rX2lkIjoyNTh9/2eeef92d02d096926d916974cc5ca7e890722d5539bc6d9e772a7a90270b4a25&amp;source=gmail&amp;ust=1679238707722000&amp;usg=AOvVaw28-gvkSrmvXZQnbOBsW4Y6"
                                              >Help Center</a
                                            >
                                          </td>
                                          <td style="width: 70px" width="70"></td>
                                        </tr>
                                      </tbody>
                                    </table>
  
                                    <table
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tbody>
                                        <tr
                                          style="height: 32px; width: 100%"
                                        ></tr>
                                        <tr
                                          style="
                                            margin-left: auto;
                                            margin-right: auto;
                                            text-align: center;
                                          "
                                        >
                                          <td style="width: 60px" width="60"></td>
                                          <td>
                                            <p
                                              style="
                                                color: black;
                                                font-size: 16px;
                                                line-height: 20px;
                                                font-weight: 400;
                                                font-family: 'Roboto', sans-serif;
                                                margin-top: 0px;
                                                margin-bottom: 0px;
                                                text-decoration: none;
                                              "
                                            >
                                              Chosen by merchants around the globe
                                              to fulfill 21M+ orders since 2015.
                                            </p>
                                          </td>
                                          <td style="width: 60px" width="60"></td>
                                        </tr>
                                      </tbody>
                                    </table>
  
                                    <table
                                      style="
                                        margin-left: auto;
                                        margin-right: auto;
                                      "
                                    >
                                      <tbody>
                                        <tr
                                          style="height: 32px; width: 100%"
                                        ></tr>
                                        <tr
                                          style="
                                            text-align: center;
                                            height: 100%;
                                            width: 100%;
                                          "
                                        >
                                          <td style="width: 70px" width="70"></td>
                                          <td
                                            style="
                                              font-family: 'Roboto', sans-serif;
                                              font-size: 16px;
                                              line-height: 22px;
                                              margin-top: 0px;
                                              margin-bottom: 0px;
                                              padding: 0px 10px 0px 10px;
                                              display: table-cell;
                                              vertical-align: middle;
                                              color: #29ab51;
                                            "
                                          >
                                            <a
                                              href="https://email.printify.com/unsubscribe/dgS2wgYAAOiE6gHnhOoBAYbwW8WY_SDi9j7MQoxHPw=="
                                              style="
                                                color: #29ab51;
                                                text-decoration: none;
                                              "
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/unsubscribe/dgS2wgYAAOiE6gHnhOoBAYbwW8WY_SDi9j7MQoxHPw%3D%3D&amp;source=gmail&amp;ust=1679238707722000&amp;usg=AOvVaw2T4Z-W-W4T9auT4ZTk25-j"
                                              >Unsubscribe</a
                                            >
                                            -
                                            <a
                                              href="https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vcHJpbnRpZnkuY29tL2FwcC9sb2dpbiIsImludGVybmFsIjoiYjZjMjA2N2Y5N2JmMDFlODg0ZWEwMSIsImxpbmtfaWQiOjE5MX0/a783d9fba130ae307ef66fa6d44b64adc564c7c82baae149084d52e9f0b3387e"
                                              style="
                                                color: #29ab51;
                                                text-decoration: none;
                                              "
                                              target="_blank"
                                              data-saferedirecturl="https://www.google.com/url?q=https://email.printify.com/e/c/eyJlbWFpbF9pZCI6ImRnUzJ3Z1lBQU9pRTZnSG5oT29CQVlid1c4V1lfU0RpOWo3TVFveEhQdz09IiwiaHJlZiI6Imh0dHBzOi8vcHJpbnRpZnkuY29tL2FwcC9sb2dpbiIsImludGVybmFsIjoiYjZjMjA2N2Y5N2JmMDFlODg0ZWEwMSIsImxpbmtfaWQiOjE5MX0/a783d9fba130ae307ef66fa6d44b64adc564c7c82baae149084d52e9f0b3387e&amp;source=gmail&amp;ust=1679238707722000&amp;usg=AOvVaw22jz7eVOh55ACrDHPoZPbF"
                                              >Manage Preferences</a
                                            >
                                          </td>
                                          <td style="width: 70px" width="70"></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table> -->
                          <div
                            style="
                              height: 32px;
                              line-height: 32px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  `,
  };
  let rs = await transporter.sendMail(message);
  console.log(rs);
  return rs;
}

export default sendChangePassMail;
