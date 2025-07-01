'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Smart Contract Development',
    detail:
      'We write secure and optimized smart contracts in Solidity and Rust, tailored to DeFi, NFTs, gaming, and infrastructure use cases.',
  },
  {
    title: 'Cross-chain Bridge Solutions',
    detail:
      'Build seamless interoperability between ecosystems like Solana, Ethereum, Base, and PulseChain using tools like Wormhole.',
  },
  {
    title: 'Decentralized Application (dApp) Design',
    detail:
      'From UX to backend integration, we craft fully functional dApps with modern stacks and wallet support.',
  },
  {
    title: 'NFT Collections & Marketplaces',
    detail:
      'We deploy custom NFT contracts, metadata handling, and minting systems — and build full marketplaces too.',
  },
  {
    title: 'Tokenomics & Launch Strategy',
    detail:
      'We assist with token design, emission logic, deflationary mechanisms, and successful launch rollouts.',
  },
  {
    title: 'Full-Stack Blockchain Integration',
    detail:
      'We connect smart contracts to real-world UIs using Next.js, wagmi, Solana wallet adapter, and modern devops practices.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const ServicesInformation = () => {
  return (
    <section className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
      {/* Hero Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className=" max-w-3xl mx-auto text-lg md:text-xl">
          We deliver high-performance blockchain solutions across a variety of ecosystems and
          platforms. Whether you&apos;re launching a new protocol, minting NFTs, or bridging chains—we
          handle the full stack.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="p-6 rounded-xl border border-white/10 bg-white/5 shadow-sm hover:shadow-md transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={services.length}
        variants={fadeUp}
      >
        <p className=" max-w-2xl mx-auto text-lg md:text-xl">
          Let's build together. Whether you&apos;re starting from scratch or need help scaling, we&apos;re
          ready to collaborate.
        </p>
      </motion.div>
    </section>
  );
};

export default ServicesInformation;
