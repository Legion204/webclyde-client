"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // no more engine.checkVersion error
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute top-0 left-0 w-full h-full"
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#3254ec" },
          links: { enable: true, color: "#3254ec", distance: 150, opacity: 0.5 },
          move: { enable: true, speed: 2, outModes: { default: "bounce" } },
          number: { value: 60, density: { enable: true, area: 800 } },
          size: { value: { min: 1, max: 5 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
