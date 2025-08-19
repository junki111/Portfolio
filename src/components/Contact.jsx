import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((res) => (res.json())
    ).then((res) => {
      console.log(res)
      if (res.status == 'success') {
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
        formRef.current.reset();
        alert("Message sent successfully")
      } else if (res.status == 'fail') {
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
        formRef.current.reset();
        alert("Message failed to send")
      }
    })

    // emailjs.sendForm("service_7vz7z5i", "template_7vz7z5i", form).then(
    //   (result) => {
    //     console.log(result.text);
    //     setLoading(false);
    //     setForm({
    //       name: "",
    //       email: "",
    //       message: "",
    //     });
    //     formRef.current.reset();
    //   },
    //   (error) => {
    //     console.log(error.text);
    //     setLoading(false);
    //   }
    // );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          className="flex flex-col gap-8 mt-12"
          onSubmit={handleSubmit}
        >
          <input
              type="hidden"
              name="_subject"
              value="Portfolio Contact"
            />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              onChange={handleChange}
              placeholder="What's your name?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              onChange={handleChange}
              placeholder="What's your email?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl outlined-none border-none font-medium"
              onChange={handleChange}
              placeholder="What do you want to say?"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-4 px-8 rounded-lg border-none text-white font-medium w-fit shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
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

export default SectionWrapper(Contact, "contact");
