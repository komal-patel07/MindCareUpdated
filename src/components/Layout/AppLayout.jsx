import { Outlet } from "react-router-dom";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AppLayout(){
    const [rHeaderFooter, setRHeaderFooter] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      console.log("This is the location of the Nav", location);
      if (
        location.pathname === "/SignupForm" ||
        location.pathname === "/PatientDashboard" ||
        location.pathname === "/AdminDashboard"||
        location.pathname === "/TherapistDashboard"
      ) {
        setRHeaderFooter(false);
      } else {
        setRHeaderFooter(true);
      }
    }, [location]);
  
    return(
        
        <>
      {" "}
      {rHeaderFooter ? (
        <div className="flex font-amatic   justify-center items-center  ">
          <div className=" h-184 w-[1599px]  bg-gradient-to-bl from-rose-100 via-gray-100 to-gray-200 ">
            <Header />
            <div className="bg-white">
              {" "}
              <Outlet />
            </div>

            <Footer />
          </div>
        </div>
      ) : (
        <div className="font-amatic ">
          {/* {children} */}
          <Outlet />
        </div>
      )}
    </>
    )
}