
import React from "react";
import { 
  Mail,  
  Download,
  Code,
  Palette,
  Database,
  Globe,
} from 'lucide-react';
// About Section Component
const AboutSection = () => {
  const skills = [
    { name: "React", level: 90, icon: <Code size={20} /> },
    { name: "JavaScript", level: 70, icon: <Globe size={20} /> },
    { name: "CSS/SCSS", level: 75, icon: <Palette size={20} /> },
    { name: "Django", level: 30, icon: <Database size={20} /> }
  ];

  return (
    <section id="about" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hey, I'm Devika — a frontend developer passionate about crafting clean, responsive web experiences with React. I’m currently diving into backend development with Django, always curious to learn and grow.
              </p>
              <p>
                
                Beyond building websites, I’m actively involved in the tech community — mentoring students, organizing hands-on coding events, and helping young developers turn ideas into real-world projects. I believe in learning by doing and love creating spaces where tech meets creativity and collaboration.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating exceptional user 
                experiences that make a difference.
              </p>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                <Download size={18} />
                Download CV
              </button>
              <button className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
                <Mail size={18} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-purple-600">{skill.icon}</div>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-gray-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection