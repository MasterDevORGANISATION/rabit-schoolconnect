import { Upload, CheckCircle, Bell, Award } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Schools Onboard",
    description: "Schools upload student lists via Excel. Admins review and merge data seamlessly.",
    colorBg: "bg-primary/10",
    colorRing: "ring-primary/20",
    colorIcon: "text-primary",
  },
  {
    icon: CheckCircle,
    title: "Partners Create Offers",
    description: "Partners publish offers that enter staging. Admins validate and approve for publication.",
    colorBg: "bg-accent/10",
    colorRing: "ring-accent/20",
    colorIcon: "text-accent",
  },
  {
    icon: Bell,
    title: "Students Receive",
    description: "Students see personalized, policy-filtered offers with clear 'why' explanations.",
    colorBg: "bg-success/10",
    colorRing: "ring-success/20",
    colorIcon: "text-success",
  },
  {
    icon: Award,
    title: "Engagement & Rewards",
    description: "Students engage with offers and earn points in a transparent, auditable ledger.",
    colorBg: "bg-primary/10",
    colorRing: "ring-primary/20",
    colorIcon: "text-primary",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined workflow that brings together schools, partners, and students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${step.colorBg} flex items-center justify-center mb-4 ring-4 ${step.colorRing}`}>
                  <step.icon className={`w-8 h-8 ${step.colorIcon}`} />
                </div>
                <div className="text-sm font-semibold text-muted-foreground mb-2">Step {index + 1}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
