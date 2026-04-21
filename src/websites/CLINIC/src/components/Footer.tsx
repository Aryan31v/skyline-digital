import { HeartPulse, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-clinic-green rounded-lg flex items-center justify-center">
                <HeartPulse className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                YOUR <span className="text-clinic-green">CLINIC</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Providing compassionate healthcare services in your community. We believe in trust, integrity, and selfless service.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-clinic-green transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-clinic-green transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-clinic-green transition-colors">Services</a></li>
              <li><a href="#timings" className="hover:text-clinic-green transition-colors">Clinic Hours</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>General Consultation</li>
              <li>Preventive Care</li>
              <li>Family Medicine</li>
              <li>Chronic Management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-clinic-green flex-shrink-0" />
                <span>123 Clinic St, City Name</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-clinic-green flex-shrink-0" />
                <span>+00 00000 00000</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-clinic-green flex-shrink-0" />
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-xs text-gray-400">
            (c) {new Date().getFullYear()} YOUR CLINIC NAME. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-400">
            <a href="#" className="hover:text-clinic-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-clinic-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
