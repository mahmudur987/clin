import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../assets/clin-bgless.png";
import { useLoginMutation } from "../../Redux/features/slices/signInApi";
import { useNavigate } from "react-router-dom";
const SignInForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });

    try {
      const response = await login({ email, password }).unwrap();
      console.log("Login success:", response);
      // Save tokens to localStorage or cookies if needed
      localStorage.setItem("accessToken", response.accessToken);
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
      navigate("/dashboard");
      setErrorMessage("");
    } catch (error) {
      console.error(error?.data?.error?.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow">
        <div className="text-center">
          <img src={logo} alt="Logo" className="mx-auto h-10" />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Hello, Welcome!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please Enter Your Details Below To Continue
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
              Password
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

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <div className="flex justify-between p-1 items-center">
            <p className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <span>Remember me</span>
            </p>
            <p className="text-blue-500">Forget Password</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            {isLoading ? "Loading ...." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Create Account
          <a
            href="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
