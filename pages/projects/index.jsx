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
            href="https://resume-analyzer.jeffrey-ross.me"
            className="projectCard"
          >
            <div className="projectCardHeader">
              <span className="projectCardIcon">🤖</span>
              <h2 className="projectCardTitle">AI Résumé Match</h2>
            </div>
            <p className="projectCardText">
              Upload a résumé and job description to see matched skills, gaps,
              and suggestions. Demo runs as a Dockerized app on AWS Lightsail
              and is embedded here via proxy.
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
              <span className="projectCardIcon">🎨</span>
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

          <Link
            href="https://ai-clinical-trial-eligibility.jeffrey-ross.me"
            className="projectCard"
          >
            <div className="projectCardHeader">
              <span className="projectCardIcon">📝</span>
              <h2 className="projectCardTitle">
                Agentic Clinical Trial Eligibility
              </h2>
            </div>
            <p className="projectCardText">Lorem ipsum</p>
            <span className="projectLink">
              View project description and live demo →
            </span>
          </Link>

          <Link href="#" className="projectCard">
            <div className="projectCardHeader">
              <span className="projectCardIcon">🛍️</span>
              <h2 className="projectCardTitle">Semantic Search</h2>
            </div>
            <p className="projectCardText">Lorem ipsum</p>
            <span className="projectLink">
              View project description and live demo →
            </span>
          </Link>

          <Link
            href="https://ai-claude-code.jeffrey-ross.me"
            className="projectCard"
          >
            <div className="projectCardHeader">
              <span className="projectCardIcon">🛍️</span>
              <h2 className="projectCardTitle">Claude Code</h2>
            </div>
            <p className="projectCardText">Lorem ipsum</p>
            <span className="projectLink">
              View project description and live demo →
            </span>
          </Link>

          <Link
            href="https://ai-smart-thermostat.jeffrey-ross.me"
            className="projectCard"
          >
            <div className="projectCardHeader">
              <span className="projectCardIcon">🎨</span>
              <h2 className="projectCardTitle">AI Smart Thermostat</h2>
            </div>
            <p className="projectCardText">Lorem ipsum</p>
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
