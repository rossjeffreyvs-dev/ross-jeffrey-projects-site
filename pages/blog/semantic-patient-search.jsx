import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Blog post page styles
// NOTE (Next.js): Global CSS is typically imported in app/layout.(js|tsx).
// If your project allows per-page global CSS imports, you can import it here.
// Otherwise, add: import '../../styles/blog-post.css'; to your root layout or blog layout.
// import '../../styles/blog-post.css';

export default function BlogPost() {
  return (
    <div className="blogPage">
      <Navbar />

      <main className="blogMain">
        <article>
          <h1 className="blogTitle">
            Building a Semantic Search Demo for Synthetic Healthcare Data
          </h1>

          <p className="blogMeta">Published Feb 2026 · by Jeff Ross</p>

          <section className="blogProse">
            <p>
              Healthcare teams often need to locate relevant patient records,
              clinical notes, or research cohorts using concepts rather than
              exact keyword matches. Traditional search works well when the user
              knows the exact diagnosis code, medication name, or wording used
              in a note. In practice, however, clinicians and researchers often
              search more broadly: patients with uncontrolled diabetes and
              kidney issues, people with probable heart failure symptoms, or
              subjects with lung cancer on immunotherapy. These queries are
              concept-driven, and they are not always captured well by standard
              keyword search.
            </p>

            <p>
              To demonstrate how this problem can be approached, I built a small
              semantic search demo using synthetic healthcare data. The project
              indexes patient demographic attributes, diagnoses, medications,
              lab summaries, and short clinical notes. Rather than matching only
              literal terms, it converts both the records and the user’s query
              into embeddings and retrieves the most semantically similar
              results.
            </p>

            <p>
              The goal of the demo is not to replace clinical systems or
              enterprise search platforms. Instead, it shows the core mechanics
              behind semantic retrieval in a healthcare-oriented setting and
              highlights how such an approach could support patient discovery,
              cohort identification, and downstream AI workflows.
            </p>

            <figure className="blogFigure">
              <img
                src="/images/semantic-search-overview.png"
                alt="Semantic healthcare search overview diagram"
              />
              <figcaption className="blogCaption">
                Figure: Semantic search connects mixed clinical data to
                concept-based retrieval.
              </figcaption>
            </figure>

            <h2>Why Semantic Search Matters in Healthcare</h2>
            <p>
              Clinical and research environments contain a mix of structured and
              unstructured data. Relevant information is often spread across
              multiple domains and systems, including demographics, diagnoses,
              medications, laboratory values, pathology summaries, physician
              notes, and research annotations.
            </p>

            <p>Examples of searchable data include:</p>
            <ul>
              <li>
                <strong>Demographics</strong>
              </li>
              <li>
                <strong>Diagnoses</strong>
              </li>
              <li>
                <strong>Medications</strong>
              </li>
              <li>
                <strong>Laboratory results</strong>
              </li>
              <li>
                <strong>Pathology summaries</strong>
              </li>
              <li>
                <strong>Physician notes</strong>
              </li>
              <li>
                <strong>Research annotations</strong>
              </li>
            </ul>

            <p>
              A keyword search may miss relevant records when the wording
              differs. For example, a user searching for{" "}
              <em>high blood sugar with kidney complications</em> might want
              patients with diabetes, elevated A1C, and chronic kidney disease,
              even if those exact words do not appear together in a single
              field. Semantic search helps bridge that gap by ranking records
              according to meaning rather than exact text matching.
            </p>

            <p>This is especially useful when:</p>
            <ul>
              <li>
                <strong>Searching across multiple data domains at once</strong>
              </li>
              <li>
                <strong>Surfacing approximate matches</strong>
              </li>
              <li>
                <strong>Supporting cohort-building workflows</strong>
              </li>
              <li>
                <strong>
                  Feeding retrieval results into a downstream LLM or agent
                </strong>
              </li>
            </ul>

            <h2>Demo Design</h2>
            <p>
              The portfolio project uses synthetic patients only. Each patient
              record contains a small but realistic mix of healthcare-oriented
              fields:
            </p>

            <ul>
              <li>
                <strong>Patient identifier</strong>
              </li>
              <li>
                <strong>Age and sex</strong>
              </li>
              <li>
                <strong>Diagnosis list</strong>
              </li>
              <li>
                <strong>Medications</strong>
              </li>
              <li>
                <strong>Recent labs</strong>
              </li>
              <li>
                <strong>Short clinical summary</strong>
              </li>
            </ul>

            <p>
              The application combines these fields into a searchable text
              representation for each patient. It then generates embeddings for
              all records, stores them in a vector index, and compares them
              against the embedding of the user’s query.
            </p>

            <div className="blogCallout">
              <strong>Key idea:</strong> The system is not just looking for
              exact words. It is looking for records that are conceptually
              similar to the meaning of the query.
            </div>

            <p>
              A search like{" "}
              <em>diabetic patient with worsening kidney function</em> can
              retrieve patients whose records mention diabetes, elevated
              creatinine, reduced eGFR, nephropathy, or related language, even
              if the exact query text never appears verbatim.
            </p>

            <figure className="blogFigure">
              <img
                src="/images/semantic-search-example-query.png"
                alt="Example semantic search query and patient results"
              />
              <figcaption className="blogCaption">
                Figure: Natural-language query returning conceptually similar
                patient records.
              </figcaption>
            </figure>

            <h2>Architecture</h2>
            <p>
              The demo follows a straightforward semantic retrieval pattern that
              is easy to explain and easy to extend.
            </p>

            <ul>
              <li>
                <strong>Create synthetic healthcare records</strong>
              </li>
              <li>
                <strong>Convert each record into a text summary</strong>
              </li>
              <li>
                <strong>Generate embeddings for each summary</strong>
              </li>
              <li>
                <strong>Store the embeddings in a vector index</strong>
              </li>
              <li>
                <strong>Embed the user query</strong>
              </li>
              <li>
                <strong>Return the most similar patient records</strong>
              </li>
            </ul>

            <p>
              This same pattern can scale from a lightweight portfolio app to an
              enterprise data platform. In a larger environment, the records
              might come from normalized clinical and research systems, the
              searchable objects might live in an ontology or governed data
              layer, and the retrieval results could feed cohort selection tools
              or LLM-assisted workflows.
            </p>

            <figure className="blogFigure">
              <img
                src="/images/semantic-search-flow.png"
                alt="Semantic search architecture workflow"
              />
              <figcaption className="blogCaption">
                Figure: Core semantic retrieval workflow used in the demo.
              </figcaption>
            </figure>

            <h2>Example Queries</h2>
            <p>The demo supports natural-language searches such as:</p>
            <ul>
              <li>
                <strong>patients with poorly controlled diabetes</strong>
              </li>
              <li>
                <strong>likely heart failure symptoms with elevated BNP</strong>
              </li>
              <li>
                <strong>lung cancer patient receiving immunotherapy</strong>
              </li>
              <li>
                <strong>breast cancer patient with anemia</strong>
              </li>
              <li>
                <strong>chronic kidney disease and hypertension</strong>
              </li>
            </ul>

            <h2>Why This Project Is Useful in a Portfolio</h2>
            <p>
              This small application demonstrates several capabilities that are
              highly relevant to modern product and platform work:
            </p>

            <ul>
              <li>
                <strong>Applied AI in a realistic business domain</strong>
              </li>
              <li>
                <strong>
                  Retrieval over mixed structured and unstructured data
                </strong>
              </li>
              <li>
                <strong>Vector search and embeddings</strong>
              </li>
              <li>
                <strong>A practical healthcare-oriented use case</strong>
              </li>
              <li>
                <strong>
                  A foundation for future RAG or agentic extensions
                </strong>
              </li>
            </ul>

            <p>
              It also provides a bridge between prototype work and enterprise
              implementation. The same conceptual design can be extended to:
            </p>

            <ul>
              <li>
                <strong>Cohort discovery</strong>
              </li>
              <li>
                <strong>Semantic patient matching</strong>
              </li>
              <li>
                <strong>Protocol eligibility screening</strong>
              </li>
              <li>
                <strong>Ontology-backed retrieval</strong>
              </li>
              <li>
                <strong>Human-in-the-loop review workflows</strong>
              </li>
            </ul>

            <figure className="blogFigure">
              <img
                src="/images/semantic-search-future-state.png"
                alt="Future state semantic search extensions diagram"
              />
              <figcaption className="blogCaption">
                Figure: The same retrieval pattern can support broader
                healthcare and research workflows.
              </figcaption>
            </figure>

            <h2>Important Note on Data</h2>
            <p>
              This demo uses <strong>synthetic sample data only</strong>. It
              contains no real patient information and is intended strictly for
              educational and portfolio purposes.
            </p>

            <h2>Why It Matters</h2>
            <p>
              Semantic search is not a full solution by itself, but it is a
              powerful foundation for building more intuitive discovery
              experiences across complex healthcare data. Even in a small demo,
              it illustrates how AI can improve retrieval when users search by
              concept rather than exact phrasing.
            </p>

            <p>
              In a larger platform context, this same pattern can sit beneath
              cohort selection tools, ontology-backed discovery experiences,
              human review workflows, and retrieval-augmented AI applications.
              That makes it a useful building block not only for engineers, but
              also for product teams designing the next generation of healthcare
              and research data tools.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
