"use client"
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';
import blankImage from '../public/blankhq_logo.jpeg';
import blackDragon from '../public/blackdragon_io_logo.jpeg';
import siemensImage from '../public/Siemens_Energy_logo.svg.png';
import protoFire from '../public/protofire.png';
import daytonaImage from '../public/daytona.jpg';
import glamOS from '../public/glamos.png';

const companies = [
  { name: 'Blank', logo: blankImage, url: 'https://blankhq.co/' },
  { name: 'BlackDragon', logo: blackDragon, url: 'https://www.linkedin.com/company/blackdragon-io/?originalSubdomain=hr' },
  { name: 'Siemens Energy', logo: siemensImage, url: 'https://www.siemens-energy.com/global/en/home.html' },
  { name: 'Protofire', logo: protoFire, url: 'https://protofire.io/' },
  { name: 'Daytona', logo: daytonaImage, url: 'https://www.daytona.io/' },
  { name: 'Glamos', logo: glamOS, url: 'https://glamos.eu/' },
];

// Container variants can be removed or kept minimal because individual cards will animate on in-view

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.5, ease: easeOut },
  },
};

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-semibold mb-8 text-center">Employment Experience</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
        {companies.map(({ name, logo, url }) => (
          <motion.a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:scale-105 transform transition duration-300"
            aria-label={name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"  // <-- triggers animation when in viewport
            viewport={{ once: true, amount: 0.3 }} // once:true animates only first time, amount:0.3 means 30% visible
            whileHover={{ scale: 1.1 }}
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <Image
                src={logo}
                alt={`${name} logo`}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 80px, 96px"
                priority={false}
              />
            </div>
            <span className="text-center text-lg font-bold">{name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
