import { React, useState, useContext } from "react";
import { motion } from "framer-motion";
import { PatientSignUpContext } from "@/Context/PatientSignUpContext";
import { Toaster, toast } from "sonner";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate import
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import {  buttonVariants} from "@/components/Animation/HomePageAnimation"
export default function Login() {
  const { handleLogin } = useContext(PatientSignUpContext);
  const navigate = useNavigate(); // Initialized useNavigate

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send formData with correct property names to handleLogin
    const loginRes = handleLogin({
      username: formState.username,
      password: formState.password,
    });
    setErrors(loginRes);
  };

  const handleSucess = (credentialResponse) => {
    const decode = jwtDecode(credentialResponse?.credential);
    setFormState({ ...formState, username: decode.name });
    console.log("The Data of user is ", credentialResponse.username);
    Signup(formState);
  };

  const handleError = (error) => {
    console.log("There is some Error", error);
  };


  
  const Signup = (formState) => {
    // Implement the Signup logic here
    console.log("Signup function called with formState:", formState);
  };

  return (
    <div className=" w-screen  flex-col flex justify-center items-center  min-h-screen bg-gradient-to-bl  from-rose-100 via-gray-100 to-gray-200   ">
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-lg overflow-hidden shadow-xl p-6 bg-white">
        {/* Left Section */}
        <div className=" mb-6 ">
        <motion.div
            className="w-55"
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => navigate(-1)} // Updated to use navigate
              className="bg-emerald-800  text-white text-sm font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              &larr;Back
            </button>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10 bg-gray-50 flex flex-col items-center">
          <img
            src="/src/assets/Nurse.png"
            alt="Student studying"
            className="w-48 sm:w-64 md:w-72 lg:w-80 mb-5"
          />
          <p className="text-gray-600 text-center text-sm sm:text-base px-5">
            "Don't let your mind bully your body into believing it must carry
            the burden of its worries."
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-2 text-sm md:text-base">
                Username or email
              </label>
              <input
                type="text"
                name="username"
                value={formState.username}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-emerald-300"
                placeholder="johnsmith007"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2 text-sm md:text-base">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-emerald-300"
                placeholder="********"
              />
            </div>

            {/* Login Button */}
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="w-full text-white bg-emerald-800  px-4 py-2 rounded-lg font-semibold transition">
                Login
              </button>
            </motion.div>
          </form>

          {/* Divider */}
          <div className="text-center my-4 text-gray-500 text-sm md:text-base">
            or
          </div>

          {/* Google Login */}
          <GoogleOAuthProvider clientId="1095836248937-ea1hjrtusaquuigbst6dm9s2s91dpk8s.apps.googleusercontent.com">
            <GoogleLogin onSuccess={handleSucess} onError={handleError} />
          </GoogleOAuthProvider>

          {/* Signup Link */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/SignupForm" className="text-emerald-900 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
        <Toaster richColors />

      </div>
    </div>
  );
}
