"use client";

export default function ConcordanceTestingDiagram() {
  return (
    <figure className="blogFigure concordanceFigure">
      <div className="concordanceSurface">
        <header className="concordanceHeader">
          <p className="concordanceEyebrow">Concordance Testing</p>
          <h2>Migration + Daily Sync Validation</h2>
          <p>
            Foundry acts as an independent reconciliation layer between source
            and target systems. It validates migration accuracy and continuously
            compares datasets post-migration to detect drift, missing records,
            and data inconsistencies. This enables both one-time migration
            validation and ongoing operational monitoring with alerting.
          </p>{" "}
        </header>

        <div className="concordanceFlow">
          <section className="concordanceCard">
            <span className="concordanceIcon">🗄️</span>
            <div>
              <h3>Migration & Sync Source</h3>
              <p>Oracle legacy and current data</p>
            </div>
          </section>

          <div className="concordanceConnector">→</div>

          <section className="concordanceCard concordanceCardCenter">
            <span className="concordanceIcon">🔍</span>
            <div>
              <h3>Foundry Reconciliation</h3>
              <p>Counts, values, types, relationships</p>
            </div>
          </section>

          <div className="concordanceConnector">←</div>

          <section className="concordanceCard">
            <span className="concordanceIcon">🧪</span>
            <div>
              <h3>Ingested Target Source</h3>
              <p>Sapio LIMS data</p>
            </div>
          </section>
        </div>

        <div>&nbsp;</div>

        <div className="concordanceChecks">
          <div>
            <strong>Migration validation</strong>
            <span>Ensures source and target datasets match at cutover</span>
          </div>

          <div>
            <strong>Daily sync monitoring</strong>
            <span>
              Detects drift, missing records, and mismatches over time
            </span>
          </div>

          <div>
            <strong>Alerting</strong>
            <span>
              Flags inconsistencies for engineering and data governance teams
            </span>
          </div>
        </div>
      </div>

      {/* <figcaption className="blogCaption">
        Concordance testing compares source and target data through an
        independent reconciliation layer, supporting both migration validation
        and ongoing synchronization monitoring.
      </figcaption> */}
    </figure>
  );
}
