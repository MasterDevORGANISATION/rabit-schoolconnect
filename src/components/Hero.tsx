import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Connecting Students with Opportunities</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in-up">
          Welcome to Rabit
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
          The platform that connects students and parents with schools and commercial partners through 
          personalized offers, events, and rewards.
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Schools control what students see. Partners reach targeted audiences. 
          Students discover opportunities that matter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up delay-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Partner Offers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Active Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Schools Connected</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
