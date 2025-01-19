// src/components/Career.js
import React, { useState } from 'react';
import solaceLogo from '../assets/solace-logo.png';
import uottawaLogo from '../assets/uottawa-logo.png';
import nokiaLogo from '../assets/nokia-logo.png'
import twitterLogo from '../assets/twitter-logo.png'
import craLogo from '../assets/cra-logo.png'
import bestBuyLogo from '../assets/best-buy-logo.png'

function Career() {
  const [expandedJob, setExpandedJob] = useState(null);

  const jobs = [
    {
        company: "Solace",
        logo: solaceLogo,
        title: "Software Developer",
        description: [
            "Developed utilities for enhancing connector frameworks, streamlining integration and deployment processes.",
            "Led the creation of automation tests for Micro-Integrations including GCP, AWS SQS, AWS SNS, Azure ServiceBus, IBM MQ, TIBCO, and JMS, ensuring comprehensive coverage and robustness.",
            "Implemented CI/CD automation strategies for real-time connector testing, significantly improving deployment efficiency and reliability.",
            "Created AI-powered automation tools, saving up to 4 hours per new Micro-Integration implementation.",
            "Developed an automation tool that simplifies the process of releasing and testing new product versions in the cloud.",
            "Automated Performance testing of our Micro-Integrations in the cloud.",
            "Created an AI code reviewer that automatically reviews all PRs in a GitHub repository to speed up Peer Review process.",
        ],
        date:"Sep 2023 - Present"
    },
    {
        company: "University of Ottawa",
        logo: uottawaLogo,
        title: "Teaching Assistant",
        description: [
            "TA and lab instructor for Design and Analysis of Algorithms (CSI3505), Quality Assurance Testing (SEG 3503), and Operating Systems (CSI 3131)"
        ],
        date: "Jan 2023 - December 2023"
    },
    {
        company: "Nokia",
        logo: nokiaLogo,
        title: "Software Developer",
        description: [
            "Designed and implemented automated tests using Java, REST, and Cucumber.",
            "Gained hands-on experience working with REST, Postman, Kubernetes, and JUnit."
        ],
        date: "May 2023 - Sep 2023"
    },
    {
        company: "Twitter",
        logo: twitterLogo,
        title: "Software Engineer",
        description: [
            "Developed a one-step automation tool for cluster creation automation using Bash, Kubernetes, and Kustomize",
            "Migrated CockroachDB clusters to use Rich Metrics",
            "Wrote cql commands for fetching all cluster metrics and updated the cluster dashboards using Python",
            "Deployed production clusters using workflow",
            "Integrated Splunk logging to CockroachDB clusters",
            "Followed devops process to complete projects"
        ],
        date: "May 2022 - Aug 2022"
    },
    {
        company: "Canada Revenue Agency - Agence du revenu du Canada",
        logo: craLogo,
        title: "IT Developer",
        description: [
            "Gained experience with distributed, multi-tiered systems, algorithms, and relational databases",
            "Developed Java programs that automate tasks completed daily within the Amendments team to improve time efficiency",
            "Gained experience with COBOL, XML, JCL, SQL, Mainframe, DB2, VSAM, Batch Processing & Scheduling and CICS",
            "Developed Software Quality Assurance testing skills",
            "Assigned to run Integrated Testing daily",
            "Gained experience with distributed, multi-tiered systems, algorithms, and relational databases"
        ],
        date:"May 2020 - Aug 2021"
    },
    {
        company: "Best Buy",
        logo: bestBuyLogo,
        title: "Computer Sales Associate",
        description: [
            "Help customers find the best computer options based on what they need.",
            "Learned new features about technology every day.",
            "Developed new skills in the retail industry.",
            "Implemented computer skills to help customers with everyday problems (ex: Virus).",
            "Improved communication skills while selling computers to customers"
        ],
        date:"Aug 2019 - Feb 2020"
    },
  ];

  return (
    <section id="career" className="py-16 bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-blue-400 text-center">Career</h2>
        <div className="relative">
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gray-400"></div>
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`relative bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-3xl ml-16 flex items-start`}
            >
              <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                <p className="text-lg text-blue-500 font-semibold">{job.company}</p>
                <p className="text-sm text-gray-500 italic mb-2">{job.date}</p>
                {expandedJob === index ? (
                  <>
                    <ul className="list-disc ml-5 text-gray-700">
                      {job.description.map((point, i) => (
                        <li key={i} className="mb-2">{point}</li>
                      ))}
                    </ul>
                    <button
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      onClick={() => setExpandedJob(null)}
                    >
                      Hide
                    </button>
                  </>
                ) : (
                  <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    onClick={() => setExpandedJob(index)}
                  >
                    Show more
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Career;
