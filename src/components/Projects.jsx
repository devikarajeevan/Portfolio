import React from 'react'
import { 
  ExternalLink, 
} from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: " SafeZone- Creating shelter in times of distress.",
      description: " A Website that swiftly connect those in need with compassionate hosts who can offer safe, temporary accommodation during a disaster. It also tracks essential supplies to efficiently distribute aid to disaster relief camps.",
      image: "🛍️",
      tech: ["React JS", "Tailwind CSS","Flask", "FireBase"],
      link: "https://devfolio.co/projects/safezone-4587"
    },
    {
      title: "LaTex Convertor for creating Descriptive exam Question Paper",
      description: " Developed a dynamic question paper generation system that supports multiple creation modes including plain text input with auto LaTeX conversion, template-based formats, and LaTeX file uploads. Integrated real-time preview, image upload with LaTeX generation, and PDF download functionality for seamless exam paper creation.",
      image: "📋",
      tech: ["React js", "Node Express", "Tailwind" ,"MongoDB"],
      link: "https://github.com/devikarajeevan/latex-converter.git"
    },
    {
      title: "Education Portal - Internship Project",
      description: "Built a role-based educational web application with distinct dashboards for students, tutors, and administrators. Integrated admin-approved authentication, offline payment tracking with visualizations, attendance and academic monitoring, form-based requests, and comprehensive user and course management functionalities tailored to each user type",
      image: "💼",
      tech: ["React JS","Tailwind CSS", "Django", "PosgreSQL"],
      link: "#"
    },
    {
      title: " Connectio- where dreams meet resources ",
      description: "It is a marketplace website that empowers users to search for goods or services using simple prompt-based queries.",
      image: "💼",
      tech: ["React JS","CSS", "Flask", "SQLite"],
      link: "https://devpost.com/software/connectio-7cu8zr"
    }

  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                >
                  View Project <ExternalLink size={16} />
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection