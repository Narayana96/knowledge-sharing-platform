
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would validate credentials and call an API
    // This is a mock implementation for demo purposes
    toast({
      title: "Welcome back!",
      description: "You have successfully signed in.",
    });
    
    // Redirect to dashboard
    navigate('/dashboard');
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-skillbridge-blue mb-2">Welcome Back</h1>
            <p className="text-skillbridge-darkGray">Sign in to your SkillBridge account</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-skillbridge-darkGray mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-skillbridge-blue focus:border-skillbridge-blue transition-colors"
                placeholder="Your email address"
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
                placeholder="Your password"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-skillbridge-blue focus:ring-skillbridge-blue border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-skillbridge-darkGray">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-skillbridge-blue hover:text-skillbridge-darkBlue">
                  Forgot password?
                </Link>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary py-3"
            >
              Sign in
            </button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-skillbridge-darkGray">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 py-3 border-gray-300 hover:bg-gray-50"
                onClick={(e) => {
                  e.preventDefault();
                  // Implement Google sign-in logic here
                  console.log("Google sign-in clicked");
                  toast({
                    title: "Google Sign-in",
                    description: "Google authentication would happen here.",
                  });
                  navigate('/dashboard');
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <g transform="matrix(1, 0, 0, 1, 0, 0)">
                    <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z" fill="#4285F4" />
                  </g>
                </svg>
                <span>Sign in with Google</span>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-skillbridge-darkGray">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-skillbridge-blue hover:text-skillbridge-darkBlue">
                Sign up
              </Link>
            </p>
          </div>
          
          <div className="mt-8">
            <Link to="/" className="inline-flex items-center text-skillbridge-blue hover:text-skillbridge-darkBlue transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
