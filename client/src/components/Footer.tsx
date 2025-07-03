import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-tech-blue">Mar</span>
              <span className="text-marketing-red">Techify</span>
            </div>
            <p className="text-gray-400 mb-4">
              Where Technology Meets Marketing Excellence
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-tech-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-marketing-red transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-purple transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/mission" className="hover:text-white transition-colors">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest insights and offerings
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 border-gray-700 focus:ring-tech-blue text-white text-sm rounded-r-none"
              />
              <Button className="bg-tech-blue hover:bg-tech-blue/90 rounded-l-none">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechConsults. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
