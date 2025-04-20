
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ViewCases = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" className="text-gray-900" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90" asChild>
            <Link to="/file-a-report">Report New Incident</Link>
          </Button>
        </div>

        <h1 className="text-4xl font-bold text-[#ea384c] mb-12 tracking-tight">
          Complaints Dashboard
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl text-[#ea384c] mb-4 flex items-center gap-2">
              <span className="text-yellow-500">⌛</span> 
              Pending Complaints
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-900">Complaint ID</TableHead>
                    <TableHead className="text-gray-900">Vehicle Number</TableHead>
                    <TableHead className="text-gray-900">Date</TableHead>
                    <TableHead className="text-gray-900">Location</TableHead>
                    <TableHead className="text-gray-900">Status</TableHead>
                    <TableHead className="text-gray-900">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-gray-900">1</TableCell>
                    <TableCell className="text-gray-900">KA01AB1234</TableCell>
                    <TableCell className="text-gray-900">2024-04-18</TableCell>
                    <TableCell className="text-gray-900">Bangalore</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-500">
                        ⌛ Pending Analysis
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-[#ea384c] hover:text-[#ea384c]/90">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-[#ea384c] mb-4 flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Resolved Complaints
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-900">Complaint ID</TableHead>
                    <TableHead className="text-gray-900">Vehicle Number</TableHead>
                    <TableHead className="text-gray-900">Date</TableHead>
                    <TableHead className="text-gray-900">Location</TableHead>
                    <TableHead className="text-gray-900">Status</TableHead>
                    <TableHead className="text-gray-900">Police Action</TableHead>
                    <TableHead className="text-gray-900">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-gray-900">2</TableCell>
                    <TableCell className="text-gray-900">MH02CD5678</TableCell>
                    <TableCell className="text-gray-900">2024-04-17</TableCell>
                    <TableCell className="text-gray-900">Mumbai</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-green-500/20 text-green-500">
                        ✓ Resolved
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-blue-500/20 text-blue-500">
                        Fine Issued
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-[#ea384c] hover:text-[#ea384c]/90">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCases;

