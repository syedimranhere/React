import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-800/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl text-amber-100 tracking-tight">
          Syed Imran
        </h1>

        {/* NavLinks */}
        <nav className="space-x-6 text-sm sm:text-base text-amber-50">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 border-b-2 border-purple-500 pb-1"
                : "hover:text-purple-400 transition-colors duration-200"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 border-b-2 border-purple-500 pb-1"
                : "hover:text-purple-400 transition-colors duration-200"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 border-b-2 border-purple-500 pb-1"
                : "hover:text-purple-400 transition-colors duration-200"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 border-b-2 border-purple-500 pb-1"
                : "hover:text-purple-400 transition-colors duration-200"
            }
          >
            Profile
          </NavLink>
        </nav>

        {/* CTA */}
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-all">
          Launch App
        </button>
      </div>
    </header>
  );
}
