
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ReportForm from "@/components/ReportForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Help Make Our Roads Safer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Report rash driving incidents easily and contribute to community safety.
            Upload evidence, and help identify dangerous driving behaviors.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button asChild>
            <Link to="/report">Report Incident</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/how-it-works">How It Works</Link>
          </Button>
        </div>

        <ReportForm />
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
