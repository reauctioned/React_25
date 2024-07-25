import MenuList from './menu_list.jsx'
import { useState } from 'react'

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
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? 
          <span onClick={() => handleToggleChildren(item.label)}>{
            displayCurrentChildren[item.label]? '-' : "+"
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
