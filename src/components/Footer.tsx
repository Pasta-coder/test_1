import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-accent rounded-full p-2">
                <GraduationCap className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SS Classes</h3>
                <p className="text-sm opacity-90">Premier JEE Coaching</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Shaping future engineers for over a decade. Your journey to IIT starts here with India's most trusted JEE coaching institute.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm opacity-90 hover:text-accent transition-colors">About Us</Link>
              <Link to="/courses" className="block text-sm opacity-90 hover:text-accent transition-colors">Our Courses</Link>
              <Link to="/faculty" className="block text-sm opacity-90 hover:text-accent transition-colors">Faculty</Link>
              <Link to="/results" className="block text-sm opacity-90 hover:text-accent transition-colors">Results</Link>
              <Link to="/admissions" className="block text-sm opacity-90 hover:text-accent transition-colors">Admissions</Link>
              <Link to="/notices" className="block text-sm opacity-90 hover:text-accent transition-colors">Notice Board</Link>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Programs</h4>
            <div className="space-y-2">
              <div className="text-sm opacity-90">Foundation (Class 8-10)</div>
              <div className="text-sm opacity-90">Target (Class 11-12)</div>
              <div className="text-sm opacity-90">JEE Mains Preparation</div>
              <div className="text-sm opacity-90">JEE Advanced Intensive</div>
              <div className="text-sm opacity-90">Crash Courses</div>
              <div className="text-sm opacity-90">Online Programs</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  ramnagar lane no. 2<br />
                  roorkee , uttarakhand - 247667<br />
                  India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <div className="text-sm opacity-90">+91-84100-02330</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <div className="text-sm opacity-90">hundredrabharora@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2025 SS Classes. All rights reserved. | 
            <span className="hover:text-accent cursor-pointer ml-1">Privacy Policy</span> | 
            <span className="hover:text-accent cursor-pointer ml-1">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;