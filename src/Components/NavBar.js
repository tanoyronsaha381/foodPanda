import React, { use } from 'react'
import NavItem from './NavItem'
import { useDispatch, useSelector } from 'react-redux'
import { LoginData } from '../utils/LoginData'
import { setUser,setLogOutState, setDarkMode } from '../utils/userSlice'
import { useState } from 'react'

const ProfilePhoto = ({ showLogOut, setShowLogOut }) => {

    const user= useSelector((store)=>store.user);

    const handleClick = () => {
        setShowLogOut(!showLogOut);
    };

    return(
        <div className="rounded-xl flex items-center justify-center gap-2 cursor-pointer">
            <img src={user?.userInfo?.data?.profileImage} className="w-8 rounded-full" onClick={handleClick}/>
        </div>
    )
}

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isLogged = user && user.isLoggedIn;
  const isDark = user.isDarkMode;
  const [showLogOut, setShowLogOut] = useState(false);

  const handleLogin = () => {
    setShowLogOut(false);
    dispatch(setUser(LoginData));
  };

  const handleLogOut = () => {
    dispatch(setLogOutState());
  };

  const toggleDarkMode = () => {
    dispatch(setDarkMode());
  };

  return (
    <div className="flex items-center justify-between p-2">
      
      <div className="flex gap-4">
        <NavItem Name={"🏠"} />
        <NavItem Name={"🛒"} />
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