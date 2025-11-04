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

  // 🕒 Auto-hide toast after 5 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-20 px-4">
        <div className="max-w-xl w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md relative">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
            Contact Me
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Send me a message — I’ll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <Footer />

        {/* Toast Notification */}
        <AnimatePresence>
          {(status === "success" || status === "error") && (
            <motion.div
              className="fixed bottom-6 right-6 z-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className={`flex items-center space-x-3 rounded-xl shadow-lg px-5 py-4 text-white ${
                  status === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                <span className="text-2xl">
                  {status === "success" ? "✅" : "❌"}
                </span>
                <div>
                  <p className="font-semibold">
                    {status === "success"
                      ? "Message Sent!"
                      : "Something Went Wrong"}
                  </p>
                  <p className="text-sm text-white/90">
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
    </div>
  );
}
