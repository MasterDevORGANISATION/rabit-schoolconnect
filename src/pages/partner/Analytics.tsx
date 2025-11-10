import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Eye, Award, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PartnerAnalytics = () => {
  const stats = [
    {
      title: "Total Views",
      value: "12,453",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
    },
    {
      title: "Total Clicks",
      value: "3,241",
      change: "+8.2%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Redemptions",
      value: "487",
      change: "+15.3%",
      trend: "up",
      icon: Award,
    },
    {
      title: "Conversion Rate",
      value: "15.0%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
    },
  ];

  const topOffers = [
    { title: "20% off on Books", views: 4320, clicks: 1120, redemptions: 278 },
    { title: "Free Coffee with Meal", views: 3890, clicks: 980, redemptions: 165 },
    { title: "Student Gym Pass - 50% off", views: 2450, clicks: 720, redemptions: 44 },
  ];

  const weeklyData = [
    { day: "Mon", views: 1820, clicks: 420, redemptions: 67 },
    { day: "Tue", views: 2100, clicks: 510, redemptions: 78 },
    { day: "Wed", views: 1950, clicks: 470, redemptions: 71 },
    { day: "Thu", views: 2300, clicks: 580, redemptions: 89 },
    { day: "Fri", views: 2650, clicks: 640, redemptions: 102 },
    { day: "Sat", views: 1890, clicks: 380, redemptions: 54 },
    { day: "Sun", views: 1540, clicks: 241, redemptions: 26 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track your offer performance</p>
        </div>
        <Select defaultValue="7days">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="year">This year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1">{stat.change} from last period</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Performance</CardTitle>
          <CardDescription>Views, clicks, and redemptions over the past week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyData.map((day) => (
              <div key={day.day} className="flex items-center gap-4">
                <div className="w-12 text-sm font-medium text-muted-foreground">{day.day}</div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-8 bg-primary/20 rounded-md relative overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-md"
                        style={{ width: `${(day.views / 2650) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium w-16 text-right">{day.views}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-6 bg-accent/20 rounded-md relative overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-md"
                        style={{ width: `${(day.clicks / 640) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-16 text-right">{day.clicks} clicks</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Offers</CardTitle>
          <CardDescription>Your most successful offers this period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topOffers.map((offer, index) => (
              <div key={offer.title} className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{offer.title}</h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{offer.views.toLocaleString()} views</span>
                    <span>•</span>
                    <span>{offer.clicks.toLocaleString()} clicks</span>
                    <span>•</span>
                    <span>{offer.redemptions} redemptions</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {((offer.redemptions / offer.clicks) * 100).toFixed(1)}%
                  </div>
                  <div className="text-xs text-muted-foreground">conversion</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PartnerAnalytics;
