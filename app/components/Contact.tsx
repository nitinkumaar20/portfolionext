"use client";

import { useState, useRef, FormEvent } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputItem } from "./InputItem"; // Ensure this uses Tailwind

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

  const onchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submission
    const emailSent = localStorage.getItem("email");
    if (emailSent === message.email) {
      toast.warning("Message already sent with this email.");
      return;
    }

    setLoadershow(true);

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: message.Fname,
          last_name: message.Lname,
          phone_no: message.phone,
          email: message.email,
          message: message.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully.");
        setSuccess(false);
        localStorage.setItem("email", message.email);
      } else {
        data.errors?.forEach((err: { message: string }) => {
          toast.error(err.message);
        }) || toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
    } finally {
      setLoadershow(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section id="contact" className="py-16 px-20 md:px-40 ">
        {success ? (
          <div>
            <div className="text-center mb-8 flex flex-col items-center ">
                 <ul className="flex gap-3 text-4xl font-bold tracking-widest">
          {'CONTACT'.split('').map((char, i) => (
            <li key={i}>{char}</li>
          ))}
        </ul>
              {/* <h1 className="text-3xl font-bold text-green-300">CONTACT</h1> */}
            </div>

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <InputItem
                input="First Name"
                value={message.Fname}
                type="text"
                id="Fname"
                name="Fname"
                onChangeData={onchange}
              />

              <InputItem
                input="Last Name"
                value={message.Lname}
                type="text"
                id="Lname"
                name="Lname"
                onChangeData={onchange}
              />

              <InputItem
                input="Email"
                value={message.email}
                type="email"
                id="email"
                name="email"
                onChangeData={onchange}
              />

              <InputItem
                input="Phone No"
                value={message.phone}
                type="tel"
                id="Pno"
                name="phone"
                pattern="[0-9]{10}"
                onChangeData={onchange}
              />

              <div className="col-span-1 md:col-span-2">
                <label htmlFor="message" className="block text-md font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Enter message"
                  value={message.message}
                  onChange={onchange}
                  className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-4 gap-4">
                <motion.button
                  initial={{ y: -100 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1 }}
                  type="submit"
                  className={`px-6 py-2 text-white bg-teal-400 hover:bg-teal-700 rounded ${
                    loadershow ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loadershow}
                >
                  {loadershow ? "Sending..." : "Submit"}
                </motion.button>
              </div>
            </motion.form>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 py-10">
            <h2 className="text-xl font-semibold text-green-700">Message sent successfully</h2>
            <IoMdDoneAll className="text-[3rem] text-green-500" />
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
