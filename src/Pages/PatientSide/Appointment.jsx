import React, { useState } from "react";
import Girlcharacter from "../../assets/Girl-charatcer.png"; // Replace with actual image path
import Button, { Button1 } from "@/components/Custom/Btn";
import { motion } from "framer-motion";

const therapists = [
  { id: "1", name: "Dr. Aarav Sharma" },
  { id: "2", name: "Dr. Priya Kapoor" },
  { id: "3", name: "Dr. Rohan Mehta" },
  { id: "4", name: "Dr. Sneha Verma" },
];

const Appointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    therapist: "",
    appointmentDate: "",
    mode: "",
    type: "Initial Check Up",
    meetingLink: "",
    hospitalAddress: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.therapist || !form.appointmentDate || !form.mode) {
      alert("Please fill in all required fields");
      return;
    }
    if (form.mode === "Online" && !/^https?:\/\//.test(form.meetingLink)){
      alert("Invalid meeting link");
      return;
    }
    if (form.mode === "Offline" && !form.hospitalAddress) {
      alert("Hospital address is required for offline mode");
      return;
    }
    alert("Appointment booked successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen shadow-2xl bg-gradient-to-bl from-rose-100 via-gray-100 to-gray-200">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
        <div className="hidden md:block w-1/2">
          <img src={Girlcharacter} alt="Appointment" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-xl font-bold text-center mb-4">Book an Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded-md" placeholder="Your Full Name" />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded-md" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block font-medium">Therapist</label>
              <select name="therapist" value={form.therapist} onChange={handleChange} required className="w-full p-2 border rounded-md">
                <option value="">Select a Therapist</option>
                {therapists.map((therapist) => (
                  <option key={therapist.id} value={therapist.id}>{therapist.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-medium">Date</label>
              <input type="date" name="appointmentDate" value={form.appointmentDate} onChange={handleChange} required className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block font-medium">Mode</label>
              <select name="mode" value={form.mode} onChange={handleChange} required className="w-full p-2 border rounded-md">
                <option value="">Select Mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
            {form.mode === "Online" && (
              <div>
                <label className="block font-medium">Meeting Link</label>
                <input type="url" name="meetingLink" value={form.meetingLink} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="https://meeting-link.com" />
              </div>
            )}
            {form.mode === "Offline" && (
              <div>
                <label className="block font-medium">Hospital Address</label>
                <input type="text" name="hospitalAddress" value={form.hospitalAddress} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Hospital Address" />
              </div>
            )}
            <div>
              <label className="block font-medium">Type</label>
              <select name="type" value={form.type} onChange={handleChange} className="w-full p-2 border rounded-md">
                <option value="Follow ups">Follow ups</option>
                <option value="Initial Check Up">Initial Check Up</option>
              </select>
            </div>
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="w-full text-white bg-emerald-800  px-4 py-2 rounded-lg font-semibold transition">
                Login
              </button>
            </motion.div>          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
