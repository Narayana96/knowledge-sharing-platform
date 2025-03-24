
import React, { useEffect, useRef } from 'react';
import { UserPlus, Search, MessageSquare } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  delay: number;
}

const Step = ({ icon, title, description, number, delay }: StepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);

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

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={stepRef}
      className="relative flex flex-col items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      {/* Step number badge */}
      <div className="absolute -top-4 w-8 h-8 rounded-full bg-skillbridge-blue text-white flex items-center justify-center font-bold text-sm">
        {number}
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm w-full card-hover text-center">
        <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-skillbridge-blue/10 text-skillbridge-blue mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-skillbridge-blue">{title}</h3>
        <p className="text-skillbridge-darkGray">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const connectorRef = useRef<HTMLDivElement>(null);

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

    if (connectorRef.current) {
      observer.observe(connectorRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (connectorRef.current) {
        observer.unobserve(connectorRef.current);
      }
    };
  }, []);

  const steps = [
    {
      icon: <UserPlus size={28} />,
      title: "Sign Up & Select Skills",
      description: "Create your account and choose the skills you want to learn or share with others.",
      number: 1,
      delay: 100,
    },
    {
      icon: <Search size={28} />,
      title: "Find Your Mentor/Mentee",
      description: "Browse profiles and connect with mentors or learners who match your interests.",
      number: 2,
      delay: 300,
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Chat & Learn",
      description: "Exchange messages, share resources, and grow your skills through conversation.",
      number: 3,
      delay: 500,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef} 
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get started with knowledge sharing platform in three simple steps and begin your learning journey today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div 
            ref={connectorRef}
            className="hidden md:block absolute top-24 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-gradient-to-r from-skillbridge-blue via-skillbridge-orange to-skillbridge-blue opacity-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: 0, transitionDelay: '400ms' }}
          ></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              number={step.number}
              delay={step.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
