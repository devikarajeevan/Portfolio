// import React from 'react';

// const ExperiencePage = () => {
//   const experiences = [
//     {
//       role: "Freelance Software Developer",
//       company: "Cloudplus Infotech",
//       period: "2024-present",
//       details: [
//         "Worked on client-focused web solutions as a freelance developer.",
//         "Contributed to frontend and backend components tailored to business needs.",
//       ],
//     },
//     {
//       role: "Research and Development Intern",
//       company: "Sedai",
//       period: "2025",
//       details: [
//         "Explored intelligent automation strategies for cloud infrastructure.",
//         "Worked with modern tools to understand real-time performance insights and self-healing systems.",
//       ],
//     },
//     {
//       role: "Women in Tech Lead",
//       company: "TinkerHub GECT & FOSS GECT",
//       period: "2024 – Present",
//       details: [
//         "Led initiatives to promote diversity and inclusion in tech.",
//         "Organized events, mentorship sessions, and peer learning activities for women students in tech.",
//       ],
//     },
//     {
//       role: "Management & Operations Lead",
//       company: "Hack@Arch 3.0 – GEC Thrissur",
//       period: "2025",
//       details: [
//         "Coordinated logistics, planning, and execution of a national-level hackathon.",
//         "Managed teams, schedules, and communication to ensure smooth event flow.",
//       ],
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-gray-50 py-8 ">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Experience</h2>
//         <div className="space-y-8">
//           {experiences.map((exp, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
//               <h3 className="text-xl font-semibold text-purple-600">{exp.role}</h3>
//               <p className="text-gray-700">{exp.company} | {exp.period}</p>
//               <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
//                 {exp.details.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperiencePage;
import React from 'react';
import { Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';

const ExperiencePage = () => {
  const experiences = [
    {
      role: "Freelance Software Developer",
      company: "Cloudplus Infotech",
      period: "2024-present",
      details: [
        "Worked on client-focused web solutions as a freelance developer.",
        "Contributed to frontend and backend components tailored to business needs.",
      ],
      type: "Development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      role: "Research and Development Intern",
      company: "Sedai",
      period: "2025",
      details: [
        "Explored intelligent automation strategies for cloud infrastructure.",
        "Worked with modern tools to understand real-time performance insights and self-healing systems.",
      ],
      type: "Research",
      color: "from-purple-500 to-pink-500"
    },
    {
      role: "Women in Tech Lead",
      company: "TinkerHub GECT & FOSS GECT",
      period: "2024 – Present",
      details: [
        "Led initiatives to promote diversity and inclusion in tech.",
        "Organized events, mentorship sessions, and peer learning activities for women students in tech.",
      ],
      type: "Leadership",
      color: "from-emerald-500 to-teal-500"
    },
    {
      role: "Management & Operations Lead",
      company: "Hack@Arch 3.0 – GEC Thrissur",
      period: "2025",
      details: [
        "Coordinated logistics, planning, and execution of a national-level hackathon.",
        "Managed teams, schedules, and communication to ensure smooth event flow.",
      ],
      type: "Operations",
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Briefcase className="w-5 h-5 text-white/80" />
            <span className="text-white/80 font-medium">Professional Journey</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Experience
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A collection of roles that shaped my professional growth and expertise
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 group">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Experience Card */}
                <div className="ml-20 group-hover:translate-x-2 transition-all duration-500">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                    {/* Card Header */}
                    <div className="p-8 border-b border-white/10">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${exp.color}`}>
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-white/70 mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                          <Calendar className="w-4 h-4 text-white/60" />
                          <span className="text-white/80 font-medium">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-8">
                      <div className="space-y-4">
                        {exp.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                            <ChevronRight className="w-4 h-4 text-white/60 mt-1 flex-shrink-0 group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300" />
                            <p className="text-white/80 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        
      </div>
    </div>
  );
};

export default ExperiencePage;