import React, { useEffect, useRef, useState } from 'react';
import { Code, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: Code,
      title: "Analytical Professional",
      description: "Strong technical knowledge and critical thinking skills, thriving in data-driven environments. Tackles challenges with positivity and drive. Works well independently and collaboratively, consistently exceeding expectations."
    },
    {
      icon: Lightbulb,
      title: "Collaboration & Leadership",
      description: "Vice-President, Culturals – High School; Vice President, Debating Club, REC; Project Team Lead, SEDS REC; Organiser, Sify and Muses Events."
    },
    {
      icon: Target,
      title: "Continuous Learning",
      description: "Certified in Kubernetes, AWS, Data Science, Deep Learning, and Neo4j. Published project paper in IEEE Journal."
    },
    {
      icon: Users,
      title: "Communication",
      description: "Fluent in English, Tamil, Telugu, and Hindi. Strong presentation and project coordination skills."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`section-enter ${isVisible ? 'section-visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a dedicated software developer with a passion for creating innovative digital solutions. 
              My journey in technology has been driven by curiosity and a commitment to continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
                <p className="text-gray-300 mb-4">
                  With a strong foundation in computer science and years of hands-on experience, 
                  I specialize in building robust applications that solve real-world problems. 
                  My expertise spans across full-stack development, with a particular focus on 
                  modern web technologies.
                </p>
                <p className="text-gray-300 mb-4">
                  I believe in writing clean, maintainable code and following best practices 
                  to ensure scalable and efficient solutions. My approach combines technical 
                  proficiency with creative problem-solving to deliver exceptional results.
                </p>
                <p className="text-gray-300">
                  When I'm not coding, I enjoy staying updated with the latest tech trends, 
                  contributing to open-source projects, and sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="glass-effect p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                  <p className="text-gray-300 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "10+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;