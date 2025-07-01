'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const highlights = [
  {
    title: 'Cross-chain Interoperability',
    detail: 'Lingo Token Bridge connects Base and Solana via Wormhole.',
  },
  {
    title: 'DeFi & Deflationary Tokens',
    detail: 'NukeTheSupply runs on PulseChain and Solana with a burn-focused model.',
  },
  {
    title: 'Web3 Utility Platforms',
    detail: 'HomeMate and theWager offer real-world applications on Solana.',
  },
  {
    title: 'NFT Collections',
    detail: 'SkullFellas NFT brings personality to Ethereum collectibles.',
  },
  {
    title: 'Gaming Integration',
    detail: 'BattleBucks provides in-game currency infrastructure on Solana.',
  },
];

const AboutInformation = () => {
  return (
    <section className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
      {/* Hero Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className=" max-w-3xl mx-auto text-lg md:text-xl">
          "We are a blockchain development team focused on delivering high-impact decentralized
          applications across multiple ecosystems including Solana, Ethereum, Base, and PulseChain.
          From token bridges and DeFi to NFTs and dApps, our work powers real-world utility at Web3
          scale."
        </p>
      </motion.div>

      {/* Highlights Section */}
      <div className="grid gap-8 md:grid-cols-2">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            className="p-6 rounded-xl border border-white/10 bg-white/5 shadow-sm hover:shadow-md transition"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Blurb */}
      <motion.div
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={highlights.length}
      >
        <p className=" max-w-2xl mx-auto text-lg md:xl">
          Our cross-platform experience enables us to ship scalable, secure, and accessible blockchain solutions.
          Whether it's DeFi, NFTs, gaming, or infrastructure—we help you build it, fast.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutInformation;
