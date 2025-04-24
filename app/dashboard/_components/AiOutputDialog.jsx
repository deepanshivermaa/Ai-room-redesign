// import React from 'react'
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
//   } from "@/components/ui/alert-dialog"
// import { Button } from '@/components/ui/button'
// import ReactBeforeSliderComponent from 'react-before-after-slider-component';
// import 'react-before-after-slider-component/dist/build.css';

  
// function AiOutputDialog({openDialog,closeDialog,orgIamge,aiImage}) {
//   return (
//     <AlertDialog open={openDialog}>
//     <AlertDialogContent>
//       <AlertDialogHeader>
//         <AlertDialogTitle>Result:</AlertDialogTitle>
//         <ReactBeforeSliderComponent
//             firstImage={{
//                 imageUrl:aiImage
//             }}
//             secondImage={{
//                 imageUrl:orgIamge
//             }}
//         />
//         <Button onClick={()=>closeDialog(false)}>Close</Button>
//       </AlertDialogHeader>
//     </AlertDialogContent>
//   </AlertDialog>
  
//   )
// }

// export default AiOutputDialog



// import React from 'react';
// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";
// import { Button } from '@/components/ui/button';
// import ReactBeforeSliderComponent from 'react-before-after-slider-component';
// import 'react-before-after-slider-component/dist/build.css';

// function AiOutputDialog({ openDialog, closeDialog, orgImage, aiImage }) {
//   if (!orgImage || !aiImage) return null;

//   return (
//     <AlertDialog open={openDialog}>
//       <AlertDialogContent className="max-w-3xl">
//         <AlertDialogHeader>
//           <AlertDialogTitle className="text-center mb-4">AI Remodeling Result</AlertDialogTitle>
//         </AlertDialogHeader>

//         <div className="w-full h-full">
//           <ReactBeforeSliderComponent
//             firstImage={{ imageUrl: aiImage }}
//             secondImage={{ imageUrl: orgImage }}
//             className="rounded-lg overflow-hidden"
//           />
//         </div>

//         <div className="flex justify-end mt-4">
//           <Button onClick={() => closeDialog(false)} className="bg-purple-600 hover:bg-purple-700 text-white">
//             Close
//           </Button>
//         </div>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

// export default AiOutputDialog;



import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function AiOutputDialog({ openDialog, closeDialog, orgImage, aiImage }) {
  if (!orgImage || !aiImage) return null;

  // Function to download the AI-generated image
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = aiImage; // AI-generated image URL
    link.download = "ai_generated_image.png"; // You can change the filename if needed
    link.click();
  };

  return (
    <AlertDialog open={openDialog}>
      <AlertDialogContent className="max-w-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center mb-4">AI Remodeling Result</AlertDialogTitle>
        </AlertDialogHeader>

        <div className="w-full h-full">
          <ReactBeforeSliderComponent
            firstImage={{ imageUrl: aiImage }}
            secondImage={{ imageUrl: orgImage }}
            className="rounded-lg overflow-hidden"
          />
        </div>

        <div className="flex justify-end mt-4 space-x-4">
          <Button onClick={() => closeDialog(false)} className="bg-purple-600 hover:bg-purple-700 text-white">
            Close
          </Button>
          <Button onClick={downloadImage} className="bg-green-600 hover:bg-green-700 text-white">
            Download AI Image
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AiOutputDialog;
