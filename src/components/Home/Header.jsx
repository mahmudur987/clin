import logo from "../../assets/clin-removebg-preview.png";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Our Solution", href: "#our-solution" },
  { name: "In Action", href: "#in-action" },
  { name: "Technology", href: "#technology" },
  { name: "Benefits", href: "#benefits" },
  { name: "Case Use", href: "#case-use" },
];

const Header = () => {
  return (
    <header className="bg-[#0f172af2] text-white fixed w-full top-0 z-50 shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="font-bold text-xl">Clin</span>
          </div>

          <nav className="hidden lg:flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm text-gray-300 hover:text-blue-400 transition duration-200 group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="lg:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0f172a] rounded-box w-52"
            >
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
