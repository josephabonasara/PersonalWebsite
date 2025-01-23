import React, { useState } from "react";
import project1Image from "../assets/github-ai-logo.png";
import microIntegrationImage from "../assets/micro-integration.png"
import quickApplyImage from "../assets/quickapply.png"
import medicalExamDbIMage from "../assets/medical-exam-db.png"
import kubernetesImage from "../assets/kubernetes.png"
import splunkImage from '../assets/splunk.png'

const projects = [
  {
    title: "AI PR Tools",
    date: "Mar 2024 - Present",
    description: [
      "Developed an AI Code Reviewer using GitHub Actions, automatically identifying potential issues or improvements in PRs and posting targeted comments for easier review.",
      "Created an AI PR Tool that reads code changes, JIRA details, and user inputs to generate complete PR descriptions aligned with the organization’s template.",
      "Enhanced code quality, consistency, and accuracy across multiple repositories, reducing the manual effort required for PR creation and review.",
    ],
    skills: ["GitHub Actions", "Artificial Intelligence", "Automation", "Jira"],
    image: project1Image,
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
    skills: ["GitHub Actions", "Datadog", "AWS", "Locust", "Artificial Intelligence", "Confluence", "Jenkins", "Micro-Integration"],
    image: microIntegrationImage,
  },
  {
    title: "Quick Apply",
    date: "Jun 2023 - Present",
    description: [
      "Created a Chrome extension that simplifies job application processes by automating customized cover letter generation using Mammoth.js, jsPDF, and html2canvas.",
      "Users can input company details, preview edits in real-time, and generate polished PDFs for job applications.",
    ],
    skills: ["JavaScript", "Chrome Extension Development", "Mammoth.js", "HTML", "CSS"],
    image: quickApplyImage,
  },
  {
    title: "Medical School Exam Database",
    date: "Jan 2023 - Dec 2023",
    description: [
      "Developed a secure full-stack web application for managing and generating medical school exams.",
      "Features included sorting, filtering, and creating exams, built using React, Spring Boot, PostgreSQL, JUnit, and Cypress.",
    ],
    skills: ["React", "Spring Boot", "PostgreSQL", "JUnit", "Cypress"],
    image: medicalExamDbIMage,
  },
  {
    title: "Cluster Creation Automation",
    date: "Jul 2022 - Aug 2022",
    description: [
      "Developed a one-step automation tool for creating multi-region clusters, reducing manual work from 10 minutes to seconds.",
      "Built using Bash, Kubernetes, and Kustomize.",
    ],
    skills: ["CockroachDB", "Bash", "Kubernetes", "Kustomize"],
    image: kubernetesImage,
  },
  {
    title: "Rich Metrics and Splunk",
    date: "May 2022 - Aug 2022",
    description: [
      "Migrated CockroachDB clusters to use Rich Metrics and Splunk logging.",
      "Enabled advanced logging capabilities and reduced manual efforts in debugging.",
    ],
    skills: ["Python", "CockroachDB", "Splunk"],
    image: splunkImage,
  },
];

function Projects() {
    const [activeProject, setActiveProject] = useState(null);
  
    const closeModal = () => {
      setActiveProject(null);
    };
  
    return (
      <section id="projects" className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:ring-4 hover:ring-blue-400"
                onClick={() => setActiveProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 italic">{project.date}</p>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    {project.description.slice(0, 2).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              ))}
              </div>
            </div>
      
            {activeProject && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                onClick={closeModal}
              >
                <div
                  className="bg-gray-800 text-white p-6 rounded-lg relative w-11/12 max-w-3xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
                    onClick={closeModal}
                  >
                    &times;
                  </button>
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-80 object-cover mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 italic">{activeProject.date}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeProject.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    {activeProject.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                </div>
      )}
    </section>
  );
}

export default Projects;