'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      {/* Hero Title */}
      <div
        className="text-center mb-12"
        data-aos="fade-down"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className=" max-w-3xl mx-auto text-lg md:text-xl">
          &quot;We are a blockchain development team focused on delivering high-impact decentralized
          applications across multiple ecosystems including Solana, Ethereum, Base, and PulseChain.
          From token bridges and DeFi to NFTs and dApps, our work powers real-world utility at Web3
          scale.&quot;
        </p>
      </div>

      {/* Highlights Section */}
      <div className="grid gap-8 md:grid-cols-2">
        {highlights.map((item, index) => (
          <div
            key={item.title}
            className="p-6 rounded-xl border border-white/10 bg-white/5 shadow-sm hover:shadow-md transition"
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger delay by 100ms increments
          >
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Bottom Blurb */}
      <div
        className="mt-16 text-center"
        data-aos="fade-up"
        data-aos-delay={highlights.length * 100} // delay after all highlights
      >
        <p className=" max-w-2xl mx-auto text-lg md:xl">
          Our cross-platform experience enables us to ship scalable, secure, and accessible blockchain solutions.
          Whether it&apos;s DeFi, NFTs, gaming, or infrastructure—we help you build it, fast.
        </p>
      </div>
    </section>
  );
};

export default AboutInformation;
