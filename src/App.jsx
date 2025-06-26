import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import SignupForm from "./pages/SignUp/SignUp";
import SignInForm from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import DashboardLayout from "./Layout/DashboardLayout";
import OtpVerification from "./pages/OTP/OtpVerification";

function App() {
  return (
    <Routes>
      {/* Public (unauthenticated) Routes */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <HomePage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupForm />
          </PublicRoute>
        }
      />

      <Route
        path="/otp"
        element={
          <PublicRoute>
            <OtpVerification />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <SignInForm />
          </PublicRoute>
        }
      />

      {/* Private (authenticated) Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
