
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ReportForm from "@/components/ReportForm";

const FileReport = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" className="text-gray-900" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
        
        <h1 className="text-4xl font-bold text-[#ea384c] mb-12 tracking-tight">
          Complaint Quick Form
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="border-2 border-black rounded px-6 py-3 text-2xl font-mono">
                TN 22 BB 0001
              </div>
            </div>
            
            <div className="space-y-4 text-gray-900">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                📝 How to File a Report:
              </h2>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Enter the vehicle number of the offender (e.g., TN 22 BB 0001)</li>
                <li>Add the locality where the incident happened</li>
                <li>Upload photo/video evidence if available</li>
                <li>(Optional) Add a short message describing the incident</li>
              </ol>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm flex items-center gap-2">
                  ⚠️ Misuse of the platform may lead to account suspension or legal action.
                </p>
              </div>
            </div>
          </div>
          
          <ReportForm />
        </div>
      </div>
    </div>
  );
};

export default FileReport;
