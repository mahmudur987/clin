import { ShieldCheck, Eraser, Mic, ClipboardList } from "lucide-react";

const solutions = [
  {
    title: "Validify",
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    description:
      "Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, ensures coding accuracy, and maintains regulatory compliance.",
  },
  {
    title: "Redactify",
    icon: <Eraser className="w-6 h-6 text-red-500" />,
    description:
      "Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining clinical context.",
  },
  {
    title: "TranscriptX",
    icon: <Mic className="w-6 h-6 text-green-500" />,
    description:
      "Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions of patient encounters into text, understanding complex medical terminology and clinical context for superior accuracy.",
  },
  {
    title: "Chartwright",
    icon: <ClipboardList className="w-6 h-6 text-purple-500" />,
    description:
      "Your best friend with charting – turn any normal text into a high-quality chart, delivered exactly how healthcare professionals need it with extensive customization options to match your workflow and documentation standards.",
  },
];

const OurSolutions = () => {
  return (
    <section id="our-solution" className="py-16 px-6 md:px-12 bg-[#0f172a] ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[2.074rem] font-bold mb-8 text-[#60a5fa] text-center tracking-tight">
          Our Solutions
        </h2>
        <p className="text-white py-10">
          Our comprehensive suite of AI-powered solutions transforms every
          aspect of healthcare documentation:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="card text-left bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl border-t-[3px] border-t-[#10b981]"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-[1.44rem] font-semibold text-[#60a5fa] mt-0 mb-4">
                {item.title}
              </h3>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
