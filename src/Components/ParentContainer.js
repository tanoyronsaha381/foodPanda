import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const ParentContainer = () => {
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return(<div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <h1 className="text-center text-2xl font-bold">You are offline</h1>
        <p className="text-center">Please check your internet connection</p>
      </div>
    </div>)
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ParentContainer;
