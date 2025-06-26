import { AlignJustify } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../Redux/features/slice/uiSlice";

const Dashboard = () => {
  const showSidebar = useSelector((state) => state.ui.showSidebar);
  const dispatch = useDispatch();

  return (
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
      <div className="flex-1 flex">
        {!showSidebar && <div className="w-20 bg-white"></div>}
        <div className="flex flex-col flex-1">
          <div className="flex gap-4 px-8 py-6 justify-center ">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold">
              Chartwright
            </button>
            <button className="border px-6 py-2 rounded-md">TranscriptX</button>
            <button className="border px-6 py-2 rounded-md">Redactify</button>
            <button className="border px-6 py-2 rounded-md">Validify</button>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-600">Hello,</h1>
              <p className="text-xl text-gray-600 mt-2">
                How Can I Help You Today
              </p>
            </div>
          </div>

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
