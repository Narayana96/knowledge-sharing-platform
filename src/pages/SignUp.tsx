
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSkillToggle = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const skillCategories = [
    {
      name: 'Tech',
      skills: ['Web Development', 'Mobile Development', 'Data Science', 'Machine Learning', 'Cloud Computing', 'Cybersecurity']
    },
    {
      name: 'Creative',
      skills: ['Graphic Design', 'UI/UX Design', 'Photography', 'Video Editing', 'Content Writing', 'Animation']
    },
    {
      name: 'Business',
      skills: ['Marketing', 'Finance', 'Project Management', 'Sales', 'Entrepreneurship', 'Product Management']
    },
    {
      name: 'Lifestyle',
      skills: ['Cooking', 'Fitness', 'Language Learning', 'Music', 'Personal Development', 'Productivity']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          {step === 1 ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-skillbridge-blue mb-2">Create Your Account</h1>
                <p className="text-skillbridge-darkGray">Join SkillBridge and start your learning journey</p>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-skillbridge-darkGray mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-skillbridge-blue focus:border-skillbridge-blue transition-colors"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-skillbridge-darkGray mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-skillbridge-blue focus:border-skillbridge-blue transition-colors"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-skillbridge-darkGray mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-skillbridge-blue focus:border-skillbridge-blue transition-colors"
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-skillbridge-darkGray mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-skillbridge-blue focus:border-skillbridge-blue transition-colors"
                    placeholder="Create a password"
                    required
                  />
                  <p className="text-xs text-skillbridge-darkGray mt-1">
                    Password must be at least 8 characters and include a number
                  </p>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-skillbridge-blue focus:ring-skillbridge-blue border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-skillbridge-darkGray">
                    I agree to the{' '}
                    <Link to="/terms" className="font-medium text-skillbridge-blue hover:text-skillbridge-darkBlue">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="font-medium text-skillbridge-blue hover:text-skillbridge-darkBlue">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary py-3"
                >
                  Continue
                </button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-skillbridge-darkGray">Or sign up with</span>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 py-3 border-gray-300 hover:bg-gray-50"
                  onClick={(e) => {
                    e.preventDefault();
                    // Implement Google sign-up logic here
                    console.log("Google sign-up clicked");
                  }}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(1, 0, 0, 1, 0, 0)">
                      <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z" fill="#4285F4" />
                    </g>
                  </svg>
                  <span>Sign up with Google</span>
                </Button>
                
                <div className="text-center">
                  <p className="text-skillbridge-darkGray">
                    Already have an account?{' '}
                    <Link to="/signin" className="font-medium text-skillbridge-blue hover:text-skillbridge-darkBlue">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-skillbridge-blue mb-2">Select Your Skills</h1>
                <p className="text-skillbridge-darkGray">Choose the skills you want to learn or share with others</p>
              </div>
              
              <div className="space-y-8">
                {skillCategories.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg mb-3 text-skillbridge-blue">{category.name}</h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <button
                          key={skillIndex}
                          type="button"
                          onClick={() => handleSkillToggle(skill)}
                          className={`rounded-full px-4 py-2 border transition-all ${
                            selectedSkills.includes(skill)
                              ? 'bg-skillbridge-blue text-white border-skillbridge-blue'
                              : 'bg-white text-skillbridge-darkGray border-gray-200 hover:border-skillbridge-blue'
                          }`}
                        >
                          {selectedSkills.includes(skill) && <Check size={16} className="inline-block mr-1" />}
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-outline"
                  >
                    Back
                  </button>
                  
                  <Link to="/" className="btn-secondary">
                    Complete Signup
                  </Link>
                </div>
              </div>
            </>
          )}
          
          {step === 1 && (
            <div className="mt-8">
              <Link to="/" className="inline-flex items-center text-skillbridge-blue hover:text-skillbridge-darkBlue transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                Back to home
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
