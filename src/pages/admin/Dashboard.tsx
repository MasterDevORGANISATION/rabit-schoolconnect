import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, CheckCircle, TrendingUp } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "1,248",
      change: "+12.5%",
      icon: Users,
      color: "text-primary",
    },
    {
      title: "Active Offers",
      value: "87",
      change: "+5.2%",
      icon: FileText,
      color: "text-accent",
    },
    {
      title: "Validated Today",
      value: "23",
      change: "+8.1%",
      icon: CheckCircle,
      color: "text-success",
    },
    {
      title: "Engagement Rate",
      value: "68%",
      change: "+3.4%",
      icon: TrendingUp,
      color: "text-accent",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your platform metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-success">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "New offer validated", school: "Lycée Mohammed V", time: "5 min ago" },
                { action: "Student batch imported", school: "Université Hassan II", time: "12 min ago" },
                { action: "Partner registered", school: "McDonald's Casablanca", time: "1 hour ago" },
                { action: "Offer expired", school: "Cinema Megarama", time: "2 hours ago" },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-sm">{item.action}</p>
                    <p className="text-xs text-muted-foreground">{item.school}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Reviews</CardTitle>
            <CardDescription>Items requiring validation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "Offer", name: "50% off Pizza Hut", partner: "Pizza Hut", priority: "High" },
                { type: "Import", name: "Student batch #1847", partner: "Lycée Al Wahda", priority: "Medium" },
                { type: "Offer", name: "Free movie ticket", partner: "Cinema Megarama", priority: "Low" },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.partner}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.priority === "High" ? "bg-destructive/10 text-destructive" :
                    item.priority === "Medium" ? "bg-accent/10 text-accent" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {item.priority}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
