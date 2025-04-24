// "use client"
// import { Button } from "@/components/ui/button";
// import React, {useState} from "react"

// function BuyCredits() {
//     const creditsOption=[
//         {
//             credits:5,
//             amount:0.99
//         },
//         {
//             credits:10,
//             amount:1.99
//         },
//         {
//             credits:25,
//             amount:3.99
//         },
//         {
//             credits:50,
//             amount:6.99
//         },
//         {
//             credits:100,
//             amount:9.99
//         }
//     ]

//     const [selectedOption,setSelectedOption]=useState([]);
// return (
//     <div>
//         <h2 className="font-bold text-2xl">Buy More Credits</h2>
//         <p>Unlock endless posibilities - Buy more credits and transfer your room with AI magic! </p>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//             {creditsOption.map((item,index)=>(
//             <div className={'flex flex-col gap-2 justify-center items-center
//             ${selectedOption?.credits==item.credits&&'border-purple-600'}
//              '
//             }
            
            
//             >

//             <h2 className="font-bold text-3xl">(item.credits)</h2>
//             <h2 className="font-medium text-xl">Credits</h2>

//             <Button className="w-full" onClick={()=>setSelectedOption(item)}></Button>
//             <h2 className="font-medium text-purple-500">${item.amount}</h2>
//             </div>
//             ))}

//         </div>
//     </div>
// )
// }


// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// export default function BuyCreditsPage() {
//   const creditsOption = [
//     { credits: 5, amount: 80 },
//     { credits: 10, amount: 150 },
//     { credits: 25, amount: 250 },
//     { credits: 50, amount: 499 },
//     { credits: 100, amount: 799 },
//   ];

//   const [selectedOption, setSelectedOption] = useState(null);

//   return (
//     <div className="p-6">
//       <motion.h2
//         initial={{ y: -10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.4 }}
//         className="font-bold text-3xl text-center mb-2 text-purple-700"
//       >
//         Buy More Credits
//       </motion.h2>
//       <motion.p
//         initial={{ y: -10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.1, duration: 0.4 }}
//         className="text-center text-gray-600 mb-6"
//       >
//         Unlock endless possibilities – Buy credits and redesign your room with AI magic!
//       </motion.p>

//       <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//         {creditsOption.map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className={`flex flex-col items-center justify-center border-2 rounded-xl p-4 shadow-md transition-all duration-300 ${
//               selectedOption?.credits === item.credits
//                 ? "border-purple-600 bg-purple-50"
//                 : "border-gray-200 bg-white"
//             }`}
//           >
//             <h2 className="font-extrabold text-4xl text-purple-700">{item.credits}</h2>
//             <h2 className="text-lg mb-2 text-gray-600">Credits</h2>

//             <Button
//               className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all"
//               onClick={() => setSelectedOption(item)}
//             >
//               {selectedOption?.credits === item.credits ? "Selected" : `Buy for ₹${item.amount}`}
//             </Button>

//             <h2 className="font-semibold text-green-600 mt-2">₹{item.amount}</h2>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { loadRazorpayScript } from "@/lib/razorpay";

// export default function BuyCreditsPage() {
//   const creditsOption = [
//     { credits: 5, amount: 80 },
//     { credits: 10, amount: 150 },
//     { credits: 25, amount: 250 },
//     { credits: 50, amount: 499 },
//     { credits: 100, amount: 799 },
//   ];

//   const [selectedOption, setSelectedOption] = useState(null);

//   const handlePayment = async (item) => {
//     const res = await loadRazorpayScript();

//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // ✅ set in .env.local
//       amount: item.amount * 100, // convert ₹ to paise
//       currency: "INR",
//       name: "AI Room Design",
//       description: `Buy ${item.credits} Credits`,
//       image: "/logo.svg",
//       handler: function (response) {
//         alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
//         // ✅ call backend here to store credits using response.razorpay_payment_id
//       },
//       prefill: {
//         name: "User",
//         email: "user@example.com", // dynamically set if available
//       },
//       theme: {
//         color: "#7e22ce",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="p-6">
//       <motion.h2
//         initial={{ y: -10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.4 }}
//         className="font-bold text-3xl text-center mb-2 text-purple-700"
//       >
//         Buy More Credits
//       </motion.h2>
//       <motion.p
//         initial={{ y: -10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.1, duration: 0.4 }}
//         className="text-center text-gray-600 mb-6"
//       >
//         Unlock endless possibilities – Buy credits and redesign your room with AI magic!
//       </motion.p>

//       <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//         {creditsOption.map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className={`flex flex-col items-center justify-center border-2 rounded-xl p-4 shadow-md transition-all duration-300 ${
//               selectedOption?.credits === item.credits
//                 ? "border-purple-600 bg-purple-50"
//                 : "border-gray-200 bg-white"
//             }`}
//           >
//             <h2 className="font-extrabold text-4xl text-purple-700">{item.credits}</h2>
//             <h2 className="text-lg mb-2 text-gray-600">Credits</h2>

//             <Button
//               className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all"
//               onClick={() => handlePayment(item)}
//             >
//               Buy for ₹{item.amount}
//             </Button>

//             <h2 className="font-semibold text-green-600 mt-2">₹{item.amount}</h2>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { loadRazorpayScript } from "@/lib/razorpay";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { useRouter } from "next/navigation";
import { db } from "@/app/config/db"; // hypothetical db import

export default function BuyCreditsPage() {
  const creditsOption = [
    { credits: 5, amount: 80 },
    { credits: 10, amount: 150 },
    { credits: 25, amount: 250 },
    { credits: 50, amount: 499 },
    { credits: 100, amount: 799 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const router = useRouter();

  const handlePayment = async (item) => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: item.amount * 100,
      currency: "INR",
      name: "AI Room Design",
      description: `Buy ${item.credits} Credits`,
      image: "/logo.svg",
      handler: async function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);

        // ✅ Simulated DB Update Logic
        try {
          const result = await db.update(users)
            .set({
              credits: userDetail?.credits + item.credits
            })
            .where({ id: userDetail?.id })
            .returning({ id: users.id });

          if (result) {
            setUserDetail(prev => ({
              ...prev,
              credits: prev.credits + item.credits
            }));
            router.push("/dashboard");
          }
        } catch (error) {
          console.error("Error updating credits:", error);
        }
      },
      prefill: {
        name: userDetail?.name || "User",
        email: userDetail?.email || "user@example.com",
      },
      theme: {
        color: "#7e22ce",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-6">
      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="font-bold text-3xl text-center mb-2 text-purple-700"
      >
        Buy More Credits
      </motion.h2>
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-center text-gray-600 mb-6"
      >
        Unlock endless possibilities – Buy credits and redesign your room with AI magic!
      </motion.p>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {creditsOption.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`flex flex-col items-center justify-center border-2 rounded-xl p-4 shadow-md transition-all duration-300 ${
              selectedOption?.credits === item.credits
                ? "border-purple-600 bg-purple-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <h2 className="font-extrabold text-4xl text-purple-700">{item.credits}</h2>
            <h2 className="text-lg mb-2 text-gray-600">Credits</h2>

            <Button
              className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all"
              onClick={() => handlePayment(item)}
            >
              Buy for ₹{item.amount}
            </Button>

            <h2 className="font-semibold text-green-600 mt-2">₹{item.amount}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
