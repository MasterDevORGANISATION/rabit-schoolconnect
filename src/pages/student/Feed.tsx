import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentFeed = () => {
  const { toast } = useToast();

  const offers = [
    {
      id: "OFF-003",
      title: "20% off on Books",
      partner: "Librairie Nationale",
      category: "Education",
      points: 50,
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
      why: "Visible to TC students in Casablanca (policy rule r1)",
      validUntil: "2024-12-31",
    },
    {
      id: "OFF-007",
      title: "Free Coffee with Meal",
      partner: "Café Glacier",
      category: "Food",
      points: 75,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
      why: "Matched your age range and city (policy rule r2)",
      validUntil: "2024-03-31",
    },
    {
      id: "OFF-012",
      title: "Student Gym Pass - 50% off",
      partner: "Fitness Plus",
      category: "Sports",
      points: 120,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
      why: "Popular with TC students (policy rule r3)",
      validUntil: "2024-06-30",
    },
  ];

  const handleRedeem = (offer: any) => {
    toast({
      title: "Offer Redeemed!",
      description: `You earned ${offer.points} points. Show this at ${offer.partner}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="pt-6">
          <h1 className="text-3xl font-bold text-foreground">Your Feed</h1>
          <p className="text-muted-foreground">Personalized offers just for you</p>
        </div>

        <div className="space-y-4">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-2/3 p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">{offer.title}</h3>
                      <p className="text-sm text-muted-foreground">{offer.partner}</p>
                    </div>
                    <Badge variant="secondary">{offer.category}</Badge>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <Info className="h-4 w-4 text-accent flex-shrink-0" />
                    <p className="text-sm text-muted-foreground italic">{offer.why}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="flex items-center gap-1">
                          <Gift className="h-5 w-5 text-accent" />
                          <span className="text-2xl font-bold text-accent">{offer.points}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">points</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Valid until {offer.validUntil}
                      </div>
                    </div>
                    <Button onClick={() => handleRedeem(offer)}>
                      Redeem
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {offers.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No offers available at the moment</p>
            <p className="text-sm text-muted-foreground mt-2">Check back soon for new deals!</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StudentFeed;
