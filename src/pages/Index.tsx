
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              "Report Rash Driving. Make Roads Safer."
            </h1>
            <p className="text-xl text-gray-600">
              Use AI to file instant complaints and track repeat offenders in your area.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <Link to="/file-a-report">Report Now</Link>
              </Button>
              <Button 
                className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <Link to="/how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src="/lovable-uploads/7537b203-8995-419a-af77-ab0b8fba4ca8.png"
              alt="Rash driving reporting illustration"
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} Rash Driving Detector. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;

