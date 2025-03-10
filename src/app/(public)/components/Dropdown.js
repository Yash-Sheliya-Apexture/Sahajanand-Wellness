// components/CustomDropdown.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const dropdownVariants = {
  initial: { opacity: 0, y: -10, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.15, ease: "easeInOut" },
  },
};

const CustomDropdown = ({
  label,
  id,
  value,
  onChange,
  options,
  className,
  isOpen,
  onToggle,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-main-color focus:ring-main-color sm:text-sm py-2 px-3 text-left ${className}`}
          onClick={onToggle}
        >
          {options.find((option) => option.value === value)?.label ||
            "Select an option"}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 bg-white border border-gray-200 rounded-xl shadow-lg z-50 w-full p-2"
              variants={dropdownVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ul className="py-1">
                {options.map((option) => (
                  <li key={option.value}>
                    <button
                      type="button"
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-main-color hover:text-white rounded-md"
                      onClick={() => onChange(option.value)}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CustomDropdown;
