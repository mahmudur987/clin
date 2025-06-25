import logo from "../../assets/clin-removebg-preview.png";
import BackgroundGlow from "../Common/BackgroundGlow";

export default function Hero() {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center relative overflow-hidden px-4">
      <BackgroundGlow />
      <div className="relative z-10 text-center max-w-5xl">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Clin Logo" className="w-32 h-32" />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400 mb-6">
          Clin Technologies
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
          Revolutionizing clinical documentation through{" "}
          <span className="text-yellow-400 font-semibold">HIPAA COMPLIANT</span>{" "}
          advanced artificial intelligence, giving healthcare providers more
          time for what truly matters — patient care. Try it for{" "}
          <span className="text-yellow-400 font-bold">FREE</span> today.
        </p>

        <p className="text-gray-300 mb-8">
          Our sophisticated AI platform intelligently processes clinical
          conversations, creating accurate documentation that integrates with
          your existing EMR system.
        </p>

        <div className="flex justify-center gap-4 ">
          <button className="px-6 py-2 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition">
            Login
          </button>
          <div className="relative">
            <div class="absolute top-[20px] left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-[fadeIn_1s_forwards_2s] ">
              <div class="w-[24px] h-[38px] border-2 border-[rgba(148,163,184,0.5)] rounded-[12px] relative">
                <div class="absolute top-[6px] left-1/3 transform -translate-x-1/2 w-[6px] h-[6px] bg-[#60a5fa] rounded-full animate-[scrollDown_2s_infinite]"></div>
              </div>
            </div>
          </div>

          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
