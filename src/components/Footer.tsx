import { Rabbit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Rabbit className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Rabit</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Connecting students with opportunities through school-controlled, policy-driven personalization.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">For Schools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => navigate('/admin')} className="hover:text-primary transition-colors">Admin Portal</button></li>
              <li><button onClick={() => navigate('/admin/imports')} className="hover:text-primary transition-colors">Import Students</button></li>
              <li><button onClick={() => navigate('/admin')} className="hover:text-primary transition-colors">Analytics</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">For Partners</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => navigate('/partner/offers/new')} className="hover:text-primary transition-colors">Create Offers</button></li>
              <li><button onClick={() => navigate('/partner')} className="hover:text-primary transition-colors">Target Students</button></li>
              <li><button onClick={() => navigate('/partner/analytics')} className="hover:text-primary transition-colors">Track Engagement</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 Rabit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
