import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Rabbit, Menu } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", onClick: () => navigate('/about') },
    { label: "FAQ", onClick: () => navigate('/faq') },
    { label: "Contact", onClick: () => navigate('/contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Rabbit className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Rabit</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            item.href ? (
              <a key={item.label} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                {item.label}
              </a>
            ) : (
              <button key={item.label} onClick={item.onClick} className="text-sm font-medium hover:text-primary transition-colors">
                {item.label}
              </button>
            )
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => navigate("/login")}>Sign In</Button>
          <Button size="sm" onClick={() => navigate("/login")}>Get Started</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => {
                      item.onClick?.();
                      setOpen(false);
                    }}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" onClick={() => { navigate("/login"); setOpen(false); }}>
                  Sign In
                </Button>
                <Button onClick={() => { navigate("/login"); setOpen(false); }}>
                  Get Started
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
