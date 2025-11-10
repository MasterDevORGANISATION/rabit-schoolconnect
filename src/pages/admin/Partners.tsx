import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2, CheckCircle, XCircle, Clock } from "lucide-react";

const AdminPartners = () => {
  const partners = [
    {
      id: "P001",
      name: "Librairie Nationale",
      category: "Education",
      status: "active",
      offersCount: 12,
      studentsReached: 2430,
      joinedDate: "2024-01-15",
      email: "contact@librairie.ma",
    },
    {
      id: "P002",
      name: "Café Glacier",
      category: "Food & Beverage",
      status: "active",
      offersCount: 8,
      studentsReached: 1820,
      joinedDate: "2024-02-10",
      email: "info@cafeglacier.ma",
    },
    {
      id: "P003",
      name: "Fitness Plus",
      category: "Sports & Wellness",
      status: "pending",
      offersCount: 3,
      studentsReached: 450,
      joinedDate: "2024-03-20",
      email: "contact@fitnessplus.ma",
    },
    {
      id: "P004",
      name: "TechStore Morocco",
      category: "Technology",
      status: "inactive",
      offersCount: 0,
      studentsReached: 0,
      joinedDate: "2024-01-05",
      email: "hello@techstore.ma",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "inactive":
        return <XCircle className="h-4 w-4 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: any = {
      active: "default",
      pending: "secondary",
      inactive: "outline",
    };
    return <Badge variant={variants[status]}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Partners</h1>
          <p className="text-muted-foreground">Manage partner organizations</p>
        </div>
        <Button>Add Partner</Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search partners..." className="max-w-sm" />
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4">
        {partners.map((partner) => (
          <Card key={partner.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{partner.name}</h3>
                      {getStatusIcon(partner.status)}
                      {getStatusBadge(partner.status)}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Partner ID</p>
                        <p className="font-medium">{partner.id}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Category</p>
                        <p className="font-medium">{partner.category}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Active Offers</p>
                        <p className="font-medium">{partner.offersCount}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Students Reached</p>
                        <p className="font-medium">{partner.studentsReached.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{partner.email}</span>
                      <span>•</span>
                      <span>Joined {partner.joinedDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminPartners;
