"use client"
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

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

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1500,      // animation duration in ms
      easing: 'ease-out',  // easing function
      once: true,          // whether animation should happen only once
      offset: 100,         // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-semibold mb-8 text-center">Employment Experience</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
        {companies.map(({ name, logo, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 transform transition duration-300 hover:scale-105"
            aria-label={name}
            data-aos="fade-up"              // AOS animation type
            data-aos-once="true"            // animate only once
            data-aos-anchor-placement="top-bottom"  // trigger point
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
          </a>
        ))}
      </div>
    </section>
  );
}
