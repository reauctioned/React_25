import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/color_gen'
import StarRating from './components/star_rating'
import ImageSlider from './components/image_slider'
import LoadMore from './components/load_more'
import TreeView from './components/tree_view_menu'

function App() {
  return (
    <div>
      {/* <Accordian/> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={"8"} /> */}
      {/* <LoadMore /> */}
    <TreeView />
    </div>
  )
}
export default App
