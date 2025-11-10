import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Edit, Trash2, Eye, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PartnerOffers = () => {
  const navigate = useNavigate();

  const offers = [
    {
      id: "OFF-001",
      title: "20% off on Books",
      status: "active",
      validated: true,
      views: 1240,
      clicks: 320,
      redemptions: 87,
      createdDate: "2024-01-15",
      validUntil: "2024-12-31",
    },
    {
      id: "OFF-002",
      title: "Free Coffee with Meal",
      status: "active",
      validated: true,
      views: 890,
      clicks: 210,
      redemptions: 65,
      createdDate: "2024-02-01",
      validUntil: "2024-03-31",
    },
    {
      id: "OFF-003",
      title: "Student Gym Pass - 50% off",
      status: "pending",
      validated: false,
      views: 0,
      clicks: 0,
      redemptions: 0,
      createdDate: "2024-03-15",
      validUntil: "2024-06-30",
    },
    {
      id: "OFF-004",
      title: "Buy 2 Get 1 Free on Stationery",
      status: "draft",
      validated: false,
      views: 0,
      clicks: 0,
      redemptions: 0,
      createdDate: "2024-03-20",
      validUntil: "2024-12-31",
    },
  ];

  const getStatusBadge = (status: string, validated: boolean) => {
    if (status === "active" && validated) {
      return <Badge variant="default">Active</Badge>;
    }
    if (status === "pending") {
      return <Badge variant="secondary">Pending Review</Badge>;
    }
    if (status === "draft") {
      return <Badge variant="outline">Draft</Badge>;
    }
    return <Badge variant="outline">{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Offers</h1>
          <p className="text-muted-foreground">Manage your published offers</p>
        </div>
        <Button onClick={() => navigate("/partner/offers/new")}>Create New Offer</Button>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search offers..." className="border-0 focus-visible:ring-0" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {offers.map((offer) => (
          <Card key={offer.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{offer.title}</h3>
                      {getStatusBadge(offer.status, offer.validated)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {offer.id} • Created {offer.createdDate} • Valid until {offer.validUntil}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {offer.validated && (
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm">Views</span>
                      </div>
                      <p className="text-2xl font-bold">{offer.views.toLocaleString()}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">Clicks</span>
                      </div>
                      <p className="text-2xl font-bold">{offer.clicks.toLocaleString()}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Badge className="h-4 w-4" />
                        <span className="text-sm">Redemptions</span>
                      </div>
                      <p className="text-2xl font-bold">{offer.redemptions}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PartnerOffers;
