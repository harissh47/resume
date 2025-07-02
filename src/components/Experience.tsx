import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      company: "Sify Technologies Limited",
      position: "Software Developer",
      period: "06/2024 – Present",
      location: "Chennai, India",
      description: "Assisted in planning, designing, coding, debugging, testing, documenting, and maintaining software applications. Deployed microservices on Kubernetes clusters, managed infrastructure, implemented containerization, and created CI/CD pipelines.",
      achievements: [
        "Deployed microservices on Kubernetes clusters to improve scalability and availability.",
        "Maintained version control using GitLab for development projects.",
        "Managed infrastructure components: virtual machines, storage, and networks.",
        "Implemented containerization technologies like Docker and Kubernetes.",
        "Developed automated deployment processes and scripts.",
        "Configured, managed, and monitored AWS services using Terraform and Ansible.",
        "Created CI/CD pipelines with Jenkins and Docker."
      ],
      technologies: ["Kubernetes", "Docker", "AWS", "Terraform", "Ansible", "Jenkins", "GitLab"]
    },
    {
      company: "Rajalakshmi Engineering College",
      position: "Student",
      period: "08/2020 – 05/2024",
      location: "Chennai, India",
      description: "Participated in extracurricular activities, analyzed KPIs, attended classes, conducted research, and worked on academic projects.",
      achievements: [
        "Joined extracurricular activities exploring interests outside academics.",
        "Analyzed key performance indicators to identify effective strategies.",
        "Conducted research and prepared reports, presentations, and articles.",
        "Worked collaboratively on complex academic projects.",
        "Participated in campus events like career fairs, lectures, and workshops.",
        "Planned and completed group projects effectively.",
        "Contributed reports on industry trends, informing business planning."
      ],
      technologies: ["Python", "Java", "C++", "Microsoft Office"]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`section-enter ${isVisible ? 'section-visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional journey and key contributions in the software development field
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:text-left md:pl-1/2'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-slate-900"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="glass-effect p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{experience.position}</h3>
                      <div className="flex items-center text-blue-300 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {experience.period}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-300 mb-2">
                      <ExternalLink size={16} className="mr-2" />
                      <span className="font-semibold">{experience.company}</span>
                    </div>

                    <div className="flex items-center text-gray-400 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{experience.location}</span>
                    </div>

                    <p className="text-gray-300 mb-4">{experience.description}</p>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="text-gray-300 space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;