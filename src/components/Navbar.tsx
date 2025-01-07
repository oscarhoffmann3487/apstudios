import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const services = [
  { name: "FLYGFOTO", path: "/tjanster/foto" },
  { name: "VIDEOPRODUKTION", path: "/tjanster/film" },
  { name: "YTMODELLER", path: "/tjanster/ytmodeller" },
  { name: "3D MODELLER", path: "/tjanster/3d-modeller" },
  { name: "VOLYMBERÄKNINGAR", path: "/tjanster/volymberakningar" },
  { name: "INSPEKTIONER", path: "/tjanster/inspektioner" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#top');
    window.scrollTo(0, 0);
  };

  const bgColor = isHome ? (isScrolled ? "bg-white" : "bg-transparent") : "bg-white";
  const textColor = isHome ? (isScrolled ? "text-black" : "text-white") : "text-black";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${bgColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/#top" onClick={handleLogoClick}>
                <img
                  src="/lovable-uploads/50c45d71-bc8c-431f-bb8f-77f2b8eb8cf1.png"
                  alt="APstudios"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/#top"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                HEM
              </Link>
              <div className="relative group">
                <button
                  className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  TJÄNSTER <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                >
                  <div className="py-1">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                to="/projekt"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                PROJEKT
              </Link>
              <a
                href="#contact"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                KONTAKT
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
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
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isScrolled ? "bg-white" : "bg-black"
          }`}>
            <Link
              to="/#top"
              className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              HEM
            </Link>
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <Link
              to="/projekt"
              className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              PROJEKT
            </Link>
            <a
              href="#contact"
              className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
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

