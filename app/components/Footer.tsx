import Link from "next/link";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42A2.78 2.78 0 0 0 20.8 4.8C19.16 4.33 12 4.33 12 4.33s-7.16 0-8.8.47A2.78 2.78 0 0 0 1.46 6.42C1 8.08 1 12 1 12s0 3.92.46 5.58a2.78 2.78 0 0 0 1.74 1.62c1.64.47 8.8.47 8.8.47s7.16 0 8.8-.47a2.78 2.78 0 0 0 1.74-1.62C23 15.92 23 12 23 12s0-3.92-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl text-white font-bold mb-4">About Ewang'an Tours & Safaris</h3>
            <p className="text-white">Explore the world with our tailored tours and safaris.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 px-12">
            <h4 className="text-lg font-semibold mb-4 text-white transition-colors">Quick Links</h4>
            <ul>
              <li><Link href="/" className="text-white hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-white hover:text-white">About Us</Link></li>
              <li><Link href="/packages" className="text-white hover:text-white">Packages</Link></li>
              <li><Link href="/destinations" className="text-white hover:text-white">Destinations</Link></li>
              <li><Link href="/services" className="text-white hover:text-white">Our Services</Link></li>
              <li><Link href="/contact" className="text-white hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-white transition-colors">Contact Us</h4>
            <p className="text-white">Nairobi, CBD</p>
            <p className="text-white">Nairobi, Kenya</p>
            <p className="text-white">Phone: +254 716745127</p>
            <p className="text-white">Email: booking@ewangantours.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4 text-white transition-colors">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ewangantours" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.tiktok.com/@ewangantours" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <TikTokIcon />
                <span className="sr-only">TikTok</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <YouTubeIcon />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-dark transition-colors mt-8 pt-8 text-center">
          <p className="text-white">&copy; 2025 Ewang'an Tours & Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
