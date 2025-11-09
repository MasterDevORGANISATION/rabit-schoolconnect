import { Shield, Target, Award, BarChart3, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "School-Controlled Visibility",
    description: "Schools decide exactly what their students see, with policy-driven content filtering.",
  },
  {
    icon: Target,
    title: "Targeted Reach",
    description: "Partners connect with specific student segments based on class, age, and interests.",
  },
  {
    icon: Award,
    title: "Points & Rewards",
    description: "Auditable points system with append-only transactions for complete transparency.",
  },
  {
    icon: BarChart3,
    title: "Measurable Engagement",
    description: "Track offer performance and student engagement with comprehensive analytics.",
  },
  {
    icon: Users,
    title: "Multi-Stakeholder Platform",
    description: "Seamless workflows for students, parents, schools, partners, and administrators.",
  },
  {
    icon: Sparkles,
    title: "Personalized Feed",
    description: "Students see relevant offers with clear 'why' explanations for each item.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Built for Everyone</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive platform designed to serve students, schools, and partners with clarity and control.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
