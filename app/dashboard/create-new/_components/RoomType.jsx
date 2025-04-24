'use client'
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function RoomType({ selectedRoomType }) {
  const [roomType, setRoomType] = useState("");

  const handleChange = (value) => {
    setRoomType(value);
    if (selectedRoomType) {
      selectedRoomType(value);
    }
  };

  return (
    <div>
      <label className="text-slate-400">Select Room Type *</label>
      <Select value={roomType} onValueChange={handleChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Room Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Living Room">Living Room</SelectItem>
          <SelectItem value="Bedroom">Bedroom</SelectItem>
          <SelectItem value="Kitchen">Kitchen</SelectItem>
          <SelectItem value="Office">Office</SelectItem>
          <SelectItem value="Bathroom">Bathroom</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default RoomType;
