import React, { useState } from "react";
import logo from "../assets/clin-bgless.png";
import {
  Sun,
  Moon,
  LogOut,
  User,
  HelpCircle,
  Users,
  Zap,
  MessageCircle,
  AlignJustify,
  ArrowLeftToLine,
} from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../Redux/features/api/signInApi";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../Redux/features/slice/uiSlice";

const DashboardLayout = () => {
  const showSidebar = useSelector((state) => state.ui.showSidebar);
  const dispatch = useDispatch();
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
    <div className="flex h-screen bg-gray-100 relative">
      {/* Sidebar */}

      {showSidebar && (
        <div className="w-64 bg-white shadow-lg flex flex-col justify-between min-h-screen">
          <div>
            <div className="py-6  px-2  border-b flex justify-between items-center">
              <img src={logo} alt="Logo" className="h-10 " />

              <button onClick={() => dispatch(toggleSidebar())}>
                <ArrowLeftToLine size={16} />
              </button>
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

              <SidebarItem
                icon={<Zap size={18} />}
                text="Manage Subscription"
              />
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
      )}

      {/* Main Content */}

      <div className="flex-1 flex flex-col ">
        {/* Top*/}
        <div className="flex items-center justify-between gap-5 bg-white px-6 py-4 shadow relative">
          {!showSidebar && (
            <div className="relative">
              <button
                onClick={() => dispatch(toggleSidebar())}
                className="btn btn-primary my-3"
              >
                <AlignJustify size={20} />
              </button>
            </div>
          )}

          <div className="flex items-center gap-3 flex-1">
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
        {/* bottom */}
        <Outlet />
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

export default DashboardLayout;
