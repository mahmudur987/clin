import { motion } from "framer-motion";

const cases = [
  {
    title: "Primary Care",
    description:
      "Dr SJ M.D reduced her documentation time by 52%, allowing her to see 3 more patients daily while finishing her charts before leaving the office.",
    quote:
      "\"This AI tool streamlines a tedious process, reduces 'click fatigue,' and helps me reclaim some sanity.\"",
    author: "— Dr. SJ, MD",
  },
  {
    title: "Emergency Medicine",
    description:
      "Our ED department implemented Clin Tech, resulting in more thorough documentation and a 70% decrease in chart completion time during high-volume periods. Our nurses love it.",
    quote: "",
    author: "— Emergency Department (ED) Nurse Manager",
  },
  {
    title: "Behavioral Health",
    description:
      "Chartwright has been transformative for our clinic. Our therapists were drowning in documentation; We’ve slashed average charting time to under 3 minutes per patient, freeing up hours for direct care. More importantly, we’ve seen a significant reduction in documentation errors and compliance flags. It’s not just faster; it’s smarter documentation.",
    quote: "",
    author: "— Clinical Director, Behavioral Health Practice",
  },
  {
    title: "Case Management",
    description:
      "Honestly, with the number of patients I manage, documentation felt like a constant, losing battle. But this AI feels like getting an assistant. It takes my detailed notes and instantly creates the clear, customized charts I need. I’m getting hours back each week – hours I can now spend directly with patients, tackling barriers, not just typing.",
    quote: "",
    author: "— Social Worker/Case Manager",
  },
];

export default function CaseUse() {
  return (
    <section
      className="bg-[#0a1224] text-white py-16 px-6 md:px-10"
      id="case-use"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-300 mb-3">Case Use</h2>
        <p className="text-gray-300 mb-10">
          See how healthcare providers across specialties are transforming their
          practice with Clin Technologies:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#0f1a34] border border-blue-800 rounded-xl p-6 text-left shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4">{item.description}</p>
              {item.quote && (
                <p className="italic text-gray-400 mb-2">
                  “{item.quote.replace(/(^"|"$)/g, "")}”
                </p>
              )}
              <p className="text-sm text-gray-500">{item.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
