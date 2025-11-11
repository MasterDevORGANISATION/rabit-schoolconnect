import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Student data protection is our top priority. Schools maintain complete control over what students see.",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Students always know why they see each offer. Every recommendation is explained clearly.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We bring together students, schools, and partners in a mutually beneficial ecosystem.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive to deliver the best experience for all stakeholders through continuous innovation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Rabit</h1>
            <p className="text-xl text-muted-foreground">
              Connecting students with opportunities through school-controlled, policy-driven personalization.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rabit is designed to bridge the gap between students and the opportunities that matter most to them. 
                We believe that every student deserves access to relevant offers, events, and rewards that support 
                their academic journey and personal growth. Our platform empowers schools to maintain control over 
                content while enabling partners to reach targeted audiences effectively.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">How We Started</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in Morocco, Rabit emerged from a simple observation: students were overwhelmed with 
                irrelevant marketing, while businesses struggled to reach the right audience. Schools wanted to 
                help their students but needed a way to maintain oversight and protect their community. We built 
                Rabit to solve these challenges through a transparent, policy-driven approach that benefits everyone.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're a student, school administrator, or business partner, we have a place for you.
              </p>
              <Button size="lg" onClick={() => navigate("/login")}>
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
