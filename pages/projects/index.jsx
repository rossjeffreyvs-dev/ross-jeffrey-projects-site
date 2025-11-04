import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The teams we empower.
          </h1>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Get a Demo
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {/* Notion */}
          <div className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-gray-900">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xl font-bold">📝</span>
              <span className="text-lg font-semibold">Notion</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              What once took an hour to deploy a hotfix now takes just 15
              minutes, and rolling back changes happens in seconds.
            </p>
            <Link
              href="./projects/project1"
              className="text-sm text-gray-800 dark:text-gray-300 hover:underline flex items-center"
            >
              Read the full story
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* PAIGE */}
          <div className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-gray-900">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-lg font-bold">🛍️</span>
              <span className="text-lg font-semibold">PAIGE</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              With Vercel, PAIGE boosted their Black Friday revenue by 22% and
              increased conversion rates by 76%.
            </p>
            <Link
              href="/project1.jsx"
              className="text-sm text-gray-800 dark:text-gray-300 hover:underline flex items-center"
            >
              Read the full story
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Leonardo.Ai */}
          <div className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-gray-900">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xl font-bold">🎨</span>
              <span className="text-lg font-semibold">Leonardo.Ai</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              “Switching to Vercel transformed our workflow, cutting build times
              from 10 minutes to just 2 minutes.”
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Peter Runham, Co-Founder & CTO
            </p>
            <Link
              href="#"
              className="text-sm text-gray-800 dark:text-gray-300 hover:underline flex items-center"
            >
              Read the full story
              <span className="ml-1">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
