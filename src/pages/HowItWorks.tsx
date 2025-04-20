
import { CheckCircle2, Brain, Bell, ShieldCheck, CheckSquare, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">How Rash Driving Detector Works</h1>
          <p className="mt-4 text-xl text-gray-600">
            Understanding the complaint lifecycle and what happens after you submit a report
          </p>
        </div>

        <div className="space-y-8">
          <StepCard
            icon={<CheckCircle2 className="w-8 h-8 text-blue-500" />}
            title="Acknowledgment & Complaint ID"
            description="Upon successful upload, receive immediate confirmation and a unique Complaint ID via email/SMS."
          />

          <StepCard
            icon={<Brain className="w-8 h-8 text-blue-500" />}
            title="Automated AI/ML Analysis"
            description="Our system analyzes your submission within 5 minutes, tracking vehicles and computing metrics."
          />

          <StepCard
            icon={<Bell className="w-8 h-8 text-blue-500" />}
            title="Initial Outcome & Notification"
            description="Receive notifications about the analysis results, whether it's 'No Issue' or 'Rash Driving Detected'."
          />

          <StepCard
            icon={<ShieldCheck className="w-8 h-8 text-blue-500" />}
            title="Police Review & Action"
            description="Local enforcement reviews evidence and takes appropriate action - issuing fines or requesting more information."
          />

          <StepCard
            icon={<CheckSquare className="w-8 h-8 text-blue-500" />}
            title="Case Closure"
            description="Once resolved, receive a final summary email with the outcome details."
          />

          <StepCard
            icon={<Activity className="w-8 h-8 text-blue-500" />}
            title="Real-time Updates"
            description="Track your complaint status in real-time through your dashboard. Get notified at every stage - from initial submission to final resolution."
          />
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

const StepCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="shrink-0">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
