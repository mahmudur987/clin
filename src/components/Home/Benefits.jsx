import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Reduction in documentation time by 40–60%",
  "Improved work-life balance with less after-hours charting",
  "Enhanced patient interaction due to less focus on note-taking",
  "More comprehensive and consistent clinical documentation",
  "Reduced risk of documentation errors and omissions",
];

export default function Benefits() {
  return (
    <section
      className="bg-[#1e293b] text-white py-16 px-6 md:px-12"
      id="benefits"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold  mb-6">Benefits</h2>
        <p className=" mb-10 max-w-2xl mx-auto">
          Healthcare providers using Clin Technologies solutions report:
        </p>

        <div className="grid gap-6 md:grid-cols-2 text-left">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className=" mt-1 w-6 h-6" />
              <p className=" text-base">{benefit}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <Link to={"/login"}>
            <button className="px-6 py-2 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition">
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
