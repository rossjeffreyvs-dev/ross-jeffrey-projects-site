"use client";

export default function ConcordanceAlertingDiagram() {
  return (
    <figure className="blogFigure concordanceAlertFigure">
      <div className="concordanceAlertSurface">
        <header className="concordanceAlertHeader">
          <p className="concordanceAlertEyebrow">Alerting Workflow</p>
          <h2>Notify Engineers + Management</h2>
          <p>
            Concordance failures are routed through severity thresholds so data
            issues are visible, actionable, and owned without creating alert
            fatigue.
          </p>
        </header>

        <div className="concordanceAlertFlow">
          <section className="concordanceAlertCard concordanceAlertCardSource">
            <span className="concordanceAlertIcon">🚨</span>
            <div>
              <h3>Concordance Checks</h3>
              <p>Counts, values, types, relationships</p>
            </div>
          </section>

          <div className="concordanceAlertRoutes" aria-hidden="true">
            <span className="concordanceAlertRouteLine concordanceAlertRouteLineTop" />
            <span className="concordanceAlertRouteLine concordanceAlertRouteLineBottom" />
          </div>

          <div className="concordanceAlertTargets">
            <section className="concordanceAlertCard concordanceAlertCardTarget">
              <span className="concordanceAlertIcon">🛠️</span>
              <div>
                <h3>Engineers</h3>
                <p>
                  Investigate root cause and repair sync or pipeline issues.
                </p>
              </div>
            </section>

            <section className="concordanceAlertCard concordanceAlertCardTarget">
              <span className="concordanceAlertIcon">📊</span>
              <div>
                <h3>Management</h3>
                <p>
                  Track severity, operational impact, and remediation status.
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="concordanceAlertNote">
          <strong>Severity thresholds</strong>
          <span>
            Low-risk drift can be logged for review, while high-severity
            mismatches trigger immediate notification.
          </span>
        </div>
      </div>

      <figcaption className="blogCaption">
        Alert routing turns concordance failures into an operational response
        workflow for engineering and leadership stakeholders.
      </figcaption>
    </figure>
  );
}
