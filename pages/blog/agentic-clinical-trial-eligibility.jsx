import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  TrialWorkflowDiagram,
  TrialAgentArchitectureDiagram,
  TrialSystemArchitectureDiagram,
  TrialHitlDiagram,
} from "../../components/blog/AgenticTrialDiagrams";

export default function BlogPost() {
  return (
    <div className="blogPage">
      <Navbar />

      <main className="blogMain">
        <article>
          <h1 className="blogTitle">
            Agentic Clinical Trial Eligibility: Designing a Multi-Agent Matching
            Workflow
          </h1>

          <p className="blogMeta">Published Mar 2026 · by Jeff Ross</p>

          <section className="blogProse">
            <p>
              Clinical trial screening is one of those workflows that looks
              simple from a distance and becomes significantly more complex the
              moment you move into real operating conditions. Trial criteria are
              nuanced, patient records are often incomplete, and many decisions
              depend on evidence that has to be interpreted rather than simply
              retrieved. This project explores that problem through an{" "}
              <strong>agentic clinical trial eligibility workflow</strong>: a
              staged system that evaluates a selected patient against an active
              trial, generates an explainable recommendation, surfaces
              criteria-level evidence, and routes ambiguous cases into human
              review.
            </p>

            <div>&nbsp;</div>

            <p>
              Rather than presenting trial matching as a single opaque AI
              answer, the application breaks the process into clear steps:
              patient selection, eligibility evaluation, recommendation
              generation, evidence review, and reviewer approval. The result is
              a product pattern that is much closer to how enterprise clinical
              AI systems need to behave in practice: transparent, reviewable,
              and designed for human oversight.
            </p>

            {/* <figure className="blogFigure">
              <img
                src="/images/agentic-clinical-trial-hero-dashboard.png"
                alt="Agentic Clinical Trial Eligibility dashboard showing worklist, evaluation details, workflow activity, and review controls"
              />
              <figcaption className="blogCaption">
                Demo dashboard: trial-specific patient evaluation with
                recommendation summary, workflow playback, and human review
                controls.
              </figcaption>
            </figure> */}

            <h2>The Problem</h2>
            <p>
              Clinical trial screening is slow because the core logic lives in
              protocol language while the supporting patient context lives
              across structured and unstructured data sources. Teams are rarely
              just asking, “Does this patient match?” They are asking:
            </p>
            <ul>
              <li>Which patients should I review first?</li>
              <li>Which criteria passed, failed, or remain uncertain?</li>
              <li>What evidence supports this recommendation?</li>
              <li>
                Where does a clinician still need to make the final judgment?
              </li>
            </ul>
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
              by rationale, evidence, and workflow steps. It is intentionally
              designed to emphasize explainability over black-box scoring.
            </p>

            <h2>How the Workflow Works</h2>
            <p>
              The application presents the evaluation as a staged sequence
              rather than a single model response. That structure makes the
              experience easier to trust, easier to debug, and easier to extend.
            </p>
            <ol>
              <li>
                <strong>Patient Selection</strong> — the user selects a
                candidate from the active trial’s patient set.
              </li>
              <li>
                <strong>Eligibility Evaluation</strong> — the system evaluates
                patient data against inclusion and exclusion criteria.
              </li>
              <li>
                <strong>Recommendation Generation</strong> — an overall
                recommendation is produced with rationale and confidence.
              </li>
              <li>
                <strong>Evidence Review</strong> — criteria-level evidence is
                displayed so the decision can be inspected.
              </li>
              <li>
                <strong>Human Review</strong> — flagged or ambiguous cases can
                be approved, rejected, or sent back for further review.
              </li>
            </ol>

            <figure className="blogFigure">
              <TrialWorkflowDiagram />
            </figure>

            <h2>What Makes It Agentic</h2>
            <p>
              The system is structured as a coordinated set of responsibilities
              rather than a single prompt. In the demo, that logic is
              represented as a sequence of specialized agents that mirror how an
              enterprise workflow can be decomposed into narrow, inspectable
              steps.
            </p>
            <ul>
              <li>
                <strong>Patient Context Agent</strong> collects and structures
                patient information relevant to the active trial.
              </li>
              <li>
                <strong>Criteria Interpretation Agent</strong> parses protocol
                criteria into machine-usable rules.
              </li>
              <li>
                <strong>Eligibility Evaluation Agent</strong> determines
                criterion-by-criterion match status.
              </li>
              <li>
                <strong>Recommendation Agent</strong> generates the overall
                recommendation, rationale, and confidence.
              </li>
              <li>
                <strong>Review Agent (Human)</strong> makes the final decision
                when ambiguity or risk requires oversight.
              </li>
            </ul>
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
            <ul>
              <li>
                <strong>Frontend:</strong> Next.js / React dashboard for patient
                selection, evaluation viewing, workflow playback, and review
                actions.
              </li>
              <li>
                <strong>Application Services:</strong> API and workflow services
                for trials, patients, evaluations, reviews, playback, and demo
                reset.
              </li>
              <li>
                <strong>Data Layer:</strong> structured mock datasets for
                trials, patients, evaluations, criteria evidence, reviews, and
                workflow steps.
              </li>
            </ul>

            <figure className="blogFigure">
              <TrialSystemArchitectureDiagram />
            </figure>

            <h2>Why Explainability Matters</h2>
            <p>
              One of the main ideas behind this project is that clinical AI
              products should not behave like a black box. In trial eligibility
              workflows, trust comes from being able to inspect why a
              recommendation was made. That is why the experience is built
              around <strong>criteria-level evidence</strong>, visible workflow
              activity, and concise recommendation summaries rather than a
              simple pass/fail label.
            </p>
            <p>
              In practice, that means users can inspect the rationale behind a
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
              <TrialHitlDiagram />{" "}
            </figure>

            <h3>Typical Review Triggers</h3>
            <ul>
              <li>
                Missing or incomplete patient data required for a criterion
              </li>
              <li>Ambiguous protocol language or nested exceptions</li>
              <li>Conflicting evidence across criteria</li>
              <li>Confidence below threshold</li>
              <li>Cases that require clinician or reviewer judgment</li>
            </ul>

            <h2>Interface Design Highlights</h2>
            <p>
              A big part of this project was translating workflow logic into a
              product experience that feels understandable and interactive. The
              demo includes:
            </p>
            <ul>
              <li>
                <strong>Trial Worklist</strong> for prioritizing patients under
                the active trial.
              </li>
              <li>
                <strong>Patient Selector</strong> for choosing and launching
                evaluations.
              </li>
              <li>
                <strong>Evaluation Viewer</strong> for recommendation summary
                and evidence details.
              </li>
              <li>
                <strong>Workflow Activity Panel</strong> for step-by-step
                visibility into system behavior.
              </li>
              <li>
                <strong>Review Panel</strong> for approve / reject /
                request-more-review actions.
              </li>
            </ul>
            <p>
              This matters because agentic AI is not just a modeling problem. It
              is also a product design problem. Users need an interface that
              makes the sequence of reasoning understandable and actionable.
            </p>

            <h2>Results and Takeaways</h2>
            <p>
              Even as a simulated environment, the project demonstrates a
              stronger product pattern than a simple chatbot-style interaction.
              It shows how trial matching can be represented as a staged
              workflow with evidence, transparency, and escalation paths built
              in from the start.
            </p>
            <ul>
              <li>
                More realistic representation of clinical AI than a single
                response interface
              </li>
              <li>
                Transparent recommendations tied to evidence and rationale
              </li>
              <li>
                Human review built into the system, not added as an afterthought
              </li>
              <li>
                Reusable foundation for richer protocol parsing, cohort logic,
                and reviewer collaboration
              </li>
            </ul>

            <h2>Final Reflection</h2>
            <p>
              The most important lesson from this project is that high-value AI
              systems in healthcare need to be designed as workflows, not just
              model calls. Breaking clinical trial eligibility into clear stages
              makes the system easier to trust, easier to explain, and easier to
              improve. That is what makes the demo compelling: it does not just
              answer the question of whether a patient matches a trial. It shows
              how the system arrived there, where uncertainty remains, and where
              human judgment still belongs.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
