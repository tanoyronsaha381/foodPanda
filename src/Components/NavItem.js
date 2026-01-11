import React from 'react'

const NavItem = ({Name, onClick}) => {
  return (
    <div className="text-white gap-4 cursor-pointer w-16 text-2xl" onClick={onClick} >{Name}</div>
  )

}

export default NavItem;