import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ButtonFill from "../../Button/ButtonFill";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We deliver tailored software solutions to streamline your business processes.",
    image: "https://i.ibb.co/J1S5njF/s1.webp",
  },
  {
    title: "Website Design and Development",
    description:
      "We build responsive, modern websites that engage users and drive results.",
    image: "https://i.ibb.co/39x1qHNq/s2.webp",
  },
  {
    title: "Cloud Computing and Hosting Service",
    description:
      "Reliable cloud hosting and computing solutions for scalable businesses.",
    image: "https://i.ibb.co/Z6Z8KqT0/s3.webp",
  },
  {
    title: "AI & Machine Learning Integration",
    description:
      "Integrate AI & ML solutions to make your systems smarter and faster.",
    image: "https://i.ibb.co/ZRQPXr95/s4.webp",
  },
  {
    title: "Android & iOS App Development",
    description:
      "Custom mobile applications for Android and iOS to expand your reach.",
    image: "https://i.ibb.co/Q3MHPtw1/s5.webp",
  },
  {
    title: "3D Graphics & Vector Designing",
    description:
      "Creative 3D graphics and vector designs to elevate your brand visuals.",
    image: "https://i.ibb.co/N2J623Fx/s6.webp",
  },
];

// const ServiceCard = ({ service, delay = 0 }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8, delay }}
//   >
//     <div className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
//       <img
//         src={service.image}
//         alt={service.title}
//         className="w-full h-48 object-cover rounded-lg mb-4"
//       />
//       <h1 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-500 group-hover:text-blue-600">
//         {service.title}
//       </h1>
//       <p className="mt-2 text-gray-600 dark:text-gray-300 transition-colors duration-500 group-hover:text-gray-400">
//         {service.description}
//       </p>
//       <div className="mt-4">
//         <ButtonFill className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
//           Learn More
//         </ButtonFill>
//       </div>
//     </div>
//   </motion.div>
// );


const ServiceCard = ({ service, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    <div className="relative p-6 bg-gray-800 rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
      <img src={service.image} alt={service.title} />
      <h1 className="mt-5 text-xl font-semibold transition-all duration-500 text-green-50">
        {service.title}
      </h1>
      <p className="mt-4 font-medium text-gray-500 transition-all duration-500">
        {service.description}
      </p>
      <a href="#" className="mt-6 inline-block">
        <ButtonFill>Learn More</ButtonFill>
      </a>
    </div>
  </motion.div>
);

const Provide = () => {
  const provideRef = useRef(null);
  const provideInView = useInView(provideRef, { once: true, margin: "-100px" });

  return (
    <div className="pt-16 pb-16 bg-white" ref={provideRef}>
      <div className="w-[90%] mx-auto">
        <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={provideInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-[#53aedb] uppercase"
            >
              What We Provide
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={provideInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="text-[15px] sm:text-[17px] md:text-[19px] mt-1 font-semibold text-gray-500"
            >
              Providing high-quality software services for all industries
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={provideInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:ml-auto"
          >
            <a
  href="#"
  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-black transition-colors duration-300 sm:text-lg md:text-xl hover:text-indigo-500"
>
  All Services
  <ArrowRight className="w-5 h-5" />
</a>
          </motion.div>
        </div>

        <div className="grid items-center grid-cols-1 gap-4 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provide;
