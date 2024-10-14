
import { Outlet } from "react-router-dom";
import Headers from "./Headers";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-900 text-gray-300">
        
      <Headers />
      <Outlet />
      <Footer />
      </div>
    </>
  );
};

export default MainLayout;
