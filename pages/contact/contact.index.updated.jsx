import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const toastClass =
    status === "success"
      ? "contactToast contactToastSuccess"
      : "contactToast contactToastError";

  return (
    <div className="contactPage">
      <Navbar />

      <section className="contactSection">
        <div className="contactCard">
          <h1 className="contactTitle">Contact Me</h1>
          <p className="contactSubtitle">
            Send me a message — I’ll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="contactForm">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contactField"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contactField"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="contactField"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="contactButton"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <AnimatePresence>
          {(status === "success" || status === "error") && (
            <motion.div
              className="contactToastWrap"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
            >
              <div className={toastClass}>
                <span className="contactToastIcon" aria-hidden="true">
                  {status === "success" ? "✅" : "❌"}
                </span>
                <div>
                  <p className="contactToastTitle">
                    {status === "success"
                      ? "Message Sent!"
                      : "Something Went Wrong"}
                  </p>
                  <p className="contactToastText">
                    {status === "success"
                      ? "Thanks for reaching out — I’ll reply soon."
                      : "Please try again later or email me directly."}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
}
