import { FastField } from "formik";
import React, { useState } from "react";
import { OtpInput } from "reactjs-otp-input";

const OTP = () => {
  const [otp, setOtp] = useState("");
  console.log(otp, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-full flex justify-center">
        <OtpInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
          numInputs={6}
          // the below style apply on the whole container (all input boxes)
          containerStyle={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
          // the below style apply on each input box
          inputStyle={{
            width: "40px",
            height: "40px",
            borderRadius: "6px",
            textAlign: "center",
            fontSize: "18px",
            color: "#A8A8A8",
            border: "1px solid gray",
            outline: "none", // This prevents the default browser outline
          }}
          focusStyle={
            {
              // border: "2px solid #A8A8A8",
            }
          }
          // isDisabled={true} // disable all input fields
          shouldAutoFocus={false}
          isInputNum={true}
          // placeholder="otplll"
        />
      </div>
    </div>
  );
};

export default OTP;
