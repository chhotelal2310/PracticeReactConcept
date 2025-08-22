import React, { useState } from "react";
import { OtpInput } from "reactjs-otp-input";

const OTP = () => {
  const [otp, setOtp] = useState("");
  console.log(otp, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

  const handleChange = (otp) => setOtp(otp);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-full h-[500px] flex justify-center">
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          // separator={<span>-</span>}
          containerStyle={{
            width: "15%",
            height: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
          inputStyle={{
            padding: "20px",
            borderRadius: "4px",
            textAlign: "center",
            fontSize: "10px",
            color: "black",
            border: "1px solid red",
            width: "10%",
            height: "100%",
          }}
          isInputNum
        />
      </div>
    </div>
  );
};

export default OTP;
