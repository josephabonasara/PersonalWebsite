import React from 'react';
import francoCiteLogo from '../assets/franco-cite-logo.png';
import uottawaLogo from '../assets/uottawa-logo.png';

function Education() {
  const educationDetails = [
    {
      institution: "University of Ottawa",
      logo: uottawaLogo,
      degree: "Bachelor of Software Engineering",
      description: [
        "Graduated with a GPA of 9.57/10.0 (Summa Cum Laude).",
        "Focused on advanced software engineering principles, algorithms, and AI tools."
      ],
      date: "2019 - 2023"
    },
    {
      institution: "École secondaire catholique Franco-Cité",
      logo: francoCiteLogo,
      degree: "High School Diploma",
      description: [
        "Graduated with a grade of 96%.",
        "Activities and societies: Soccer, Futsal, Computer Club, Java and Visual Basics."
      ],
      date: "2013 - 2019"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-blue-400 text-center">Education</h2>
        <div className="relative">
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gray-400"></div>
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className={`relative bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-3xl ml-16 flex items-start`}
            >
              <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <img src={edu.logo} alt={`${edu.institution} logo`} className="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-lg text-blue-500 font-semibold">{edu.institution}</p>
                <p className="text-sm text-gray-500 italic mb-2">{edu.date}</p>
                <ul className="list-disc ml-5 text-gray-700">
                  {edu.description.map((point, i) => (
                    <li key={i} className="mb-2">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
