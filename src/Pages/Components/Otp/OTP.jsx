import { useEffect, useState } from "react";
import { OtpInput } from "reactjs-otp-input";
import { useTimer } from "react-timer-hook";
import moment from "moment";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const [isRunningTimer, setIsRunningTimer] = useState(false);

  /***************************************** Get the saved expiry time from sessionStorage or create a new one*****************************************/
  const getExpiryTimestamp = () => {
    const savedExpiry = sessionStorage.getItem("otp-expiry-timestamp");
    if (savedExpiry) {
      return new Date(JSON.parse(savedExpiry));
    }

    /**********************************Default to 1 minute from now if no saved value*****************************************************************/
    return new Date(moment().add(1, "minute").toLocaleString());
  };

  const {
    seconds: numberSeconds,
    minutes: numberMinutes,
    restart: numberRestart,
  } = useTimer({
    expiryTimestamp: getExpiryTimestamp(),
    autoStart: true,
    onExpire: () => {
      setIsRunningTimer(false);
    },
  });

  useEffect(() => {
    /************************ Save the expiry timestamp to sessionStorage whenever it changes************************************************************/
    const expiryTime = new Date(
      moment()
        .add(numberMinutes, "minutes")
        .add(numberSeconds, "seconds")
        .toLocaleString()
    );
    sessionStorage.setItem("otp-expiry-timestamp", JSON.stringify(expiryTime));

    /*********************************************Update the running state based on whether time remains*************************************************/
    setIsRunningTimer(numberSeconds > 0 || numberMinutes > 0);
  }, [numberSeconds, numberMinutes]);

  const handleResendOtp = () => {
    /*****************************************************Reset the timer to 1 minute********************************************************************/
    const newExpiryTime = new Date(moment().add(1, "minute").toLocaleString());
    numberRestart(newExpiryTime);
    setIsRunningTimer(true);

    /*********************************************************Save the new expiry time*******************************************************************/
    sessionStorage.setItem(
      "otp-expiry-timestamp",
      JSON.stringify(newExpiryTime)
    );
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center">
        <span className="text-center mb-14 text-base font-medium font-roboto">
          Enter the 6 digit OTP sent on your mobile <br />
          number +91******7348
        </span>
        <div className="w-full">
          <OtpInput
            value={otp}
            onChange={(otp) => setOtp(otp)}
            numInputs={6}
            containerStyle={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
            }}
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
            shouldAutoFocus={false}
            isInputNum={true}
          />
          <div className="w-full text-right font-roboto font-semibold mt-1">
            {isRunningTimer ? (
              <span>
                Resend OTP in{" "}
                {`${String(numberMinutes).padStart(1, "0")}:${String(
                  numberSeconds
                ).padStart(2, "0")}s`}
              </span>
            ) : (
              <span className="cursor-pointer" onClick={handleResendOtp}>
                Resend OTP
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
