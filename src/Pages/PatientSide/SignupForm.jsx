import React, { useState, useContext } from "react";
import { Input } from "@/components/ui/Input"; 
import { Button1 } from "../../components/ui/Btn";
import { motion } from "framer-motion";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { PatientSignUpContext } from "../../Context/PatientSignUpContext";

const SignupForm = () => {
  const { Signup } = useContext(PatientSignUpContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    dob: "",
    gender: "",
    primaryConcern: "",
    otherConcern: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    dob: "",
    gender: "",
    primaryConcern: "",
    otherConcern: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const validateFullName = (value) => (value.trim() ? "" : "Full Name is required.");
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email.";
  const validateUsername = (value) => (value.trim() ? "" : "Username is required.");
  const validatePassword = (value) => /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{6,}$/.test(value) ? "" : "Password must be 6+ chars, include letters, a number, and a special character.";
  const validateDOB = (value) => {
    if (!value) return "Date of Birth is required.";
    const birthYear = new Date(value).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age >= 1 && age <= 120 ? "" : "Invalid age. Must be 1-120.";
  };
  const validateGender = (value) => (value ? "" : "Gender is required.");
  const validatePrimaryConcern = (value) => (value ? "" : "Primary concern is required.");
  const validateOtherConcern = (value) => (formData.primaryConcern === "Other" && !value.trim() ? "Please specify your concern." : "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "primaryConcern" && value !== "Other") {
      setFormData((prev) => ({ ...prev, otherConcern: "" }));
      setErrors((prev) => ({ ...prev, otherConcern: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") 
      setErrors((prev) => ({ ...prev, fullName: validateFullName(value) }));
    else if (name === "email") 
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    else if (name === "username") 
      setErrors((prev) => ({ ...prev, username: validateUsername(value) }));
    else if (name === "password") 
      setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
    else if (name === "dob")
      setErrors((prev) => ({ ...prev, dob: validateDOB(value) }));
    else if (name === "gender")
      setErrors((prev) => ({ ...prev, gender: validateGender(value) }));
    else if (name === "primaryConcern")
      setErrors((prev) => ({ ...prev, primaryConcern: validatePrimaryConcern(value) }));
    else if (name === "otherConcern")
      setErrors((prev) => ({ ...prev, otherConcern: validateOtherConcern(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = validateFullName(formData.fullName);
    const email = validateEmail(formData.email);
    const username = validateUsername(formData.username);
    const password = validatePassword(formData.password);
    const dob = validateDOB(formData.dob);
    const gender = validateGender(formData.gender);
    const primaryConcern = validatePrimaryConcern(formData.primaryConcern);
    const otherConcern = validateOtherConcern(formData.otherConcern);

    const newErrors = {
      fullName: fullName,
      email: email,
      username: username,
      password: password,
      dob: dob,
      gender: gender,
      primaryConcern: primaryConcern,
      otherConcern: otherConcern,
    };

    setErrors(newErrors);

    const firstErrorField = Object.keys(newErrors).find(
      (key) => newErrors[key]
    );
    if (firstErrorField) {
      document.getElementById(firstErrorField)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    Signup(formData);
    toast.success("Signup successful!");
    // navigate("/Login");
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-200 p-4">
      <div className="w-full max-w-4xl shadow-2xl bg-white rounded-lg p-6 md:p-10">  
        <h2 className="mb-6">          
          <motion.div
            className="w-full md:w-2/3"
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.97 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="bg-emerald-800  text-white text-sm font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              &larr; Back
            </button>
          </motion.div>
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Side */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name:</label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Email Address:</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Username:</label>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Password:</label>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-emerald-800 mt-1"
              >
                {showPassword ? "Hide" : "Show"} Password
              </button>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Date of Birth:</label>
              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Primary Concern:</label>
              <select
                name="primaryConcern"
                value={formData.primaryConcern}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select</option>
                <option value="Anxiety">Anxiety</option>
                <option value="Depression">Depression</option>
                <option value="Stress">Stress</option>
                <option value="Relationship Issues">Relationship Issues</option>
                <option value="Other">Other</option>
              </select>
              {errors.primaryConcern && <p className="text-red-500 text-sm">{errors.primaryConcern}</p>}
            </div>

            {formData.primaryConcern === "Other" && (
              <div>
                <label className="block text-gray-700">Please specify:</label>
                <Input
                  type="text"
                  name="otherConcern"
                  value={formData.otherConcern}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.otherConcern && <p className="text-red-500 text-sm">{errors.otherConcern}</p>}
              </div>
            )}
          </div>

          {/* Full Width Buttons */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center">
            <motion.div
              className="w-full md:w-2/3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button1
                type="submit"
                className="w-full p-3 text-white bg-emerald-800  rounded-lg font-semibold transition"
              >
                Sign Up
              </Button1>
            </motion.div>

            <p className="text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <Link to="/Login" className="text-emerald-900 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default SignupForm;
