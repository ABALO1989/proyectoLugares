import React from "react";
import "./Avatar.css";

const Avatar = (props) => {
  return (
   /* <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>*/ 
     <div className='avatar'>
     <img
       src={props.image}
       alt={props.alt}
       
     />
   </div>
  );
};

export default Avatar;
