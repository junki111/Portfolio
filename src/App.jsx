import { HashRouter as Router } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    StarsCanvas,
    Works,
    Tech,
} from './components'

import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        {/* <StarsCanvas /> */}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </Router>
  );
};

export default App
