"use client";
import React, { useState } from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalReq from "./_components/AdditionalReq";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { storage } from "@/app/config/firebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useUser } from "@clerk/nextjs";
import CustomLoading from "./_components/CustomLoading";
import AiOutputDialog from "../_components/AiOutputDialog";
// import ReactCompareImage from "react-compare-image";
import CompareImage from 'react-compare-image'; // ✅ Proper way to import it


function CreateNew() {
  const { user } = useUser();

  const [formData, setFormData] = useState({
    roomType: "",
    designType: "",
    additionalReq: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [aiOutputImage, setAiOutputImage] = useState();
  const [openOutputDialog, setOpenOutputDialog] = useState(false);
  const [orgImage, setOrgImage] = useState();
  const [aiImageUrl, setAiImageUrl] = useState("");

  // Handle Input Change
  const onHandleInputChange = (value, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  // Save Image to Firebase
  const SaveRawImageToFirebase = async (imageFile) => {
    if (!imageFile) {
      alert("🚨 No image selected.");
      return null;
    }

    try {
      const fileName = `${Date.now()}_raw.png`;
      const imageRef = ref(storage, `room-redesign/${fileName}`);

      const blob = await imageFile.arrayBuffer();
      await uploadBytes(imageRef, blob);

      console.log("✅ File Uploaded Successfully");

      const downloadUrl = await getDownloadURL(imageRef);
      console.log("📌 Download URL:", downloadUrl);
      setOrgImage(downloadUrl);
      return downloadUrl;
    } catch (error) {
      console.error("🔥 Firebase Upload Error:", error.message);
      alert("❌ Image upload failed. Check console for details.");
      return null;
    }
  };

  // Generate AI Image
  const GenerateAiImage = async () => {
    if (!formData.image) {
      alert("🚨 Please upload an image before generating.");
      return;
    }

    setLoading(true);
    let result = null;

    try {
      const rawImageUrl = await SaveRawImageToFirebase(formData.image);

      if (!rawImageUrl) {
        alert("❌ Error uploading image. Try again.");
        setLoading(false);
        return;
      }

      result = await axios.post("/api/redesign-room", {
        imageUrl: rawImageUrl,
        roomType: formData?.roomType,
        designType: formData?.designType,
        additionalReq: formData?.additionalReq,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      });

      setAiImageUrl(result.data.aiImageUrl);
      console.log("✅ AI Image Generated:", result.data);
    } catch (error) {
      console.error("🔥 Error generating AI image:", error);
      alert("❌ Failed to generate AI image. Check console for details.");
    } finally {
      const aiOutput = result?.data?.result;
      if (aiOutput) {
        setAiOutputImage(aiOutput);
        setOpenOutputDialog(true);
      }
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="font-bold text-3xl text-purple-600 text-center">
        Experience the Magic of AI Remodeling
      </h2>
      <p className="text-center text-gray-500 w-full">
        Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        {/* Image Upload Section */}
        <div className="flex justify-center">
  <ImageSelection selectedImage={(file) => onHandleInputChange(file, "image")} />
</div>



        {/* Form Inputs */}
        <div className="flex flex-col gap-6">
          <RoomType selectedRoomType={(value) => onHandleInputChange(value, "roomType")} />
          <DesignType selectedDesignType={(value) => onHandleInputChange(value, "designType")} />
          <AdditionalReq AdditonalRequirementInput={(value) => onHandleInputChange(value, "additionalReq")} />

          <Button
            className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-all"
            onClick={GenerateAiImage}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate"}
          </Button>
          <p className="text-sm text-gray-400 mb-6">
            NOTE: 1 Credit will be used to redesign your room.
          </p>
        </div>
      </div>

      {/* Loading Dialog */}
      <CustomLoading loading={loading} />
      <AiOutputDialog
        openDialog={openOutputDialog}
        closeDialog={() => setOpenOutputDialog(false)}
        orgImage={orgImage}
        aiImage={aiOutputImage}
      />

      {/* Before-After Comparison */}
      {orgImage && aiImageUrl && (
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold mb-4">Compare Original vs AI-Generated</h3>
          <div className="max-w-xl mx-auto shadow-lg rounded-lg overflow-hidden">
            <ReactCompareImage
              leftImage={orgImage}
              rightImage={aiImageUrl}
              leftImageLabel="Original"
              rightImageLabel="AI Generated"
              sliderLineWidth={2}
              sliderLineColor="#7c3aed"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateNew;




// // "use client";

// // import React, { useState, useContext } from "react";
// // import ImageSelection from "./_components/ImageSelection";
// // import RoomType from "./_components/RoomType";
// // import DesignType from "./_components/DesignType";
// // import AdditionalReq from "./_components/AdditionalReq";
// // import { Button } from "@/components/ui/button";
// // import axios from "axios";
// // import { storage } from "@/app/config/firebaseConfig";
// // import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
// // import { useUser } from "@clerk/nextjs";
// // import CustomLoading from "./_components/CustomLoading";
// // import AiOutputDialog from "../_components/AiOutputDialog";
// // import ReactCompareImage from "react-compare-image";

// // import { UserDetailContext } from "@/app/_context/UserDetailContext";
// // import { db } from "@/app/config/db";
// // import { Users } from "@/app/config/schema"; // Ensure your `Users` table schema is defined here

// // function CreateNew() {
// //   const { user } = useUser();
// //   const { userDetail, setUserDetail } = useContext(UserDetailContext);

// //   const [formData, setFormData] = useState({
// //     roomType: "",
// //     designType: "",
// //     additionalReq: "",
// //     image: null,
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [aiOutputImage, setAiOutputImage] = useState();
// //   const [openOutputDialog, setOpenOutputDialog] = useState(false);
// //   const [orgImage, setOrgImage] = useState();
// //   const [aiImageUrl, setAiImageUrl] = useState("");

// //   const onHandleInputChange = (value, fieldName) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [fieldName]: value,
// //     }));
// //   };

// //   const SaveRawImageToFirebase = async (imageFile) => {
// //     if (!imageFile) {
// //       alert("🚨 No image selected.");
// //       return null;
// //     }

// //     try {
// //       const fileName = `${Date.now()}_raw.png`;
// //       const imageRef = ref(storage, `room-redesign/${fileName}`);
// //       const blob = await imageFile.arrayBuffer();
// //       await uploadBytes(imageRef, blob);
// //       const downloadUrl = await getDownloadURL(imageRef);
// //       setOrgImage(downloadUrl);
// //       return downloadUrl;
// //     } catch (error) {
// //       console.error("🔥 Firebase Upload Error:", error.message);
// //       alert("❌ Image upload failed.");
// //       return null;
// //     }
// //   };

// //   const updateUserCredits = async () => {
// //     try {
// //       const result = await db
// //         .update(Users)
// //         .set({ credits: userDetail - 1 })
// //         .where(Users.email.eq(user?.primaryEmailAddress?.emailAddress))
// //         .returning({ id: Users.id });

// //       if (result.length > 0) {
// //         setUserDetail(userDetail - 1);
// //         return result[0].id;
// //       }
// //     } catch (err) {
// //       console.error("❌ Error updating user credits:", err);
// //       return null;
// //     }
// //   };

// //   const GenerateAiImage = async () => {
// //     if (!formData.image) {
// //       alert("🚨 Please upload an image before generating.");
// //       return;
// //     }

// //     setLoading(true);
// //     let result = null;

// //     try {
// //       const rawImageUrl = await SaveRawImageToFirebase(formData.image);
// //       if (!rawImageUrl) {
// //         alert("❌ Error uploading image.");
// //         setLoading(false);
// //         return;
// //       }

// //       const creditUsed = await updateUserCredits();
// //       if (!creditUsed) {
// //         alert("❌ Not enough credits or error deducting credits.");
// //         setLoading(false);
// //         return;
// //       }

// //       result = await axios.post("/api/redesign-room", {
// //         imageUrl: rawImageUrl,
// //         roomType: formData?.roomType,
// //         designType: formData?.designType,
// //         additionalReq: formData?.additionalReq,
// //         userEmail: user?.primaryEmailAddress?.emailAddress,
// //       });

// //       setAiImageUrl(result.data.aiImageUrl);
// //     } catch (error) {
// //       console.error("🔥 Error generating AI image:", error);
// //       alert("❌ Failed to generate AI image.");
// //     } finally {
// //       const aiOutput = result?.data?.result;
// //       if (aiOutput) {
// //         setAiOutputImage(aiOutput);
// //         setOpenOutputDialog(true);
// //       }
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
// //       <h2 className="font-bold text-3xl text-purple-600 text-center">
// //         Experience the Magic of AI Remodeling
// //       </h2>
// //       <p className="text-center text-gray-500">
// //         Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment.
// //       </p>

// //       <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
// //         <div className="flex justify-center">
// //           <ImageSelection selectedImage={(file) => onHandleInputChange(file, "image")} />
// //         </div>

// //         <div className="flex flex-col gap-6">
// //           <RoomType selectedRoomType={(value) => onHandleInputChange(value, "roomType")} />
// //           <DesignType selectedDesignType={(value) => onHandleInputChange(value, "designType")} />
// //           <AdditionalReq AdditonalRequirementInput={(value) => onHandleInputChange(value, "additionalReq")} />

// //           <Button
// //             className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-all"
// //             onClick={GenerateAiImage}
// //             disabled={loading}
// //           >
// //             {loading ? "Generating..." : "Generate"}
// //           </Button>
// //           <p className="text-sm text-gray-400 mb-6">
// //             NOTE: 1 Credit will be used to redesign your room.
// //           </p>
// //         </div>
// //       </div>

// //       <CustomLoading loading={loading} />
// //       <AiOutputDialog
// //         openDialog={openOutputDialog}
// //         closeDialog={() => setOpenOutputDialog(false)}
// //         orgImage={orgImage}
// //         aiImage={aiOutputImage}
// //       />

// //       {orgImage && aiImageUrl && (
// //         <div className="mt-10 text-center">
// //           <h3 className="text-lg font-semibold mb-4">Compare Original vs AI-Generated</h3>
// //           <div className="max-w-xl mx-auto shadow-lg rounded-lg overflow-hidden">
// //             <ReactCompareImage
// //               leftImage={orgImage}
// //               rightImage={aiImageUrl}
// //               leftImageLabel="Original"
// //               rightImageLabel="AI Generated"
// //               sliderLineWidth={2}
// //               sliderLineColor="#7c3aed"
// //             />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default CreateNew;


// "use client";

// import React, { useState, useContext } from "react";
// import ImageSelection from "./_components/ImageSelection";
// import RoomType from "./_components/RoomType";
// import DesignType from "./_components/DesignType";
// import AdditionalReq from "./_components/AdditionalReq";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { storage } from "@/app/config/firebaseConfig";
// import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
// import { useUser } from "@clerk/nextjs";
// import CustomLoading from "./_components/CustomLoading";
// import AiOutputDialog from "../_components/AiOutputDialog";
// import ReactCompareImage from "react-compare-image";

// import { UserDetailContext } from "@/app/_context/UserDetailContext";
// import { db } from "@/app/config/db";
// import { Users } from "@/app/config/schema"; // Ensure your `Users` table schema is defined here

// function CreateNew() {
//   const { user } = useUser();
//   const { userDetail, setUserDetail } = useContext(UserDetailContext);

//   const [formData, setFormData] = useState({
//     roomType: "",
//     designType: "",
//     additionalReq: "",
//     image: null,
//   });

//   const [loading, setLoading] = useState(false);
//   const [aiOutputImage, setAiOutputImage] = useState();
//   const [openOutputDialog, setOpenOutputDialog] = useState(false);
//   const [orgImage, setOrgImage] = useState();
//   const [aiImageUrl, setAiImageUrl] = useState("");

//   const onHandleInputChange = (value, fieldName) => {
//     setFormData((prev) => ({
//       ...prev,
//       [fieldName]: value,
//     }));
//   };

//   const SaveRawImageToFirebase = async (imageFile) => {
//     if (!imageFile) {
//       alert("🚨 No image selected.");
//       return null;
//     }

//     try {
//       const fileName = `${Date.now()}_raw.png`;
//       const imageRef = ref(storage, `room-redesign/${fileName}`);
//       const blob = await imageFile.arrayBuffer();
//       await uploadBytes(imageRef, blob);
//       const downloadUrl = await getDownloadURL(imageRef);
//       setOrgImage(downloadUrl);
//       return downloadUrl;
//     } catch (error) {
//       console.error("🔥 Firebase Upload Error:", error.message);
//       alert("❌ Image upload failed.");
//       return null;
//     }
//   };

//   const updateUserCredits = async () => {
//     try {
//       const result = await db
//         .update(Users)
//         .set({ credits: userDetail.credits - 1 }) // Ensure credits are correctly reduced
//         .where(Users.email.equals(user?.primaryEmailAddress?.emailAddress)) // Fixed equality check
//         .returning({ id: Users.id });

//       if (result.length > 0) {
//         setUserDetail((prevDetail) => ({ ...prevDetail, credits: prevDetail.credits - 1 }));
//         return result[0].id;
//       }
//     } catch (err) {
//       console.error("❌ Error updating user credits:", err);
//       return null;
//     }
//   };

//   const GenerateAiImage = async () => {
//     if (!formData.image) {
//       alert("🚨 Please upload an image before generating.");
//       return;
//     }

//     setLoading(true);
//     let result = null;

//     try {
//       const rawImageUrl = await SaveRawImageToFirebase(formData.image);
//       if (!rawImageUrl) {
//         alert("❌ Error uploading image.");
//         setLoading(false);
//         return;
//       }

//       const creditUsed = await updateUserCredits();
//       if (!creditUsed) {
//         alert("❌ Not enough credits or error deducting credits.");
//         setLoading(false);
//         return;
//       }

//       result = await axios.post("/api/redesign-room", {
//         imageUrl: rawImageUrl,
//         roomType: formData?.roomType,
//         designType: formData?.designType,
//         additionalReq: formData?.additionalReq,
//         userEmail: user?.primaryEmailAddress?.emailAddress,
//       });

//       setAiImageUrl(result.data.aiImageUrl);
//     } catch (error) {
//       console.error("🔥 Error generating AI image:", error);
//       alert("❌ Failed to generate AI image.");
//     } finally {
//       const aiOutput = result?.data?.result;
//       if (aiOutput) {
//         setAiOutputImage(aiOutput);
//         setOpenOutputDialog(true);
//       }
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="font-bold text-3xl text-purple-600 text-center">
//         Experience the Magic of AI Remodeling
//       </h2>
//       <p className="text-center text-gray-500">
//         Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
//         <div className="flex justify-center">
//           <ImageSelection selectedImage={(file) => onHandleInputChange(file, "image")} />
//         </div>

//         <div className="flex flex-col gap-6">
//           <RoomType selectedRoomType={(value) => onHandleInputChange(value, "roomType")} />
//           <DesignType selectedDesignType={(value) => onHandleInputChange(value, "designType")} />
//           <AdditionalReq AdditonalRequirementInput={(value) => onHandleInputChange(value, "additionalReq")} />

//           <Button
//             className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-all"
//             onClick={GenerateAiImage}
//             disabled={loading}
//           >
//             {loading ? "Generating..." : "Generate"}
//           </Button>
//           <p className="text-sm text-gray-400 mb-6">
//             NOTE: 1 Credit will be used to redesign your room.
//           </p>
//         </div>
//       </div>

//       <CustomLoading loading={loading} />
//       <AiOutputDialog
//         openDialog={openOutputDialog}
//         closeDialog={() => setOpenOutputDialog(false)}
//         orgImage={orgImage}
//         aiImage={aiOutputImage}
//       />

//       {orgImage && aiImageUrl && (
//         <div className="mt-10 text-center">
//           <h3 className="text-lg font-semibold mb-4">Compare Original vs AI-Generated</h3>
//           <div className="max-w-xl mx-auto shadow-lg rounded-lg overflow-hidden">
//             <ReactCompareImage
//               leftImage={orgImage}
//               rightImage={aiImageUrl}
//               leftImageLabel="Original"
//               rightImageLabel="AI Generated"
//               sliderLineWidth={2}
//               sliderLineColor="#7c3aed"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CreateNew;
