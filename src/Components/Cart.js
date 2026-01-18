import React from 'react'  
import { useDispatch, useSelector } from 'react-redux';
import ResContainer from './ResContainer';
import { removeAllItemsFromCart } from '../utils/cartSlice';
import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItem = useSelector((store)=>store.cart.items);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const handelClearCart = ()=>{
        dispatch(removeAllItemsFromCart());
    }
  return (
    <div className={`flex flex-col flex-1 ${user.isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div className="flex justify-center">
            {user?.isLoggedIn && <button
                className="bg-green-500 text-white px-4 py-2 rounded-md m-4"
                onClick={handelClearCart}
            >
                Clear cart
            </button>}
        </div>

        {cartItem.length === 0 && user?.isLoggedIn ? (
            <h1 className="text-2xl font-bold m-4">Your Cart is Empty 🛒</h1>
        ) : (
            <ResContainer resList={cartItem} isDark={user.isDarkMode}/>
        )}
    </div>
  )
}

export default Cart