// "use client";

// import { Button } from "@/components/ui/button";
// import { useUser } from "@clerk/nextjs";
// import React, { useEffect, useState } from "react";
// import EmptyState from "./EmptyState";
// import Link from "next/link";
// import { AiGeneratedImage } from "@/app/config/schema";
// import { eq } from "drizzle-orm";

// function Listing() {
//     const { user } = useUser(); // ✅ Hook correctly called
//     const [userRoomList, setUserRoomList] = useState([]); // ✅ Correct useState syntax

//     useEffect(()=>{
//         user&&GetUserRoomList()

// ,[user]})

//     const GetUserRoomList=async()=>{
//         const result=await db.select().from(AiGeneratedImage)
//         .where(eq(AiGeneratedImage.userEmail,user?.primaryEmailAddress?.emailAddress))

//         console.log(result);
//     }

//     return (
//         <div>
//             <div className="flex items-center justify-between">
//                 <h2 className="font-bold text-3xl">Hello, {user?.fullName || "Guest"}</h2>
//                 <Link href={'/dashboard/create-new'}>
//                     <Button>+ Redesign Room</Button>
//                 </Link>
//             </div>

//             {userRoomList.length === 0 ? ( // ✅ Correct conditional check
//                 <EmptyState />
//             ) : (
//                 <div>
//                     {/* Room Listings will be shown here */}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Listing;





"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import EmptyState from "./EmptyState";
import Link from "next/link";
import { db } from "@/app/config/db"; // ✅ Make sure this is correct
import { AiGeneratedImage } from "@/app/config/schema";
import { eq } from "drizzle-orm";
import RoomDesignCard from "./RoomDesignCard";

function Listing() {
    const { user } = useUser();
    const [userRoomList, setUserRoomList] = useState([]);

    useEffect(() => {
        if (user) {
            GetUserRoomList();
        }
    }, [user]);

    const GetUserRoomList = async () => {
        try {
            const result = await db
                .select()
                .from(AiGeneratedImage)
                .where(eq(AiGeneratedImage.userEmail, user?.primaryEmailAddress?.emailAddress));

            setUserRoomList(result);
            console.log(result);
        } catch (error) {
            console.error("Failed to fetch user room list:", error);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-3xl">Hello, {user?.fullName || "Guest"}</h2>
                <Link href={'/dashboard/create-new'}>
                    <Button>+ Redesign Room</Button>
                </Link>
            </div>

            {userRoomList.length === 0 ? (
                <EmptyState />
            ) : (
                <div className="mt-10">
                    <h2 className="font-medium text-purple-500 text-xl mb-6">AI Room Studio</h2>


                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Room Listings will be shown here */}
                    {userRoomList.map((room,index)=>(
                        <RoomDesignCard key={index} room={room}/>

                    ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Listing;
