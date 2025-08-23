import { useEffect, useState } from "react";
import { OtpInput } from "reactjs-otp-input";
import { useTimer } from "react-timer-hook";
import moment from "moment";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const [startTimer, setIsstartTimer] = useState(false);
  const [IsRunningTimer, setIsRunningTimer] = useState(false);
  console.log(otp, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

  const {
    seconds: numberSeconds,
    minutes: numberMinutes,
    restart: numberRestart,
  } = useTimer({
    expiryTimestamp: new Date(moment().add(1, "minute").toLocaleString()),
    autoStart: false,
    onExpire: () => {
      setIsRunningTimer((Prev) => !Prev);
      localStorage.removeIteme("otp-first-visit");
    },
  });

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("otp-first-visit");
    if (!isFirstVisit && !IsRunningTimer) {
      numberRestart(new Date(moment().add(2, "minute").toLocaleString()));
      localStorage.setItem("otp-first-visit", "true");
    }
  }, []);

  useEffect(() => {
    numberRestart(new Date(moment().add(1, "minute").toLocaleString()));
  }, [IsRunningTimer]);

  console.log(IsRunningTimer, "IsRunning>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex  flex-col justify-center items-center">
        <span className="text-center mb-14 text-base font-medium font-roboto">
          Enter the 6 digit OTP sent on your mobile <br />
          number +91******7348
        </span>
        <div className="w-full">
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
              gap: 12,
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
              outline: "none",
              fontWeight: "600",
            }}
            // isDisabled={true} // disable all input fields
            shouldAutoFocus={false}
            isInputNum={true}
            // placeholder="otplll"
          />
          <div className="w-full text-right font-roboto font-semibold mt-1">
            <span
              className="cursor-pointer"
              onClick={() => setIsRunningTimer(false)}
            >
              Resend OTP
            </span>
            {/* {(numberSeconds > 0 || numberMinutes > 0) && (
              <span>
                {" "}
                In{" "}
                {`${String(numberMinutes).padStart(1, "0")}:${String(
                  numberSeconds
                ).padStart(2, "0")}s`}
              </span>
            )} */}
            {!IsRunningTimer && (
              <span>
                {" "}
                In{" "}
                {`${String(numberMinutes).padStart(1, "0")}:${String(
                  numberSeconds
                ).padStart(2, "0")}s`}
              </span>
            )}
          </div>
        </div>
        <div className="mt-8 w-full">
          <button className="w-full py-2 border rounded-md cursor-pointer border-gray-100 bg-blue-300 px-1">
            <span className="font-roboto font-semibold">Verify OTP</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTP;
