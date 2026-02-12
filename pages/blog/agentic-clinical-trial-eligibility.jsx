import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BlogPost() {
  return (
    <div className="blogPage">
      <Navbar />

      <main className="blogMain">
        <article>
          <h1 className="blogTitle">Building an Agentic AI Service for Clinical Trial Eligibility</h1>

          <p className="blogMeta">Published Feb 12, 2026 · by Jeff Ross</p>

          <section className="blogProse">
            <p>
              Clinical trial recruitment sounds straightforward: find eligible patients, enroll them. In practice, it’s one of the most operationally complex
              workflows in oncology research. At Memorial Sloan Kettering (MSK), we designed an <strong>agentic AI service</strong> that uses an LLM to
              contextualize protocol PDFs and evaluate incoming patients to determine whether their specimens are eligible for clinical trial research.
            </p>

            <h2>The Core Problem</h2>
            <p>
              Each clinical trial has unique eligibility rules. Patients must meet inclusion criteria (e.g., at least 30 years old) while avoiding exclusion
              criteria (e.g., not being smokers). These rules are detailed in clinical trial protocols, typically stored as <strong>unstructured text in PDF
              documents</strong>.
            </p>
            <p>
              Complicating matters further: potential patient data can be scattered, inconsistent, incomplete, and often also includes unstructured text.
              The bottleneck isn’t finding patients — it’s interpreting whether they actually qualify.
            </p>

            <h2>Breaking Down the Workflow</h2>
            <p>Recruiting patients is a multi-step process:</p>
            <ul>
              <li>Protocol interpretation</li>
              <li>Patient data retrieval</li>
              <li><strong>Eligibility assessment</strong></li>
              <li>Manual review and confirmation</li>
              <li>Outreach and enrollment</li>
            </ul>
            <p>
              For this implementation, we focused specifically on automating eligibility assessment — where LLMs and agentic workflows provide the highest leverage.
            </p>

            <h2>Foundational Ontology &amp; Application Context</h2>
            <p>
              We did not build the ontology from scratch. MSK already had a foundational ontology and an operational application to support clinical research.
              The goal wasn’t to replace the workflow — it was to <strong>enhance</strong> it by adding agentic functionality on top of existing patient,
              protocol, and specimen objects.
            </p>

            <h2>What Makes It “Agentic”?</h2>
            <p>
              This wasn’t a single LLM call. The service behaved like a multi-step agent:
            </p>
            <ul>
              <li>Ingest protocol PDF</li>
              <li>Extract inclusion and exclusion criteria</li>
              <li>Structure criteria into machine-readable rules</li>
              <li>Retrieve relevant patient demographics and clinical context</li>
              <li>Evaluate patient attributes against criteria</li>
              <li>Generate reasoning trace and evidence</li>
              <li>Return an eligibility outcome and escalation path</li>
            </ul>

            <h2>Architecture Overview</h2>
            <p>At a high level:</p>
            <ul>
              <li>Protocol PDFs are contextualized into structured eligibility criteria</li>
              <li>Patient data is pulled from ontology-linked sources</li>
              <li>The agent evaluates criteria, produces reasoning, and triggers review when needed</li>
            </ul>

            <h2>Output: More Than Yes/No</h2>
            <p>
              The service returned more than a binary decision. It categorized patients into:
            </p>
            <ul>
              <li><strong>Clearly Eligible</strong></li>
              <li><strong>Clearly Not Eligible</strong></li>
              <li><strong>Requires Clinical Review</strong></li>
            </ul>
            <p>
              Alongside the outcome, it produced criteria-level evaluation, supporting evidence, and a reasoning trace — critical for clinical trust and auditability.
            </p>

            <h2>Human-in-the-Loop (HITL): When Eligibility Isn’t Binary</h2>
            <p>
              Not every eligibility decision can — or should — be automated. Protocols often include nuanced language like “clinically significant disease,”
              “adequate organ function,” or “investigator discretion.” These require medical judgment.
            </p>
            <p>
              For this reason, the system used a <strong>Human-in-the-Loop (HITL)</strong> model: ambiguous cases were escalated for review, and reviewer feedback
              continuously improved the agent over time.
            </p>

            <figure className="blogFigure">
              <img
                src="/images/agentic-hitl-eligibility-loop.png"
                alt="Human-in-the-loop workflow: Agent to decision to review loop to feedback to refinement"
              />
              <figcaption className="blogCaption">
                HITL loop: the agent escalates uncertain cases to humans; feedback refines prompts, rules, and confidence thresholds.
              </figcaption>
            </figure>

            <h3>What Triggers Review?</h3>
            <ul>
              <li>Missing or incomplete data required for a criterion</li>
              <li>Ambiguous protocol language or nested exceptions</li>
              <li>Patient attributes found only in free-text notes</li>
              <li>Confidence below threshold or conflicting evidence</li>
              <li>Criteria explicitly requiring clinician judgment</li>
            </ul>

            <h2>Why This Matters</h2>
            <p>
              In regulated clinical environments, over-automation erodes trust and increases risk. The most effective systems augment humans: they reduce
              cognitive load, structure complexity, surface edge cases, and escalate ambiguity intelligently.
            </p>

            <h2>Impact</h2>
            <ul>
              <li>Reduced manual protocol parsing burden</li>
              <li>Accelerated feasibility screening and eligibility assessment</li>
              <li>Improved consistency across trials and patient cohorts</li>
              <li>Preserved safety, transparency, and reviewer authority via HITL</li>
            </ul>

            <h2>Final Reflection</h2>
            <p>
              Agentic AI works best when paired with strong data foundations. A foundational ontology provided normalized patient and specimen context; the agent
              layered reasoning on top. The result was scalable eligibility assessment that sped up clinical research operations while keeping humans in the loop.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
