import React,{useState, useEffect} from "react";
import "./styles.css"

export default function RandomColor(){
    const [typeOfColor,setTypeOfColor] = useState("hex")
    const [color,setColor] = useState("#000000")
    

   
   function randomColorUtility(length){
    return Math.floor(Math.random()*length)
   } 

  function handleRandomHexColor(){
    let hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
    let hexColor ='#'

    for( var i = 0 ; i < 6 ; i ++){
         hexColor += hex[randomColorUtility(hex.length)]
       }
       setColor(hexColor)
  }



  function handleRandomRbgColor() {
   const r = randomColorUtility(256)
   const g = randomColorUtility(256)
   const b = randomColorUtility(256)
   

   setColor(`rgb(${r},${g},${b})`)
  }



  useEffect(() => {
    if (typeOfColor === "rgb") handleRandomRbgColor();
    else handleRandomHexColor();
  }, [typeOfColor]);


   return ( 
   
   <div className="wrapper" style={{background: color, height: "100vh" , width: "90vw" , borderRadius:"2%"}}>
        <button onClick={() => setTypeOfColor("hex")}>Hex Button</button>
        <button onClick={() => setTypeOfColor("rgb")}>Rgb Button</button>
        <button onClick={
          typeOfColor === "hex" ? handleRandomHexColor : handleRandomRbgColor
        }>Random Button</button>
           <div style={{display:"flex", justifyContent: "center", color: "white" ,marginLeft: '10%',fontSize:'30px',marginBottom:"50px"
           }}>
            <h3 className="text">{typeOfColor === "rgb"? "" : "HEX"}</h3>
            <h3>{color}</h3>
           </div>

    </div>
)}