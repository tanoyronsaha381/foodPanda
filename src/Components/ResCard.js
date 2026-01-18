import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addItemToCart,removeItemFromCart} from '../utils/cartSlice';
import { useSelector } from 'react-redux';
const ResCard = ({ resInfo, isDark }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleAddItem = () => {
    dispatch(addItemToCart(resInfo));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(resInfo?.info?.id));
  };

  return (
    <div
      className={`
        m-4 p-4 w-[250px] h-[420px] flex flex-col
        rounded-lg cursor-pointer
        hover:shadow-lg hover:scale-105 transition-transform duration-200
        ${isDark ? "bg-[#0a192f] text-white border" : "bg-gray-100 text-black"}
      `}
    >
      <img
        className="w-full h-40 object-cover rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resInfo?.info?.cloudinaryImageId
        }
        alt={resInfo?.info?.name}
      />

      <h3 className="font-bold text-base text-center mt-2">
        {resInfo?.info?.name}
      </h3>

      <p className="mt-auto text-center text-sm">
        ⭐ {resInfo?.info?.avgRating} • {resInfo?.info?.sla?.deliveryTime} mins
      </p>

      <p className="text-center">💸 {resInfo?.info?.costForTwo}</p>

      <p className="text-center text-xs line-clamp-2">
        {resInfo?.info?.cuisines.join(", ")}
      </p>

      {user?.isLoggedIn && (
        <div className="mt-auto pt-2 flex justify-center gap-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={handleAddItem}
          >
            +
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={handleRemoveItem}
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default ResCard;