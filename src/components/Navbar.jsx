import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

import { navLinks } from "../constants";
import { junki, menu, close } from "../assets";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary-light dark:bg-secondary-dark shadow-md hover:scale-110 transition-transform"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-accent-dark" />
      ) : (
        <Moon className="w-6 h-6 text-primary-dark" />
      )}
    </button>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-20 bg-background-light dark:bg-background-dark shadow-lg transition-colors duration-300">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={junki} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-text-light dark:text-text-dark text-xl font-bold cursor-pointer">
            Junki <span className="hidden sm:inline">| Moturi</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-primary-light dark:text-primary-dark"
                  : "text-secondary-dark dark:text-secondary-light"
              } hover:text-primary-light dark:hover:text-primary-dark transition-colors text-lg font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-background-light dark:bg-background-dark absolute top-20 right-4 w-[200px] rounded-xl shadow-xl transition-colors`}
          >
            <ul className="list-none flex flex-col gap-4 w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-primary-light dark:text-primary-dark"
                      : "text-secondary-dark dark:text-secondary-light"
                  } hover:text-primary-light dark:hover:text-primary-dark transition-colors font-medium text-[16px] cursor-pointer`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="mt-2">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
