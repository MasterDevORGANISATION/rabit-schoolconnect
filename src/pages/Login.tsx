import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [userType, setUserType] = useState<"student" | "admin" | "partner">("student");

  const handleRequestOTP = () => {
    // Mock OTP request
    setOtpSent(true);
    toast({
      title: "OTP Sent",
      description: `Code sent to ${phone}. Demo code: 1234`,
    });
  };

  const handleLogin = () => {
    // Mock login - route based on user type
    if (otp === "1234") {
      toast({
        title: "Login Successful",
        description: `Welcome back!`,
      });
      
      // Route to appropriate dashboard
      if (userType === "admin") {
        navigate("/admin");
      } else if (userType === "partner") {
        navigate("/partner");
      } else {
        navigate("/student");
      }
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please enter the correct code",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Welcome to Rabit</CardTitle>
          <CardDescription className="text-center">
            Sign in to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={userType} onValueChange={(v) => setUserType(v as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
              <TabsTrigger value="partner">Partner</TabsTrigger>
            </TabsList>

            <TabsContent value="student" className="space-y-4 mt-4">
              <LoginForm
                phone={phone}
                setPhone={setPhone}
                otp={otp}
                setOtp={setOtp}
                otpSent={otpSent}
                onRequestOTP={handleRequestOTP}
                onLogin={handleLogin}
              />
            </TabsContent>

            <TabsContent value="admin" className="space-y-4 mt-4">
              <LoginForm
                phone={phone}
                setPhone={setPhone}
                otp={otp}
                setOtp={setOtp}
                otpSent={otpSent}
                onRequestOTP={handleRequestOTP}
                onLogin={handleLogin}
              />
            </TabsContent>

            <TabsContent value="partner" className="space-y-4 mt-4">
              <LoginForm
                phone={phone}
                setPhone={setPhone}
                otp={otp}
                setOtp={setOtp}
                otpSent={otpSent}
                onRequestOTP={handleRequestOTP}
                onLogin={handleLogin}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

interface LoginFormProps {
  phone: string;
  setPhone: (v: string) => void;
  otp: string;
  setOtp: (v: string) => void;
  otpSent: boolean;
  onRequestOTP: () => void;
  onLogin: () => void;
}

const LoginForm = ({ phone, setPhone, otp, setOtp, otpSent, onRequestOTP, onLogin }: LoginFormProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+212 6XX XXX XXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={otpSent}
        />
      </div>

      {!otpSent ? (
        <Button onClick={onRequestOTP} className="w-full" disabled={!phone}>
          Request OTP
        </Button>
      ) : (
        <>
          <div className="space-y-2">
            <Label htmlFor="otp">Enter OTP Code</Label>
            <Input
              id="otp"
              type="text"
              placeholder="1234"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={4}
            />
            <p className="text-sm text-muted-foreground">Demo code: 1234</p>
          </div>
          <Button onClick={onLogin} className="w-full" disabled={!otp}>
            Sign In
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setOtp("");
              onRequestOTP();
            }}
            className="w-full"
          >
            Resend Code
          </Button>
        </>
      )}
    </>
  );
};

export default Login;
