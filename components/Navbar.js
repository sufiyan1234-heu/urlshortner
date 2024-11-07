import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-600 px-4 md:px-8 flex justify-between items-center text-white shadow-md">
      <div className="logo font-bold text-lg md:text-xl">
        UrlShortener
      </div>
      <ul className="hidden md:flex gap-6 items-center">
        <Link href="/">
          <li className="hover:text-purple-200 transition duration-200">Home</li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-purple-200 transition duration-200">Contact Us</li>
        </Link>
        <Link href="/shorten">
          <li className="hover:text-purple-200 transition duration-200">Shortener</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-purple-200 transition duration-200">About Us</li>
        </Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="py-1 px-4 rounded-md font-bold bg-purple-500 hover:bg-purple-700 transition duration-200">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="py-1 px-4 rounded-md font-bold bg-purple-500 hover:bg-purple-700 transition duration-200">
              GitHub
            </button>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
