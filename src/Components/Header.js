import NavBar from "./NavBar";
import { useSelector } from "react-redux";


const Logo = () => {
    return(
        <div className="rounded-xl flex items-center justify-center gap-2 ">
            <img src="https://img.freepik.com/premium-vector/panda-bear-silhouette-logo-concept-ready-use_161396-1304.jpg" className="w-8 rounded-full"/>
            <span className="text-white text-2xl font-bold justify-center cursor-pointer">Food Panda</span>
        </div>
    )
}

const Header = () =>{
    const user = useSelector((store) => store.user);
    return(
      <div className="flex justify-between bg-gray-900 p-4 items-center h-16">
        <Logo/>
        {
          user?.isLoggedIn && <span className="text-white mr-4">Hello {user?.userInfo?.data?.name}, hungry🍕? Let's eat! 😍</span>
        }
        <NavBar/>
      </div>
    );
}

export default Header;