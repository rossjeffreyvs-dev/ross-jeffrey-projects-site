import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", company: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4">
        <h1 className="text-4xl font-bold text-center">Contact</h1>
        <p className="mt-4 text-center text-gray-600">
          Interested in working together?
          <br />
          Reach out to inquire about employment opportunities or collaboration.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 max-w-xl mx-auto space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="mt-1 block w-full border rounded px-3 py-2"
              placeholder="Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              className="mt-1 block w-full border rounded px-3 py-2"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="mt-1 block w-full border rounded px-3 py-2"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
              rows="4"
              placeholder="Your message"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded hover:bg-gray-900 transition"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </div>

          {status === "success" && (
            <p className="text-green-600 text-center mt-4">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-4">
              ❌ Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
}
