import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Admin pages
import AdminLayout from "./pages/admin/Layout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminImports from "./pages/admin/Imports";
import AdminOffers from "./pages/admin/Offers";
import AdminPartners from "./pages/admin/Partners";
import AdminSettings from "./pages/admin/Settings";

// Partner pages
import PartnerLayout from "./pages/partner/Layout";
import PartnerDashboard from "./pages/partner/Dashboard";
import PartnerCreateOffer from "./pages/partner/CreateOffer";
import PartnerOffers from "./pages/partner/Offers";
import PartnerAnalytics from "./pages/partner/Analytics";
import PartnerSettings from "./pages/partner/Settings";

// Student pages
import StudentLayout from "./pages/student/Layout";
import StudentFeed from "./pages/student/Feed";
import StudentProfile from "./pages/student/Profile";
import StudentNotifications from "./pages/student/Notifications";
import StudentSaved from "./pages/student/Saved";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="imports" element={<AdminImports />} />
            <Route path="offers" element={<AdminOffers />} />
            <Route path="partners" element={<AdminPartners />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Partner Routes */}
          <Route path="/partner" element={<PartnerLayout />}>
            <Route index element={<PartnerDashboard />} />
            <Route path="offers" element={<PartnerOffers />} />
            <Route path="offers/new" element={<PartnerCreateOffer />} />
            <Route path="analytics" element={<PartnerAnalytics />} />
            <Route path="settings" element={<PartnerSettings />} />
          </Route>

          {/* Student Routes */}
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<StudentFeed />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="notifications" element={<StudentNotifications />} />
            <Route path="saved" element={<StudentSaved />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
