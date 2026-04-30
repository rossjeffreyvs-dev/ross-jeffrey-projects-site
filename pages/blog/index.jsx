import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const posts = [
  {
    title: "Agentic Clinical Trial Eligibility",
    icon: "🧬",
    summary:
      "Clinical trial recruitment sounds straightforward: find eligible patients, enroll them. At Memorial Sloan Kettering, we designed an agentic AI service that uses an LLM to contextualize protocol PDFs and evaluate incoming patients.",
    href: "/blog/agentic-clinical-trial-eligibility",
  },
  {
    title: "Agentic Customer Lifecycle Platform",
    icon: "⚙️",
    summary:
      "A multi-agent lifecycle system that ingests prospects, evaluates fit and stage, detects revenue blockers, and guides human decision-making to unlock conversion and maximize revenue impact.",
    href: "/blog/agentic-customer-lifecycle-platform",
  },
  {
    title: "Claude Clinical Protocol Reasoning",
    icon: "🧠",
    summary:
      "A project write-up on designing a Claude-style reasoning workflow for clinical protocol interpretation, synthetic patient evaluation, eligibility recommendations, and transparent audit trails.",
    href: "/blog/claude-clinical-protocol-reasoning-engine",
  },
  {
    title: "Semantic Search",
    icon: "🔎",
    summary:
      "AI-powered search tool that enables natural language queries across patient and clinical data. Using embeddings and vector similarity, it identifies relevant patients based on meaning—not just keywords.",
    href: "/blog/semantic-patient-search",
  },
  {
    title: "Common Data Model",
    icon: "🧩",
    summary:
      "Modern biobanking is not just about storing specimens — it’s about structuring data so research is discoverable, reproducible, and scalable across multiple biobanks and data platforms.",
    href: "/blog/ontology-vs-cdm-biobanking",
  },
  {
    title: "Concordance Testing",
    icon: "⚖️",
    summary:
      "Concordance testing is the backbone of trustworthy data migrations and integrations, especially in regulated clinical research environments.",
    href: "/blog/concordance-testing",
  },
  {
    title: "TrainJazz — Turning Event Streams into Music with AI",
    icon: "🎷",
    summary:
      "TrainJazz is an experiment in mapping structured event streams to music generation. Using an agentic architecture, the system listens to incoming signals, interprets patterns, and translates them into evolving jazz compositions in real time. This project explores streaming systems, human-in-the-loop interaction, and the boundary between analytical and creative AI applications.",
    href: "/blog/train-jazz",
  },
];

export default function Blog() {
  return (
    <div className="blogIndexPage">
      <Navbar />

      <main className="blogIndexMain">
        <header className="blogIndexHeader">
          <p className="blogIndexEyebrow">Writing</p>
          <h1 className="blogIndexTitle">
            Notes on AI, data platforms, and product engineering
          </h1>
          <p className="blogIndexIntro">
            A collection of project write-ups and technical essays covering
            clinical AI, enterprise data systems, agentic workflow design,
            product architecture, and applied engineering lessons from building
            portfolio-scale demos.
          </p>
        </header>

        <section className="blogIndexGrid" aria-label="Blog posts">
          {posts.map(({ title, icon, summary, href }) => (
            <Link key={href} href={href} className="blogIndexCardLinkWrapper">
              <article className="blogIndexCard">
                <div className="blogIndexCardHeader">
                  <span className="blogIndexCardIcon" aria-hidden="true">
                    {icon}
                  </span>
                  <h2 className="blogIndexCardTitle">{title}</h2>
                </div>

                <p className="blogIndexSummary">{summary}</p>

                <div className="blogIndexCardFooter">
                  <span className="blogIndexReadMore">
                    Read post <span aria-hidden="true">→</span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
