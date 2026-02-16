import React from "react";

"use client"

import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
    setActiveIndex(null);
  };

  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const subMenuVariants = {
    enter: {
      height: "auto",
      opacity: 1,
      overflow: "hidden",
      transition: { duration: 0.3 },
    },
    exit: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      {/* Toggle button */}
      <button className="lg:hidden z-[999] relative text-black" onClick={toggleDrawer}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Slide drawer */}
      <motion.div
        className="fixed top-16 left-0 right-0 bottom-0 z-[998] overflow-y-auto backdrop-blur-md bg-[#070707] text-white p-6 pb-20 lg:hidden"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.4 }}
      >
        <ul className="space-y-2">
          {Menus.map((menu, index) => {
            const isActive = activeIndex === index;
            const hasSubMenu = Array.isArray(menu.subMenu);

            return (
              <li key={menu.name}>
                <div
                  className="flex items-center justify-between p-3 rounded-md hover:bg-white/20 cursor-pointer"
                  onClick={() => (hasSubMenu ? toggleSubMenu(index) : null)}
                >
                  <a href={menu.path || "#"} className="text-lg font-medium">
                    {menu.name}
                  </a>
                  {hasSubMenu && (
                    <ChevronDown
                      className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                      size={18}
                    />
                  )}
                </div>

                {/* Submenu dropdown */}
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isActive ? "enter" : "exit"}
                    variants={subMenuVariants}
                    className="ml-4 mt-2 space-y-6"
                  >
                    {Array.isArray(menu.subMenuHeading) &&
                      menu.subMenuHeading.map(({ title, icon: Icon }, colIndex) => (
                        <div key={title}>
                          <h4 className="text-sm font-semibold text-white/80 mb-2 flex items-center gap-2">
                            {Icon && <Icon size={16} />} {title}
                          </h4>
                          <ul className="pl-2 border-l border-white/10 space-y-1">
                            {(menu.subMenu[colIndex] || []).map((item, i) => (
                              <li key={i}>
                                <a
                                  href={item.href}
                                  className="flex items-center gap-2 px-2 py-1 text-sm hover:text-[#53aedb] hover:bg-white/10 rounded transition"
                                >
                                  {item.icon &&
                                    (typeof item.icon === "string" ? (
                                      <img
                                        src={item.icon}
                                        alt={item.label}
                                        className="w-4 h-4 object-contain"
                                      />
                                    ) : (
                                      <item.icon size={14} className="text-[#53aedb]" />
                                    ))}
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
}