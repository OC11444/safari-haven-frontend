
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubscribe = () => {
    if (email) {
      toast({
        title: "Subscribed Successfully!",
        description: "Thank you for subscribing to our newsletter. Stay tuned for exclusive offers and updates.",
      });
      setEmail('');
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-luxury-earth text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Hotel Information */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">Savannah Grand</h3>
                <p className="text-sm text-gray-300">Luxury Safari Lodge</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Experience the ultimate luxury safari adventure in the heart of Kenya's 
              most spectacular wildlife reserves. Where luxury meets the wild.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-luxury-gold transition-colors p-2 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-luxury-gold transition-colors p-2 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-luxury-gold transition-colors p-2 rounded-full">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-luxury-gold transition-colors p-2 rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left">
            <h4 className="font-playfair text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Rooms & Suites', id: 'rooms' },
                { label: 'Fine Dining', id: 'dining' },
                { label: 'Spa & Wellness', id: 'spa' },
                { label: 'Safari Adventures', id: 'safari' },
                { label: 'Book Now', id: 'booking' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-luxury-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <h4 className="font-playfair text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Maasai Mara National Reserve<br />
                    Narok County, Kenya
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <span className="text-gray-300">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <span className="text-gray-300">info@savannahgrand.com</span>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Languages</h5>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">English</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Swahili</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">French</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">German</span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="animate-fade-in">
            <h4 className="font-playfair text-xl font-bold mb-6">Stay Connected</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for exclusive offers, safari tips, and updates.
            </p>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
                <Button
                  onClick={handleNewsletterSubscribe}
                  className="gold-gradient text-white px-4"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Awards & Certifications */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Awards & Recognition</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <p>🏆 World's Leading Safari Lodge 2023</p>
                <p>⭐ TripAdvisor Travelers' Choice</p>
                <p>🌿 EarthCheck Gold Certification</p>
                <p>🛡️ Safe Travels Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Savannah Grand Hotel. All rights reserved. | 
              <a href="#" className="hover:text-luxury-gold ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-luxury-gold ml-1">Terms of Service</a>
            </div>
            <div className="text-gray-300 text-sm">
              Crafted with ❤️ for extraordinary safari experiences
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
