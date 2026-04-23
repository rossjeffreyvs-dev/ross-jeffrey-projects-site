import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const posts = [
  {
    title: "Agentic Clinical Trial Eligibility",
    icon: "🧬",
    summary:
      "Clinical trial recruitment sounds straightforward: find eligible patients, enroll them. \
    At Memorial Sloan Kettering (MSK), we designed an agentic AI service that uses an LLM to \
    contextualize protocol PDFs and evaluate incoming patients to determine whether their specimens are eligible \
    for clinical trial research.",
    href: "/blog/agentic-clinical-trial-eligibility",
  },
  {
    title: "Semantic Search",
    icon: "🔎",
    summary:
      "AI-powered search tool that enables natural language queries \
      across patient and clinical data. Using embeddings and vector \
      similarity, it identifies relevant patients based on meaning—not \
      just keywords—supporting faster cohort discovery and data \
      exploration.",
    href: "/blog/semantic-patient-search",
  },
  {
    title: "Common Data Model",
    icon: "🧩",
    summary:
      "Modern biobanking is not just about storing specimens — it’s about structuring data so research is \
      discoverable, reproducible, and scalable. At Memorial Sloan Kettering (MSK), we designed a shared \
      Common Data Model (CDM) across multiple biobanks and layered an ontology in Palantir Foundry to power \
      cross-biobank search and specimen discovery for cancer research investigators.",
    href: "/blog/ontology-vs-cdm-biobanking",
  },
  {
    title: "Concordance Testing",
    icon: "⚖️",
    summary:
      "Concordance testing is the backbone of trustworthy data migrations and integrations—especially \
    in regulated clinical research environments. At Memorial Sloan Kettering (MSK), we used concordance testing \
    to validate a large-scale migration and daily synchronization.",
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
