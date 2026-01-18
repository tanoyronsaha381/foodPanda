import React from 'react'

const NavItem = ({Name,count, onClick}) => {
  return (
    <div className="text-white gap-4 cursor-pointer w-16 text-2xl" onClick={onClick} >{Name}{count > 0 && <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{count}</span>}</div>
  )

}

export default NavItem;