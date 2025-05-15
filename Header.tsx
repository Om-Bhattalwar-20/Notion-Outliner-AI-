








import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useToast } from "../hooks/use-toast";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    
    toast({
      title: isDarkMode ? "Light mode enabled" : "Dark mode enabled",
      duration: 1500,
    });
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/a07b51fe-da4b-4848-9adc-d83399464621.png" 
              alt="Notion Logo" 
              className="h-8" 
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/templates"
            className="text-notion-gray-600 hover:text-notion-gray-900 dark:text-notion-gray-300 dark:hover:text-white transition-colors"
          >
            Templates
          </Link>
          <Link
            to="/mind-map"
            className="text-notion-gray-600 hover:text-notion-gray-900 dark:text-notion-gray-300 dark:hover:text-white transition-colors"
          >
            Mind Map
          </Link>
          <Link
            to="/writing-coach"
            className="text-notion-gray-600 hover:text-notion-gray-900 dark:text-notion-gray-300 dark:hover:text-white transition-colors"
          >
            Writing Coach
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-notion-gray-700" />
            )}
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Try Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
