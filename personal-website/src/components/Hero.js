// src/components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-600 to-purple-600">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi there 👋, I am Joseph Abonasara</h2>
      <p className="text-xl md:text-2xl mb-6">I am a Software Engineer</p>
      <a href="#contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">Contact Me</a>
    </section>
  );
}

export default Hero;
