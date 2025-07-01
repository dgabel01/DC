'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ContactInformation = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className=" h-screen mt-0 flex flex-col justify-center items-center px-6 text-center"
    >
      <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
        Get in Touch
      </h1>
      <p className="max-w-xl text-lg leading-relaxed">
        Have questions or want to collaborate? Email us directly at{' '}
        <a
          href="mailto:matecoim@gmail.com"
          className="font-bold underline inline-block text-2xl  animate-pulse"
          style={{ textShadow: '0 0 8px rgba(0,0,0,0.4)' }}
        >
          matecoim@gmail.com
        </a>
        .
      </p>
    </motion.section>
  );
};

export default ContactInformation;
