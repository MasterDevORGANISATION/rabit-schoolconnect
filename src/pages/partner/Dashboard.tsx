import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Eye, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PartnerDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Active Offers", value: "5", icon: Eye, color: "text-primary" },
    { title: "Total Reach", value: "2,340", icon: Users, color: "text-accent" },
    { title: "Engagement Rate", value: "42%", icon: TrendingUp, color: "text-success" },
  ];

  const myOffers = [
    { id: "OFF-001", title: "50% off on Pizza", status: "staging", reach: 450, clicks: 89 },
    { id: "OFF-003", title: "Buy 1 Get 1 Free", status: "validated", reach: 1200, clicks: 340 },
    { id: "OFF-005", title: "Student Discount 30%", status: "validated", reach: 690, clicks: 145 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Partner Dashboard</h1>
          <p className="text-muted-foreground">Manage your offers and track performance</p>
        </div>
        <Button onClick={() => navigate("/partner/offers/new")}>
          <Plus className="mr-2 h-4 w-4" />
          Create Offer
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Offers</CardTitle>
          <CardDescription>Track performance of your active campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {myOffers.map((offer) => (
              <div
                key={offer.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/10 transition-colors"
              >
                <div className="space-y-1">
                  <h3 className="font-semibold">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground">{offer.id}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{offer.reach}</p>
                    <p className="text-xs text-muted-foreground">Reach</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">{offer.clicks}</p>
                    <p className="text-xs text-muted-foreground">Clicks</p>
                  </div>
                  <div className="text-center">
                    <p className={`text-sm px-3 py-1 rounded ${
                      offer.status === "validated" 
                        ? "bg-success/10 text-success" 
                        : "bg-secondary text-secondary-foreground"
                    }`}>
                      {offer.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PartnerDashboard;
