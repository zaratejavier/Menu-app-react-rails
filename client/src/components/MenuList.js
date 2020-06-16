import React from "react"
import Menu from './Menu'

const MenuList = ({menus, deleteMenu, updateMenu}) => {
  return(
    <div>
      {menus.map((menu) => {
        return (
          <Menu 
           key={menu.id}
           deleteMenu={deleteMenu}
           updateMenu={updateMenu}
           {...menu} 
          />
        )
      })}
    </div>
  )
}

export default MenuList