// src/components/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    { title: "E-commerce App", description: "A modern app for online shopping." },
    { title: "Pokedex", description: "A searchable Pokédex for Pokémon fans." },
    { title: "Pizza Builder", description: "A customizable pizza ordering app." }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div key={project.title} className="p-6 bg-gray-900 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-blue-300">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
