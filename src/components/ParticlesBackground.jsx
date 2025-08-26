import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "../context/ThemeContext";

const ParticlesBackground = () => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: theme === "dark" ? "#0f172a" : "#f8fafc" },
        fpsLimit: 60,
        detectRetina: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["grab", "repulse"],
              parallax: { // 👈 parallax effect
                enable: true,
                force: 100,   // stronger = more movement
                smooth: 20,  // higher = smoother easing
              },
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              links: { opacity: 0.8 },
            },
            repulse: {
              distance: 60,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          color: {
            value:
              theme === "dark"
                ? ["#38bdf8", "#22c55e", "#f43f5e"] 
                : ["#1d4ed8", "#9333ea", "#eab308"],
          },
          links: {
            enable: true,
            distance: 150,
            color: theme === "dark" ? "#64748b" : "#94a3b8",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },
          size: {
            value: { min: 2, max: 5 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 1,
              sync: false,
            },
          },
          opacity: { value: 0.8 },
        },
      }}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default ParticlesBackground;
