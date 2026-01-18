import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";


const Logo = () => {
    return(
        <div className="rounded-xl flex items-center justify-center gap-2 ">
            <img src="https://img.freepik.com/premium-vector/panda-bear-silhouette-logo-concept-ready-use_161396-1304.jpg" className="w-8 rounded-full"/>
            <Link to="/"><span className="text-white text-2xl font-bold justify-center cursor-pointer">Food Panda</span></Link>
        </div>
    )
}

const Header = () =>{
    const user = useSelector((store) => store.user);
    const onlineStatus = useOnlineStatus();
    return(
      <div className="flex justify-between bg-gray-900 p-4 items-center h-16">
        <Logo/>
        {
          onlineStatus && user?.isLoggedIn && <span className="text-white mr-4">Hello {user?.userInfo?.data?.name}, hungry🍕? Let's eat! 😍</span>
        }
        { onlineStatus ===false && <span className="text-red-500 mr-4">● Offline</span>}
        {onlineStatus && <NavBar/>}
      </div>
    );
}

export default Header;