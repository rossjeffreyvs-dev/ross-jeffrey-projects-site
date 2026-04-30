import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  TrialWorkflowDiagram,
  TrialAgentArchitectureDiagram,
  TrialSystemArchitectureDiagram,
  TrialHitlDiagram,
} from "../../components/blog/AgentTrialDiagrams";

export default function BlogPost() {
  return (
    <div className="blogPage">
      <Navbar />

      <main className="blogMain">
        <article>
          <h1 className="blogTitle">
            Agentic Clinical Trial Eligibility:
            <br /> Designing a Multi-Agent Matching Workflow
          </h1>

          <p className="blogMeta">Published Mar 2026 · by Jeff Ross</p>

          <section className="blogProse">
            <p>
              Clinical trial screening is one of those workflows that looks
              simple from a distance and becomes significantly more complex in
              real operating conditions. Trial criteria are nuanced, patient
              records are often incomplete, and many decisions depend on
              evidence that has to be interpreted rather than simply retrieved.
            </p>

            <div>&nbsp;</div>

            <p>
              This project explores that problem through an{" "}
              <strong>agentic clinical trial eligibility workflow</strong>: a
              staged system that evaluates a selected patient against an active
              trial, generates an explainable recommendation, surfaces
              criteria-level evidence, and routes ambiguous cases into human
              review.
            </p>

            <div className="blogCallout trainJazzCallout">
              <span className="blogCalloutIcon">🧬</span>
              <div>
                <strong>Core product concept:</strong> clinical trial matching
                should behave like a transparent workflow, not a black-box
                score.
              </div>
            </div>

            <h2>The Problem</h2>

            <p>
              Clinical trial screening is slow because the core logic lives in
              protocol language while supporting patient context lives across
              structured and unstructured data sources. Teams are rarely just
              asking, “Does this patient match?” They are asking what evidence
              supports the recommendation and where a reviewer still needs to
              make the final judgment.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔎</span>
                  Prioritization
                </strong>
                <span>Which patients should be reviewed first?</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">✅</span>
                  Criteria Status
                </strong>
                <span>
                  Which inclusion or exclusion rules passed or failed?
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📄</span>
                  Evidence
                </strong>
                <span>What patient data supports the recommendation?</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">👩‍⚕️</span>
                  Oversight
                </strong>
                <span>Where does human review still belong?</span>
              </div>
            </div>

            <p>
              That makes eligibility assessment less like a search problem and
              more like a <strong>reasoning and workflow problem</strong>. A
              useful solution has to do more than rank candidates. It has to
              show its work.
            </p>

            <h2>Project Goal</h2>

            <p>
              The goal of this demo was to simulate a{" "}
              <strong>multi-agent clinical trial matching system</strong> that
              makes recommendation logic visible. The system evaluates a patient
              against an active trial and returns a structured outcome supported
              by rationale, evidence, and workflow steps.
            </p>

            <h2>How the Workflow Works</h2>

            <p>
              The application presents evaluation as a staged sequence rather
              than a single model response. That structure makes the experience
              easier to trust, easier to debug, and easier to extend.
            </p>

            <div className="blogArchitectureStack">
              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">01</div>
                <div>
                  <h3>Patient Selection</h3>
                  <p>
                    The user selects a candidate from the active trial’s patient
                    set.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">02</div>
                <div>
                  <h3>Eligibility Evaluation</h3>
                  <p>
                    The system evaluates patient data against inclusion and
                    exclusion criteria.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">03</div>
                <div>
                  <h3>Recommendation Generation</h3>
                  <p>An outcome is produced with rationale and confidence.</p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">04</div>
                <div>
                  <h3>Evidence Review</h3>
                  <p>
                    Criteria-level evidence is displayed so the decision can be
                    inspected.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">05</div>
                <div>
                  <h3>Human Review</h3>
                  <p>
                    Ambiguous cases can be approved, rejected, or routed for
                    further review.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="">Agentic clinical trial eligibility workflow</h2>

            <figure className="blogFigure">
              <TrialWorkflowDiagram />
            </figure>

            <h2>What Makes It Agentic</h2>

            <p>
              The system is structured as a coordinated set of responsibilities
              rather than a single prompt. In the demo, that logic is
              represented as specialized agents that mirror how an enterprise
              workflow can be decomposed into narrow, inspectable steps.
            </p>

            <div className="blogArchitectureStack">
              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">01</div>
                <div>
                  <h3>Patient Context Agent</h3>
                  <p>
                    Collects and structures patient information relevant to the
                    active trial.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">02</div>
                <div>
                  <h3>Criteria Interpretation Agent</h3>
                  <p>
                    Parses protocol criteria into machine-usable evaluation
                    logic.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">03</div>
                <div>
                  <h3>Eligibility Evaluation Agent</h3>
                  <p>
                    Determines criterion-by-criterion match status with
                    supporting evidence.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">04</div>
                <div>
                  <h3>Recommendation Agent</h3>
                  <p>
                    Generates the overall recommendation, rationale, and
                    confidence.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">05</div>
                <div>
                  <h3>Review Agent</h3>
                  <p>
                    Represents the human reviewer who makes the final decision
                    when ambiguity or risk requires oversight.
                  </p>
                </div>
              </div>
            </div>

            <p>
              This staged approach reflects an important product principle:
              complex AI workflows are easier to adopt when each step is visible
              and meaningful to the end user.
            </p>

            <figure className="blogFigure">
              <TrialAgentArchitectureDiagram />
            </figure>

            <h2>System Architecture</h2>

            <p>
              The application combines a modern frontend, API-driven workflow
              services, and a structured mock data layer. Although the demo runs
              in a simulated environment, the architecture mirrors a realistic
              product pattern for clinical AI applications.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🖥️</span>
                  Frontend
                </strong>
                <span>
                  Next.js / React dashboard for patient selection, evaluation
                  viewing, workflow playback, and review actions.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">⚙️</span>
                  Application Services
                </strong>
                <span>
                  API and workflow services for trials, patients, evaluations,
                  reviews, playback, and demo reset.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🗂️</span>
                  Data Layer
                </strong>
                <span>
                  Structured mock datasets for trials, patients, evaluations,
                  criteria evidence, reviews, and workflow steps.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧭</span>
                  Workflow State
                </strong>
                <span>
                  Evaluation state, audit trails, review queues, and surfaced
                  rationale keep the experience explainable.
                </span>
              </div>
            </div>

            <h2>Why Explainability Matters</h2>

            <p>
              Clinical AI products should not behave like a black box. In trial
              eligibility workflows, trust comes from being able to inspect why
              a recommendation was made. That is why the experience is built
              around <strong>criteria-level evidence</strong>, visible workflow
              activity, and concise recommendation summaries rather than a
              simple pass/fail label.
            </p>

            <p>
              In practice, users can inspect the rationale behind a
              recommendation, replay workflow activity, review uncertain cases,
              and change the active trial to explore different screening paths.
              The interface is designed to make recommendation logic visible
              instead of hiding it behind a score.
            </p>

            <h2>Human-in-the-Loop Review</h2>

            <p>
              Not every eligibility decision should be fully automated. Some
              criteria depend on incomplete data, ambiguous protocol language,
              conflicting evidence, or judgment calls that belong with a
              reviewer. This is where the <strong>human-in-the-loop</strong>{" "}
              layer becomes essential.
            </p>

            <figure className="blogFigure">
              <TrialHitlDiagram />
            </figure>

            <h3>Typical Review Triggers</h3>

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
              A big part of this project was translating workflow logic into a
              product experience that feels understandable and interactive. The
              demo includes worklists, selectors, recommendation panels,
              activity timelines, and review controls that make system behavior
              visible.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📋</span>
                  Trial Worklist
                </strong>
                <span>
                  Prioritizes patients under the active trial context.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧑‍⚕️</span>
                  Patient Selector
                </strong>
                <span>Lets users choose and launch patient evaluations.</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📊</span>
                  Evaluation Viewer
                </strong>
                <span>Shows recommendation summary and criteria evidence.</span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🕒</span>
                  Workflow Activity
                </strong>
                <span>
                  Provides step-by-step visibility into system behavior.
                </span>
              </div>
            </div>

            <h2>Results and Takeaways</h2>

            <p>
              Even as a simulated environment, the project demonstrates a
              stronger product pattern than a simple chatbot-style interaction.
              It shows how trial matching can be represented as a staged
              workflow with evidence, transparency, and escalation paths built
              in from the start.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🏥</span>
                  Realistic Clinical AI
                </strong>
                <span>
                  Models the work as a multi-step workflow rather than a single
                  response interface.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔍</span>
                  Transparent Evidence
                </strong>
                <span>
                  Recommendations are tied to rationale, criteria, and evidence.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🤝</span>
                  Human Review
                </strong>
                <span>
                  Reviewer oversight is designed into the workflow from the
                  beginning.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧱</span>
                  Reusable Foundation
                </strong>
                <span>
                  Supports richer protocol parsing, cohort logic, and reviewer
                  collaboration.
                </span>
              </div>
            </div>

            <h2>Final Reflection</h2>

            <p>
              The most important lesson from this project is that high-value AI
              systems in healthcare need to be designed as workflows, not just
              model calls. Breaking clinical trial eligibility into clear stages
              makes the system easier to trust, easier to explain, and easier to
              improve.
            </p>

            <p>
              That is what makes the demo compelling: it does not just answer
              whether a patient matches a trial. It shows how the system arrived
              there, where uncertainty remains, and where human judgment still
              belongs.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
