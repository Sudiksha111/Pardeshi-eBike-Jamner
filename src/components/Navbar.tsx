import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Brands", path: "/brands" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
            <Zap className="w-8 h-8 text-neon-green" />
            <p>Pardeshi eBike</p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link px-3 py-2 text-sm font-medium transition-smooth ${
                  isActive(item.path)
                    ? "text-primary active"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* 🌗 Dark Mode Button */}
            <button
              onClick={() => setTheme(prev => (prev === "light" ? "dark" : "light"))}
              className="
                h-10 w-10
                flex items-center justify-center
                rounded-full
                bg-white/80 text-gray-800
                dark:bg-gray-900/80 dark:text-gray-100
                backdrop-blur-md
                shadow-md
                hover:scale-105 hover:shadow-lg
                transition-all duration-300
              "
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(prev => (prev === "light" ? "dark" : "light"))}
              className="
                h-10 w-10
                flex items-center justify-center
                rounded-full
                bg-white/80 text-gray-800
                dark:bg-gray-900/80 dark:text-gray-100
                backdrop-blur-md
                shadow-md
                transition-all
              "
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md ${
                    isActive(item.path)
                      ? "text-primary bg-muted"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
