import { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false, next: "light" });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (event) => {
    const x = event?.clientX || window.innerWidth / 2;
    const y = event?.clientY || window.innerHeight / 2;
    const nextTheme = theme === "light" ? "dark" : "light";

    setRipple({ x, y, show: true, next: nextTheme });

    setTimeout(() => {
      setTheme(nextTheme);
    }, 300);

    setTimeout(() => {
      setRipple((prev) => ({ ...prev, show: false }));
    }, 1000);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="relative overflow-hidden">
        {children}

        {/* Ripple Overlay */}
        <AnimatePresence>
          {ripple.show && (
            <motion.div
              key={ripple.next + "-ripple"}
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 50, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                top: ripple.y,
                left: ripple.x,
                transform: "translate(-50%, -50%)",
              }}
              className={`absolute z-50 w-10 h-10 rounded-full 
                ${ripple.next === "dark" ? "bg-blue-900" : "bg-yellow-400"}`}
            />
          )}
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
