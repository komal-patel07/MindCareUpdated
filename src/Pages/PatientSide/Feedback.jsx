import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";
import { Star } from "lucide-react";
import {  buttonVariants} from "@/components/Animation/HomePageAnimation"
import { useNavigate } from "react-router-dom";
const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comments: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
  });
  const navigate = useNavigate(); // Initialized useNavigate

  const validateName = (value) => (value.trim() ? "" : "Name is required.");
  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email.";
  const validateRating = (value) => (value > 0 ? "" : "Rating is required.");
  const validateComments = (value) =>
    value.trim() ? "" : "Comments are required.";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (value) => {
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // url of Backend;
      console.log(formData)
      toast.success("Thank You for your feedback")
      
      // Reset form state after submission
      setFormData({
        name: "",
        email: "",
        rating: 0,
        comments: "",
      });
    } catch (error) {
      toast.error("Error is submission")
    }
    }

    // toast.success("Feedback submitted successfully!");
   
  

  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-bl from-rose-100 via-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-4xl shadow-2xl bg-white rounded-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-7">
        <div className=" w-24 ">
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
          <img
            src="src/assets/yoga-meditation.png"
            alt="Feedback"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Patient Feedback Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Rating:</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={30}
                    className={`cursor-pointer transition-colors ${
                      formData.rating >= star ? "fill-yellow-500 text-yellow-500" : "fill-gray-300 text-gray-300"
                    }`}
                    onClick={() => handleRatingChange(star)}
                  />
                ))}
              </div>
              {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Comments:</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {errors.comments && <p className="text-red-500 text-sm">{errors.comments}</p>}
            </div>

            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="submit"
                className="w-full p-3 text-white bg-emerald-800 rounded-lg font-semibold transition"
              >
                Submit
              </button>
            </motion.div>
          </form>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default Feedback;
