import MenuList from "./menu_list"
import menus from './data.js'


export default function TreeView({menus = []}){
    
   return <div className="tree-view-container">
   <MenuList list={menus}/>


   </div>


}