import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../assets/clin-bgless.png";
import { useSignUpMutation } from "../../Redux/features/api/signInApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const SignupForm = () => {
  const [signup, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    if (!password || !confirmPassword) {
      setErrorMessage("Password fields cannot be empty.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage("");

    try {
      const response = await signup({ email, password }).unwrap();
      console.log("SignUp success:", response);
      // Save tokens to localStorage or cookies if needed

      localStorage.setItem("refreshToken", response.refresh_token);
      localStorage.setItem("userEmail", response.email);
      localStorage.setItem("userId", response.localId);
      localStorage.setItem(
        "persist:chat-app-root",
        JSON.stringify({
          user: response.email,
          accessToken: response.accessToken,
          refreshToken: response.refresh_token, // note: it's `refresh_token` not `refreshToken` in your response
          _persist: { version: -1, rehydrated: true },
        })
      );
      navigate("/otp");
      setErrorMessage("");
    } catch (error) {
      console.error(error?.data?.error?.message);
      toast.error(error ? error?.data?.error?.message : "Error");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow">
        <div className="text-center">
          <img src={logo} alt="Logo" className="mx-auto h-10" />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Create account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter the email address associated with your account. We'll send you
            an OTP to your email.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* New Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[38px] right-3 cursor-pointer text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label
              htmlFor="confirm"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirm"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm New Password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute top-[38px] right-3 cursor-pointer text-gray-500"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            {isLoading ? "Loading ...." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
