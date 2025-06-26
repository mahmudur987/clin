import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <section className="bg-[#141e35] text-white py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Get Started</h2>
        <p className="text-gray-300 mb-8">
          Ready to transform your clinical documentation process? Contact our
          team to learn how Clin Technologies can be tailored to your specific
          healthcare setting.
        </p>

        <div className="bg-[#0f1a2c] border border-blue-800 rounded-xl py-6 px-4 md:px-10 shadow-inner mb-6">
          <p className="text-sm text-gray-400">
            Or reach us directly via email at{" "}
            <a
              href="mailto:support@clintechso.com"
              className="text-blue-400 hover:underline"
            >
              support@clintechso.com
            </a>
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link to={"/login"}>
            <button className="px-6 py-2 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-200">
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 shadow-md">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
