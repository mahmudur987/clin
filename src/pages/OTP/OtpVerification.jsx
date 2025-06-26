import { useState } from "react";
import logo from "../../assets/clin-bgless.png";
import {
  useOtpCheckMutation,
  useResendOtpMutation,
} from "../../Redux/features/slices/signInApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function maskEmail(email) {
  const [user, domain] = email.split("@");
  if (!user || !domain) return email;

  const visible = user.slice(0, 3);
  const masked = "*".repeat(user.length - 3);
  return `${visible}${masked}@${domain}`;
}
const OtpVerification = () => {
  const [otpCheck, { isLoading }] = useOtpCheckMutation();
  const [ResendOtp, { isLoading: x }] = useResendOtpMutation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return; // Only digits
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };
  const { user: email, accessToken } = JSON.parse(
    localStorage.getItem("persist:chat-app-root")
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("OTP Submitted:", enteredOtp);
    try {
      const res = await otpCheck({ otp: enteredOtp, email });
      localStorage.setItem("accessToken", accessToken);
      console.log(res);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleResend = async () => {
    console.log("Resend OTP");
    try {
      const res = await ResendOtp({ email });
      toast.success(`A otp send to ${email}`, { id: 1, duration: 3000 });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-6 text-center">
        <div className="mb-6">
          <img src={logo} alt="Logo" className="mx-auto h-16" />
        </div>
        <h2 className="text-2xl font-semibold">OTP Verification</h2>
        <p className="text-gray-600 mt-1 mb-6">
          Enter OTP Sent To{" "}
          <span className="font-medium">{maskEmail(email)}</span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-4 mb-6">
            {otp.map((digit, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                maxLength={1}
                className="w-14 h-14 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            {isLoading ? "Loading,," : "Submit"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Didn’t receive the code?{" "}
          <button
            type="button"
            onClick={handleResend}
            className="text-blue-600 hover:underline"
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
