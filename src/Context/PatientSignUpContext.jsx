import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";


const PatientSignUpContext = createContext();

function PatientSignUpProvider({ children }) {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  const Signup = async (userData) => {
    try {
      // const { data } = await axios.post(`${URL}`, userData);
      const data = userData; // Mocking the response data
      setPatientData(data);
      console.log(data);
      toast.success("Signup Successful");


      // navigate("/Login");
    } catch (error) {
      toast.error("Signup Failed");
    }
  };

  // Login Function
  const handleLogin = async (loginData) => {
    try {
      // const { data } = await axios.post(`${URL}`, loginData);
      const data = loginData; // Mocking the response data
      setIsLoggedIn(true);
      setPatientData(data);
      console.log(data)
      toast.success("Login Successful");

      // navigate("/Questions")
      navigate("/PatientDashboard");
    } catch (error) {
      toast.error("Login Failed");
    }
  };

  // Context values
  const contextValue = {
    Signup,
    handleLogin,
    patientData,
    setPatientData,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <PatientSignUpContext.Provider value={contextValue}>
      {children}
    </PatientSignUpContext.Provider>
  );
}

export { PatientSignUpContext, PatientSignUpProvider };
