import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, MapPin, Calendar, Info } from "lucide-react";

const sampleOffers = [
  {
    id: 1,
    title: "Tech Workshop: Introduction to AI",
    partner: "Innovation Hub",
    category: "Education",
    points: 50,
    city: "Casablanca",
    date: "Dec 15, 2025",
    why: "Visible to TC students, class match r1, age 16-18",
    description: "Learn the fundamentals of AI and machine learning in this hands-on workshop.",
  },
  {
    id: 2,
    title: "20% Discount on Study Materials",
    partner: "Campus Bookstore",
    category: "Shopping",
    points: 25,
    city: "Rabat",
    date: "Valid until Jan 2026",
    why: "Available to all students in Rabat region",
    description: "Get exclusive discounts on textbooks and study supplies for the semester.",
  },
  {
    id: 3,
    title: "Career Fair 2025",
    partner: "University Career Center",
    category: "Career",
    points: 75,
    city: "Marrakech",
    date: "Jan 20, 2026",
    why: "Open to 2nd year students and above",
    description: "Meet top employers and explore internship opportunities in your field.",
  },
];

const StudentFeed = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Student Experience</h2>
          <p className="text-xl text-muted-foreground">
            Every offer is personalized and explained - students always know why they're seeing it.
          </p>
        </div>
        
        <div className="space-y-6">
          {sampleOffers.map((offer) => (
            <Card key={offer.id} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{offer.title}</h3>
                      <p className="text-sm text-muted-foreground">{offer.partner}</p>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      <Coins className="w-3 h-3 mr-1" />
                      {offer.points} pts
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground">{offer.description}</p>
                  
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {offer.city}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {offer.date}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-primary mb-1">Why you're seeing this:</p>
                      <p className="text-sm text-muted-foreground">{offer.why}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1">View Details</Button>
                    <Button variant="outline">Save for Later</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentFeed;
