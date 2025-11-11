import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, User, LogOut, Gift, Bell, Bookmark } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const StudentLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gift className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-bold text-primary">Rabit</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/student">
              <Button
                variant={location.pathname === "/student" ? "default" : "ghost"}
                size="sm"
              >
                <Home className="h-4 w-4 mr-2" />
                Feed
              </Button>
            </NavLink>
            <NavLink to="/student/saved">
              <Button
                variant={location.pathname === "/student/saved" ? "default" : "ghost"}
                size="sm"
              >
                <Bookmark className="h-4 w-4 mr-2" />
                Saved
              </Button>
            </NavLink>
            <NavLink to="/student/notifications">
              <Button
                variant={location.pathname === "/student/notifications" ? "default" : "ghost"}
                size="sm"
              >
                <Bell className="h-4 w-4 mr-2" />
                Alerts
              </Button>
            </NavLink>
            <NavLink to="/student/profile">
              <Button
                variant={location.pathname === "/student/profile" ? "default" : "ghost"}
                size="sm"
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </NavLink>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <nav className="flex md:hidden items-center gap-1">
            <NavLink to="/student">
              <Button
                variant={location.pathname === "/student" ? "default" : "ghost"}
                size="icon"
              >
                <Home className="h-4 w-4" />
              </Button>
            </NavLink>
            <NavLink to="/student/saved">
              <Button
                variant={location.pathname === "/student/saved" ? "default" : "ghost"}
                size="icon"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </NavLink>
            <NavLink to="/student/notifications">
              <Button
                variant={location.pathname === "/student/notifications" ? "default" : "ghost"}
                size="icon"
              >
                <Bell className="h-4 w-4" />
              </Button>
            </NavLink>
            <NavLink to="/student/profile">
              <Button
                variant={location.pathname === "/student/profile" ? "default" : "ghost"}
                size="icon"
              >
                <User className="h-4 w-4" />
              </Button>
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;
