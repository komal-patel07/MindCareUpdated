import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons for the menu
import { motion } from "framer-motion"; // Animation library

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-4 ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-xl sm:text-2xl md:text-3xl font-serif">
          <span className="text-2xl sm:text-3xl md:text-4xl">M</span>ind Care.
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 xl:gap-10 text-lg xl:text-xl">
          {["Home", "About", "Services", "Feedback", "Login"].map((item, index) => (
            <NavLink
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-900 underline"
                  : "hover:text-emerald-900 hover:underline transition duration-300"
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Sidebar Menu */}
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar Panel */}
          <motion.div
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{ duration: 0.3 }}
  className="fixed right-0 backdrop-brightness-500 top-0 h-full w-64 text-black sm:w-72 bg-white/95 backdrop-blur-xl shadow-lg opacity-70 z-50 flex flex-col p-5 border-l border-white/10"
>
  {/* Close Button */}
  <button
    className="self-end mb-5"
    onClick={() => setIsOpen(false)}
    aria-label="Close menu"
  >
    <X size={32} />
  </button>

  {/* Menu Links */}
  <div className="flex flex-col gap-5 text-lg">
    {["Home", "About", "Services", "Feedback", "Login"].map((item, index) => (
      <NavLink
        key={index}
        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
        className={({ isActive }) =>
          isActive
            ? "text-emerald-900 underline"
            : "hover:text-emerald-900 hover:underline transition duration-300"
        }
        onClick={() => setIsOpen(false)}
      >
        {item}
      </NavLink>
    ))}
  </div>
</motion.div>
        </>
      )}
    </header>
  );
}