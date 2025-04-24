import React, { useState } from "react";
import RoomType from "./RoomType";
import DesignType from "./DesignType";

function RoomSelection() {
  const [selectedRoomType, setSelectedRoomType] = useState("");
  
  return (
    <div className="flex flex-col gap-6">
      {/* Select Room Type */}
      <RoomType selectedRoomType={setSelectedRoomType} />
      
      {/* Select Interior Design Type */}
      <DesignType />
    </div>
  );
}

export default RoomSelection;
