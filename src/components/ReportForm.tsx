
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ReportForm = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ vehicleNumber, location, message });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="vehicleNumber" className="text-gray-900">Vehicle Number Plate</Label>
        <Input
          id="vehicleNumber"
          placeholder="Enter vehicle number (e.g., TN 22 BB 0001)"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          className="border-[#ea384c] focus-visible:ring-[#ea384c]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location" className="text-gray-900">Locality</Label>
        <Input
          id="location"
          placeholder="Enter the location of the incident"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border-[#ea384c] focus-visible:ring-[#ea384c]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="evidence" className="text-gray-900">Upload Photo/Video</Label>
        <div className="border-2 border-dashed border-[#ea384c] rounded-lg p-8 text-center">
          <Input
            id="evidence"
            type="file"
            accept="image/*,video/*"
            className="hidden"
          />
          <label htmlFor="evidence" className="cursor-pointer">
            <div className="text-gray-500">
              (Drop and share)
            </div>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-900">Additional Message (Optional)</Label>
        <Textarea
          id="message"
          placeholder="Add a short description of the incident"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border-[#ea384c] focus-visible:ring-[#ea384c] min-h-[100px]"
        />
      </div>

      <Button type="submit" className="w-full bg-[#ea384c] hover:bg-[#ea384c]/90 text-white rounded-lg py-6 text-lg">
        Submit Complaint
      </Button>
    </form>
  );
};

export default ReportForm;
