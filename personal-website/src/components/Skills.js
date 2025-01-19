// Step 7: Skills Section
// src/components/Skills.js
import React from 'react';
import 'devicon/devicon.min.css';
import snowflakeLogo from '../assets/snowflake-logo.png'
import cockroachLogo from '../assets/cockroachdb-logo.png'
import openaiLogo from '../assets/openai-logo.png'
import machineLearningLogo from '../assets/machine-learning-logo.png'
import cicdLogo from '../assets/cicd-logo.png'
import splunkLogo from '../assets/splunk-logo.png'

function Skills() {
    const skillCategories = [
        {
          category: "Languages",
          skills: [
            { name: "Java", iconClass: "devicon-java-plain colored" },
            { name: "Python", iconClass: "devicon-python-plain colored" },
            { name: "Kotlin", iconClass: "devicon-kotlin-plain colored" },
            { name: "Bash", iconClass: "devicon-bash-plain colored" },
            { name: "Golang", iconClass: "devicon-go-plain colored" },
            { name: "C#", iconClass: "devicon-csharp-plain colored" },
            { name: "C++", iconClass: "devicon-cplusplus-plain colored" },
            { name: "C", iconClass: "devicon-c-plain colored" },
            { name: "HTML", iconClass: "devicon-html5-plain colored" },
            { name: "CSS", iconClass: "devicon-css3-plain colored" },
            { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
            { name: "SQL", iconClass: "devicon-mysql-plain colored" },
          ]
        },
        {
          category: "Frameworks",
          skills: [
            { name: "Spring Boot", iconClass: "devicon-spring-plain colored" },
            { name: "React.js", iconClass: "devicon-react-original colored" },
            { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
            { name: "AngularJS", iconClass: "devicon-angularjs-plain colored" },
            { name: "JUnit", iconClass: "devicon-java-plain colored" },
            { name: "Cucumber", iconClass: "devicon-cucumber-plain colored" },
          ]
        },
        {
          category: "DevOps Tools",
          skills: [
            { name: "Kubernetes", iconClass: "devicon-kubernetes-plain colored" },
            { name: "Docker", iconClass: "devicon-docker-plain colored" },
            { name: "Jenkins", iconClass: "devicon-jenkins-plain colored" },
            { name: "Gradle", iconClass: "devicon-gradle-plain colored" },
            { name: "AWS", customIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Microsoft Azure", iconClass: "devicon-azure-plain colored" },
            { name: "Git", iconClass: "devicon-git-plain colored" },
            { name: "Google Cloud Platform", iconClass: "devicon-googlecloud-plain colored" },
            { name: "Github Actions", iconClass: "devicon-githubactions-plain colored" },
          ]
        },
        {
          category: "Databases",
          skills: [
            { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
            { name: "Snowflake", customIcon: snowflakeLogo },
            { name: "CockroachDB", customIcon: cockroachLogo },
          ]
        },
        {
          category: "Other",
          skills: [
            { name: "CI/CD", customIcon: cicdLogo },
            { name: "Machine Learning", customIcon: machineLearningLogo },
            { name: "Linux", iconClass: "devicon-linux-plain colored" },
            { name: "Data Structures & Algorithms", iconClass: "devicon-thealgorithms-plain colored" },
            { name: "Confluence", iconClass: "devicon-confluence-plain colored" },
            { name: "Prometheus", iconClass: "devicon-prometheus-original colored" },
            { name: "Splunk", customIcon: splunkLogo },
            { name: "OpenAI", customIcon: openaiLogo },
          ]
        }
      ];
    
  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-blue-400 text-center">Skills</h2>
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md">
                  {skill.iconClass && (
                    <i className={`${skill.iconClass} text-4xl mb-2`} aria-hidden="true"></i>
                  )}
                  {skill.customIcon && (
                    <img
                      src={skill.customIcon}
                      alt={skill.name}
                      className="w-16 h-16 mb-2 object-contain"
                    />
                  )}
                  <p className="text-white text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;