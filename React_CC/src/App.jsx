import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/color_gen'
import StarRating from './components/star_rating'
import ImageSlider from './components/image_slider'
import LoadMore from './components/load_more'
import TreeView from './components/tree_view_menu'
import menus from './components/tree_view_menu/data.js' 
import QrCodeGenerator from './components/qr_cde/index.jsx'
import LightDarkMode from './components/switch_modes'
import ScrollIndicator from './components/scroll_indicator'
import TabsTest from './components/custom_tabs/tab-test.jsx'
import ModalTest from './components/modal-popup/modaltest.jsx'
import GitHubProfileFinder from './components/profile_finder/profilefinder.jsx'
import SearchAutoComplete from './components/search_autocomplete/index.jsx'
import TicTacToe from './components/tic_tac_toe/tic-tac-toe.jsx'
import FeatureFlagGobalState from './components/feature_flag/context/index.jsx'
import FeatureFlag from './components/feature_flag/index.jsx'
import FetchHookTest from './components/useFetch-hook/test.jsx'


function App() {
  return (
    <div>
      {/* <Accordian/>
      <RandomColor />
      <StarRating />
      <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={"8"} />
      <LoadMore />
      <TreeView menus={menus} />
         <QrCodeGenerator />
        <LightDarkMode />
        <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
        <TabsTest/> */}
        {/* <ModalTest /> */}
        {/* <GitHubProfileFinder /> */}
        {/* <SearchAutoComplete /> */}
        {/* <TicTacToe /> */}
        {/* <FeatureFlagGobalState>
        <FeatureFlag/>  
        </FeatureFlagGobalState> */}
        <FetchHookTest/>
    </div>
  )
}
export default App
