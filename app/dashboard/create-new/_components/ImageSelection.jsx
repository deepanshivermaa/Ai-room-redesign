// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// function ImageSelection({ selectedImage }) {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const onFileSelected = (event) => {
//     const selectedFile = event.target.files?.[0];
//     if (!selectedFile) return;

//     setFile(selectedFile);
//     const objectUrl = URL.createObjectURL(selectedFile);
//     setPreview(objectUrl);

//     // Ensure selectedImage is a function before calling it
//     if (typeof selectedImage === "function") {
//       selectedImage(selectedFile);
//     }
//   };

//   // Cleanup function to revoke object URL when component unmounts
//   useEffect(() => {
//     return () => {
//       if (preview) {
//         URL.revokeObjectURL(preview);
//       }
//     };
//   }, [preview]);

//   return (
//     <div className="ml-[-150px] text-left">
//       <label htmlFor="upload-image" className="font-medium text-gray-700">
//         Select Image of Your Room
//       </label>
//       <div className="mt-3 flex justify-start w-full">
//         <label htmlFor="upload-image" className="cursor-pointer">
//           <div
//             className={`w-[500px] h-[300px] border border-dotted rounded-xl flex items-center justify-center 
//                         bg-white hover:shadow-lg transition-all duration-300 ${
//                           file ? "border-gray-300" : "border-purple-700"
//                         }`}
//           >
//             {!preview ? (
//               <Image
//                 src="/imageupload.png"
//                 width={70}
//                 height={70}
//                 alt="Upload Icon"
//               />
//             ) : (
//               <Image
//                 src={preview}
//                 width={500}
//                 height={300}
//                 className="w-[500px] h-[300px] rounded-xl"
//                 alt="Uploaded Room Image"
//                 unoptimized
//               />
//             )}
//           </div>
//         </label>
//         <input
//           type="file"
//           accept="image/*"
//           id="upload-image"
//           hidden
//           onChange={onFileSelected}
//         />
//       </div>

//       {file && (
//         <p className="mt-3 text-sm text-gray-500 mb-6">
//           Selected file: {file.name}
//         </p>
//       )}
//     </div>
//   );
// }

// export default ImageSelection;



// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// function ImageSelection({ selectedImage }) {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const onFileSelected = (event) => {
//     const selectedFile = event.target.files?.[0];
//     if (!selectedFile) return;

//     setFile(selectedFile);
//     const objectUrl = URL.createObjectURL(selectedFile);
//     setPreview(objectUrl);

//     // Ensure selectedImage is a function before calling it
//     if (typeof selectedImage === "function") {
//       selectedImage(selectedFile);
//     }
//   };

//   // Cleanup function to revoke object URL when component unmounts
//   useEffect(() => {
//     return () => {
//       if (preview) {
//         URL.revokeObjectURL(preview);
//       }
//     };
//   }, [preview]);

//   return (
//     <div className="ml-[-150px] text-left">
//       <label htmlFor="upload-image" className="font-medium text-gray-700">
//         Select Image of Your Room
//       </label>
//       <div className="mt-3 flex justify-start w-full">
//         <label htmlFor="upload-image" className="cursor-pointer">
//           <div
//             className={`w-[500px] h-[300px] border border-dotted rounded-xl flex items-center justify-center 
//                         bg-white hover:shadow-lg transition-all duration-300 ${
//                           file ? "border-gray-300" : "border-purple-700"
//                         }`}
//           >
//             {!preview ? (
//               <div className="flex justify-center items-center w-full">
//                 <Image
//                   src="/imageupload.png"
//                   width={70}
//                   height={70}
//                   alt="Upload Icon"
//                 />
//               </div>
//             ) : (
//               <div className="px-10 py-4 flex justify-center items-center w-full h-full">
//                 <Image
//                   src={preview}
//                   width={400}
//                   height={250}
//                   className="w-auto h-auto max-w-full max-h-full rounded-xl object-contain"
//                   alt="Uploaded Room Image"
//                   unoptimized
//                 />
//               </div>
//             )}
//           </div>
//         </label>
//         <input
//           type="file"
//           accept="image/*"
//           id="upload-image"
//           hidden
//           onChange={onFileSelected}
//         />
//       </div>

//       {file && (
//         <p className="mt-3 text-sm text-gray-500 mb-6">
//           Selected file: {file.name}
//         </p>
//       )}
//     </div>
//   );
// }

// export default ImageSelection;


"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function ImageSelection({ selectedImage }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onFileSelected = (event) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    if (typeof selectedImage === "function") {
      selectedImage(selectedFile);
    }
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="ml-[-150px] text-left">
      <label htmlFor="upload-image" className="font-medium text-gray-700">
        Select Image of Your Room
      </label>
      <div className="mt-3 flex justify-start w-full">
        <label htmlFor="upload-image" className="cursor-pointer">
          <div
            className={`w-[500px] h-[300px] border border-dotted rounded-xl flex items-center justify-center 
                        bg-white hover:shadow-lg transition-all duration-300 ${
                          file ? "border-gray-300" : "border-purple-700"
                        }`}
          >
            {!preview ? (
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src="/imageupload.png"
                  width={70}
                  height={70}
                  alt="Upload Icon"
                />
              </div>
            ) : (
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={preview}
                  width={400}
                  height={300}
                  className="w-auto h-full object-cover rounded-xl"
                  alt="Uploaded Room Image"
                  unoptimized
                />
              </div>
            )}
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          hidden
          onChange={onFileSelected}
        />
      </div>

      {file && (
        <p className="mt-3 text-sm text-gray-500 mb-6">
          Selected file: {file.name}
        </p>
      )}
    </div>
  );
}

export default ImageSelection;
