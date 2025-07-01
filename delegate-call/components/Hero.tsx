'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Link from 'next/link';

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: { enable: true },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#ffffff' },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: MoveDirection.none,
        outModes: { default: OutMode.bounce },
      },
      number: {
        value: 80,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }), []);

  return (
    <section className="relative text-white px-6 py-16 lg:py-24 overflow-hidden">
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-yellow-400 mb-4">
            Blockchain Development
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Unleashing The <br className="hidden sm:block" /> Future With Blockchain
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Elevate your business to the next dimension with our fusion of AI wizardry,
            data science mastery, and blockchain sorcery — crafting solutions that turn
            data into gold and innovation into reality.
          </p>
          <Link href={"/services"}>
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
                Learn about our services
              </button>
          </Link>
        </div>

        {/* Right side is now empty or could contain future visuals */}
      </div>
    </section>
  );
};

export default Hero;
