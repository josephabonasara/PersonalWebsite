import React from 'react';
import profilePic from '../assets/profilepic.png';

function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-600 to-purple-600 px-8">
      <div className="w-full md:w-1/4 flex justify-center mb-6">
        <img
          src={profilePic}
          alt="Joseph Abonasara"
          className="w-1/2 md:w-3/4 rounded-full border-4 border-purple-400 shadow-md"
        />
      </div>
      <div className="w-full md:w-3/4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Hi there 👋, I am Joseph Abonasara</h2>
        <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
          I am a Software Engineer passionate about <span className="text-blue-300 font-semibold">building impactful solutions</span> through <span className="text-blue-300 font-semibold">automation</span>, <span className="text-blue-300 font-semibold">DevOps</span>, and <span className="text-blue-300 font-semibold">AI-driven innovation</span>. 
          My expertise lies in designing efficient tools and workflows that drive scalability and streamline complex processes.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          With experience in <span className="text-purple-300 font-semibold">CI/CD pipelines</span>, <span className="text-purple-300 font-semibold">cloud technologies</span>, and <span className="text-purple-300 font-semibold">software development</span>, I focus on solving challenging problems while constantly evolving through continuous learning and innovation.
        </p>
        <a
          href="#contact"
          className="mt-10 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white text-lg rounded-lg transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;