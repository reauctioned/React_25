import MenuList from './menu_list.jsx'
import { useState } from 'react'
import {FaMinus , FaPlus} from 'react-icons/fa'

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  function handleToggleChildren(getCurrent) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrent]: !displayCurrentChildren[getCurrent]
    })
  }

  console.log(displayCurrentChildren)

  return (
    <li>
      <div style={{display:"flex", gap:"20px"}}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? 
          <span onClick={() => handleToggleChildren(item.label)}>{
            displayCurrentChildren[item.label]? <FaMinus color="#ffffff" size={15}/> : <FaPlus color="#ffffff" size={15}/>
          }</span>
          : null
        }
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? 
        <MenuList list={item.children} />
        : null
      }
    </li>
  )
}
