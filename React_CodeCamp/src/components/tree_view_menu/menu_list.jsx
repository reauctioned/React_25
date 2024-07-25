import MenuItem from './menu_item.jsx'

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length ? 
        list.map((listItem, index) => <MenuItem key={index} item={listItem} />)
        : null
      }
    </ul>
  )
}