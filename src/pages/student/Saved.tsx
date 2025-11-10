import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Bookmark, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentSaved = () => {
  const { toast } = useToast();

  const savedOffers = [
    {
      id: "OFF-001",
      title: "Buy 2 Get 1 Free on Stationery",
      partner: "Papeterie Plus",
      category: "Education",
      points: 60,
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400",
      validUntil: "2024-12-31",
      savedDate: "2024-03-15",
    },
    {
      id: "OFF-005",
      title: "30% off on Electronics",
      partner: "TechStore Morocco",
      category: "Technology",
      points: 150,
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
      validUntil: "2024-06-30",
      savedDate: "2024-03-10",
    },
    {
      id: "OFF-008",
      title: "Student Movie Tickets - 40% off",
      partner: "Cinema Galaxy",
      category: "Entertainment",
      points: 90,
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
      validUntil: "2024-12-31",
      savedDate: "2024-03-05",
    },
  ];

  const handleUnsave = (offerId: string) => {
    toast({
      title: "Offer removed",
      description: "The offer has been removed from your saved list",
    });
  };

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
          <h1 className="text-3xl font-bold text-foreground">Saved Offers</h1>
          <p className="text-muted-foreground">Your bookmarked offers for later</p>
        </div>

        <div className="space-y-4">
          {savedOffers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                      onClick={() => handleUnsave(offer.id)}
                    >
                      <Bookmark className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </div>
                <CardContent className="md:w-2/3 p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">{offer.title}</h3>
                      <p className="text-sm text-muted-foreground">{offer.partner}</p>
                    </div>
                    <Badge variant="secondary">{offer.category}</Badge>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Saved on {offer.savedDate}</span>
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
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleUnsave(offer.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                      <Button onClick={() => handleRedeem(offer)}>
                        Redeem
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {savedOffers.length === 0 && (
          <Card className="p-12 text-center">
            <Bookmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No saved offers yet</p>
            <p className="text-sm text-muted-foreground mt-2">
              Browse the feed and save offers you're interested in!
            </p>
            <Button className="mt-4" onClick={() => window.location.href = "/student"}>
              Browse Offers
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StudentSaved;
