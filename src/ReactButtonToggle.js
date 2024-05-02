import React from 'react';
import { useState } from 'react';

const Toggle =() =>{
    const [toggle,setToggle]= useState(false);
        const handleToggle =()=>{
            if (toggle==true){
                setToggle(false);
            }else{
                setToggle(true);
            }
        }
    return(
        <>
        <button onClick={handleToggle}>{toggle==true ?'ON':'OFF'}</button>
        </>
    )
}

export default Toggle;