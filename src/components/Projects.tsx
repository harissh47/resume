import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Smart Band (IEEE Journal Publication)",
      description: "Published project paper on 'Smart Band' in IEEE Journal (2024). Led a team to design and implement a wearable device for health monitoring.",
      technologies: ["IoT", "Embedded Systems", "Health Monitoring"],
      type: "Research Project",
      icon: Code,
      highlights: [
        "Published in IEEE Journal (2024)",
        "Project Team Lead, SEDS REC (2024)"
      ]
    },
    {
      title: "Hack4throne (Runner-up)",
      description: "Runner-up in Hack4throne (2023). Developed an innovative solution in a competitive hackathon environment.",
      technologies: ["Hackathon", "Teamwork", "Innovation"],
      type: "Competition",
      icon: Globe,
      highlights: [
        "Runner-up, Hack4throne (2023)",
        "Vice-President, Culturals – High School (2021)"
      ]
    },
    {
      title: "AI Live Projects Internship",
      description: "Internship: Artificial Intelligence live projects – Artificial in association with Skill Vertex (2023). Worked on real-world AI projects.",
      technologies: ["AI", "Machine Learning", "Internship"],
      type: "Internship",
      icon: Database,
      highlights: [
        "Completed UiPath course: Build Your First Automation with StudioX (2023)",
        "Certificate of Completion, Global Tech Advanced Software Engineering Virtual Experience – Walmart Global Tech (2022)"
      ]
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`section-enter ${isVisible ? 'section-visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work and projects that demonstrate my technical skills and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105 transform group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center glass-effect px-3 py-1 rounded-full">
                      <project.icon size={16} className="text-white mr-2" />
                      <span className="text-white text-sm">{project.type}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveLink}
                        className="flex items-center text-blue-300 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span className="text-sm">Live</span>
                      </a>
                      <a
                        href={project.githubLink}
                        className="flex items-center text-blue-300 hover:text-white transition-colors duration-200"
                      >
                        <Github size={16} className="mr-1" />
                        <span className="text-sm">Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <h4 className="text-white text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="glass-effect text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 transform font-semibold">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;