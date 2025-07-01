'use client';

import React from "react";
import Projects from "./Projects";

const projectDetails = [
  {
    name: "Lingo Token Bridge",
    description: "A cross-chain bridge between Base and Solana using Wormhole.",
  },
  {
    name: "NukeTheSupply",
    description: "A deflationary token project on PulseChain and Solana.",
  },
  {
    name: "HomeMate",
    description: "A decentralized housing platform built on Solana.",
  },
  {
    name: "BattleBucks",
    description: "An in-game currency system deployed on Solana.",
  },
  {
    name: "SkullFellas NFT",
    description: "A unique Ethereum-based NFT collection.",
  },
  {
    name: "theWager",
    description: "A peer-to-peer betting platform on Solana.",
  },
];

const ProjectsOverview = () => {
  return (
    <main className="pb-12">
      <Projects />

      <section className="mt-12 px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          data-aos="fade-up"
        >
          Project Highlights
        </h2>

        <ul className="max-w-3xl mx-auto space-y-6">
          {projectDetails.map((project, index) => (
            <li
              key={project.name}
              className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                {project.name}
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ProjectsOverview;
