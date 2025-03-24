
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Animation setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-28 pb-20 px-6 md:px-12 lg:px-24 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-skillbridge-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-skillbridge-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div 
        ref={heroRef}
        className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center z-10 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Learn Any Skill, Solve Any Problem – 
            <span className="text-skillbridge-blue">Connect with Experts Instantly!</span>
          </h1>

          <p className="text-skillbridge-darkGray text-lg md:text-xl mb-8 max-w-lg">
            Join knowledge sharing platform to chat with mentors, share knowledge, and grow together.
          </p>

          <Link 
            to="/signup" 
            className="btn-secondary flex items-center gap-2 group"
          >
            Get Started 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>

        <div className="relative animate-float">
          <div className="glass-card p-8 rounded-2xl relative z-10">
            <div className="relative aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Knowledge sharing illustration - stylized nodes and connections */}
                <circle cx="200" cy="200" r="180" stroke="#2A5C8B" strokeWidth="2" strokeDasharray="8 8" />
                <circle cx="200" cy="200" r="150" fill="#F5F7FA" />
                
                {/* Connection lines */}
                <path d="M160 150L120 100" stroke="#FF6B35" strokeWidth="2" />
                <path d="M240 150L280 100" stroke="#FF6B35" strokeWidth="2" />
                <path d="M160 250L120 300" stroke="#FF6B35" strokeWidth="2" />
                <path d="M240 250L280 300" stroke="#FF6B35" strokeWidth="2" />
                
                {/* Central node - person */}
                <circle cx="200" cy="200" r="40" fill="#2A5C8B" />
                <circle cx="200" cy="180" r="15" fill="white" />
                <path d="M175 215C175 201.193 186.193 190 200 190C213.807 190 225 201.193 225 215V220H175V215Z" fill="white" />
                
                {/* Skill nodes */}
                <circle cx="120" cy="100" r="20" fill="#FF6B35" />
                <circle cx="280" cy="100" r="20" fill="#FF6B35" />
                <circle cx="120" cy="300" r="20" fill="#FF6B35" />
                <circle cx="280" cy="300" r="20" fill="#FF6B35" />
                
                {/* Animated pulse circles */}
                <circle cx="200" cy="200" r="60" stroke="#2A5C8B" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
                <circle cx="200" cy="200" r="100" stroke="#2A5C8B" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" opacity="0.5" />
                
                {/* Skill icons inside nodes */}
                <text x="112" y="104" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">💻</text>
                <text x="272" y="104" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">🎨</text>
                <text x="112" y="304" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">📊</text>
                <text x="272" y="304" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">📱</text>
              </svg>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-skillbridge-orange/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-skillbridge-blue/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
