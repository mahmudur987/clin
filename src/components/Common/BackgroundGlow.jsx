// components/BackgroundGlow.tsx
const BackgroundGlow = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[#0b1120] ">
      <div className="absolute top-[-50px] left-[-100px] w-[300px] h-[300px] rounded-full opacity-50 animate-floatSlow bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)]" />

      <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full opacity-50 animate-floatMedium bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)]" />

      <div className="absolute top-[20%] right-[15%] w-[150px] h-[150px] rounded-full opacity-50 animate-floatFast bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)]" />
    </div>
  );
};

export default BackgroundGlow;
