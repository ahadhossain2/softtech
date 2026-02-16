import React from "react";

const ButtonFill = ({ children, href = "#", onClick }) => {
  return (
    <div className="relative inline-block group">
      {/* Subtle hover background */}
      <span className="absolute inset-0 rounded-xl bg-gray-700/20 transition-all duration-300 group-hover:bg-gray-700/40"></span>

      {/* Button */}
      <a
        href={href}
        onClick={onClick}
        role="button"
        className="relative flex items-center justify-center px-6 py-3 rounded-lg bg-blue-800 text-white font-semibold text-base shadow-md transition-all duration-200 transform-gpu hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-700"
      >
        {children}
        <svg
          className="ml-2 w-4 h-4 stroke-white transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 10 10"
          strokeWidth={2}
        >
          <path
            d="M0 5h7"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          />
          <path d="M1 1l4 4-4 4" className="transition-transform duration-200" />
        </svg>
      </a>
    </div>
  );
};

export default ButtonFill;
