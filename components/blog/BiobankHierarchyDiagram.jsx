"use client";

export default function BiobankHierarchyDiagram() {
  return (
    <figure className="blogFigure cdmHierarchyFigure">
      <div className="cdmHierarchySurface">
        <div className="cdmHierarchyHeader">
          <div>
            <p className="cdmHierarchyEyebrow">Common Data Model</p>
            {/* <h2>Shared Biobank Data Hierarchy</h2> */}
            <p>
              Standardized workflow structure across biobanks.
              {/* with patient consent modeled as a related foreign-key data store. */}
            </p>
          </div>
        </div>

        <div className="cdmHierarchyGrid">
          <div className="cdmMainFlow">
            <HierarchyCard
              icon="👤"
              title="Patients"
              text="Master patient identity"
            />
            <ArrowDown />

            <HierarchyCard
              icon="📁"
              title="Accessions"
              text="Case or collection event"
            />
            <ArrowDown />

            <HierarchyCard
              icon="🧪"
              title="Specimens"
              text="Collected biological material"
            />
            <ArrowDown />

            <div className="cdmAliquotRow">
              <HierarchyCard
                icon="🧫"
                title="Aliquots"
                text="Derived sample units"
              />
              <ArrowRight />
              <HierarchyCard
                icon="🧫"
                title="Sub-aliquots"
                text="Split or child units"
                subtle
              />
            </div>
          </div>

          <div className="cdmSideFlow">
            <div className="cdmRelationBlock">
              <HierarchyCard
                icon="✅"
                title="Patient Consents"
                text="FK relationship: patient_id"
                highlight
              />
              <div className="cdmRelationLine" />
              <p className="cdmRelationLabel">Foreign key from Patients</p>
            </div>

            <div className="cdmJoinBlock">
              <div className="cdmJoinInputs">
                <span>Patients</span>
                <span>+</span>
                <span>Patient Consents</span>
              </div>

              <ArrowDown />

              <HierarchyCard
                icon="📋"
                title="Clinical Trials"
                text="Eligibility, protocol, and consent-aware trial context"
                purple
              />
            </div>
          </div>
        </div>
      </div>

      <figcaption className="blogCaption">
        Patient records form the CDM backbone, while consent data remains linked
        through patient-level foreign keys and informs clinical trial readiness.
        Standardized hierarchy used across tissue, non-tissue, and microbiome
        biobanks.
      </figcaption>
    </figure>
  );
}

function HierarchyCard({ icon, title, text, highlight, purple, subtle }) {
  return (
    <div
      className={[
        "cdmHierarchyCard",
        highlight ? "cdmHierarchyCardHighlight" : "",
        purple ? "cdmHierarchyCardPurple" : "",
        subtle ? "cdmHierarchyCardSubtle" : "",
      ].join(" ")}
    >
      <div className="cdmHierarchyIcon">{icon}</div>
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="cdmArrowDown" aria-hidden="true">
      ↓
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="cdmArrowRight" aria-hidden="true">
      →
    </div>
  );
}
