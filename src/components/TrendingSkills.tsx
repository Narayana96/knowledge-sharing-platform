
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const TrendingSkills = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'tech', name: 'Tech' },
    { id: 'creative', name: 'Creative' },
    { id: 'business', name: 'Business' },
    { id: 'lifestyle', name: 'Lifestyle' },
  ];

  const skills = [
    { id: 1, name: 'React', category: 'tech', popularity: 95 },
    { id: 2, name: 'Python', category: 'tech', popularity: 92 },
    { id: 3, name: 'UX Design', category: 'creative', popularity: 88 },
    { id: 4, name: 'Digital Marketing', category: 'business', popularity: 86 },
    { id: 5, name: 'Data Science', category: 'tech', popularity: 90 },
    { id: 6, name: 'Graphic Design', category: 'creative', popularity: 85 },
    { id: 7, name: 'Project Management', category: 'business', popularity: 83 },
    { id: 8, name: 'Cooking', category: 'lifestyle', popularity: 80 },
    { id: 9, name: 'Photography', category: 'creative', popularity: 82 },
    { id: 10, name: 'Machine Learning', category: 'tech', popularity: 89 },
    { id: 11, name: 'Accounting', category: 'business', popularity: 78 },
    { id: 12, name: 'Fitness', category: 'lifestyle', popularity: 81 },
    { id: 13, name: 'JavaScript', category: 'tech', popularity: 91 },
    { id: 14, name: 'Content Writing', category: 'creative', popularity: 84 },
    { id: 15, name: 'Leadership', category: 'business', popularity: 87 },
    { id: 16, name: 'Language Learning', category: 'lifestyle', popularity: 79 },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="trending-skills" className="section-padding bg-skillbridge-gray/30">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef} 
          className="text-center mb-12 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <h2 className="section-title">Trending Skills</h2>
          <p className="section-subtitle">
            Discover the most in-demand skills that people are learning and sharing on knowledge sharing platform.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-skillbridge-blue text-white shadow-md'
                  : 'bg-white text-skillbridge-darkGray hover:bg-skillbridge-blue/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills tags */}
        <div 
          ref={skillsRef}
          className="flex flex-wrap justify-center gap-3 opacity-0 transition-all duration-700 ease-out"
        >
          {filteredSkills.map(skill => {
            // Scale size based on popularity (75% to 100%)
            const size = 75 + (skill.popularity / 100) * 25;
            
            return (
              <Link 
                to="/signup" 
                key={skill.id}
                className="tag text-sm md:text-base" 
                style={{ 
                  transform: `scale(${size / 100})`,
                  transformOrigin: 'center',
                  margin: `${(100 - size) / 200}rem`,
                }}
              >
                {skill.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingSkills;
