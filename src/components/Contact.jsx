
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    contact_person: "",
    company_name: "",
    position: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_1h78si7",  // Your EmailJS Service ID
      "template_eiyj0r4",  // Your Template ID
      {
        to_name: "Sandeep Kumar",
        to_email: "s77297739@gmail.com",
        // Recruiter info:
        contact_person: form.contact_person,
        company_name: form.company_name,
        job_position: form.position,
        contact_email: form.email,
        contact_phone: form.phone,
        message: form.message,
      },
      "ynm3y_Dw5pTjuKEhU"  // Your Public Key
    ).then(
      () => {
        setLoading(false);
        alert("Thank you! I'll respond ASAP.");
        setForm({
          contact_person: "",
          company_name: "",
          position: "",
          email: "",
          phone: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);
        alert("Oops! Something went wrong. Please try again.");
      }
    );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* Contact Person */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='contact_person'
              value={form.contact_person}
              onChange={handleChange}
              placeholder="Recruiter's name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          
          

          {/* Email */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Work Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your professional email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          {/* Phone */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Phone (Optional)</span>
            <input
              type='tel'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Message */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Opportunity details, interview availability, etc.'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Opportunity"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");