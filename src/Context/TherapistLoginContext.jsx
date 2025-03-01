import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const TherapistLoginContext = createContext();

const TherapistLoginContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [therapistData, setTherapistData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async ({ username, password }) => {
    try {
      // Mock login logic
      if (username === "test" && password === "123") {
        setTherapistData({ username });
        setIsLoggedIn(true);
        toast.success("Login Successful");

        navigate("/TherapistDashboard"); // ✅ Only navigate on success
        return { success: true };
      } else {
        throw new Error("Invalid Credentials");
      }
    } catch (error) {
      toast.error(error.message || "Login Failed");
      return { error: error.message };
    }
  };

  return (
    <TherapistLoginContext.Provider value={{ handleLogin, therapistData, isLoggedIn, setIsLoggedIn }}>
      {children}
    </TherapistLoginContext.Provider>
  );
};

export { TherapistLoginContext, TherapistLoginContextProvider };
