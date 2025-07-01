'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

const ServicesInformation = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
      {/* Hero Header */}
      <div
        className="text-center mb-12"
        data-aos="fade-up"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          We deliver high-performance blockchain solutions across a variety of ecosystems and
          platforms. Whether you&apos;re launching a new protocol, minting NFTs, or bridging chains—we
          handle the full stack.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="p-6 rounded-xl border border-white/10 bg-white/5 shadow-sm hover:shadow-md transition"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.detail}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className="mt-16 text-center"
        data-aos="fade-up"
        data-aos-delay={services.length * 100}
      >
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Let&apos;s build together. Whether you&apos;re starting from scratch or need help scaling, we&apos;re
          ready to collaborate.
        </p>
      </div>
    </section>
  );
};

export default ServicesInformation;
