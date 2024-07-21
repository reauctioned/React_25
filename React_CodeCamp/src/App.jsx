import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/color_gen'

function App() {
  return (
    <div>
      {/* <Accordian/> */}
      <RandomColor />
    </div>
  )
}
export default App
