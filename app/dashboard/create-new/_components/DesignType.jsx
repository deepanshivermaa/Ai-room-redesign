import React, { useState } from "react";
import Image from "next/image"; // ✅ Import Image from next/image

function DesignType({ selectedDesignType }) {
  const Designs = [
    { name: "Modern", image: "/modern.jpg" },
    { name: "Industrial", image: "/Industrial.jpg" },
    { name: "Bohemian", image: "/Bohemian.jpg" },
    { name: "Traditional", image: "/Traditional.jpg" },
    { name: "Rustic", image: "/Rustic.jpg" },
    { name: "Minimalist", image: "/Minimalist.jpg" }
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="mt-1">
      <label className="text-gray-500">Select Interior Design Type</label>
      <div className="grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Designs.map((design, index) => (
          <div 
            key={index} 
            onClick={() => {
              setSelectedOption(design.name);
              selectedDesignType(design.name);
            }} 
            className="text-center cursor-pointer"
          >
            <Image
              src={design.image}
              width={100}
              height={100}
              alt={design.name}
              className={`h-[70px] rounded-md border-gray-300 hover:scale-105 transition-all ${design.name === selectedOption ? 'border-2 border-purple-500 p-1' : ''}`}
            />
            <p className="text-sm mt-1">{design.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignType;
