import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPost() {
  return (
    <div className="blogPage">
      <Navbar />

      <main className="blogMain">
        <article>
          <h1 className="blogTitle">
            Semantic Patient Search:
            <br />
            Building Concept-Based Retrieval for Synthetic Healthcare Data
          </h1>

          <p className="blogMeta">Published Feb 2026 · by Jeffrey Ross</p>

          <section className="blogProse">
            <p>
              Healthcare teams often need to locate relevant patient records,
              clinical notes, or research cohorts using concepts rather than
              exact keyword matches. Traditional search works well when the user
              knows the exact diagnosis code, medication name, or wording used
              in a note. In practice, clinicians and researchers often search
              more broadly: patients with uncontrolled diabetes and kidney
              issues, people with probable heart failure symptoms, or subjects
              with lung cancer on immunotherapy.
            </p>

            <p>
              This project explores that problem through a semantic patient
              search demo: a retrieval workflow that indexes synthetic patient
              demographics, diagnoses, medications, lab summaries, and clinical
              notes, then returns conceptually similar records based on the
              meaning of a natural-language query.
            </p>

            <div className="blogCallout">
              <span className="blogCalloutIcon">🔎</span>
              <div>
                <strong>Core product concept:</strong> clinical search should
                support meaning-based discovery, not just exact keyword
                matching.
              </div>
            </div>

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

            <h2>The Problem</h2>

            <p>
              Clinical and research environments contain a mix of structured and
              unstructured data. Relevant information is often spread across
              multiple domains and systems, including demographics, diagnoses,
              medications, laboratory values, pathology summaries, physician
              notes, and research annotations.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧑‍⚕️</span>
                  Patient Context
                </strong>
                <span>
                  Patient data spans demographics, diagnoses, medications, labs,
                  and clinical summaries.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📝</span>
                  Unstructured Notes
                </strong>
                <span>
                  Important concepts may appear in free text rather than clean
                  structured fields.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔤</span>
                  Keyword Mismatch
                </strong>
                <span>
                  Relevant records may use different wording than the user’s
                  search query.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧭</span>
                  Cohort Discovery
                </strong>
                <span>
                  Researchers often need approximate matches before narrowing a
                  cohort.
                </span>
              </div>
            </div>

            <p>
              A keyword search may miss relevant records when the wording
              differs. For example, a user searching for{" "}
              <em>high blood sugar with kidney complications</em> might want
              patients with diabetes, elevated A1C, and chronic kidney disease,
              even if those exact words do not appear together in a single
              field.
            </p>

            <h2>Project Goal</h2>

            <p>
              The goal of this demo was to simulate a lightweight semantic
              retrieval system for synthetic healthcare data. The system
              converts patient records and user queries into embeddings,
              compares them in vector space, and returns the most relevant
              synthetic patient matches with clear supporting context.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧬</span>
                  Synthetic Records
                </strong>
                <span>
                  Demonstrates the pattern without using any real patient data.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧠</span>
                  Embeddings
                </strong>
                <span>
                  Converts records and natural-language queries into semantic
                  representations.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📊</span>
                  Similarity Ranking
                </strong>
                <span>
                  Returns records ranked by conceptual relevance rather than
                  exact wording.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧩</span>
                  Extensible Pattern
                </strong>
                <span>
                  Provides a foundation for cohort discovery, RAG, and agentic
                  workflows.
                </span>
              </div>
            </div>

            <h2>How the Workflow Works</h2>

            <p>
              The application follows a straightforward semantic retrieval
              pattern. Each patient record is converted into a searchable text
              representation, embedded, stored in a vector index, and compared
              against the embedding of the user’s query.
            </p>

            <div className="blogArchitectureStack">
              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">01</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧾</span>
                    <span>Create synthetic records</span>
                  </h3>
                  <p>
                    Generate patient-like records with demographics, diagnoses,
                    medications, labs, and clinical summaries.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">02</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📝</span>
                    <span>Build searchable summaries</span>
                  </h3>
                  <p>
                    Combine relevant fields into patient-level text summaries
                    suitable for semantic retrieval.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">03</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧠</span>
                    <span>Generate embeddings</span>
                  </h3>
                  <p>
                    Convert each patient summary into a vector representation
                    that captures conceptual meaning.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">04</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📦</span>
                    <span>Store vectors</span>
                  </h3>
                  <p>
                    Store embeddings in a lightweight vector index for
                    similarity comparison.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">05</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🔎</span>
                    <span>Embed the user query</span>
                  </h3>
                  <p>
                    Convert the natural-language search request into the same
                    semantic vector space.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">06</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📋</span>
                    <span>Return ranked patients</span>
                  </h3>
                  <p>
                    Display the most semantically similar synthetic patients
                    with relevant clinical context.
                  </p>
                </div>
              </div>
            </div>

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

            <h2>Architecture Pattern</h2>

            <p>
              The demo follows a retrieval architecture that is easy to explain
              and easy to extend. In a larger environment, records might come
              from governed clinical and research systems, the searchable
              objects might live in an ontology or data platform, and retrieval
              results could feed cohort tools or LLM-assisted workflows.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🖥️</span>
                  Frontend
                </strong>
                <span>
                  Search interface for natural-language queries and patient
                  result review.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">⚙️</span>
                  API Layer
                </strong>
                <span>
                  Backend service for search requests, embedding comparison, and
                  ranked result responses.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🗂️</span>
                  Data Layer
                </strong>
                <span>
                  Synthetic patient records combining structured fields and
                  short clinical summaries.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧠</span>
                  Vector Layer
                </strong>
                <span>
                  Embeddings and similarity scoring power meaning-based
                  retrieval.
                </span>
              </div>
            </div>

            <figure className="blogFigure">
              <img
                src="/images/semantic-search-flow.png"
                alt="Semantic search architecture workflow"
              />
              <figcaption className="blogCaption">
                Figure: Core semantic retrieval workflow used in the demo.
              </figcaption>
            </figure>

            <h2>Why Semantic Search Matters</h2>

            <p>
              Semantic search helps bridge the gap between how people describe a
              clinical concept and how that concept appears across patient data.
              It is especially useful when users need to search across multiple
              domains at once, surface approximate matches, support
              cohort-building workflows, or feed retrieval results into a
              downstream LLM or agent.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🌐</span>
                  Cross-Domain Search
                </strong>
                <span>
                  Searches across diagnoses, medications, labs, summaries, and
                  notes together.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🎯</span>
                  Approximate Matching
                </strong>
                <span>
                  Finds records that are conceptually similar even when wording
                  differs.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">👥</span>
                  Cohort Building
                </strong>
                <span>
                  Supports early discovery before strict inclusion and exclusion
                  filters are applied.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🤖</span>
                  AI Workflows
                </strong>
                <span>
                  Can provide retrieved patient context to downstream LLM or
                  agentic workflows.
                </span>
              </div>
            </div>

            <h2>Example Queries</h2>

            <p>
              The demo supports natural-language searches that represent
              clinical ideas rather than exact terms.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🩸</span>
                  Diabetes Control
                </strong>
                <span>patients with poorly controlled diabetes</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">❤️</span>
                  Heart Failure
                </strong>
                <span>likely heart failure symptoms with elevated BNP</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🫁</span>
                  Immunotherapy
                </strong>
                <span>lung cancer patient receiving immunotherapy</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧪</span>
                  Kidney Disease
                </strong>
                <span>chronic kidney disease and hypertension</span>
              </div>
            </div>

            <h2>Interface Design Highlights</h2>

            <p>
              The interface is intentionally simple: users enter a clinical
              concept in natural language, review ranked patient cards, and
              inspect the attributes that make a result relevant. The emphasis
              is on demonstrating the retrieval pattern clearly rather than
              overwhelming the user with enterprise workflow features.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔎</span>
                  Query Input
                </strong>
                <span>
                  Lets users search with natural-language clinical concepts.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📋</span>
                  Ranked Results
                </strong>
                <span>
                  Shows semantically similar synthetic patient records.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧾</span>
                  Patient Context
                </strong>
                <span>
                  Displays diagnoses, medications, labs, and clinical summary
                  details.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📊</span>
                  Similarity Signal
                </strong>
                <span>
                  Makes retrieval feel ranked and inspectable, not arbitrary.
                </span>
              </div>
            </div>

            <h2>Results and Takeaways</h2>

            <p>
              Even as a small portfolio app, the project demonstrates a
              practical AI pattern: retrieval over mixed healthcare data using
              embeddings and semantic similarity. It shows how search can become
              more intuitive when users ask for concepts instead of exact field
              values or keywords.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🏥</span>
                  Healthcare AI Pattern
                </strong>
                <span>
                  Demonstrates applied AI in a realistic healthcare-oriented
                  product scenario.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔍</span>
                  Better Discovery
                </strong>
                <span>
                  Supports meaning-based search across mixed structured and
                  unstructured data.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧱</span>
                  Reusable Foundation
                </strong>
                <span>
                  Provides a foundation for RAG, cohort discovery, and agentic
                  review workflows.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔐</span>
                  Synthetic Data Only
                </strong>
                <span>
                  Shows the concept safely without using real patient
                  information.
                </span>
              </div>
            </div>

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

            <h2>Final Reflection</h2>

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
