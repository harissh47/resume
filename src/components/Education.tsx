import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      degree: "B.Tech, Information Technology",
      institution: "Rajalakshmi Engineering College, Chennai, India",
      period: "08/2020 – 05/2024",
      grade: "CGPA: 7.78 / 10.00",
      description: "Joined extracurricular activities, analyzed KPIs, conducted research, and participated in campus events. Worked collaboratively on academic and industry projects.",
      highlights: [
        "IELTS Score: 7.5 / 10",
        "Published project paper on 'Smart Band' in IEEE Journal (2024)",
        "Vice President, Debating Club, REC (2024)"
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: Award
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      icon: Award
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2021",
      icon: Award
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      icon: Award
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`section-enter ${isVisible ? 'section-visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Academic background and professional certifications that shaped my technical expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="glass-effect p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <div className="flex items-center text-blue-300 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-300 mb-2">
                      <BookOpen size={16} className="mr-2" />
                      <span className="font-semibold">{edu.institution}</span>
                    </div>

                    <div className="text-blue-300 font-semibold mb-4">Grade: {edu.grade}</div>

                    <p className="text-gray-300 mb-4">{edu.description}</p>

                    <div>
                      <h5 className="text-white font-semibold mb-2">Highlights:</h5>
                      <ul className="text-gray-300 space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="glass-effect p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 transform"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <cert.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{cert.title}</h4>
                        <p className="text-gray-300 mb-2">{cert.issuer}</p>
                        <div className="flex items-center text-blue-300 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {cert.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Learning Philosophy */}
              <div className="mt-8 glass-effect p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-4">Continuous Learning</h4>
                <p className="text-gray-300">
                  I believe in continuous learning and staying updated with the latest technologies. 
                  I regularly participate in online courses, workshops, and tech conferences to 
                  enhance my skills and knowledge in the ever-evolving field of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;