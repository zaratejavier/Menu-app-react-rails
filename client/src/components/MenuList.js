import React from "react"
import Menu from './Menu'

const MenuList = ({menus, deleteMenu}) => {
  return(
    <div>
      {menus.map((menu) => {
        return (
          <Menu 
           key={menu.id}
           deleteMenu={deleteMenu}
           {...menu} 
          />
        )
      })}
    </div>
  )
}

export default MenuList