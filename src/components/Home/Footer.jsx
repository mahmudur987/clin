export default function Footer() {
  return (
    <footer className="bg-[#141e35] text-gray-400 text-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side - Links */}
        <div className="flex gap-4">
          <a href="/terms" className="hover:text-blue-400 transition-colors">
            Terms of Use
          </a>
          <a href="/privacy" className="hover:text-blue-400 transition-colors">
            Privacy Policy
          </a>
        </div>

        {/* Right Side - Info */}
        <div className="text-right text-gray-500 text-xs">
          <p>© 2025 Clin Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
