"use client";

export default function CdmOntologyComparisonDiagram() {
  return (
    <figure className="blogFigure cdmOntologyFigure">
      <div className="cdmOntologySurface">
        <div className="cdmOntologyHeader">
          <div>
            <p className="cdmOntologyEyebrow">CDM → Ontology</p>
            {/* <h2>From Structured Data to Operational Objects</h2> */}
            <p>
              The Common Data Model creates a durable foundation. Transformation
              pipelines normalize and map that structure into ontology objects
              that power research discovery and workflow applications.
            </p>
          </div>
        </div>

        <div className="cdmOntologyFlow">
          {/* LEFT: CDM */}
          <div className="cdmOntologyPanel">
            <div className="cdmOntologyPanelHeader">
              <span className="cdmOntologyIcon">🧱</span>
              <div>
                <h3>Common Data Model</h3>
                <p>Data foundation layer</p>
              </div>
            </div>

            <ul>
              <li>Tables, schemas, and canonical fields</li>
              <li>Standardized relationships: Patient → Specimen → Aliquot</li>
              <li>Constraints, validation, and data types</li>
              <li>Cross-system interoperability</li>
            </ul>

            <div className="cdmOntologyBestFor">
              <strong>Best for:</strong>
              <span>
                Data integration · Validation & quality · Durable pipelines
              </span>
            </div>
          </div>

          {/* MIDDLE: TRANSFORM */}
          <div className="cdmOntologyTransformLayer">
            <div className="cdmOntologyArrow">→</div>

            <div className="cdmOntologyTransformCard">
              <div className="cdmOntologyPanelHeader">
                <span className="cdmOntologyIcon">⚙️</span>
                <div>
                  <h3>Transforms / Normalization / Joins</h3>
                  <p>
                    Maps structured CDM data into governed, user-facing domain
                    objects.
                  </p>
                </div>
              </div>
            </div>

            <div className="cdmOntologyArrow">→</div>
          </div>

          {/* RIGHT: ONTOLOGY */}
          <div className="cdmOntologyPanel cdmOntologyPanelGreen">
            <div className="cdmOntologyPanelHeader">
              <span className="cdmOntologyIcon">🧠</span>
              <div>
                <h3>Ontology</h3>
                <p>Application + discovery layer</p>
              </div>
            </div>

            <ul>
              <li>Domain objects: Patient, Specimen, Aliquot</li>
              <li>Semantic relationships and navigation</li>
              <li>Permissioning, lineage, and governance</li>
              <li>Queryable, app-ready data layer</li>
            </ul>

            <div className="cdmOntologyBestFor">
              <strong>Best for:</strong>
              <span>
                Research discovery · Reusable analytics · Workflow logic
              </span>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="blogCaption">
        CDM structures data; transformation pipelines operationalize it into
        ontology objects that power discovery and applications.
      </figcaption>
    </figure>
  );
}
