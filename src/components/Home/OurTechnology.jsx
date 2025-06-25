import { Brain, Settings, ShieldCheck, Lock, FileText } from "lucide-react";

const OurTechnology = () => {
  return (
    <section className="bg-[#0A0F24] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">
          Our Technology
        </h2>
        <p className="text-base text-gray-300 max-w-3xl mx-auto">
          At Clin Technologies, we've built our platform on groundbreaking AI
          technology specifically designed for healthcare. Our solutions use the
          latest advancements in{" "}
          <span className="text-blue-400">natural language processing</span> and
          <span className="text-blue-400"> machine learning</span> to create a
          system that truly understands the complexities of medical
          documentation.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#11172F] rounded-lg shadow-lg p-6 text-left border border-[#1F2A48]">
            <div className="bg-[#1F2A48] w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <Brain className="text-pink-400 w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Sophisticated Natural Language Processing
            </h3>
            <hr className="border-blue-800 mb-4" />
            <p className="text-sm text-gray-300">
              At the core of our platform is an advanced foundation model. This
              enables our system to grasp the nuances of clinical conversations
              — understanding context, recognizing intent, and accurately
              interpreting medical terminology. This deep comprehension allows
              the AI to generate clear, concise, and contextually relevant
              medical notes automatically.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#11172F] rounded-lg shadow-lg p-6 text-left border border-[#1F2A48]">
            <div className="bg-[#1F2A48] w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <Settings className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Learning Mode & Personalization
            </h3>
            <hr className="border-blue-800 mb-4" />
            <p className="text-sm text-gray-300">
              Our AI doesn’t rely on generic templates. We initiate the process
              by learning directly from your specific cases and workflows. The
              system intelligently refines its understanding and output based on
              your ongoing feedback, ensuring a truly personalized solution.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#11172F] rounded-lg shadow-lg p-6 text-left border border-[#1F2A48]">
            <div className="flex flex-col gap-2 mb-4">
              <span className="bg-[#122340] text-xs text-white font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1 w-max">
                <Lock className="w-4 h-4 text-yellow-400" />
                HIPAA COMPLIANT
              </span>
              <span className="bg-[#2A3170] text-xs text-white font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1 w-max">
                <FileText className="w-4 h-4 text-purple-300" />
                BUSINESS ASSOCIATE AGREEMENT
              </span>
            </div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Robust Data Privacy & Security
            </h3>
            <hr className="border-blue-800 mb-4" />
            <p className="text-sm text-gray-300">
              Protecting sensitive health information is paramount. Our AI
              solutions are architected with a security-first approach,
              incorporating principles like 'zero trust'. We utilize robust
              security measures, including comprehensive encryption, role-based
              access, and confidentiality enforcement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTechnology;
