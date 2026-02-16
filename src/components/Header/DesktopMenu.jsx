import React from "react";

"use client"
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function DesktopMenu({ menu }) {
  const [isHover, toggleHover] = useState(false);

   const { gridCols = 1, subMenuHeading = [], subMenu = [], name, path } = menu;

  const hasSubMenu = subMenu.length > 0;
 const gridClass = `grid-cols-3 sm:grid-cols-${gridCols}`;

  const transition = { duration: 0.3, ease: "easeInOut" };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition,
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -10,
      transition,
      transitionEnd: { display: "none" },
    },
  };

  return (
    <motion.li
      className="relative hidden md:list-item"
      onHoverStart={() => toggleHover(true)}
      onHoverEnd={() => toggleHover(false)}
      onFocus={() => toggleHover(true)}
      onBlur={() => toggleHover(false)}
      tabIndex={0}
      aria-expanded={isHover}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleHover((prev) => !prev);
        }
      }}
    >
      <a
        className="flex items-center gap-1 text-sm lg:text-base text-black font-semibold hover:bg-white/90 px-3 py-2 rounded-xl cursor-pointer"
        aria-haspopup={hasSubMenu}
        href={path}
      >
        {name}
        {hasSubMenu && (
          <ChevronDown
            className={`mt-0.5 transition-transform duration-200 ${
              isHover ? "rotate-180" : ""
            }`}
          />
        )}
      </a>

      {hasSubMenu && (
        <motion.div
          className="absolute mt-2 bg-white/95 text-black rounded-xl shadow-xl w-full max-w-[100vw] md:min-w-[600px] p-5 z-40 origin-top border border-white/30"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
          role="menu"
          aria-label="Submenu"
        >
          <div className={`grid gap-6 ${gridClass}`}>
            {subMenuHeading.map(({ title, icon: Icon }, i) => (
              <div key={i}>
                <p className="text-[18px] font-semibold mb-2 flex items-center gap-2 text-[#03624c]">
                  {Icon && <Icon size={18} />}
                  {title}
                </p>
                <ul className="space-y-1 text-[15px]">
                  {subMenu[i]?.map((link, j) => (
                    <li key={j} className="p-1">
                      <a
                        href={link.href}
                        className="text-[#042222] hover:text-blue-600 transition flex items-center gap-2"
                        role="menuitem"
                      >
                        {link.icon &&
                          (typeof link.icon === "string" ? (
                            <img
                              src={link.icon}
                              alt={link.label}
                              className="w-6 h-6 object-contain"
                            />
                          ) : (
                            <link.icon
                              size={15}
                              className="text-[#1E5470]"
                            />
                          ))}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}