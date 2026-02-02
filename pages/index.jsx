import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-grow pt-12">
        <section className="text-center px-4 py-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Where AI, Product Vision, and Engineering Meetsss
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
              Why Teams Build with Confidence
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold">
                  AI & Data Platform Leadership
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Built enterprise-scale AI and data infrastructure at Memorial
                  Sloan Kettering, integrating LIMS, Foundry, and GPT-5 to
                  streamline research workflows and accelerate trial eligibility
                  analysis.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Full-Stack Product Innovation
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Led modernization of $100M global platforms at Euromoney
                  Institutional Investor—architecting Salesforce and Azure-based
                  SaaS systems that improved operational efficiency and grew
                  digital revenue 15% YoY.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Founder-Driven Engineering Mindset
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Created and scaled multiple SaaS ventures, from social
                  networking at SixDegrees.com to content and campaign
                  platforms, combining hands-on coding expertise with product
                  vision and user-centric design.
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
