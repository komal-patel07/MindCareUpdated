import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { buttonVariants } from "@/components/Animation/HomePageAnimation";
import { AdminLoginContext } from "@/Context/AdminLoginContext";
import nurseImage from "@/assets/Nurse.png"; 

export default function AdminLogin() {
  const { handleAdminLogin, isLoggedIn } = useContext(AdminLoginContext);

  if (!handleAdminLogin) {
    console.error("AdminLoginContext is not available! Make sure it's wrapped in AdminLoginProvider.");
    return <p className="text-red-500">Error: Context not provided.</p>;
  }

  const navigate = useNavigate();
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/AdminDashboard");
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginRes = await handleAdminLogin({
        username: formState.username,
        password: formState.password,
      });

      if (loginRes?.error) {
        setErrors(loginRes.error);
        toast.error("Login failed!");
      } else {
        setErrors("");
        toast.success("Login successful!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors("An unexpected error occurred.");
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="w-full h-screen flex-col flex justify-center items-center min-h-screen bg-gradient-to-bl from-rose-100 via-gray-100 to-gray-200">
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-lg overflow-hidden shadow-xl p-6 bg-white">
        <div className="mb-6">
          <motion.div
            className="w-55"
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="bg-emerald-800 text-white text-sm font-normal py-2 px-4 rounded"
            >
              &larr;Back
            </button>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10 bg-gray-50 flex flex-col items-center">
          <img src={nurseImage} alt="Nurse" className="w-48 sm:w-64 md:w-72 lg:w-80 mb-5" />
          <p className="text-gray-600 text-center text-sm sm:text-base px-5">
            "Don't let your mind bully your body into believing it must carry the burden of its worries."
          </p>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-2 text-sm md:text-base">Username or Email</label>
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
              <label className="block text-gray-600 mb-2 text-sm md:text-base">Password</label>
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

            <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <button type="submit" className="w-full text-white bg-emerald-800 px-4 py-2 rounded-lg font-semibold transition">
                Login
              </button>
            </motion.div>
          </form>
          {errors && <p className="text-red-500 mt-4">{errors}</p>}
        </div>

        <Toaster richColors />
      </div>
    </div>
  );
}
