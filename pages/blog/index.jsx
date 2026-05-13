import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const posts = [
  {
    title: "Agentic Clinical Trial Eligibility",
    icon: "🧬",
    tags: ["Clinical AI", "Multi-Agent", "HITL Review"],
    summary:
      "Designing an agentic clinical AI workflow that interprets protocol PDFs, contextualizes patient evidence, and supports explainable eligibility review.",
    href: "/blog/agentic-clinical-trial-eligibility",
  },
  {
    title: "Agentic Customer Lifecycle Platform",
    icon: "⚙️",
    tags: ["Lifecycle AI", "Revenue Ops", "Workflow Design"],
    summary:
      "A multi-agent lifecycle system that evaluates fit, detects revenue blockers, and guides human decision-making across onboarding, activation, and retention.",
    href: "/blog/agentic-customer-lifecycle-platform",
  },
  {
    title: "Claude Clinical Protocol Reasoning",
    icon: "🧠",
    tags: ["Protocol AI", "Reasoning", "Audit Trace"],
    summary:
      "A write-up on Claude-style clinical protocol reasoning, synthetic patient evaluation, transparent recommendations, and audit-friendly eligibility traces.",
    href: "/blog/claude-clinical-protocol-reasoning-engine",
  },
  {
    title: "Semantic Search",
    icon: "🔎",
    tags: ["Vector Search", "Embeddings", "Clinical Data"],
    summary:
      "How natural-language search, embeddings, and vector similarity can help users find relevant patient cohorts by meaning instead of keyword matches.",
    href: "/blog/semantic-patient-search",
  },
  {
    title: "Common Data Model",
    icon: "🧩",
    tags: ["Biobanking", "Ontology", "Data Platforms"],
    summary:
      "A practical look at how common data models and ontologies work together to make biobank research data discoverable, reusable, and scalable.",
    href: "/blog/ontology-vs-cdm-biobanking",
  },
  {
    title: "Concordance Testing",
    icon: "⚖️",
    tags: ["Data Quality", "Migration", "Validation"],
    summary:
      "Why concordance testing matters for regulated data migrations, daily synchronization checks, and trust in downstream analytics and platform workflows.",
    href: "/blog/concordance-testing",
  },
  {
    title: "TrainJazz — Turning Event Streams into Music with AI",
    icon: "🎷",
    tags: ["Event Streams", "Creative AI", "Agents"],
    summary:
      "An experiment in translating structured event streams into evolving jazz compositions through agentic interpretation, streaming signals, and human interaction.",
    href: "/blog/train-jazz",
  },
];

export default function Blog() {
  return (
    <div className="blogIndexPage">
      <Navbar />

      <main className="blogIndexMain">
        <header className="blogIndexHeader">
          <p className="blogIndexEyebrow">Applied AI Engineering</p>
          <h1 className="blogIndexTitle">
            Notes on AI Systems & Product Architecture
          </h1>
          <p className="blogIndexIntro">
            Project write-ups and technical essays covering clinical AI,
            semantic retrieval, workflow orchestration, and scalable data
            platform design.
          </p>
        </header>

        <section className="blogIndexGrid" aria-label="Blog posts">
          {posts.map(({ title, icon, tags, summary, href }) => (
            <Link key={href} href={href} className="blogIndexCardLinkWrapper">
              <article className="blogIndexCard">
                <div className="blogIndexCardBody">
                  <div className="blogIndexCardHeader">
                    <span className="blogIndexCardIcon" aria-hidden="true">
                      {icon}
                    </span>
                    <h2 className="blogIndexCardTitle">{title}</h2>
                  </div>

                  <div className="blogIndexTags" aria-label={`${title} topics`}>
                    {tags.map((tag) => (
                      <span key={tag} className="blogIndexTag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="blogIndexSummary">{summary}</p>
                </div>

                <div className="blogIndexCardFooter">
                  <span className="blogIndexReadMore">
                    Read article <span aria-hidden="true">→</span>
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
