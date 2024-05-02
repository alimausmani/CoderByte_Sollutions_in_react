import React from "react";
import { useState } from "react";
import './styles.css';
const data = [
    { name: "Daniel", age: 25 },
    { name: "John", age: 24 },
    { name: "Jen", age: 31 },
]

const Lisst = (props) =>{
    return(
        <>
        <ul>
          {data.map((element,index)=>
          <div>
          <span className="data">{`name:  ${element.name}`}</span>
          <span>{`age: ${element.age}`}</span>
          </div>
          )}
        </ul>
        </>
    );
}
export default Lisst;

