
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-drift-dark p-4">
      <div className="text-center glass-card p-12 max-w-lg animate-fade-in">
        <h1 className="text-6xl font-bold mb-6 text-gradient">404</h1>
        <p className="text-xl text-white/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="button-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          <span>Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
