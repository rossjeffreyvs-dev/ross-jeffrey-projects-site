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
            Personal Portfolio Projects
          </h1>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Résumé Match */}
          <div className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-gray-900">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xl font-bold">🤖</span>
              <span className="text-lg font-semibold">AI Résumé Match</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Upload a résumé and job description to see matched skills, gaps,
              and suggestions. Demo runs as a Dockerized app on AWS Lightsail
              and is embedded here via proxy.
            </p>
            <Link
              href="https://resume-analyzer.jeffrey-ross.me"
              className="text-sm text-gray-800 dark:text-gray-300 hover:underline flex items-center"
            >
              View live demo
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Notion */}
          <div className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-gray-900">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xl font-bold">📝</span>
              <span className="text-lg font-semibold">
                Agentic Clinical Trial
              </span>
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
              <span className="text-lg font-semibold">Claude Code</span>
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

          {/* AI FX Insights */}
          <div className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-gray-900">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xl font-bold">🎨</span>
              <span className="text-lg font-semibold">AI FX Insights</span>
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

          {/* AI Smart Thermostat */}
          <div className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-gray-900">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xl font-bold">🎨</span>
              <span className="text-lg font-semibold">AI Smart Thermostat</span>
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
