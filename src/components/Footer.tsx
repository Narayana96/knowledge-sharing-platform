
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-skillbridge-blue to-skillbridge-lightBlue rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="white" />
                  <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-skillbridge-blue to-skillbridge-lightBlue">
              knowledge sharing platform
              </span>
            </Link>
            <p className="text-skillbridge-darkGray mb-6">
              Connect with skilled mentors to solve problems and learn new skills through real-time chat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-skillbridge-gray flex items-center justify-center text-skillbridge-darkGray hover:bg-skillbridge-blue hover:text-white transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-skillbridge-gray flex items-center justify-center text-skillbridge-darkGray hover:bg-skillbridge-blue hover:text-white transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-skillbridge-gray flex items-center justify-center text-skillbridge-darkGray hover:bg-skillbridge-blue hover:text-white transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-skillbridge-gray flex items-center justify-center text-skillbridge-darkGray hover:bg-skillbridge-blue hover:text-white transition-colors duration-300">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-skillbridge-darkGray hover:text-skillbridge-blue transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-skillbridge-darkGray hover:text-skillbridge-blue transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-skillbridge-darkGray hover:text-skillbridge-blue transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-skillbridge-darkGray hover:text-skillbridge-blue transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-skillbridge-darkGray hover:text-skillbridge-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-skillbridge-darkGray hover:text-skillbridge-blue transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-skillbridge-darkGray hover:text-skillbridge-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-skillbridge-darkGray hover:text-skillbridge-blue transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="flex items-start space-x-3 mb-4">
              <Mail size={20} className="text-skillbridge-blue mt-0.5" />
              <span className="text-skillbridge-darkGray">hello@skillbridge.com</span>
            </div>
            <div className="flex flex-col space-y-3">
              <Link to="/contact" className="btn-outline text-center text-sm">
                Contact Us
              </Link>
              <Link to="/support" className="bg-skillbridge-gray text-skillbridge-darkGray py-2 px-4 rounded-lg text-center text-sm hover:bg-skillbridge-blue/10 transition-colors">
                Support Center
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-skillbridge-darkGray text-sm">
          <p>© {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-skillbridge-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-skillbridge-blue transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-skillbridge-blue transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
