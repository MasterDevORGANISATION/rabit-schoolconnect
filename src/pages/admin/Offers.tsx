import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, XCircle, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminOffers = () => {
  const { toast } = useToast();
  const [selectedOffer, setSelectedOffer] = useState<any>(null);

  const mockOffers = [
    {
      id: "OFF-001",
      title: "50% off on Pizza",
      partner: "Pizza Hut Casablanca",
      category: "Food",
      points: 100,
      targetClasses: ["TC", "1BAC"],
      city: "Casablanca",
      status: "staging",
      validFrom: "2024-01-20",
      validUntil: "2024-02-20",
    },
    {
      id: "OFF-002",
      title: "Free Movie Ticket",
      partner: "Cinema Megarama",
      category: "Entertainment",
      points: 150,
      targetClasses: ["2BAC"],
      city: "Rabat",
      status: "staging",
      validFrom: "2024-01-15",
      validUntil: "2024-03-15",
    },
    {
      id: "OFF-003",
      title: "20% off Books",
      partner: "Librairie Nationale",
      category: "Education",
      points: 50,
      targetClasses: ["TC", "1BAC", "2BAC"],
      city: "Casablanca",
      status: "validated",
      validFrom: "2024-01-10",
      validUntil: "2024-12-31",
    },
  ];

  const handleValidate = (offer: any) => {
    toast({
      title: "Offer Validated",
      description: `${offer.title} is now live for students`,
    });
    setSelectedOffer(null);
  };

  const handleReject = (offer: any) => {
    toast({
      title: "Offer Rejected",
      description: `${offer.title} has been rejected`,
      variant: "destructive",
    });
    setSelectedOffer(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Offer Management</h1>
        <p className="text-muted-foreground">Review and validate partner offers</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Validation</CardTitle>
          <CardDescription>Offers awaiting your approval</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Partner</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOffers.map((offer) => (
                <TableRow key={offer.id}>
                  <TableCell className="font-mono text-sm">{offer.id}</TableCell>
                  <TableCell className="font-medium">{offer.title}</TableCell>
                  <TableCell>{offer.partner}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{offer.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-accent font-semibold">{offer.points} pts</span>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{offer.targetClasses.join(", ")}</div>
                      <div className="text-muted-foreground">{offer.city}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={offer.status === "validated" ? "default" : "secondary"}>
                      {offer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedOffer(offer)}
                    >
                      <Eye className="mr-1 h-3 w-3" />
                      Review
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={!!selectedOffer} onOpenChange={() => setSelectedOffer(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Review Offer</DialogTitle>
            <DialogDescription>Validate or reject this partner offer</DialogDescription>
          </DialogHeader>
          {selectedOffer && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Title</p>
                  <p className="text-lg font-semibold">{selectedOffer.title}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Partner</p>
                  <p className="text-lg">{selectedOffer.partner}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Category</p>
                  <Badge>{selectedOffer.category}</Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Points Reward</p>
                  <p className="text-lg text-accent font-semibold">{selectedOffer.points} points</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Target Classes</p>
                  <p>{selectedOffer.targetClasses.join(", ")}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">City</p>
                  <p>{selectedOffer.city}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Valid From</p>
                  <p>{selectedOffer.validFrom}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Valid Until</p>
                  <p>{selectedOffer.validUntil}</p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter className="gap-2">
            <Button variant="destructive" onClick={() => handleReject(selectedOffer)}>
              <XCircle className="mr-2 h-4 w-4" />
              Reject
            </Button>
            <Button onClick={() => handleValidate(selectedOffer)}>
              <CheckCircle className="mr-2 h-4 w-4" />
              Validate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminOffers;
