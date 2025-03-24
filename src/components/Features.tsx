
import React, { useEffect, useRef } from 'react';
import { MessageCircle, Zap, Lightbulb } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className="bg-white rounded-xl p-8 shadow-sm card-hover opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-r from-skillbridge-blue to-skillbridge-lightBlue text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-skillbridge-blue">{title}</h3>
      <p className="text-skillbridge-darkGray">{description}</p>
    </div>
  );
};

const Features = () => {
  const titleRef = useRef<HTMLDivElement>(null);

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

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <MessageCircle size={24} strokeWidth={2} />,
      title: "1:1 Chat with Experts",
      description: "Connect directly with skilled mentors for personalized guidance and real-time problem solving.",
      delay: 100,
    },
    {
      icon: <Lightbulb size={24} strokeWidth={2} />,
      title: "100+ Skills to Explore",
      description: "Discover and learn from a diverse range of skills across tech, creative, business, and lifestyle domains.",
      delay: 300,
    },
    {
      icon: <Zap size={24} strokeWidth={2} />,
      title: "Instant Problem Solving",
      description: "Get immediate assistance with challenges you're facing and overcome obstacles with expert help.",
      delay: 500,
    },
  ];

  return (
    <section id="features" className="section-padding bg-skillbridge-gray/30">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef} 
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <h2 className="section-title">Why Choose knowledge sharing platform?</h2>
          <p className="section-subtitle">
            Our platform connects you with expert mentors who can help you master new skills and solve challenging problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
