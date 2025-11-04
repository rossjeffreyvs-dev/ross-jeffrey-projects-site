import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-grow pt-24">
        <section className="text-center px-4 py-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Where AI, Product Vision, and Engineering Meet
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Bridging advanced AI research with real-world product execution.
            From GPT-powered agents to enterprise-scale platforms — I build
            impactful tools that ship.
          </p>
          <div className="mt-8 space-x-4">
            <Link
              href="/projects"
              className="px-6 py-3 border border-black rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              View Projects
            </Link>
            <Link
              href="/docs/jeffrey-ross-resume.pdf"
              target="_blank"
              className="px-6 py-3 border border-black rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              View Résumé
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-black rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Logos Strip */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center items-center gap-10">
            <img
              src="/logos/mskcc.png"
              alt="MSKCC"
              className="h-24 w-auto opacity-70 hover:opacity-100 transition"
            />
            <img
              src="/logos/euromoney.png"
              alt="Euromoney"
              className="h-24 w-auto opacity-70 hover:opacity-100 transition"
            />
            <img
              src="/logos/palantir.png"
              alt="Palantir"
              className="h-24 w-auto opacity-70 hover:opacity-100 transition"
            />
            <img
              src="/logos/salesforce.png"
              alt="Salesforce"
              className="h-24 w-auto opacity-70 hover:opacity-100 transition"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold">
              Why teams build on VercelClone
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold">Zero-config Deploys</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Deploy from Git in seconds with automatic HTTPS and a global
                  CDN.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Live Previews</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Every push creates a preview URL so your team can review along
                  the way.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Edge-first Performance
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Run your frontend and functions at the edge for minimal
                  latency and maximum scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black dark:bg-white text-white dark:text-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to start shipping?</h2>
            <Link
              href="#"
              className="mt-8 inline-block px-8 py-4 bg-white text-black rounded hover:bg-gray-200 transition"
            >
              Create your account
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
