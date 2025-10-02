import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-pink-200 hover:border-pink-300 transition-colors">
                <img src="/logo.jpg" alt="Ayath_iCakes Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-400">Ayath_iCakes</h3>
                <p className="text-sm text-gray-400">Baking Studio</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium baking studio specializing in fusion cakes, truffle delights, 
              and gourmet brownies. FSSAI & MSME certified for your trust.
            </p>
            <div className="flex space-x-4">
              <div className="bg-pink-600 px-3 py-1 rounded-full text-xs font-medium">
                FSSAI Certified
              </div>
              <div className="bg-pink-600 px-3 py-1 rounded-full text-xs font-medium">
                MSME Registered
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-400">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:8248477869"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>8248477869</span>
              </a>
              <a
                href="mailto:ayathicakes@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>ayathicakes@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>59A, Samthariya Nagar, 4th Street</p>
                  <p>Ambattur, Chennai - 600053</p>
                  <a
                    href="https://www.google.com/maps?q=13.1123905181885,80.1584701538086"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 transition-colors inline-flex items-center space-x-1 mt-1"
                  >
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="h-4 w-4" />
                <span>Mon-Sun: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/#courses"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                >
                  Baking Classes
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-400">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✨ Custom Cake Designs</li>
              <li>🚚 Home Delivery</li>
              <li>🎂 Birthday Cakes</li>
              <li>💑 Wedding Cakes</li>
              <li>🏢 Corporate Orders</li>
              <li>🎁 Special Occasions</li>
            </ul>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.instagram.com/ayath_icakes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Ayath_iCakes Baking Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;