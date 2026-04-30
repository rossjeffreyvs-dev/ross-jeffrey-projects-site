import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BiobankHierarchyDiagram from "../../components/blog/BiobankHierarchyDiagram";
import CdmOntologyComparisonDiagram from "../../components/blog/CdmOntologyComparisonDiagram";

export default function BlogPost() {
  return (
    <div className="blogPage">
      <Navbar />

      <main className="blogMain">
        <article>
          <h1 className="blogTitle">
            Designing Biobanking Data Foundations:
            <br />
            How Common Data Models and Ontologies Power Research Discovery
          </h1>

          <p className="blogMeta">Published Jan 2026 · by Jeffrey Ross</p>

          <section className="blogProse">
            <p>
              Modern biobanking is not just about storing specimens. It is about
              structuring data so research is discoverable, reproducible,
              governed, and scalable across multiple operating models.
            </p>

            <div>&nbsp;</div>

            <p>
              At Memorial Sloan Kettering, we designed a shared Common Data
              Model across multiple biobanks and layered an ontology in Palantir
              Foundry to power cross-biobank search, specimen discovery, and
              research feasibility workflows for cancer investigators.
            </p>

            <div className="blogCallout">
              <span className="blogCalloutIcon">🧬</span>
              <div>
                <strong>Core product concept:</strong> a Common Data Model gives
                biobanking data consistency; an ontology turns that data into
                searchable, reusable, application-ready research objects.
              </div>
            </div>

            <h2>
              Biobanking Data Flow: From Operational Systems to Research
              Discovery
            </h2>
            <p>
              A governed progression from biobank operations through CDM
              normalization, ontology modeling, and investigator-facing
              discovery.
            </p>

            <div className="blogArchitectureStack">
              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">01</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">☁️</span>
                    <span>SaaS Biobank Operations: Web Service</span>
                  </h3>
                  <p>
                    Operational platform where biobank activities are managed
                    and source data is created.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">02</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧫</span>
                    <span>
                      Biobank Data Sources: Tissue / Non-Tissue / Microbiome
                    </span>
                  </h3>
                  <p>
                    Source data from multiple biobank domains flows into the
                    governed data platform.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">03</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📥</span>
                    <span>Foundry Ingestion: Secure intake</span>
                  </h3>
                  <p>
                    Operational data is ingested into Palantir Foundry with
                    repeatable lineage-aware pipelines.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">04</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">⚙️</span>
                    <span>
                      Pipelines + Transforms + Normalization: Standardization
                      layer
                    </span>
                  </h3>
                  <p>
                    Data is cleaned, joined, validated, and normalized into
                    shared structures.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">05</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧱</span>
                    <span>Common Data Model (CDM)</span>
                  </h3>
                  <p>
                    Canonical entities and relationships standardize patients,
                    accessions, specimens, and aliquots.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">06</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧱</span>
                    <span>
                      Ontology Objects: Patient / Accession / Specimen / Aliquot
                    </span>
                  </h3>
                  <p>
                    CDM data is mapped to domain objects with meaning,
                    relationships, permissions, and context.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">07</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🔎</span>
                    <span>
                      Research Discovery + Distribution: Investigator workflows
                    </span>
                  </h3>
                  <p>
                    Researchers discover, evaluate, and request specimens with
                    governance, consent, and protocol context.
                  </p>
                </div>
              </div>
            </div>

            <h2>The Problem</h2>

            <p>
              Biobanks often evolve independently. Tissue, non-tissue, and
              microbiome operations may share similar specimen workflows, but
              each group can develop its own data fields, processing rules,
              metadata conventions, and reporting needs.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧾</span>
                  Fragmented Models
                </strong>
                <span>
                  Similar workflows can produce different schemas, labels, and
                  field definitions.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧪</span>
                  Specimen Complexity
                </strong>
                <span>
                  Patient, accession, specimen, aliquot, and sub-aliquot
                  relationships need durable structure.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔐</span>
                  Governance Needs
                </strong>
                <span>
                  Consent, protocol, access, and chain-of-custody rules must
                  remain consistent.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔎</span>
                  Research Discovery
                </strong>
                <span>
                  Investigators need to search across biobanks without knowing
                  every source schema.
                </span>
              </div>
            </div>

            <p>
              The product challenge was not simply to move data from one system
              into another. It was to create a foundation where operational data
              could support downstream research discovery without losing
              consistency, lineage, or domain meaning.
            </p>

            <h2>What Is a Common Data Model?</h2>

            <p>
              A <strong>Common Data Model</strong> defines the standardized
              structure of data: the tables, fields, relationships, and
              constraints that keep multiple systems consistent. Think of it as
              the blueprint for how data is stored and exchanged.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">👤</span>
                  Patient
                </strong>
                <span>
                  Shared identifiers and patient-level context used across
                  biobank workflows.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📦</span>
                  Accession
                </strong>
                <span>
                  Intake event connecting patient context to collected
                  biospecimens.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧫</span>
                  Specimen
                </strong>
                <span>
                  Primary biological material with type, metadata, collection,
                  and processing context.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧪</span>
                  Aliquot
                </strong>
                <span>
                  Derived sample units with volumes, concentrations, locations,
                  and chain-of-custody.
                </span>
              </div>
            </div>

            <p>In biobanking, a CDM typically includes:</p>

            <ul>
              <li>Patient identifiers</li>
              <li>Accessions</li>
              <li>Specimen types and metadata</li>
              <li>Aliquot volumes and concentrations</li>
              <li>Collection and processing timestamps</li>
              <li>Storage locations and chain-of-custody</li>
              <li>Consent and protocol context</li>
            </ul>

            <h2>What Is an Ontology?</h2>

            <p>
              An <strong>ontology</strong> builds on top of the CDM by defining
              meaning and behavior: what entities represent, how they relate,
              how they can be queried, and how they should be reused across
              analytics and applications.
            </p>

            <p>
              Put simply: a CDM structures data; an ontology operationalizes it.
              It turns tables into domain objects like <strong>Patient</strong>,{" "}
              <strong>Specimen</strong>, and <strong>Aliquot</strong> that can
              be permissioned, joined, searched, and reused consistently.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🗂️</span>
                  Object Model
                </strong>
                <span>
                  Represents domain entities such as Patient, Accession,
                  Specimen, and Aliquot.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔗</span>
                  Relationships
                </strong>
                <span>
                  Connects objects so users can traverse from patient to
                  specimen to downstream aliquots.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔎</span>
                  Searchability
                </strong>
                <span>
                  Makes inventory discoverable through business concepts rather
                  than raw tables.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧭</span>
                  App Layer
                </strong>
                <span>
                  Provides reusable objects for workflows, dashboards, and
                  discovery applications.
                </span>
              </div>
            </div>

            <CdmOntologyComparisonDiagram />

            <h2>The Biobanking Challenge</h2>

            <p>
              MSK operated multiple biobanks — tissue, non-tissue such as blood
              and plasma, and microbiome. Each had similar operational workflows
              and specimen hierarchies, but also biobank-specific metadata and
              processing needs.
            </p>

            <p>
              Rather than building three separate systems, MSK created a shared{" "}
              <strong>SaaS operations web service</strong> that supported a
              consistent workflow and data hierarchy while allowing controlled
              customization through CDM extensions.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🏥</span>
                  Tissue Biobank
                </strong>
                <span>
                  Needed pathology and disease-specific specimen context.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🩸</span>
                  Non-Tissue Biobank
                </strong>
                <span>
                  Needed blood, plasma, and processing metadata across
                  collection workflows.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🦠</span>
                  Microbiome Biobank
                </strong>
                <span>
                  Needed collection conditions and microbiome-specific
                  processing context.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧱</span>
                  Shared Platform
                </strong>
                <span>
                  Needed one consistent foundation with controlled variation by
                  biobank.
                </span>
              </div>
            </div>

            <h2>The Shared Data Hierarchy</h2>

            <p>
              Across biobanks, we standardized a core hierarchy that became the
              backbone of the CDM. That hierarchy gave teams a consistent way to
              represent how biospecimens are collected, processed, divided, and
              stored.
            </p>

            <BiobankHierarchyDiagram />

            <h2>Designing the Common Data Model</h2>

            <p>
              The CDM was intentionally split into shared core tables and
              controlled extension tables. This made the model durable across
              biobanks while still allowing each biobank to capture the metadata
              required for its own operations.
            </p>

            <div className="blogArchitectureStack">
              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">01</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧱</span>
                    <span>Core tables</span>
                  </h3>
                  <p>
                    Shared entities such as Patient, Accession, Specimen,
                    Aliquot, Sub-aliquot, Consent, and Protocol.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">02</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧩</span>
                    <span>Extension tables</span>
                  </h3>
                  <p>
                    Biobank-specific fields such as tissue pathology details,
                    microbiome conditions, or blood processing metadata.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">03</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🔐</span>
                    <span>Governance rules</span>
                  </h3>
                  <p>
                    Consent, protocol, storage, and chain-of-custody logic
                    remained consistent across the shared model.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">04</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🔁</span>
                    <span>Controlled variation</span>
                  </h3>
                  <p>
                    The model supported biobank-specific needs without creating
                    three incompatible schemas.
                  </p>
                </div>
              </div>
            </div>

            <div className="blogCallout">
              <span className="blogCalloutIcon">💡</span>
              <div>
                <strong>Why extensions?</strong> They preserve cross-biobank
                consistency while enabling biobank-specific metadata without
                fragmenting the model. It is the difference between “one model
                with controlled variation” and “three incompatible schemas.”
              </div>
            </div>

            <h2>From CDM to Ontology in Foundry</h2>

            <p>
              Data from the SaaS operations service was ingested into Palantir
              Foundry, transformed and normalized where necessary, and then
              mapped into ontology objects representing the domain hierarchy.
            </p>

            <div className="blogArchitectureStack">
              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">01</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">📥</span>
                    <span>Ingest operational data</span>
                  </h3>
                  <p>
                    Bring biobank operations data from the SaaS service into
                    Foundry with lineage and repeatable pipelines.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">02</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🧹</span>
                    <span>Transform and normalize</span>
                  </h3>
                  <p>
                    Standardize fields, relationships, and identifiers so the
                    CDM is consistent across biobank domains.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">03</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🗂️</span>
                    <span>Map ontology objects</span>
                  </h3>
                  <p>
                    Turn normalized tables into reusable Patient, Accession,
                    Specimen, and Aliquot objects.
                  </p>
                </div>
              </div>

              <div className="blogArchitectureItem">
                <div className="blogArchitectureNumber">04</div>
                <div>
                  <h3 className="blogArchitectureTitle">
                    <span className="blogIcon">🔎</span>
                    <span>Enable discovery workflows</span>
                  </h3>
                  <p>
                    Make specimens searchable by research context, protocol,
                    consent, diagnosis, and related clinical attributes.
                  </p>
                </div>
              </div>
            </div>

            <h2>Enabling Research Discovery</h2>

            <p>
              Once modeled in Foundry, the biobank ontology was combined with
              additional research context. This enabled cancer research
              investigators to search across biobanks and locate specimens for
              distribution and study feasibility without needing to understand
              the underlying storage schemas.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">👥</span>
                  Demographics
                </strong>
                <span>
                  Patient-level context supported cross-cohort filtering and
                  feasibility analysis.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🩺</span>
                  Clinical Context
                </strong>
                <span>
                  Diagnoses and treatment history helped researchers evaluate
                  specimen relevance.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧬</span>
                  Molecular Profiling
                </strong>
                <span>
                  Genomics and research annotations enriched specimen discovery.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📜</span>
                  Consent Constraints
                </strong>
                <span>
                  Protocol and consent context helped keep discovery aligned
                  with permitted use.
                </span>
              </div>
            </div>

            <h2>Interface and Product Design Highlights</h2>

            <p>
              The product goal was to make complex biobank data usable for
              investigators and operational teams. The ontology provided a
              foundation for search and application workflows that could hide
              schema complexity while preserving governance and traceability.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔎</span>
                  Cross-Biobank Search
                </strong>
                <span>
                  Researchers could discover specimens across multiple biobank
                  domains from one experience.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧭</span>
                  Object Navigation
                </strong>
                <span>
                  Users could move from patient to accession to specimen to
                  aliquot context.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">✅</span>
                  Feasibility Review
                </strong>
                <span>
                  Discovery workflows supported early study planning and sample
                  availability review.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔐</span>
                  Governed Access
                </strong>
                <span>
                  Consent, protocol, and usage constraints stayed attached to
                  the discovered data.
                </span>
              </div>
            </div>

            <h2>Results and Takeaways</h2>

            <p>
              The most important lesson from this work is that CDMs and
              ontologies solve different layers of the data product problem. A
              CDM creates consistency at the storage and transformation layer.
              An ontology creates usability at the application and discovery
              layer.
            </p>

            <div className="blogSignalGrid">
              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🧱</span>
                  CDM for Structure
                </strong>
                <span>
                  Standardizes how biobank data is stored, validated, and
                  transformed.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🕸️</span>
                  Ontology for Meaning
                </strong>
                <span>
                  Turns tables into domain objects that can be searched,
                  traversed, and reused.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">🔬</span>
                  Discovery for Research
                </strong>
                <span>
                  Enables investigators to find relevant specimens across
                  biobanks and contexts.
                </span>
              </div>

              <div className="blogSignalCard">
                <strong>
                  <span className="blogIcon">📈</span>
                  Scalable Foundation
                </strong>
                <span>
                  Supports future analytics, applications, governance, and
                  data-product workflows.
                </span>
              </div>
            </div>

            <h2>Final Reflection</h2>

            <p>
              A CDM gives you consistency. An ontology gives you usability. In
              biobanking, you need both to turn specimen inventory into a
              discoverable, compliant, and scalable research platform.
            </p>

            <p>
              The practical product lesson is that data architecture should not
              end at schema design. The real value appears when governed,
              well-modeled data becomes usable in the workflows where
              researchers, operators, and product teams actually make decisions.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
