
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success("Logged out successfully");
    } catch (error: any) {
      toast.error(error.message || "Error signing out");
    }
  };

  return (
    <nav className="bg-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-white">RashDrive AI</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-white hover:text-gray-200">Home</Link>
              <Link to="/file-a-report" className="text-white hover:text-gray-200">File a Report</Link>
              <Link to="/view-cases" className="text-white hover:text-gray-200">View Cases</Link>
              <Link to="/how-it-works" className="text-white hover:text-gray-200">How It Works</Link>
              <Link to="/contact-us" className="text-white hover:text-gray-200">Contact Us</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-white text-sm hidden md:inline-block">
                  {user.email}
                </span>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-gray-200" 
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" className="text-white hover:text-gray-200" asChild>
                  <Link to="/auth">Log In</Link>
                </Button>
                <Button className="bg-white text-red-500 hover:bg-gray-100" asChild>
                  <Link to="/auth?tab=signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
