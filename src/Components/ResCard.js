import React from 'react'

const ResCard=({resInfo,isDark})=> {
  return (
    <div className={`m-4 p-4 w-[250px] rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-200
    ${isDark ? "bg-[#0a192f] text-white border" : "bg-gray-100 text-black"}
  `}>
      <img className="w-full h-48 object-cover rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resInfo?.info?.cloudinaryImageId} alt={resInfo?.info?.name} />
      <h3 className="font-bold text-base text-center">{resInfo?.info?.name}</h3>
      <p className="text-center"> ⭐ {resInfo?.info?.avgRating} - {resInfo?.info?.totalRatingsString} 🚁 {resInfo?.info?.sla?.deliveryTime} mins</p>
      <p className="text-center">💸 {resInfo?.info?.costForTwo}</p>
      <p className="justify-end text-center">{resInfo?.info?.cuisines.join(", ")}</p>
    </div>
  )
}

export default ResCard;