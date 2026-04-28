import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const projects = [
  {
    title: "Agentic Clinical Trial Eligibility",
    icon: "🧬",
    href: "https://clinical-trial-patient-agent.jeffrey-ross.me/",
    summary:
      "An AI-powered, multi-agent system that evaluates patient eligibility for clinical trials in real time. It combines semantic search, protocol interpretation, and explainable reasoning to identify high-quality matches and support human-in-the-loop review workflows.",
  },
  {
    title: "Claude Clinical Protocol Reasoning",
    icon: "🧠",
    href: "https://jr-portfolio-projects.dtw628ha8cm94.us-west-2.cs.amazonlightsail.com/claude-clinical-protocol-reasoning-engine",
    summary:
      "A Claude-style clinical reasoning demo that interprets protocol eligibility language, evaluates synthetic patient evidence, and produces transparent criterion-level recommendations with audit-friendly reasoning traces.",
  },
  {
    title: "Semantic Search",
    icon: "🔍",
    href: "https://semantic-patient-search.jeffrey-ross.me/",
    summary:
      "AI-powered search tool that enables natural language queries across patient and clinical data. Using embeddings and vector similarity, it identifies relevant patients based on meaning—not just keywords—supporting faster cohort discovery and data exploration.",
  },
  {
    title: "Agentic Customer Lifecycle",
    icon: "⚙️",
    href: "https://jr-portfolio-projects.dtw628ha8cm94.us-west-2.cs.amazonlightsail.com/agentic-customer-lifecycle-platform",
    summary:
      "AI-powered multi-agent system that optimizes onboarding, activation, and retention by detecting drop-offs, prioritizing interventions, and quantifying revenue impact across the customer journey.",
  },
  {
    title: "AI Résumé Match",
    icon: "📄",
    href: "https://resume-analyzer.jeffrey-ross.me",
    summary:
      "AI-powered application that evaluates how well a résumé aligns with a job description. It analyzes skills, experience, and qualifications to highlight matches, identify gaps, and provide actionable suggestions.",
  },
  {
    title: "AI FX Insights",
    icon: "📈",
    href: "https://fx-insights.jeffrey-ross.me",
    summary:
      "Intelligent market analysis application that delivers concise, real-time foreign exchange summaries using large language models. It synthesizes macroeconomic signals, currency movements, and market sentiment into actionable insights.",
  },
];

export default function Projects() {
  return (
    <div className="projectsPage">
      <Navbar />

      <main className="projectsMain">
        <section className="projectsHero">
          <p className="blogIndexEyebrow">Projects</p>
          <h1 className="projectsTitle">Portfolio Projects</h1>
          <p className="blogIndexIntro">
            A collection of applied AI and data product demos spanning clinical
            reasoning, semantic search, lifecycle automation, résumé analysis,
            and market intelligence. Each project is designed to show both the
            user experience and the underlying product architecture.
          </p>
        </section>

        <section className="projectsGrid" aria-label="Portfolio projects">
          {projects.map(({ title, icon, href, summary }) => (
            <Link key={href} href={href} className="projectCard">
              <div className="projectCardHeader">
                <span className="projectCardIcon" aria-hidden="true">
                  {icon}
                </span>
                <h2 className="projectCardTitle">{title}</h2>
              </div>

              <p className="projectCardText">{summary}</p>

              <span className="projectLink">
                View project description and live demo →
              </span>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
