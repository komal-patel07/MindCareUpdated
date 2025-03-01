import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const AdminLoginContext = createContext();

const AdminLoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState(null); // Store admin user data
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAdminLogin = async (loginData) => {
    try {
      // Replace with backend API call
      // const { data } = await axios.post(`${URL}`, loginData);
      const mockResponse = { success: true, user: loginData }; // Mock API response

      if (mockResponse.success) {
        setAdminData(mockResponse.user);
        setIsLoggedIn(true);
        toast.success("Login Successful");
        navigate("/AdminDashboard"); // ✅ Only navigate if login is successful
        return mockResponse;
      } else {
        throw new Error("Invalid Credentials");
      }
    } catch (error) {
      toast.error(error.message || "Login Failed");
      return { error: error.message };
    }
  };

  return (
    <AdminLoginContext.Provider value={{ handleAdminLogin, adminData, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AdminLoginContext.Provider>
  );
};

export { AdminLoginContext, AdminLoginProvider };
