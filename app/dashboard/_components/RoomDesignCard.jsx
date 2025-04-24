// import React, { useState } from 'react'
// import ReactBeforeSliderComponent from 'react-before-after-slider-component';
// import 'react-before-after-slider-component/dist/build.css';
// import AiOutputDialog from './AiOutputDialog';

// function RoomDesignCard({ room }) {
//     const[openDialog,setOpenDialog]=useState(false);
//     const onClickHandler=()=>{
//         setOpenDialog(true)


//     }
//   return (
//     <div className='shadow-md rounded-md cursor-pointer' onClick={()=>onClickHandler()}>
    

//       {/* Add space below the name */}
//       <div style={{ marginBottom: '30px' }}></div> {/* Adjust this value to control the space */}

//       <ReactBeforeSliderComponent
//         firstImage={{
//           imageUrl: room?.aiImage
//         }}
//         secondImage={{
//           imageUrl: room?.orgImage
//         }}
//       />
//       <div className='p-4'>
//         <h2>🏡 Room Type : {room.roomType}</h2>
//         <h2>🎨 Design Type : {room.designType}</h2>


//       </div>
      
//       <AiOutputDialog aiImage={room.aiImage} orgImage={room.orgImage}
//       closeDialog={()=>setOpenDialog(false)}
//       openDialog={()=>openDialog}
//       />
//     </div>
//   )
// }

// export default RoomDesignCard;



import React, { useState } from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import AiOutputDialog from './AiOutputDialog';

function RoomDesignCard({ room }) {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div
      className='shadow-md rounded-md cursor-pointer'
      onClick={() => {
        if (!openDialog) setOpenDialog(true);
      }}
    >
      <div style={{ marginBottom: '30px' }}></div>

      <ReactBeforeSliderComponent
        firstImage={{ imageUrl: room?.aiImage }}
        secondImage={{ imageUrl: room?.orgImage }}
      />

      <div className='p-4'>
        <h2>🏡 Room Type : {room.roomType}</h2>
        <h2>🎨 Design Type : {room.designType}</h2>
      </div>

      {openDialog && (
        <AiOutputDialog
          aiImage={room.aiImage}
          orgImage={room.orgImage}
          closeDialog={() => setOpenDialog(false)}
          openDialog={openDialog}
        />
      )}
    </div>
  );
}

export default RoomDesignCard;

