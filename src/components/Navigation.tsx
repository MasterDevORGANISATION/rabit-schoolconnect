import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rabbit } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Rabbit className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Rabit</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </a>
          <button onClick={() => navigate('/about')} className="text-sm font-medium hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => navigate('/faq')} className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </button>
          <button onClick={() => navigate('/contact')} className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => navigate("/login")}>Sign In</Button>
          <Button size="sm" onClick={() => navigate("/login")}>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
