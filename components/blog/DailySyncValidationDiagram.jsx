"use client";

export default function DailySyncValidationDiagram() {
  return (
    <figure className="blogFigure dailySyncFigure">
      <div className="dailySyncSurface">
        <header className="dailySyncHeader">
          <p className="dailySyncEyebrow">Daily Sync Controls</p>
          <h2>Sampling + Delta Checks</h2>
          <p>
            Sapio LIMS data is synchronized into Foundry, where scheduled
            validation checks compare new and changed records to detect drift,
            missing data, and sync regressions.
          </p>
        </header>

        <div className="dailySyncFlow">
          <section className="dailySyncCard">
            <span className="dailySyncIcon">🧪</span>
            <div>
              <h3>Sapio LIMS</h3>
              <p>Operational source system</p>
            </div>
          </section>

          <div className="dailySyncConnector" aria-hidden="true">
            →
          </div>

          <section className="dailySyncCard dailySyncCardFoundry">
            <span className="dailySyncIcon">🔍</span>
            <div>
              <h3>Foundry</h3>
              <p>Ingestion, comparison, monitoring</p>
            </div>
          </section>
        </div>

        <div className="dailySyncChecks">
          <section className="dailySyncCheckCard">
            <span className="dailySyncCheckNumber">01</span>
            <div>
              <h3>Random Sampling</h3>
              <p>
                Scheduled interval checks validate representative records to
                catch slow drift, edge cases, and unexpected divergence.
              </p>
            </div>
          </section>

          <section className="dailySyncCheckCard">
            <span className="dailySyncCheckNumber">02</span>
            <div>
              <h3>Delta Validation</h3>
              <p>
                New and changed records are compared after each sync window to
                confirm updates landed correctly.
              </p>
            </div>
          </section>
        </div>
      </div>

      <figcaption className="blogCaption">
        Daily sync controls combine scheduled sampling with delta validation so
        integration issues can be detected after go-live.
      </figcaption>
    </figure>
  );
}
