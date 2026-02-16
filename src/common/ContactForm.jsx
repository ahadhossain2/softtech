import React from "react";

import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    number: "",
    message: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [status, setStatus] = useState("");
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters long.";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address.";

    if (!formData.service) newErrors.service = "Please select a service.";

    if (!formData.number || formData.number.replace(/\D/g, "").length < 10)
      newErrors.number = "Valid phone number required.";

    if (formData.message.length > 500)
      newErrors.message = "Message cannot exceed 500 characters.";

    if (!formData.budget) newErrors.budget = "Please select a budget.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const formDataObj = new FormData();
    formDataObj.append("access_key", "276695ce-1e44-4cb0-bc1f-df51e6a92587");
    Object.entries(formData).forEach(([key, value]) =>
      formDataObj.append(key, value)
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const result = await response.json();

    if (result.success) {
      setSuccess("Message sent successfully!");
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        number: "",
        message: "",
        budget: "",
      });
    } else {
      setSuccess("Failed to send message. Please try again.");
      setStatus("error");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  // contact section
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6"
      ref={contactRef}
    >
      {/* Left Section: Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={contactInView ? { opacity: 1, x: 0 } : {}}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
      >
        <img
          src="https://i.ibb.co/nMt8jQgP/Contact-Form.jpg"
          alt="Contact-Form"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Section: Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={contactInView ? { opacity: 1, x: 0 } : {}}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <div className="p-6 ">
          <h3 className="text-xl font-semibold text-[#53aedb] mb-3">
            Have Questions? Lets Talk.
          </h3>
          <p className="text-[#151517] mb-6">
            We have got the answers to your questions.
          </p>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="flex flex-col gap-6 sm:flex-row">
              {/* Name Input */}
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 px-4 py-2 text-black border rounded focus:outline-blue-950"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="w-full sm:w-1/2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 px-4 py-2 text-black border rounded focus:outline-blue-950"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <PhoneInput
                country={"ca"}
                value={formData.number}
                onChange={(phone) =>
                  setFormData((prev) => ({ ...prev, number: phone }))
                }
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: false,
                }}
                inputClass="!w-full !text-black"
                specialLabel=""
                containerClass="w-full text-black"
              />
              {errors.number && (
                <p className="mt-1 text-sm text-red-500">{errors.number}</p>
              )}
            </div>

            <div className="mb-4">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm text-gray-800 transition bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" className="text-gray-400">
                  Select your best service
                </option>
                <option value="UX, Product and Design">
                  UX, Product and Design
                </option>
                <option value="Backend Development Services">
                  Backend Development Services
                </option>
                <option value="Frontend Development Services">
                  Frontend Development Services
                </option>
                <option value="Custom Software Development">
                  Custom Software Development
                </option>
                <option value="QA and Software Testing">
                  QA and Software Testing
                </option>
                <option value="SAAS Development Services">
                  SAAS Development Services
                </option>
                <option value="MVP for Startups">MVP for Startups</option>
                <option value="Software Consulting Services">
                  Software Consulting Services
                </option>
                <option value="Enterprise Software Development">
                  Enterprise Software Development
                </option>
                <option value="Web Scraping Services">
                  Web Scraping Services
                </option>
              </select>

              {errors.service && (
                <p className="mt-1 text-sm text-red-500">{errors.service}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">
                Please your describe your project?
              </label>
              <textarea
                name="message"
                className="w-full p-2 px-4 py-2 text-black border rounded resize-none focus:outline-blue-950"
                placeholder="Details?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="mb-4">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm text-gray-800 transition bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" className="text-gray-400">
                  What is your budget?
                </option>
                <option value="Less than USD 50,000">
                  Less than USD 50,000
                </option>
                <option value="USD 50,000 - USD 100,000">
                  USD 50,000 - USD 100,000
                </option>
                <option value="USD 100,000 - USD 200,000">
                  USD 100,000 - USD 200,000
                </option>
                <option value="USD 200,000 - USD 500,000">
                  USD 200,000 - USD 500,000
                </option>
                <option value="Above USD 500,000">Above USD 500,000</option>
              </select>

              {errors.service && (
                <p className="mt-1 text-sm text-red-500">{errors.service}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-24 p-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          <AnimatePresence>
  {success && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`mt-4 flex items-center gap-2 px-4 py-3 rounded-md text-sm font-medium ${
        status === "success"
          ? "bg-green-100 text-green-700 border border-green-300"
          : "bg-red-100 text-red-700 border border-red-300"
      }`}
    >
      {status === "success" ? "🎉" : "⚠️"}
      <span>{success}</span>
    </motion.div>
  )}
</AnimatePresence>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;