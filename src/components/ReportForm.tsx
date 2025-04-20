
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ReportForm = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented after Supabase integration
    console.log({ vehicleNumber, location, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <div className="space-y-2">
        <Label htmlFor="vehicleNumber">Vehicle Registration Number</Label>
        <Input
          id="vehicleNumber"
          placeholder="Enter vehicle number (e.g., KA01AB1234)"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Incident Location</Label>
        <Input
          id="location"
          placeholder="Enter the location of the incident"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Incident Description</Label>
        <Textarea
          id="description"
          placeholder="Describe the rash driving incident..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="evidence">Upload Evidence (Image/Video)</Label>
        <Input id="evidence" type="file" accept="image/*,video/*" />
      </div>

      <Button type="submit" className="w-full">Submit Report</Button>
    </form>
  );
};

export default ReportForm;
