import React from "react";

const ContactPage = () => {
  return (
    <div className="h-[80vh] text-center mt-24">
      <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          Get in Touch
        </h1>
        <div className="flex items-center justify-center">
          <p className="max-w-xl text-xl leading-relaxed text-center">
            Have questions or want to collaborate? Email us directly at{' '}
            <a
              href="mailto:matecoim@gmail.com"
              className="font-bold underline inline-block text-2xl  animate-pulse text-center"
            >
              matecoim@gmail.com
            </a>
            .
          </p>
        </div>
    </div>
  )
};

export default ContactPage;
