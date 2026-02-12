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
            Concordance Testing in Regulated Data Platforms
          </h1>

          <p className="blogMeta">Published Feb 11, 2026 · by Jeff Ross</p>

          <section className="blogProse">
            <p>
              Concordance testing is the backbone of trustworthy data migrations
              and integrations—especially in regulated clinical research
              environments. At Memorial Sloan Kettering (MSK), we used
              concordance testing to validate a large-scale migration from
              legacy Oracle data into Sapio LIMS, and then to continuously
              monitor daily synchronizations across patient, consent, and
              protocol data.
            </p>

            <figure className="blogFigure">
              <img
                src="/images/concordance-hero.png"
                alt="Concordance testing overview diagram"
              />
              <figcaption className="blogCaption">
                Figure: Concordance testing as a validation layer across
                migration and ongoing sync.
              </figcaption>
            </figure>

            <h2>What Is Concordance Testing?</h2>
            <p>
              Concordance testing is a structured validation approach that
              confirms data in a target system matches the source system{" "}
              <em>exactly</em>—in completeness, correctness, and meaning—after a
              migration or synchronization.
            </p>
            <p>In practice, it checks:</p>
            <ul>
              <li>
                <strong>Record counts</strong> (no missing or duplicated rows)
              </li>
              <li>
                <strong>Field-level value equality</strong> (the same data, in
                the same places)
              </li>
              <li>
                <strong>Data types &amp; formats</strong> (strings, numerics,
                timestamps, enums)
              </li>
              <li>
                <strong>Referential integrity</strong> (relationships hold
                across entities)
              </li>
            </ul>

            <h2>Why Use Concordance Testing?</h2>
            <p>
              Migrations and integrations can “look” successful while quietly
              introducing defects: truncated strings, shifted timestamps,
              coerced types, broken relationships, or partial loads. In
              regulated research and biobanking workflows, these issues can
              compromise downstream analyses, chain-of-custody, reporting, and
              audit readiness.
            </p>

            <h2>How MSK Used Concordance Testing for Migration</h2>
            <p>
              During the migration, we validated legacy <strong>Oracle</strong>{" "}
              datasets against data ingested into <strong>Sapio LIMS</strong>.
              To keep validation independent and reproducible, we pulled both
              datasets into <strong>Palantir Foundry</strong> and performed
              comparisons there.
            </p>

            <figure className="blogFigure">
              <img
                src="/images/concordance-migration.png"
                alt="Oracle to Sapio migration concordance workflow"
              />
              <figcaption className="blogCaption">
                Figure: Oracle → Sapio migration validated via an independent
                reconciliation layer in Foundry.
              </figcaption>
            </figure>

            <h3>Entities Validated</h3>
            <ul>
              <li>
                <strong>Patients</strong>
              </li>
              <li>
                <strong>Accessions</strong>
              </li>
              <li>
                <strong>Specimens</strong>
              </li>
              <li>
                <strong>Aliquots</strong>
              </li>
            </ul>

            <h3>Validation Dimensions</h3>
            <ul>
              <li>
                <strong>Record counts</strong>: by entity and key partitions
                (protocol, date range, status)
              </li>
              <li>
                <strong>Data values</strong>: column-by-column comparisons after
                normalization (trim, casing, sentinel nulls, etc.)
              </li>
              <li>
                <strong>Data types</strong>: precision/scale checks, timestamp
                parsing, enum/domain alignment
              </li>
              <li>
                <strong>Relational integrity</strong>: ensuring child entities
                (aliquots) always mapped to valid parents
                (specimens/accessions/patients)
              </li>
            </ul>

            <div className="blogCallout">
              <strong>Why Foundry?</strong> It provided an independent
              reconciliation layer: repeatable pipelines, auditable
              transformations, and a single place to compare Oracle vs. Sapio
              outputs for values, types, and counts.
            </div>

            <h2>How MSK Used Concordance Testing for Daily Synchronizations</h2>
            <p>
              Post go-live, concordance became an operational control. We pulled
              data from <strong>Sapio</strong> into{" "}
              <strong>Palantir Foundry</strong> and ran scheduled checks to
              detect drift, integration regressions, or unexpected changes.
            </p>

            <figure className="blogFigure">
              <img
                src="/images/concordance-sync.png"
                alt="Daily sync concordance checks with sampling and delta validation"
              />
              <figcaption className="blogCaption">
                Figure: Ongoing concordance using random sampling + delta
                validation on scheduled intervals.
              </figcaption>
            </figure>

            <h3>Scope</h3>
            <ul>
              <li>
                <strong>Patients</strong>
              </li>
              <li>
                <strong>Patient consents</strong>
              </li>
              <li>
                <strong>Protocols</strong>
              </li>
            </ul>

            <h3>Two Complementary Testing Modes</h3>
            <ul>
              <li>
                <strong>Random sampling checks</strong>: interval-scheduled
                tests on random records to catch slow drift and edge cases.
              </li>
              <li>
                <strong>Delta validation</strong>: tests focused on
                changes/additions since the last interval to ensure deltas
                applied correctly.
              </li>
            </ul>

            <h3>Alerting</h3>
            <p>
              When inconsistencies were detected—count mismatches, type breaks,
              unexpected nulls, or value divergence—alerts were triggered
              automatically. Notifications went to selected engineers and
              management, with severity thresholds to prevent alert fatigue
              while still catching high-risk issues fast.
            </p>

            <figure className="blogFigure">
              <img
                src="/images/concordance-alerts.png"
                alt="Alerting flow for concordance failures"
              />
              <figcaption className="blogCaption">
                Figure: Alerts routed to engineering + management when
                inconsistencies exceeded thresholds.
              </figcaption>
            </figure>

            <h2>Key Takeaways</h2>
            <ul>
              <li>
                <strong>Concordance is a data integrity framework</strong>, not
                a one-time QA task.
              </li>
              <li>
                <strong>Independent reconciliation</strong> reduces shared
                failure modes and improves auditability.
              </li>
              <li>
                <strong>Mix random sampling + delta checks</strong> to catch
                both drift and breaking changes.
              </li>
              <li>
                <strong>Alerting closes the loop</strong> so data issues become
                visible, actionable, and measurable.
              </li>
            </ul>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
