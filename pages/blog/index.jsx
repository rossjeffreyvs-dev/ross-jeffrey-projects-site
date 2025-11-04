import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useState } from "react";

const categories = [
  "All Posts",
  "Engineering",
  "Community",
  "Company News",
  "Customers",
  "v0",
  "Changelog",
  "Press",
];

const posts = [
  {
    title: "You Can Just Ship Agents",
    date: "Oct 23",
    category: "Engineering",
    summary:
      "A new era of shipping: deploy AI agents just like web apps. Vercel enables seamless hosting of LLM-driven apps.",
    href: "/blog/you-can-just-ship-agents",
  },
  {
    title: "Built-in durability: Introducing Workflow Development Kit",
    date: "Oct 23",
    category: "v0",
    summary:
      "Building reliable software shouldn't require mastering distributed systems. The WDK helps build durable AI pipelines.",
    href: "#",
  },
  {
    title: "Zero-config backends on Vercel AI Cloud",
    date: "Oct 23",
    category: "Engineering",
    summary:
      "Extend your frontend with powerful AI-first backend logic running at the edge.",
    href: "#",
  },
];

export default function Blog() {
  const [selected, setSelected] = useState("All Posts");

  const filtered =
    selected === "All Posts"
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={
                selected === cat
                  ? "px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black"
                  : "px-4 py-2 rounded-full text-gray-600 hover:text-black dark:hover:text-white border"
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map(({ title, date, summary, href }, idx) => (
            <article
              key={idx}
              className="p-6 border rounded hover:shadow-lg transition bg-white dark:bg-gray-900"
            >
              <p className="text-sm text-gray-500 mb-2">{date}</p>
              <h2 className="text-xl font-semibold mb-2">
                <Link href={href} className="hover:underline">
                  {title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {summary}
              </p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
