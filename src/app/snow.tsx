"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSnowPreset } from "@tsparticles/preset-snow";
import type { Container, Engine } from "@tsparticles/engine";

export default function Snow() {
  const [init, setInit] = useState(false);

  // Initialize the particles engine and load the snow preset
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSnowPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded", container);
  };

  const options = {
    preset: "snow",
    particles: {
      number: {
        value: 500,
      },
      move: {
        speed: 3,
      },

    },
  };

  if (init) {
    return (
      <Particles
        id="snow-effect"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    );
  }

  return null;
}
