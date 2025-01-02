import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="/lovable-uploads/ce2ca53e-a1e4-4c43-a1eb-32f662a7f450.png"
                  alt="APstudios"
                  className="h-8"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                HEM
              </Link>
              <Link
                to="/tjanster"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                TJÄNSTER
              </Link>
              <Link
                to="/projekt"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                PROJEKT
              </Link>
              <a
                href="#contact"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                KONTAKT
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              <span className="sr-only">Öppna meny</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <Link
              to="/"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              HEM
            </Link>
            <Link
              to="/tjanster"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              TJÄNSTER
            </Link>
            <Link
              to="/projekt"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              PROJEKT
            </Link>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              KONTAKT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;