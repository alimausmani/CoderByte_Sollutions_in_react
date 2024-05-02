import React from "react";
import { useState } from "react";

const Color =()=>{
    const colors=['Red','Green','Blue','Yellow'];
    const [currentcolor,setCurrentcolor]=useState('gray');
    const handlecolor=(e)=>{
        setCurrentcolor(e.target.value);
    }
    return(
        <div>
            <div style={{backgroundColor:currentcolor,height:'400px',width:'400px'}}>
            </div>
            <select onChange={handlecolor}>{colors.map((element,index)=>
                <option value={element}>{element}</option>
            )}</select>
        </div>
    )

}
export default Color
























