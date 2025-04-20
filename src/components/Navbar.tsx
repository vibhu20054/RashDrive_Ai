
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <Button variant="ghost" className="text-white hover:text-gray-200" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button className="bg-white text-red-500 hover:bg-gray-100" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
