import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ButtonFill from "../../Button/ButtonFill";

const slides = [
  {
    id: 1,
    title: "Building Digital Excellence",
    description:
      "We craft powerful software solutions that transform ideas into scalable digital products.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Web & App Development",
    description:
      "High-performance applications built with cutting-edge technologies and clean architecture.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Secure Cloud Infrastructure",
    description:
      "Enterprise-grade cloud solutions engineered for performance, security, and long-term growth.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[92vh] overflow-hidden bg-black">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={slides[current].image}
            alt="Hero Slide"
            className="object-cover w-full h-full scale-105"
          />

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-6 md:px-20">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                {slides[current].title}
              </h2>

              <p className="mt-6 text-lg text-gray-400">
                {slides[current].description}
              </p>
              <a href="#" className="mt-6 inline-block"><ButtonFill>Get Started</ButtonFill></a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute flex gap-3 transform -translate-x-1/2 bottom-8 left-1/2">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`
        h-3 transition-all duration-500 rounded-full
        ${current === index ? "bg-gradient-to-r from-blue-400 to-blue-600 w-8" : "bg-white w-3 hover:w-6 hover:bg-blue-500"}
      `}
    />
  ))}
</div>

    </div>
  );
};

export default Hero;
