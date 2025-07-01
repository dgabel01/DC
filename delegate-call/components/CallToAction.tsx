import React from 'react';
import Image from 'next/image';
import backgroundImage from '../public/cta.jpg';

const CallToAction = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] bg-transparent mt-24">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt="Call to action background"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 h-full flex flex-col justify-center text-center md:text-left text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Custom development</h2>
        <p className="text-lg font-bold md:text-xl max-w-xl mx-auto md:mx-0 mb-3 leading-relaxed">
          Hello! Just drop a line and submit your request! In the header click on the Contact button.
        </p>
        <p className="text-lg font-bold md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
          We have experience in working with different platforms, systems, and devices to create products that are compatible and accessible. Build your next digital product with us!
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
