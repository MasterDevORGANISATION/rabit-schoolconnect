import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Gift, TrendingUp, Award } from "lucide-react";

const StudentProfile = () => {
  const student = {
    name: "Youssef Benali",
    massar: "M123456789",
    school: "Lycée Mohammed V",
    class: "TC",
    city: "Casablanca",
    points: 450,
  };

  const transactions = [
    { id: 1, action: "Redeemed: 20% off Books", points: 50, date: "2024-01-15", type: "earned" },
    { id: 2, action: "Redeemed: Free Coffee", points: 75, date: "2024-01-12", type: "earned" },
    { id: 3, action: "Redeemed: Pizza Discount", points: 100, date: "2024-01-10", type: "earned" },
    { id: 4, action: "Redeemed: Movie Ticket", points: 150, date: "2024-01-08", type: "earned" },
    { id: 5, action: "Welcome Bonus", points: 75, date: "2024-01-01", type: "earned" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="pt-6">
          <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground">Manage your account and view your points</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  {student.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-3">
                <div>
                  <h2 className="text-2xl font-bold">{student.name}</h2>
                  <p className="text-sm text-muted-foreground">Massar: {student.massar}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{student.school}</Badge>
                  <Badge variant="outline">{student.class}</Badge>
                  <Badge variant="outline">{student.city}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <Gift className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{student.points}</div>
              <p className="text-xs text-muted-foreground mt-1">Lifetime earnings</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Offers Redeemed</CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{transactions.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Total redemptions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">225</div>
              <p className="text-xs text-muted-foreground mt-1">Points earned</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Points History</CardTitle>
            <CardDescription>Your recent transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div>
                    <p className="font-medium">{transaction.action}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-accent">+{transaction.points}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentProfile;
