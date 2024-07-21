import React,{useState} from "react";
import "./styles.css"

export default function RandomColor(){
    const [typeOfColor,setTypeOfColor] = useState('hex')
    const [color,setcolor] = useState('h#000000')
    





   return ( 
   
   <div className="wrapper">
        <button>Hex Button</button>
        <button>Rgb Button</button>
        <button>Random Button</button>
    </div>
)}