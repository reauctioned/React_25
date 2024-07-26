import { useState } from "react"
import UseLocalStorage from "./useLocalStorage"





export default function LightDarkMode(){


  const[theme, setTheme]= UseLocalStorage('theme','dark')

      function handleToggleTheme(){
        setTheme(theme === 'light'? 'dark' : 'light')
      }


     
    return <div >
    <div style={{display:'flex',flexDirection:'column', justifyContent:"center", gap:'20px'}}>
        Hello world!
        <button 
        onClick={handleToggleTheme}
        >Change Mode</button>
    </div>
    </div>
}