import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const posts = [
  {
    title: "Agentic Clinical Trial Eligibility",
    icon: "🧬",
    date: "Feb 2026",
    summary:
      "Clinical trial matching sounds straightforward until real patient records, protocol ambiguity, and incomplete evidence enter the workflow. This post explores an agentic clinical trial eligibility system that stages retrieval, criteria evaluation, reasoning, and human review to produce transparent, explainable recommendations.",
    href: "/blog/agentic-clinical-trial-eligibility",
  },
  {
    title: "Semantic Search",
    icon: "🔎",
    date: "Jan 2026",
    summary:
      "AI-powered search tool that enables natural language queries across patient and clinical data. Using embeddings and vector similarity, it identifies relevant patients based on meaning—not just keywords—supporting faster cohort discovery and data exploration.",
    href: "/blog/semantic-patient-search",
  },
  {
    title: "Common Data Model",
    icon: "🧩",
    date: "Oct 2025",
    summary:
      "Modern biobanking is not just about storing specimens — it’s about structuring data so research is discoverable, reproducible, and scalable.",
    href: "/blog/ontology-vs-cdm-biobanking",
  },
  {
    title: "Concordance Testing",
    icon: "⚖️",
    date: "Nov 2025",
    summary:
      "Concordance testing is the backbone of trustworthy data migrations and integrations in regulated clinical environments.",
    href: "/blog/concordance-testing",
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
            A collection of essays and project write-ups focused on clinical AI,
            enterprise data systems, workflow design, and applied engineering.
          </p>
        </header>

        <section className="blogIndexGrid" aria-label="Blog posts">
          {posts.map(({ title, icon, summary, href }) => (
            <Link key={href} href={href} className="blogIndexCardLinkWrapper">
              <article className="blogIndexCard">
                <h2 className="blogIndexCardTitle">
                  <span className="blogIndexCardIcon">{icon}</span>
                  <span>{title}</span>
                </h2>

                <p className="blogIndexSummary">{summary}</p>

                <div className="blogIndexCardFooter">
                  <span className="blogIndexReadMore">
                    Read post <span>→</span>
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
