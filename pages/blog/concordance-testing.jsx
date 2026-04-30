import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConcordanceTestingDiagram from "../../components/blog/ConcordanceTestingDiagram";
import DailySyncValidationDiagram from "../../components/blog/DailySyncValidationDiagram";
import ConcordanceAlertingDiagram from "../../components/blog/ConcordanceAlertingDiagram";

export default function BlogPost() {
  return (
    <div className="blogPage">
      <Navbar />

      <main className="blogMain">
        <article>
          <h1 className="blogTitle">
            Concordance Testing in Regulated Data Platforms:
            <br />
            Building Trust Across Migration and Daily Sync
          </h1>

          <p className="blogMeta">Published Feb 2026 · by Jeff Ross</p>

          <section className="blogProse">
            <p>
              Concordance testing is the backbone of trustworthy data migrations
              and integrations, especially in regulated clinical research
              environments where downstream workflows depend on accurate,
              complete, and traceable data.
            </p>

            <p>
              At Memorial Sloan Kettering, we used concordance testing to
              validate a large-scale migration from legacy Oracle data into
              Sapio LIMS, and then extended the same pattern into ongoing
              operational controls for daily synchronizations across patient,
              consent, and protocol data.
            </p>

            <div className="blogCallout">
              <span className="blogCalloutIcon">🧪</span>
              <div>
                <strong>Core product concept:</strong> concordance testing
                should behave like a repeatable data integrity workflow, not a
                one-time QA checklist.
              </div>
            </div>

            <ConcordanceTestingDiagram />

            <h2>The Problem</h2>

            <p>
              Data migrations and integrations can appear successful while
              quietly introducing defects: missing records, duplicated rows,
              shifted timestamps, truncated strings, coerced types, unexpected
              nulls, or broken relationships. In clinical research and
              biobanking workflows, these issues can affect chain-of-custody,
              consent interpretation, specimen availability, reporting, and
              audit readiness.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📊</span>
                  Count Drift
                </strong>
                <span>
                  Target systems may contain missing, duplicated, or
                  unexpectedly filtered records.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔤</span>
                  Value Mismatch
                </strong>
                <span>
                  Fields can diverge because of transforms, truncation, casing,
                  or null handling.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧱</span>
                  Type Breaks
                </strong>
                <span>
                  Dates, numerics, enums, and identifiers may be coerced or
                  formatted incorrectly.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔗</span>
                  Broken Relationships
                </strong>
                <span>
                  Child records can lose valid parent links across patient,
                  accession, specimen, and aliquot entities.
                </span>
              </div>
            </div>

            <p>
              The product challenge was to create a validation framework that
              could prove data was correct at migration time and continue
              monitoring data quality after go-live.
            </p>

            <h2>What Is Concordance Testing?</h2>

            <p>
              Concordance testing is a structured validation approach that
              confirms data in a target system matches the source system{" "}
              <em>exactly</em> in completeness, correctness, and meaning after a
              migration or synchronization.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">#️⃣</span>
                  Record Counts
                </strong>
                <span>
                  Confirms no missing rows, duplicate rows, or unexpected entity
                  totals.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">✅</span>
                  Field Values
                </strong>
                <span>
                  Compares source and target values column by column after
                  agreed normalization.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧬</span>
                  Data Types
                </strong>
                <span>
                  Validates strings, numerics, timestamps, identifiers, enums,
                  precision, and formats.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🕸️</span>
                  Referential Integrity
                </strong>
                <span>
                  Ensures relationships hold across parent and child data
                  entities.
                </span>
              </div>
            </div>

            <h2>Why Concordance Testing Matters</h2>

            <p>
              In regulated platforms, a migration is not successful simply
              because data loads. It is successful when data can be trusted by
              downstream users, audited by governance teams, and relied on by
              operational workflows.
            </p>

            <p>
              Concordance testing turns migration quality into something
              measurable. It gives product, engineering, data governance, and
              operations teams a shared way to identify mismatches, prioritize
              remediation, and decide whether a migration or sync is ready for
              use.
            </p>

            <h2>How MSK Used Concordance Testing for Migration</h2>

            <p>
              During the migration, we validated legacy <strong>Oracle</strong>{" "}
              datasets against data ingested into <strong>Sapio LIMS</strong>.
              To keep validation independent and reproducible, we pulled both
              datasets into <strong>Palantir Foundry</strong> and performed
              comparisons there.
            </p>

            {/* <figure className="blogFigure">
              <img
                src="/images/concordance-migration.png"
                alt="Oracle to Sapio migration concordance workflow"
              />
              <figcaption className="blogCaption">
                Figure: Oracle → Sapio migration validated via an independent
                reconciliation layer in Foundry.
              </figcaption>
            </figure> */}

            <h2>Migration Validation Workflow</h2>

            <p>
              The migration workflow was designed as an independent
              reconciliation process. Source and target data were extracted,
              normalized, compared, and summarized so teams could understand
              both the scale and type of mismatches.
            </p>

            <div className="blogArchitectureStack">
              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">01</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📥</span>
                    <span>Extract source data</span>
                  </h3>
                  <p>
                    Pull legacy Oracle datasets for patients, accessions,
                    specimens, aliquots, and related operational fields.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">02</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📤</span>
                    <span>Extract target data</span>
                  </h3>
                  <p>
                    Pull migrated Sapio LIMS datasets into the same independent
                    comparison environment.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">03</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧹</span>
                    <span>Normalize comparison fields</span>
                  </h3>
                  <p>
                    Apply agreed rules for trimming, casing, sentinel nulls,
                    timestamp formats, enums, and identifiers.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">04</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🔍</span>
                    <span>Run concordance checks</span>
                  </h3>
                  <p>
                    Compare record counts, field values, data types, and
                    relationship integrity across source and target.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">05</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🚦</span>
                    <span>Classify mismatches</span>
                  </h3>
                  <p>
                    Group issues by severity, entity, field, and root-cause
                    pattern so teams can prioritize remediation.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">06</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📋</span>
                    <span>Report readiness</span>
                  </h3>
                  <p>
                    Produce auditable summaries showing what passed, what
                    failed, and what required review before cutover.
                  </p>
                </div>
              </div>
            </div>

            <h2>Entities Validated</h2>

            <p>
              The validation covered the core operational hierarchy used in
              biobanking and research workflows. These entities needed to remain
              complete, correctly related, and semantically consistent across
              the migration.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">👤</span>
                  Patients
                </strong>
                <span>
                  Patient identifiers and demographic context used across
                  downstream workflows.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📦</span>
                  Accessions
                </strong>
                <span>
                  Intake events connecting patient context to collected
                  specimens.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧫</span>
                  Specimens
                </strong>
                <span>
                  Biological materials with type, processing, collection, and
                  storage context.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧪</span>
                  Aliquots
                </strong>
                <span>
                  Derived sample units requiring valid links to parent specimen,
                  accession, and patient records.
                </span>
              </div>
            </div>

            <h2>Validation Dimensions</h2>

            <p>
              The checks were designed to validate both the data itself and the
              relationships that made the data meaningful.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">#️⃣</span>
                  Counts
                </strong>
                <span>
                  Compared by entity and key partitions such as protocol, date
                  range, and status.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔤</span>
                  Values
                </strong>
                <span>
                  Performed column-by-column comparisons after normalization
                  rules were applied.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧬</span>
                  Types
                </strong>
                <span>
                  Checked precision, scale, timestamp parsing, enum alignment,
                  and field formats.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔗</span>
                  Relationships
                </strong>
                <span>
                  Ensured child entities always mapped to valid parent records
                  across the hierarchy.
                </span>
              </div>
            </div>

            <div className="blogCallout">
              <span className="blogCalloutIcon">💡</span>
              <div>
                <strong>Why Foundry?</strong> It provided an independent
                reconciliation layer: repeatable pipelines, auditable
                transformations, and a single place to compare Oracle vs. Sapio
                outputs for values, types, and counts.
              </div>
            </div>

            <h2>Daily Synchronization Controls</h2>

            <p>
              After go-live, concordance became an operational control. We
              pulled data from <strong>Sapio</strong> into{" "}
              <strong>Palantir Foundry</strong> and ran scheduled checks to
              detect drift, integration regressions, or unexpected changes.
            </p>

            <DailySyncValidationDiagram />

            <h2>Ongoing Sync Scope</h2>

            <p>
              Daily concordance checks focused on high-value entities where
              downstream workflow accuracy depended on synchronization quality.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">👤</span>
                  Patients
                </strong>
                <span>
                  Validated patient identity and core patient-level fields in
                  the downstream platform.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧾</span>
                  Patient Consents
                </strong>
                <span>
                  Monitored consent state because permitted-use logic depended
                  on accurate sync.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📚</span>
                  Protocols
                </strong>
                <span>
                  Checked protocol context used for research, governance, and
                  operational workflows.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🚨</span>
                  Alerts
                </strong>
                <span>
                  Surfaced sync breaks and data drift to engineering and
                  management teams.
                </span>
              </div>
            </div>

            <h2>Two Complementary Testing Modes</h2>

            <p>
              Ongoing validation combined random sampling with delta validation
              so the system could catch both slow drift and recently introduced
              synchronization defects.
            </p>

            <div className="blogArchitectureStack">
              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">01</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🎲</span>
                    <span>Random sampling checks</span>
                  </h3>
                  <p>
                    Interval-scheduled tests on random records helped catch slow
                    drift, edge cases, and unexpected data divergence.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">02</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🔁</span>
                    <span>Delta validation</span>
                  </h3>
                  <p>
                    Tests focused on changes and additions since the last
                    interval to ensure new deltas applied correctly.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">03</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📊</span>
                    <span>Mismatch summaries</span>
                  </h3>
                  <p>
                    Results were grouped by entity, field, test type, and
                    severity to make failures actionable.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">04</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🚨</span>
                    <span>Alert routing</span>
                  </h3>
                  <p>
                    Inconsistencies triggered alerts for selected engineers and
                    management based on thresholds and severity.
                  </p>
                </div>
              </div>
            </div>

            <h2>Alerting and Operational Response</h2>

            <p>
              When inconsistencies were detected—count mismatches, type breaks,
              unexpected nulls, or value divergence—alerts were triggered
              automatically. Notifications went to selected engineers and
              management, with severity thresholds to prevent alert fatigue
              while still catching high-risk issues fast.
            </p>

            <ConcordanceAlertingDiagram />

            <h2>Interface and Reporting Highlights</h2>

            <p>
              The value of concordance testing increases when results are easy
              to interpret. A strong reporting layer should help teams
              understand which entity failed, which field diverged, how severe
              the issue is, and whether the issue is isolated or systemic.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📋</span>
                  Test Summary
                </strong>
                <span>
                  Shows pass/fail status, entity scope, run timing, and affected
                  record counts.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔎</span>
                  Mismatch Detail
                </strong>
                <span>
                  Displays source value, target value, field name, and entity
                  key for review.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🚦</span>
                  Severity Triage
                </strong>
                <span>
                  Separates informational drift from high-risk breaks requiring
                  immediate action.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📈</span>
                  Trend Monitoring
                </strong>
                <span>
                  Tracks recurring failures and drift patterns across scheduled
                  runs.
                </span>
              </div>
            </div>

            <h2>Results and Takeaways</h2>

            <p>
              Concordance testing created a repeatable quality framework for
              both migration readiness and ongoing synchronization trust. It
              helped teams detect data issues earlier, explain failures more
              clearly, and maintain confidence in downstream research and
              operational workflows.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧱</span>
                  Integrity Framework
                </strong>
                <span>
                  Concordance is a data integrity framework, not a one-time QA
                  task.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧭</span>
                  Independent Reconciliation
                </strong>
                <span>
                  Independent comparison reduces shared failure modes and
                  improves auditability.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🎲</span>
                  Sampling + Deltas
                </strong>
                <span>
                  Random sampling and delta checks catch both slow drift and
                  breaking changes.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🚨</span>
                  Closed-Loop Alerting
                </strong>
                <span>
                  Alerts make data issues visible, actionable, measurable, and
                  owned.
                </span>
              </div>
            </div>

            <h2>Final Reflection</h2>

            <p>
              The practical lesson is that regulated data platforms need quality
              controls that continue beyond migration day. Concordance testing
              gives teams a durable operating model for proving data correctness
              before cutover and monitoring it after go-live.
            </p>

            <p>
              When implemented well, concordance testing becomes more than a
              technical validation method. It becomes a shared trust mechanism
              across product, engineering, data governance, operations, and
              leadership.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
