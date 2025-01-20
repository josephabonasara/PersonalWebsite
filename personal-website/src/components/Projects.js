import React, { useState } from "react";
import project1Image from "../assets/profilepic.png";
import project2Image from "../assets/profilepic.png";
import project3Image from "../assets/profilepic.png";

const projects = [
  {
    title: "AI PR Tools",
    date: "Mar 2024 - Present",
    description: [
      "Developed an AI Code Reviewer using GitHub Actions, automatically identifying potential issues or improvements in PRs and posting targeted comments for easier review.",
      "Created an AI PR Tool that reads code changes, JIRA details, and user inputs to generate complete PR descriptions aligned with the organization’s template.",
      "Enhanced code quality, consistency, and accuracy across multiple repositories, reducing the manual effort required for PR creation and review.",
    ],
    skills: ["GitHub Actions", "Artificial Intelligence", "Automation"],
    image: project1Image,
    github: "https://github.com/yourgithub/aiprtools",
    liveDemo: "https://yourlivedemo.com/aiprtools",
  },
  {
    title: "Performance Testing Automation",
    date: "Jun 2024 - Present",
    description: [
      "Developed a workflow to create cloud resources using cloud APIs and run load tests on Solace connectors with Locust.",
      "Integrated Datadog for fetching performance metrics and stored data in S3.",
      "Automated the generation of performance graphs and output to Confluence for tracking.",
      "Utilized AI to analyze historical performance data, providing insights and trend identification.",
    ],
    skills: ["GitHub Actions", "Datadog", "AWS", "Locust", "Artificial Intelligence"],
    image: project2Image,
    github: "https://github.com/yourgithub/performanceautomation",
    liveDemo: "https://yourlivedemo.com/performanceautomation",
  },
  {
    title: "Quick Apply",
    date: "Jun 2023 - Present",
    description: [
      "Created a Chrome extension that simplifies job application processes by automating customized cover letter generation using Mammoth.js, jsPDF, and html2canvas.",
      "Users can input company details, preview edits in real-time, and generate polished PDFs for job applications.",
    ],
    skills: ["JavaScript", "Chrome Extension Development", "Mammoth.js", "HTML", "CSS"],
    image: project3Image,
    github: "https://github.com/yourgithub/quickapply",
    liveDemo: "https://yourlivedemo.com/quickapply",
  },
  {
    title: "Medical School Exam Database",
    date: "Jan 2023 - Dec 2023",
    description: [
      "Developed a secure full-stack web application for managing and generating medical school exams.",
      "Features included sorting, filtering, and creating exams, built using React, Spring Boot, PostgreSQL, JUnit, and Cypress.",
    ],
    skills: ["React", "Spring Boot", "PostgreSQL", "JUnit", "Cypress"],
    image: project1Image,
    github: "https://github.com/yourgithub/examdatabase",
    liveDemo: "https://yourlivedemo.com/examdatabase",
  },
  {
    title: "Cluster Creation Automation",
    date: "Jul 2022 - Aug 2022",
    description: [
      "Developed a one-step automation tool for creating multi-region clusters, reducing manual work from 10 minutes to seconds.",
      "Built using Bash, Kubernetes, and Kustomize.",
    ],
    skills: ["CockroachDB", "Bash", "Kubernetes", "Kustomize"],
    image: project2Image,
    github: "https://github.com/yourgithub/clusterautomation",
    liveDemo: "https://yourlivedemo.com/clusterautomation",
  },
  {
    title: "Rich Metrics and Splunk",
    date: "May 2022 - Aug 2022",
    description: [
      "Migrated CockroachDB clusters to use Rich Metrics and Splunk logging.",
      "Enabled advanced logging capabilities and reduced manual efforts in debugging.",
    ],
    skills: ["Python", "CockroachDB", "Splunk"],
    image: project3Image,
    github: "https://github.com/yourgithub/richmetrics",
    liveDemo: "https://yourlivedemo.com/richmetrics",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openModal(project)}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 italic mb-2">{project.date}</p>
                <p className="text-sm text-gray-300">
                  {project.description[0]}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-gray-800 rounded-lg p-6 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl hover:text-red-500"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-gray-400 italic mb-4">{selectedProject.date}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {selectedProject.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="flex justify-between">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
