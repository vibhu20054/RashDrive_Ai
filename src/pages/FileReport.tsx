
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ReportForm from "@/components/ReportForm";

const FileReport = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" className="text-white" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-8 text-center">
          Report a Rash Driving Incident
        </h1>
        
        <ReportForm />
      </div>
    </div>
  );
};

export default FileReport;
