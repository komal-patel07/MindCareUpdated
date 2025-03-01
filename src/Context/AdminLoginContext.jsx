import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const AdminLoginContext = createContext();

const AdminLoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAminLogin = async (loginData) => {
    try {
      // const { data } = await axios.post(`${URL}`, loginData);
      const data = loginData; // Mocking the response data
      setIsLoggedIn(true);
      setAdminData(data);
      console.log(data);
      toast.success("Login Successful");

      // navigate("/Questions")
      navigate("/AdminDashboard");
    } catch (error) {
      toast.error("Login Failed");
    }
  };

  const contextValue = { handleAminLogin, isLoggedIn, setIsLoggedIn };
  return (
    <AdminLoginContext.Provider value={contextValue}>
      {children}
    </AdminLoginContext.Provider>
  );
};

export { AdminLoginContext,AdminLoginProvider };
