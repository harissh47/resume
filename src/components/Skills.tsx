import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Globe, Server, Wrench } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Globe,
      title: "Programming & Scripting",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "HTML", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "CSS", level: 90 }
      ]
    },
    {
      icon: Server,
      title: "DevOps & Cloud",
      skills: [
        { name: "Kubernetes", level: 85 },
        { name: "Docker", level: 85 },
        { name: "Podman", level: 75 },
        { name: "AWS", level: 80 },
        { name: "CI/CD pipelines", level: 80 },
        { name: "Terraform", level: 75 },
        { name: "Ansible", level: 70 }
      ]
    },
    {
      icon: Database,
      title: "Databases & Data Science",
      skills: [
        { name: "Neo4j (Graph DB)", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Airflow", level: 70 },
        { name: "Apache Superset", level: 70 }
      ]
    },
    {
      icon: Code2,
      title: "AI & LLMs",
      skills: [
        { name: "Prompt Engineering", level: 80 },
        { name: "Large Language Models (LLMs)", level: 75 },
        { name: "AI Models", level: 75 },
        { name: "DAG orchestration", level: 70 }
      ]
    },
    {
      icon: Wrench,
      title: "Other Skills",
      skills: [
        { name: "Presentation Development", level: 90 },
        { name: "Project Coordination", level: 85 },
        { name: "Networking", level: 80 },
        { name: "Time Management", level: 85 },
        { name: "Social Media Management", level: 80 },
        { name: "Critical Thinking", level: 90 },
        { name: "Human Resources", level: 70 },
        { name: "Database Management", level: 80 },
        { name: "Program Design", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`section-enter ${isVisible ? 'section-visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technical expertise and proficiency across various technologies and tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="glass-effect p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div className="mb-4" key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-blue-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 skill-bar">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React Native', 'Flutter',
                'Firebase', 'Nginx', 'Linux', 'Agile', 'Scrum'
              ].map((tech, index) => (
                <div
                  key={tech}
                  className="glass-effect px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 transform"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;