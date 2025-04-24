// "use client";
// import React, { useContext } from "react";
// import Image from "next/image";
// import { UserButton } from "@clerk/nextjs";
// import { UserDetailContext } from "@/app/_context/UserDetailContext";
// import { Button } from "@/components/ui/button"; 

// function Header() {
//   const { userDetail } = useContext(UserDetailContext) || {}; 

//   return (
//     <div className="p-5 shadow-sm flex justify-between items-center">
//       {/* Left Side - Logo and Title */}
//       <div className="flex gap-2 items-center">
//         <Image src="/logo.svg" width={40} height={40} alt="Logo" />
//         <h2 className="font-bold text-lg">AI Room Design</h2>
//       </div>

//       {/* Buy More Credits Button - Centered */}
//       <div className="flex-1 flex justify-center">
//         <Button variant="ghost" className="rounded-full text-purple-600">
//           Buy More Credits
//         </Button>
//       </div>

//       {/* Right Side - Credits and User Button */}
//       <div className="flex gap-7 items-center">
//         <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
//           <Image src="/star.png" width={20} height={20} alt="Star" />
//           <h2>{userDetail?.credits ?? 0}</h2>
//         </div>
//         <UserButton />
//       </div>
//     </div>
//   );
// }

// export default Header;


"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";  // Import the useRouter hook

function Header() {
  const { userDetail } = useContext(UserDetailContext) || {};
  const router = useRouter(); // Initialize router

  // Function to handle navigation to the Buy Credits page
  const handleBuyCreditsClick = () => {
    router.push("/dashboard/buy-credits"); // Navigate to the Buy Credits page
  };

  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      {/* Left Side - Logo and Title */}
      <div className="flex gap-2 items-center">
        <Image src="/logo.svg" width={40} height={40} alt="Logo" />
        <h2 className="font-bold text-lg">AI Room Design</h2>
      </div>

      {/* Buy More Credits Button - Centered */}
      <div className="flex-1 flex justify-center">
        <Button
          variant="ghost"
          className="rounded-full text-purple-600"
          onClick={handleBuyCreditsClick}  // Call the function on click
        >
          Buy More Credits
        </Button>
      </div>

      {/* Right Side - Credits and User Button */}
      <div className="flex gap-7 items-center">
        <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
          <Image src="/star.png" width={20} height={20} alt="Star" />
          <h2>{userDetail?.credits ?? 0}</h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
