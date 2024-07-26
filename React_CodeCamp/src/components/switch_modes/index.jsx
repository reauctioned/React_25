import { useState } from "react"
import UseLocalStorage from "./useLocalStorage"

import './styles.css'



export default function LightDarkMode(){


  const[theme, setTheme]= UseLocalStorage('theme','dark')

      function handleToggleTheme(){
        setTheme(theme === 'light'? 'dark' : 'light')
      }
  console.log(theme)

     
    return <div className="light-dark-mode" data-theme={theme}>
    <div style={{display:'flex',flexDirection:'column', justifyContent:"center", gap:'20px'}}>
        Hello world!
        <button 
        onClick={handleToggleTheme}
        >Change Mode</button>
    </div>
    </div>
}