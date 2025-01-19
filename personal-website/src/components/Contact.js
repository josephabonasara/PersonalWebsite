// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">Contact Me</h2>
        <p className="text-lg md:text-xl text-gray-300">Feel free to reach out via email or LinkedIn!</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">Email</a>
          <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
