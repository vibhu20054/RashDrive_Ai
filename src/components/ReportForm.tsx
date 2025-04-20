
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ReportForm = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ vehicleNumber, location, date, time });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-sm rounded-lg p-6 text-white">
      <div className="space-y-2">
        <Label htmlFor="vehicleNumber" className="text-gray-200">Vehicle Registration Number</Label>
        <Input
          id="vehicleNumber"
          placeholder="ENTER VEHICLE NUMBER (E.G., KA01AB1234)"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location" className="text-gray-200">Incident Address</Label>
        <Textarea
          id="location"
          placeholder="Enter the location of the incident"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date" className="text-gray-200">Incident Date</Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-white/10 border-white/20 text-white"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time" className="text-gray-200">Incident Time</Label>
          <Input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-white/10 border-white/20 text-white"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="evidence" className="text-gray-200">Upload Media</Label>
        <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
          <Input
            id="evidence"
            type="file"
            accept="image/*,video/*"
            className="hidden"
          />
          <label htmlFor="evidence" className="cursor-pointer">
            <div className="text-gray-400">
              Click to upload image/video (max 50MB)
            </div>
          </label>
        </div>
      </div>

      <Button type="submit" className="w-full bg-[#0FA0CE] hover:bg-[#0FA0CE]/90 text-white">
        Submit Report
      </Button>
    </form>
  );
};

export default ReportForm;
