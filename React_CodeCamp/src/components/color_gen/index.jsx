import React,{useState} from "react";
import "./styles.css"

export default function RandomColor(){
    const [typeOfColor,setTypeOfColor] = useState('hex')
    const [color,setColor] = useState('#000000')
    
console.log(handleRandomColor)
   
   function randomColorUtility(){
    return Math.floor(Math.random()*length)
   } 

  function handleRandomHexColor(){
    const hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
    let hash ='#'

    for(i = 0 ; i < 6 ; i ++){
         hex += hex[randomColorUtility(hex.length)]
       }
       setColor()
  }



  function handleRandomRbgColor() {
   const r = randomColorUtility(256)
   const g = randomColorUtility(256)
   const b = randomColorUtility(256)
   setColor(`rgb${r},${g},${b}`)
  }

  function handleRandomColor(){}


   return ( 
   
   <div className="wrapper" style={{background: color, height: "100%" , width: "100%"}}>
        <button onClick={() => setTypeOfColor('hex')}>Hex Button</button>
        <button onClick={() => setTypeOfColor('rgb')}>Rgb Button</button>
        <button onClick={handleRandomColor()}>Random Button</button>
           <div style={{display:"flex", justifyContent: "center", color: "white"
           }}>
            <h3>{typeOfColor === 'rbg'? "RGB" : "HEX"}</h3>
            <h3>{color}</h3>
           </div>

    </div>
)}