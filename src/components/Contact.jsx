import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_a2aeetd", // Replace with your EmailJS service ID
        "template_6oogsz8", // Replace with your EmailJS template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "cnfvn4rYqyeHN6cdN" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("Message successfully sent!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 gap-4 flex flex-col"
        >
          <span className="text-white font-medium mt-3">Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.name}
            onChange={handleChange}
            required
          />
          <span className="text-white font-medium mt-3">Email Address</span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.email}
            onChange={handleChange}
            required
          />
          <span className="text-white font-medium mt-3">Message</span>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
