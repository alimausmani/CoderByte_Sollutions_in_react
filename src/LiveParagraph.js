import React from "react";
import { useState } from "react";

const LiveText =()=>{
    const [text ,setText]= useState('');
    const handleText = (e) =>{
        setText(e.target.value)
    }
    return(
        <>
        <input type="text" value={text} onChange={handleText}/>
        <p>{text}</p>
        </>

    );
    
}
export default LiveText;
