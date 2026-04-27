import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="projectsPage">
      <Navbar />
      <main className="projectsMain">
        <section className="projectsHero">
          <h1 className="projectsTitle">Portfolio Projects</h1>
        </section>

        <section className="projectsGrid">
          <Link
            href="https://clinical-trial-patient-agent.jeffrey-ross.me/"
            className="projectCard"
          >
            <div className="projectCardHeader">
              <span className="projectCardIcon">🧬</span>
              <h2 className="projectCardTitle">
                Agentic Clinical Trial Eligibility
              </h2>
            </div>
            <p className="projectCardText">
              An AI-powered, multi-agent system that evaluates patient
              eligibility for clinical trials in real time. It combines semantic
              search, protocol interpretation, and explainable reasoning to
              identify high-quality matches and support human-in-the-loop review
              workflows.
            </p>
            <span className="projectLink">
              View project description and live demo →
            </span>
          </Link>

          <Link
            href="https://semantic-patient-search.jeffrey-ross.me/"
            className="projectCard"
          >
            <div className="projectCardHeader">
              <span className="text-xl font-bold">🔍</span>
              <h2 className="projectCardTitle">Semantic Search</h2>
            </div>
            <p className="projectCardText">
              AI-powered search tool that enables natural language queries
              across patient and clinical data. Using embeddings and vector
              similarity, it identifies relevant patients based on meaning—not
              just keywords—supporting faster cohort discovery and data
              exploration.
            </p>
            <span className="projectLink">
              View project description and live demo →
            </span>
          </Link>

          <Link
            href="https://jr-portfolio-projects.dtw628ha8cm94.us-west-2.cs.amazonlightsail.com/agentic-customer-lifecycle-platform"
            className="projectCard"
          >
            <div className="projectCardHeader">
              <span className="projectCardIcon">⚙️</span>
              <h2 className="projectCardTitle">Agentic Customer Lifecycle</h2>
            </div>
            <p className="projectCardText">
              AI-powered multi-agent system that optimizes onboarding,
              activation, and retention by detecting drop-offs, prioritizing
              interventions, and quantifying revenue impact across the customer
              journey.{" "}
            </p>
            <span className="projectLink">
              View project description and live demo →
            </span>
          </Link>

          <Link
            href="https://resume-analyzer.jeffrey-ross.me"
            className="projectCard"
          >
            <div className="projectCardHeader">
              <span className="projectCardIcon">📄</span>
              <h2 className="projectCardTitle">AI Résumé Match</h2>
            </div>
            <p className="projectCardText">
              AI-powered application that evaluates how well a résumé aligns
              with a job description. It analyzes skills, experience, and
              qualifications to highlight matches, identify gaps, and provide
              actionable suggestions.
              {/* Built with LLMs and deployed as a
              Dockerized service on AWS Lightsail, the app demonstrates
              real-time document analysis and AI-assisted career insights.{" "} */}
            </p>
            <span className="projectLink">
              View project description and live demo →
            </span>
          </Link>

          <Link
            href="https://fx-insights.jeffrey-ross.me"
            className="projectCard"
          >
            <div className="projectCardHeader">
              <span className="projectCardIcon">📈</span>
              <h2 className="projectCardTitle">AI FX Insights</h2>
            </div>
            <p className="projectCardText">
              Intelligent market analysis application that delivers concise,
              real-time foreign exchange (FX) summaries using large language
              models. It synthesizes macroeconomic signals, currency movements,
              and market sentiment into actionable insights for traders,
              analysts, and business stakeholders.
            </p>
            <span className="projectLink">
              View project description and live demo →
            </span>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
