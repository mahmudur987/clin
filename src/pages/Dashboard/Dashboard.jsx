import React from "react";
import {
  Sun,
  Moon,
  LogOut,
  User,
  HelpCircle,
  Users,
  Zap,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../Redux/features/slices/signInApi";

const Dashboard = () => {
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const handleLogOut = async () => {
    try {
      const res = await logoutApiCall().unwrap();
      console.log(res);
    } catch (err) {
      console.warn("Logout API call failed, proceeding anyway.", err);
    }
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");
    localStorage.setItem(
      "persist:chat-app-root",
      JSON.stringify({
        user: null,
        accessToken: null,
        refreshToken: null,
        _persist: { version: -1, rehydrated: true },
      })
    );
    return navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col justify-between">
        <div>
          <div className="p-6 border-b">
            <img src="/logo.png" alt="Logo" className="h-10 mx-auto" />
          </div>
          <div className="p-4 flex flex-col gap-4">
            <button className="bg-blue-600 text-white py-2 rounded-md font-semibold w-full">
              + New Chat
            </button>

            {/* Theme toggle */}
            <div className="flex items-center justify-between px-2 text-sm font-medium text-gray-700">
              <span className="flex items-center gap-2">
                <Sun size={16} />
                Light
              </span>
              <div className="flex items-center bg-gray-200 rounded-full p-1 w-14">
                <div className="bg-white rounded-full p-1 shadow">
                  <Moon size={14} />
                </div>
              </div>
            </div>

            <SidebarItem icon={<Zap size={18} />} text="Manage Subscription" />
            <SidebarItem icon={<Users size={18} />} text="Users" />
            <SidebarItem
              icon={<HelpCircle size={18} />}
              text="Help And Support"
            />
            <SidebarItem icon={<MessageCircle size={18} />} text="FAQ" />
          </div>
        </div>

        {/* Logout */}
        <div className="p-4 border-t">
          <button
            className="flex items-center gap-2 text-red-500 text-sm font-medium"
            onClick={handleLogOut}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="flex items-center justify-between bg-white px-6 py-4 shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-lg">
              K
            </div>
            <div>
              <div className="text-sm font-semibold">Guest</div>
              <div className="text-xs text-gray-500">Welcome back</div>
            </div>
          </div>
          <div>
            <button className="bg-blue-600 text-white p-2 rounded-lg">↻</button>
          </div>
        </div>

        {/* Button Options */}
        <div className="flex gap-4 px-8 py-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold">
            Chartwright
          </button>
          <button className="border px-6 py-2 rounded-md">TranscriptX</button>
          <button className="border px-6 py-2 rounded-md">Redactify</button>
          <button className="border px-6 py-2 rounded-md">Validify</button>
        </div>

        {/* Greeting */}
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-600">Hello,</h1>
            <p className="text-xl text-gray-600 mt-2">
              How Can I Help You Today
            </p>
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-t p-4 flex items-center gap-2 bg-white">
          <button>📎</button>
          <input
            type="text"
            placeholder="Type your message (Shift + Enter for new line)"
            className="flex-1 border rounded-md px-4 py-2 focus:outline-none"
          />
          <button>🎤</button>
          <button>▶️</button>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <button className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition">
    {icon}
    {text}
  </button>
);

export default Dashboard;
