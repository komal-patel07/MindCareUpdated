import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
  });

  const validateName = (value) => (value.trim() ? "" : "Name is required.");
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email.";
  const validateRating = (value) => (value ? "" : "Rating is required.");
  const validateComments = (value) => (value.trim() ? "" : "Comments are required.");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "name") 
      setErrors((prev) => ({ ...prev, name: validateName(value) }));
    else if (name === "email") 
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    else if (name === "rating") 
      setErrors((prev) => ({ ...prev, rating: validateRating(value) }));
    else if (name === "comments") 
      setErrors((prev) => ({ ...prev, comments: validateComments(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = validateName(formData.name);
    const email = validateEmail(formData.email);
    const rating = validateRating(formData.rating);
    const comments = validateComments(formData.comments);

    const newErrors = {
      name: name,
      email: email,
      rating: rating,
      comments: comments,
    };

    setErrors(newErrors);

    const firstErrorField = Object.keys(newErrors).find(
      (key) => newErrors[key]
    );
    if (firstErrorField) {
      document.getElementById(firstErrorField)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    toast.success("Feedback submitted successfully!");
    setFormData({
      name: "",
      email: "",
      rating: "",
      comments: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen  w-screen  bg-gradient-to-bl from-rose-100 via-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-4xl shadow-2xl bg-white rounded-lg p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Patient Feedback Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onBlur={handleBlur}
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
              onBlur={handleBlur}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Rating:</label>
            <select
              name="rating"
              value={formData.rating}
              onBlur={handleBlur}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="1">1 - Very Poor</option>
              <option value="2">2 - Poor</option>
              <option value="3">3 - Average</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Excellent</option>
            </select>
            {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Comments:</label>
            <textarea
              name="comments"
              value={formData.comments}
              onBlur={handleBlur}
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
              Submit Feedback
            </button>
          </motion.div>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default Feedback;
