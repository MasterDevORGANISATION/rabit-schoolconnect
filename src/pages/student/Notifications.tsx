import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Star, TrendingUp, Award, CheckCircle } from "lucide-react";

const StudentNotifications = () => {
  const notifications = [
    {
      id: 1,
      type: "new_offer",
      title: "New offer just for you!",
      message: "20% off at Librairie Nationale - expires in 3 days",
      timestamp: "2 hours ago",
      read: false,
      icon: Gift,
      color: "text-primary",
    },
    {
      id: 2,
      type: "points",
      title: "Points earned!",
      message: "You earned 75 points from your recent redemption at Café Glacier",
      timestamp: "5 hours ago",
      read: false,
      icon: Award,
      color: "text-accent",
    },
    {
      id: 3,
      type: "trending",
      title: "Trending offer",
      message: "Student Gym Pass is popular this week - check it out!",
      timestamp: "1 day ago",
      read: true,
      icon: TrendingUp,
      color: "text-orange-500",
    },
    {
      id: 4,
      type: "milestone",
      title: "Milestone reached!",
      message: "Congratulations! You've reached 500 total points",
      timestamp: "2 days ago",
      read: true,
      icon: Star,
      color: "text-yellow-500",
    },
    {
      id: 5,
      type: "redeemed",
      title: "Offer redeemed",
      message: "You successfully redeemed 'Free Coffee with Meal' at Café Glacier",
      timestamp: "3 days ago",
      read: true,
      icon: CheckCircle,
      color: "text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="pt-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
            <p className="text-muted-foreground">Stay updated with your offers</p>
          </div>
          <Button variant="outline" size="sm">Mark all as read</Button>
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`hover:shadow-md transition-shadow ${
                !notification.read ? "border-l-4 border-l-primary" : ""
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 ${notification.color}`}>
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{notification.title}</h3>
                      {!notification.read && (
                        <Badge variant="default" className="h-5 px-2">New</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                  </div>
                  {!notification.read && (
                    <Button variant="ghost" size="sm">Mark as read</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {notifications.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No notifications yet</p>
            <p className="text-sm text-muted-foreground mt-2">We'll notify you when there's something new!</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StudentNotifications;
