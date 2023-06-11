import React, { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

import emailjs from "@emailjs/browser";

// React toastify
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import mixpanel from "mixpanel-browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const handleSubmit = (e) => {
    e?.preventDefault();
    setLoading(true);

    mixpanel.track("Clicked Send on Contact section")

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_JS_SERVICEID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATEID,
        {
          from_name: form?.name,
          to_name: "Yuvraj Singh",
          from_email: form?.email,
          to_email: import.meta.env.VITE_MY_EMAIL,
          message: form?.message,
        },
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then((e) => {
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
        toast.success("Thank you for contacting, I will reach you soon.", {
          position: "bottom-right",
          autoClose: 5000,
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
        toast.error("Something went wrong", {
          position: "bottom-right",
          autoClose: 3000,
        });
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        {/* Conatact form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={`${styles.sectionSubText}`}>Get in touch</p>
          <h2 className={`${styles.sectionHeadText}`}>Contact</h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col mt-12 gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form?.name}
                required={true}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 outline-none placeholder:text-secondary text-white rounded-lg border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form?.email}
                required={true}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 outline-none placeholder:text-secondary text-white rounded-lg border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                onChange={handleChange}
                value={form?.message}
                required={true}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 outline-none placeholder:text-secondary text-white rounded-lg border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="w-fit bg-tertiary py-3 px-8 outline-none font-bold text-white shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Floating earth model */}

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <ToastContainer theme="dark" />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
