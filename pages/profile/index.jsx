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
            Profile of Jeffrey Ross
          </h1>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-gray-900">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xl font-bold">🤖</span>
              <span className="text-lg font-semibold">Profile</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Technical Product Manager focused on building data platforms and
              agentic workflows in regulated environments. I’ve led the
              development of LLM-driven applications, semantic search systems,
              and real-time data pipelines across clinical and financial
              domains.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I specialize in translating complex AI and data capabilities into
              scalable, production-ready products by combining hands-on
              technical experience with strong stakeholder collaboration and
              product strategy.
            </p>
            <Link
              href="/docs/jeffrey-ross-resume.pdf"
              target="_blank"
              className="text-sm text-gray-800 dark:text-gray-300 hover:underline flex items-center"
            >
              View My Resume
              <span className="ml-1">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
