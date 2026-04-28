import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPost() {
  return (
    <div className="blogPage">
      <Navbar />

      <main className="blogMain">
        <article>
          <h1 className="blogTitle">
            Claude Clinical Protocol Reasoning Engine: Designing Transparent
            Eligibility Evaluation
          </h1>

          <p className="blogMeta">Published Apr 28, 2026 · by Jeff Ross</p>

          <section className="blogProse">
            <p>
              Clinical trial protocols are dense, conditional, and often
              difficult to evaluate consistently. Eligibility language may refer
              to diagnosis, staging, prior therapies, lab thresholds,
              performance status, timing windows, exceptions, and ambiguous
              evidence requirements. This project explores how a Claude-style
              reasoning workflow can help interpret protocol criteria, evaluate
              synthetic patient records, and produce transparent eligibility
              recommendations.
            </p>

            <p>
              The goal was not to create a black-box matching tool. The goal was
              to model a reasoning surface that shows how an AI system moves
              from protocol language to patient evidence, criterion-level
              assessment, recommendation, and human review escalation.
            </p>

            <h2>The Problem</h2>
            <p>
              Clinical eligibility review is often slowed by fragmented patient
              evidence and nuanced protocol language. A patient may appear
              eligible based on diagnosis but require review because of prior
              therapy history, performance status, missing labs, or an exclusion
              criterion. Teams need a system that can explain what it found,
              what remains uncertain, and why a recommendation was made.
            </p>

            <h2>Project Goal</h2>
            <p>
              The Claude Clinical Protocol Reasoning Engine simulates a workflow
              where trial criteria and synthetic patient records are evaluated
              through an explainable reasoning layer. The interface emphasizes
              traceability: users can see the selected trial, patient profile,
              reasoning events, and final recommendation.
            </p>

            <h2>How the Workflow Works</h2>
            <ol>
              <li>
                <strong>Protocol criteria parsing</strong> — eligibility
                requirements are represented as structured inclusion and
                exclusion criteria.
              </li>
              <li>
                <strong>Patient profile normalization</strong> — synthetic
                patient records are prepared for evaluation against protocol
                requirements.
              </li>
              <li>
                <strong>Criterion-level reasoning</strong> — the reasoning layer
                evaluates each requirement and records supporting rationale.
              </li>
              <li>
                <strong>Recommendation generation</strong> — the system returns
                an eligibility recommendation with confidence and supporting
                explanation.
              </li>
              <li>
                <strong>Human review escalation</strong> — uncertain or
                ambiguous cases can be flagged for additional clinical review.
              </li>
            </ol>

            <h2>What Makes It Useful</h2>
            <p>
              The strongest part of this pattern is the audit trail. Rather than
              showing only a final answer, the demo presents the reasoning path:
              what was loaded, what evidence was reviewed, which criteria were
              evaluated, and how the final recommendation was produced.
            </p>

            <h2>Interface Design Highlights</h2>
            <ul>
              <li>
                <strong>Trial selector</strong> for switching between protocol
                examples.
              </li>
              <li>
                <strong>Patient selector</strong> for evaluating synthetic
                patient profiles.
              </li>
              <li>
                <strong>Reasoning panel</strong> for showing the live evaluation
                sequence.
              </li>
              <li>
                <strong>Recommendation summary</strong> for final eligibility
                status, confidence, and explanation.
              </li>
              <li>
                <strong>Audit trail</strong> for transparent workflow events and
                reviewability.
              </li>
            </ul>

            <h2>Architecture Pattern</h2>
            <p>
              The project is structured as a portfolio-scale demo with a Next.js
              frontend, a FastAPI backend, synthetic clinical trial data, and a
              gateway deployment pattern on AWS Lightsail. The same routing
              approach supports multiple portfolio projects behind a shared
              Lightsail service while preserving project-specific experiences.
            </p>

            <h2>Results and Takeaways</h2>
            <p>
              This project demonstrates how clinical AI tools can be designed
              around explainability rather than just automation. In regulated or
              high-stakes workflows, the value is not only whether the system
              can produce a recommendation. The value is whether a human
              reviewer can understand, challenge, and trust the reasoning that
              led to it.
            </p>

            <h2>Final Reflection</h2>
            <p>
              A clinical reasoning engine should behave less like a generic
              chatbot and more like a structured decision-support workflow. The
              product experience should make evidence visible, uncertainty
              explicit, and escalation paths clear. That is the design principle
              behind this demo.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
