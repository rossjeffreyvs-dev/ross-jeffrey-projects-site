import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="projectsPage">
      <Navbar />
      <main className="projectsMain">
        <section className="projectsHero">
          <h1 className="projectsTitle">Personal Portfolio Projects</h1>
        </section>

        <section className="projectsGrid">
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
              View project description and live demo
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Agentic Clinical Trial Eligibility */}
          <div className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-gray-900">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xl font-bold">📝</span>
              <span className="text-lg font-semibold">
                Agentic Clinical Trial Eligibility
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Lorem ipsum{" "}
            </p>
            <Link
              href="https://ai-clinical-trial-eligibility.jeffrey-ross.me"
              className="text-sm text-gray-800 dark:text-gray-300 hover:underline flex items-center"
            >
              View project description and live demo
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Claude Code */}
          <div className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-gray-900">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-lg font-bold">🛍️</span>
              <span className="text-lg font-semibold">Claude Code</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Lorem ipsum{" "}
            </p>
            <Link
              href="https://ai-claude-code.jeffrey-ross.me"
              className="text-sm text-gray-800 dark:text-gray-300 hover:underline flex items-center"
            >
              View project description and live demo
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
              Lorem ipsum{" "}
            </p>
            <Link
              href="https://ai-fx-insights.jeffrey-ross.me"
              className="text-sm text-gray-800 dark:text-gray-300 hover:underline flex items-center"
            >
              View project description and live demo
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* AI Smart Thermostat */}
          <div className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-gray-900">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xl font-bold">🎨</span>
              <span className="text-lg font-semibold">AI Smart Thermostat</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Lorem ipsum</p>
            <Link
              href="https://ai-smart-thermostat.jeffrey-ross.me"
              className="text-sm text-gray-800 dark:text-gray-300 hover:underline flex items-center"
            >
              View project description and live demo
              <span className="ml-1">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
