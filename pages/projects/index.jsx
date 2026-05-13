import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const projects = [
  {
    title: "Agentic Clinical Trial Eligibility",
    icon: "🧬",
    href: "https://clinical-trial-patient-agent.jeffrey-ross.me/",
    tags: ["Multi-Agent", "Clinical AI", "HITL Review"],
    summary:
      "Multi-agent eligibility evaluation that combines semantic search, protocol interpretation, and explainable reasoning to surface high-quality clinical trial matches for human review.",
  },
  {
    title: "Agentic Customer Lifecycle",
    icon: "⚙️",
    href: "https://jr-portfolio-projects.dtw628ha8cm94.us-west-2.cs.amazonlightsail.com/agentic-customer-lifecycle-platform",
    tags: ["Lifecycle AI", "Revenue Ops", "Workflow"],
    summary:
      "Agentic workflow that detects onboarding and activation drop-offs, prioritizes customer interventions, and quantifies revenue impact across the lifecycle journey.",
  },
  {
    title: "Startup Finance Ops",
    icon: "💰",
    href: "https://jr-portfolio-projects.dtw628ha8cm94.us-west-2.cs.amazonlightsail.com/agentic-startup-finance-ops",
    tags: ["Finance Ops", "Runway Risk", "Tool Events"],
    summary:
      "Multi-agent finance and operations platform that interprets founder questions, analyzes runway and revenue risk, coordinates operational signals, and recommends next actions.",
  },
  {
    title: "Claude Clinical Protocol Reasoning",
    icon: "🧠",
    href: "https://jr-portfolio-projects.dtw628ha8cm94.us-west-2.cs.amazonlightsail.com/claude-clinical-protocol-reasoning-engine",
    tags: ["Protocol AI", "Audit Trace", "Reasoning"],
    summary:
      "Clinical reasoning demo that interprets protocol language, evaluates synthetic patient evidence, and produces transparent criterion-level recommendations with audit-friendly traces.",
  },
  {
    title: "Semantic Patient Search",
    icon: "🔍",
    href: "https://semantic-patient-search.jeffrey-ross.me/",
    tags: ["Vector Search", "Embeddings", "Cohort Discovery"],
    summary:
      "Natural-language search across patient and clinical data using embeddings and vector similarity to identify relevant patients by meaning, not just keyword matches.",
  },
  {
    title: "TrainJazz — AI Data Orchestration",
    icon: "🎷",
    href: "https://jr-portfolio-projects.dtw628ha8cm94.us-west-2.cs.amazonlightsail.com/train-jazz",
    tags: ["Event Streams", "AI Agents", "Generative UI"],
    summary:
      "Interactive AI system that transforms live or simulated event streams into dynamic jazz compositions, coordinating rhythm, harmony, and improvisation layers in real time.",
  },
  {
    title: "AI FX Insights",
    icon: "📈",
    href: "https://fx-insights.jeffrey-ross.me",
    tags: ["Market Intel", "LLM Briefs", "Streaming"],
    summary:
      "Market intelligence application that synthesizes macroeconomic signals, FX movements, and market sentiment into concise, real-time client-ready briefs.",
  },
  {
    title: "AI Résumé Match",
    icon: "📄",
    href: "https://resume-analyzer.jeffrey-ross.me",
    tags: ["Document AI", "Matching", "Recommendations"],
    summary:
      "AI-powered analyzer that compares a résumé with a job description, highlights strengths and gaps, and provides targeted recommendations for improvement.",
  },
];

const capabilities = [
  "Next.js",
  "React",
  "TypeScript",
  "FastAPI",
  "Vector Search",
  "LLM Workflows",
  "Streaming UI",
  "AWS Lightsail",
];

export default function Projects() {
  return (
    <div className="projectsPage">
      <Navbar />

      <main className="projectsMain">
        <section className="projectsHero">
          <p className="projectsEyebrow">Applied AI Product Systems</p>
          <h1 className="projectsTitle">Portfolio Projects</h1>
          <p className="projectsIntro">
            Multi-agent AI workflows, semantic retrieval systems, clinical
            reasoning engines, and operational automation demos designed to
            showcase product thinking, system architecture, and explainable AI
            interaction patterns.
          </p>
        </section>

        <section className="projectsGrid" aria-label="Portfolio projects">
          {projects.map(({ title, icon, href, summary, tags }) => (
            <Link key={href} href={href} className="projectCard">
              <div className="projectCardContent">
                <div className="projectCardHeader">
                  <span className="projectCardIcon" aria-hidden="true">
                    {icon}
                  </span>
                  <h2 className="projectCardTitle">{title}</h2>
                </div>

                <div
                  className="projectTags"
                  aria-label={`${title} capabilities`}
                >
                  {tags.map((tag) => (
                    <span key={tag} className="projectTag">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="projectCardText">{summary}</p>
              </div>

              <span className="projectLink">Explore project →</span>
            </Link>
          ))}
        </section>

        <section
          className="projectsCapabilities"
          aria-label="Selected technologies"
        >
          <span className="projectsCapabilitiesLabel">Built with</span>
          <div className="projectsCapabilitiesList">
            {capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
