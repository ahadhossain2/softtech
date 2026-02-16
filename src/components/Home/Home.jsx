import React from "react";
// import Offerings from "../Helper/Offerings";
// import Newsletter from "../Helper/Newsletter";
// import ScrollToTopButton from "../Helper/ScrollToTopButton";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Hero from "../../pages/Home/Hero";
import Provide from "../../pages/Home/provide";
import ContactForm from "../../common/ContactForm";

const Home = () => {

  // provide
  const workRef = useRef(null);
  const workInView = useInView(workRef, { once: true, margin: "-100px" });

  // Successful
  const sucessRef = useRef(null);
  const sucessInView = useInView(sucessRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <Hero/>

      {/* What we provide section  */}
      <Provide/>

      {/* Our Offerings */}
      {/* <section className="p-6 bg-slate-900">
        <div>
          <Offerings />
        </div>
      </section> */}

      {/* How Can We Work */}
      <section className="p-10 bg-slate-50" ref={workRef}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={workInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-center text-[40px] text-[#151517] mb-8"
        >
          How Can We Work With You
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Software Development Outsourcing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <h1 className="mb-4 text-[#53aedb] text-[20px] font-semibold">
              Software Development Outsourcing
            </h1>
            <p className="text-[#151517]">
              We build your software from start to finish, letting you focus on
              your core business.
            </p>
          </motion.div>

          {/* Dedicated Teams */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center justify-center p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <h1 className="mb-4 text-[#53aedb] text-[20px] font-semibold">
              Dedicated Teams
            </h1>
            <p className="text-[#151517]">
              You get a fully committed team that integrates into your
              organization and culture.
            </p>
          </motion.div>

          {/* IT Staff Augmentation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center justify-center p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <h1 className="mb-4 text-[#53aedb] text-[20px] font-semibold">
              IT Staff Augmentation
            </h1>
            <p className="text-[#151517]">
              Fill skills gaps fast by bringing in qualified professionals
              whenever you need them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Successful Softwares */}
      <div className="pt-16 pb-16 bg-white" ref={sucessRef}>
        {/* ============ header =================== */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={sucessInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="uppercase text-lg sm:text-xl md:text-2xl font-bold text-[#53aedb]"
          >
            Softwares
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={sucessInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl mt-1 font-semibold text-[#151517]"
          >
            Driving Change with Innovative <br /> Successful Softwares
          </motion.h1>
        </div>
        {/* ============= card ============= */}
        <div className="w-[90%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* box 1 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={sucessInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className="p-6 bg-green-100 rounded-lg"
            >
              <img src="https://i.ibb.co/RRxrTP4/i1.webp" alt="i1" border="0" />
              <h1 className="text-xl mt-6 font-bold text-[#53aedb]">
                Best Marketing Software
              </h1>
              <p className="mt-3 font-medium text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro
              </p>
            </motion.div>
          </div>
          {/* box 2 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={sucessInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="p-6 bg-red-100 rounded-lg"
            >
              <img
                src="https://i.ibb.co/TBF0Jf1c/i2.webp"
                alt="i2"
                border="0"
              />
              <h1 className="text-xl mt-6 font-bold text-[#53aedb]">
                Product Sales Software
              </h1>
              <p className="mt-3 font-medium text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro
              </p>
            </motion.div>
          </div>
          {/* box 3 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={sucessInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 bg-green-100 rounded-lg"
            >
              <img
                src="https://i.ibb.co/B5JS0PjW/i3.webp"
                alt="i3"
                border="0"
              />
              <h1 className="text-xl mt-6 font-bold text-[#53aedb]">
                Best Marketing Software
              </h1>
              <p className="mt-3 font-medium text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      {/* <Newsletter /> */}

      {/* Contact From */}
      <ContactForm />

      {/* Scrolltop */}
      {/* <ScrollToTopButton /> */}
    </>
  );
};

export default Home;