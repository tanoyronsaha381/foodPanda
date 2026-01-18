import React, { use } from 'react'
import NavItem from './NavItem'
import { useDispatch, useSelector } from 'react-redux'
import { LoginData } from '../utils/LoginData'
import { setUser,setLogOutState, setDarkMode } from '../utils/userSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { removeAllItemsFromCart } from '../utils/cartSlice'
import useOnlineStatus from '../utils/useOnlineStatus'

const ProfilePhoto = ({ showLogOut, setShowLogOut }) => {

    const user= useSelector((store)=>store.user);

    const handleClick = () => {
        setShowLogOut(!showLogOut);
    };

    const onlineStatus = useOnlineStatus();

    return(
        <div className="rounded-xl flex items-center justify-center gap-2 cursor-pointer">
            <img src={user?.userInfo?.data?.profileImage} className="w-8 rounded-full" onClick={handleClick}/>
            { onlineStatus ===true && <span className="text-green-500 mr-4">●</span>}
        </div>
    )
}

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const cartItem = useSelector((store)=>store.cart.items);
  const isLogged = user && user.isLoggedIn;
  const isDark = user.isDarkMode;
  const [showLogOut, setShowLogOut] = useState(false);

  const handleLogin = () => {
    setShowLogOut(false);
    dispatch(setUser(LoginData));
  };

  const handleLogOut = () => {
    dispatch(setLogOutState());
    dispatch(removeAllItemsFromCart());
  };

  const toggleDarkMode = () => {
    dispatch(setDarkMode());
  };

  return (
    <div className="flex items-center justify-between p-2">
      
      <div className="flex gap-4">
        <Link to="/"><NavItem Name={"🏠"} /></Link>
        <Link to="/cart"><NavItem Name={"🛒"} count={cartItem.length} /></Link>
        <NavItem Name={isDark ? "🌞" : "🌙"} onClick={toggleDarkMode} />
      </div>

      <div className="flex items-center gap-6">
        {isLogged && <ProfilePhoto showLogOut={showLogOut} setShowLogOut={setShowLogOut}/>}
        {!isLogged && (
          <button
            className="bg-white px-4 py-2 rounded-md"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
        {isLogged && showLogOut && (
          <button
            className="bg-white px-4 py-2 rounded-md"
            onClick={handleLogOut}
          >
            Log out
          </button>
        )}
      </div>
    </div>
  );
};


export default NavBar;