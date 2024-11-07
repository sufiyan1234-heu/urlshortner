import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-6 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-2">UrlShortner</h2>
          <p className="text-center md:text-left">
            The most straightforward and efficient URL shortener in Pakistan, making link sharing easy and quick.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/shorten" className="hover:underline">Shortener</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-purple-400 mt-4 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} UrlShortner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;