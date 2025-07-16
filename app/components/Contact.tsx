"use client";

import { useState, useRef, FormEvent } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { Inputitem } from "./Inputitem"; // make sure this uses Tailwind too

const Contact = () => {
  const [message, setMessage] = useState({
    Fname: "",
    Lname: "",
    phone: "",
    message: "",
    email: "",
  });
  const [success, setSuccess] = useState(true);
  const [loadershow, setLoadershow] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const data = {
    from_name: `${message.Fname} ${message.Lname}`,
    from_email: message.email,
    to_name: "Nitin Kumar",
    messagdsd: message.message,
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (
      localStorage.getItem("email") !== message.email ||
      localStorage.getItem("email") === null
    ) {
      setLoadershow(true);

      emailjs
        .send("", "", data, {
          publicKey: "",
        })
        .then(() => {
          localStorage.setItem("email", message.email);
          setSuccess(false);
          toast.success("Message sent successfully!");
          setLoadershow(false);
        })
        .catch((error) => {
          toast.error("Message failed to send.");
          console.error("Email error:", error);
          setLoadershow(false);
        });
    } else {
      toast.warning("Message already sent with this email.");
    }
  };

  const onchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />
      <section id="contact" className="py-16 px-4 md:px-20 bg-white">
        {success ? (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-green-700">CONTACT</h1>
            </div>

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Inputitem
                input="First Name"
                value={message.Fname}
                type="text"
                id="Fname"
                name="Fname"
                onChangeData={onchange}
              />

              <Inputitem
                input="Last Name"
                value={message.Lname}
                type="text"
                id="Lname"
                name="Lname"
                onChangeData={onchange}
              />

              <Inputitem
                input="Email"
                value={message.email}
                type="email"
                id="email"
                name="email"
                onChangeData={onchange}
              />

              <Inputitem
                input="Phone No"
                value={message.phone}
                type="tel"
                id="Pno"
                name="phone"
                pattern="[0-9]{10}"
                onChangeData={onchange}
              />

              <div className="col-span-1 md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Enter message"
                  value={message.message}
                  onChange={onchange}
                  className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-4 gap-4">
                <motion.button
                  initial={{ y: -100 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1 }}
                  type="submit"
                  className={`px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded ${
                    loadershow ? "hidden" : ""
                  }`}
                >
                  Submit
                </motion.button>

                <ClipLoader
                  color="#24fc03"
                  loading={loadershow}
                  size={40}
                  aria-label="Loading Spinner"
                />
              </div>
            </motion.form>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 py-10">
            <h2 className="text-xl font-semibold text-green-700">Message sent successfully</h2>
            <IoMdDoneAll className="text-[5rem] text-green-500" />
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
