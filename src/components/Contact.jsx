import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";
import toast from "react-hot-toast";

const Contact = () => {
  const { theme } = useTheme();
  const formRef = useRef();
  const { scrollY } = useScroll();

  // Parallax scroll values
  const y = useTransform(scrollY, [0, 100], [0, -30]); // bigger movement
  const x = useTransform(scrollY, [0, 100], [0, 40]); // horizontal shift

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_rdz4vpe",
        "template_e22e9qd",
        formRef.current,
        "E4RVxhSvXmaNImLgQ"
      )
      .then(
        () => {
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
          formRef.current.reset();

          // 🎉 Success toast
          toast.success("Message sent successfully!", {
            style: {
              background: theme === "dark" ? "#1f2937" : "#fff",
              color: theme === "dark" ? "#fff" : "#000",
              border:
                theme === "dark" ? "1px solid #3b82f6" : "1px solid #f59e0b",
            },
            iconTheme: {
              primary: theme === "dark" ? "#3b82f6" : "#f59e0b",
              secondary: "#fff",
            },
          });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);

          // ❌ Error toast
          toast.error("Something went wrong. Please try again.", {
            style: {
              background: theme === "dark" ? "#1f2937" : "#fff",
              color: theme === "dark" ? "#fff" : "#000",
              border: "1px solid red",
            },
            iconTheme: {
              primary: "red",
              secondary: "#fff",
            },
          });
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        {/* <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3> */}
        <motion.div variants={textVariant()}>
          <motion.p
            style={{ y, x }}
            className={`${styles.sectionSubText} ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Get in touch
          </motion.p>
          <motion.h2
            style={{ y, x }}
            className={`text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r bg-clip-text text-transparent 
                      ${
                        theme === "dark"
                          ? "from-violet-400 via-fuchsia-500 to-indigo-400"
                          : "from-purple-600 via-pink-500 to-indigo-600"
                      } animate-gradient`}
          >
            Contact.
          </motion.h2>
        </motion.div>

        <form
          ref={formRef}
          className="flex flex-col gap-8 mt-12"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="Portfolio Contact" />

          {/* Name */}
          <label className="flex flex-col">
            <span
              className={`font-medium mb-2 text-sm
              ${theme === "dark" ? "text-white" : "text-gray-800"}`}
            >
              Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={`py-4 px-6 rounded-lg outline-none transition-all duration-300
                ${
                  theme === "dark"
                    ? "bg-black/40 text-white placeholder-gray-400 border border-blue-500/30 focus:ring-2 focus:ring-blue-500"
                    : "bg-gray-100 text-black placeholder-gray-500 border border-amber-500/30 focus:ring-2 focus:ring-amber-500"
                }`}
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span
              className={`font-medium mb-2 text-sm ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className={`py-4 px-6 rounded-lg outline-none transition-all duration-300
                ${
                  theme === "dark"
                    ? "bg-black/40 text-white placeholder-gray-400 border border-blue-500/30 focus:ring-2 focus:ring-blue-500"
                    : "bg-gray-100 text-black placeholder-gray-500 border border-amber-500/30 focus:ring-2 focus:ring-amber-500"
                }`}
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span
              className={`font-medium mb-2 text-sm ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Message
            </span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className={`py-4 px-6 rounded-lg outline-none transition-all duration-300 resize-none
                ${
                  theme === "dark"
                    ? "bg-black/40 text-white placeholder-gray-400 border border-blue-500/30 focus:ring-2 focus:ring-blue-500"
                    : "bg-gray-100 text-black placeholder-gray-500 border border-amber-500/30 focus:ring-2 focus:ring-amber-500"
                }`}
            />
          </label>

          {/* Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`py-3 px-8 rounded-lg text-white font-semibold shadow-lg transition-all duration-300
            ${
              theme === "dark"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:ring-2 hover:ring-blue-400/50"
                : "bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 hover:ring-2 hover:ring-amber-400/50"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;
