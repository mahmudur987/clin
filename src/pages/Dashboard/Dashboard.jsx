import { useSelector } from "react-redux";

const Dashboard = () => {
  const showSidebar = useSelector((state) => state.ui.showSidebar);

  return (
    <div className="flex-1 flex flex-col ">
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
