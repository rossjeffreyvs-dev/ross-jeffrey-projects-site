import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPost() {
  return (
    <div className="blogPage">
      <Navbar />

      <main className="blogMain">
        <article>
          <h1 className="blogTitle">
            Claude Clinical Protocol Reasoning Engine:
            <br />
            Designing Transparent Eligibility Evaluation
          </h1>

          <p className="blogMeta">Published Apr 2026 · by Jeffrey Ross</p>

          <section className="blogProse">
            <p>
              Clinical trial protocols are dense, conditional, and often
              difficult to evaluate consistently. Eligibility language may refer
              to diagnosis, staging, prior therapies, lab thresholds,
              performance status, timing windows, exceptions, and ambiguous
              evidence requirements.
            </p>

            <p>
              This project explores how a Claude-style reasoning workflow can
              help interpret protocol criteria, evaluate synthetic patient
              records, and produce transparent eligibility recommendations that
              are inspectable, reviewable, and easier to trust.
            </p>

            <div className="blogCallout">
              <span className="blogCalloutIcon">🧠</span>
              <div>
                <strong>Core product concept:</strong> protocol reasoning should
                behave like a transparent decision-support workflow, not a
                black-box eligibility answer.
              </div>
            </div>

            <h2>The Problem</h2>

            <p>
              Clinical eligibility review is often slowed by fragmented patient
              evidence and nuanced protocol language. A patient may appear
              eligible based on diagnosis but require review because of prior
              therapy history, missing labs, performance status, disease timing,
              or an exclusion criterion.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📄</span>
                  Protocol Language
                </strong>
                <span>
                  Eligibility criteria are often dense, conditional, and
                  exception-heavy.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧬</span>
                  Patient Evidence
                </strong>
                <span>
                  Clinical facts may be structured, unstructured, incomplete, or
                  conflicting.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔎</span>
                  Reasoning Trace
                </strong>
                <span>
                  Reviewers need to understand how the system interpreted the
                  evidence.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">👩‍⚕️</span>
                  Human Review
                </strong>
                <span>
                  Ambiguous recommendations need escalation rather than silent
                  automation.
                </span>
              </div>
            </div>

            <p>
              That makes protocol interpretation less like a simple search task
              and more like a <strong>reasoning workflow</strong>. A useful
              system has to show what it found, what remains uncertain, and why
              a recommendation was made.
            </p>

            <h2>Project Goal</h2>

            <p>
              The Claude Clinical Protocol Reasoning Engine simulates a workflow
              where trial criteria and synthetic patient records are evaluated
              through an explainable reasoning layer. The interface emphasizes
              traceability: users can see the selected trial, patient profile,
              reasoning events, criterion-level interpretation, and final
              recommendation.
            </p>

            <h2>How the Workflow Works</h2>

            <p>
              The application presents eligibility reasoning as a staged
              sequence rather than a single model response. That structure makes
              the experience easier to inspect, easier to debug, and easier to
              explain to a reviewer.
            </p>

            <div className="blogArchitectureStack">
              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">01</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📄</span>
                    <span>Protocol criteria parsing</span>
                  </h3>
                  <p>
                    Eligibility requirements are represented as structured
                    inclusion and exclusion criteria.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">02</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧑‍⚕️</span>
                    <span>Patient profile normalization</span>
                  </h3>
                  <p>
                    Synthetic patient records are prepared for evaluation
                    against protocol requirements.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">03</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧠</span>
                    <span>Criterion-level reasoning</span>
                  </h3>
                  <p>
                    The reasoning layer evaluates each requirement and records
                    supporting rationale.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">04</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📊</span>
                    <span>Recommendation generation</span>
                  </h3>
                  <p>
                    The system returns an eligibility recommendation with
                    confidence and supporting explanation.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">05</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">👤</span>
                    <span>Human review escalation</span>
                  </h3>
                  <p>
                    Uncertain or ambiguous cases can be flagged for additional
                    clinical review.
                  </p>
                </div>
              </div>
            </div>

            <h2>What Makes It Useful</h2>

            <p>
              The strongest part of this pattern is the audit trail. Rather than
              showing only a final answer, the demo presents the reasoning path:
              what was loaded, what evidence was reviewed, which criteria were
              evaluated, and how the final recommendation was produced.
            </p>

            <div className="blogArchitectureStack">
              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">01</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📚</span>
                    <span>Protocol Reasoning Agent</span>
                  </h3>
                  <p>
                    Interprets eligibility language and turns protocol text into
                    reviewable evaluation steps.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">02</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧬</span>
                    <span>Evidence Mapping Agent</span>
                  </h3>
                  <p>
                    Connects patient attributes, clinical context, and relevant
                    evidence to protocol requirements.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">03</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">✅</span>
                    <span>Eligibility Evaluation Agent</span>
                  </h3>
                  <p>
                    Produces criterion-level findings such as match, mismatch,
                    missing evidence, or needs review.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">04</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧾</span>
                    <span>Recommendation Agent</span>
                  </h3>
                  <p>
                    Summarizes eligibility status, confidence, rationale, and
                    reviewer-facing explanation.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">05</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🔍</span>
                    <span>Audit Trail Layer</span>
                  </h3>
                  <p>
                    Preserves workflow events so reviewers can inspect how the
                    recommendation was reached.
                  </p>
                </div>
              </div>
            </div>

            <h2>Architecture Pattern</h2>

            <p>
              The project is structured as a portfolio-scale demo with a Next.js
              frontend, a FastAPI backend, synthetic clinical trial data, and a
              gateway deployment pattern on AWS Lightsail. The same routing
              approach supports multiple portfolio projects behind a shared
              Lightsail service while preserving project-specific experiences.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🖥️</span>
                  Frontend
                </strong>
                <span>
                  Next.js / React interface for trial selection, patient
                  evaluation, reasoning trace, and recommendation review.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">⚙️</span>
                  API Layer
                </strong>
                <span>
                  FastAPI services for trials, patients, evaluations, reasoning
                  steps, and recommendation state.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🗂️</span>
                  Data Layer
                </strong>
                <span>
                  Synthetic protocol and patient datasets used to simulate
                  clinical eligibility scenarios.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧭</span>
                  Workflow Layer
                </strong>
                <span>
                  Structured trace events and audit-friendly state make the
                  reasoning process visible.
                </span>
              </div>
            </div>

            <h2>Why Explainability Matters</h2>

            <p>
              Clinical AI products should not behave like black boxes. In
              eligibility workflows, trust comes from being able to inspect why
              a recommendation was made, which evidence supported it, and where
              uncertainty remains.
            </p>

            <p>
              The demo is designed around visible reasoning events,
              criterion-level evaluation, and a final recommendation summary
              rather than a simple pass/fail answer.
            </p>

            <h2>Typical Review Triggers</h2>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧩</span>
                  Missing Data
                </strong>
                <span>Required patient data is incomplete or unavailable.</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📝</span>
                  Ambiguous Criteria
                </strong>
                <span>Protocol language contains exceptions or nuance.</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">⚠️</span>
                  Conflicting Evidence
                </strong>
                <span>Different criteria point toward different outcomes.</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">👤</span>
                  Reviewer Judgment
                </strong>
                <span>
                  The case requires clinician or reviewer interpretation.
                </span>
              </div>
            </div>

            <h2>Interface Design Highlights</h2>

            <p>
              A big part of this project was translating reasoning logic into a
              product experience that feels understandable and interactive. The
              interface surfaces workflow state, patient context, reasoning
              activity, and recommendation output in a way that supports human
              review.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📄</span>
                  Trial Selector
                </strong>
                <span>
                  Switches between protocol examples and trial context.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧑‍⚕️</span>
                  Patient Selector
                </strong>
                <span>Evaluates synthetic patient profiles.</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧠</span>
                  Reasoning Panel
                </strong>
                <span>Shows the live evaluation sequence.</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📊</span>
                  Recommendation Summary
                </strong>
                <span>
                  Displays eligibility status, confidence, and explanation.
                </span>
              </div>
            </div>

            <h2>Results and Takeaways</h2>

            <p>
              This project demonstrates how clinical AI tools can be designed
              around explainability rather than just automation. In regulated or
              high-stakes workflows, the value is not only whether the system
              can produce a recommendation. The value is whether a human
              reviewer can understand, challenge, and trust the reasoning that
              led to it.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🏥</span>
                  Clinical Decision Support
                </strong>
                <span>
                  Models eligibility as a structured reasoning workflow rather
                  than a generic chat response.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔍</span>
                  Transparent Evidence
                </strong>
                <span>
                  Recommendations are tied to patient evidence, criteria, and
                  rationale.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🤝</span>
                  Human Review
                </strong>
                <span>
                  Escalation paths keep reviewer judgment in the loop when
                  uncertainty exists.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧱</span>
                  Reusable Foundation
                </strong>
                <span>
                  Provides a foundation for richer protocol parsing, evidence
                  mapping, and audit workflows.
                </span>
              </div>
            </div>

            <h2>Final Reflection</h2>

            <p>
              A clinical reasoning engine should behave less like a generic
              chatbot and more like a structured decision-support workflow. The
              product experience should make evidence visible, uncertainty
              explicit, and escalation paths clear.
            </p>

            <p>
              That is the design principle behind this demo: not just to produce
              an eligibility recommendation, but to make the reasoning behind
              that recommendation clear enough for review.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
