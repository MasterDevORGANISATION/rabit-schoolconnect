import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Bell, Lock, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PartnerSettings = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been updated successfully.",
    });
  };

  const handlePasswordUpdate = () => {
    toast({
      title: "Password updated",
      description: "Your password has been changed successfully.",
    });
  };

  const handleEnable2FA = () => {
    toast({
      title: "2FA Enabled",
      description: "Two-factor authentication has been enabled for your account.",
    });
  };
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your partner account settings</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <CardTitle>Business Information</CardTitle>
            </div>
            <CardDescription>Update your business details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="business-name">Business Name</Label>
              <Input id="business-name" defaultValue="Librairie Nationale" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business-email">Business Email</Label>
              <Input id="business-email" type="email" defaultValue="contact@librairie.ma" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business-phone">Phone Number</Label>
              <Input id="business-phone" type="tel" defaultValue="+212 5XX-XXXXXX" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business-address">Business Address</Label>
              <Textarea
                id="business-address"
                defaultValue="123 Rue Mohammed V, Casablanca, Morocco"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business-description">Business Description</Label>
              <Textarea
                id="business-description"
                defaultValue="Leading bookstore in Morocco, serving students since 1995"
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              <CardTitle>Notification Preferences</CardTitle>
            </div>
            <CardDescription>Choose what notifications you want to receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Offer Performance Updates</Label>
                <p className="text-sm text-muted-foreground">Daily summary of your offer performance</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Student Redemptions</Label>
                <p className="text-sm text-muted-foreground">Real-time notifications when students redeem</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Offer Validation Status</Label>
                <p className="text-sm text-muted-foreground">Get notified about offer approval/rejection</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Weekly Analytics Report</Label>
                <p className="text-sm text-muted-foreground">Weekly performance summary via email</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              <CardTitle>Security</CardTitle>
            </div>
            <CardDescription>Manage your account security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button variant="outline" size="sm" onClick={handlePasswordUpdate}>Update Password</Button>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Button variant="outline" size="sm" onClick={handleEnable2FA}>Enable</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <CardTitle>Billing & Subscription</CardTitle>
            </div>
            <CardDescription>Manage your subscription and payment methods</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-muted/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Current Plan: Business</p>
                  <p className="text-sm text-muted-foreground">Unlimited offers • Advanced analytics</p>
                </div>
                <Button variant="outline" size="sm">Upgrade</Button>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Payment Method</Label>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm">•••• •••• •••• 4242</span>
                <Button variant="ghost" size="sm">Update</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default PartnerSettings;
