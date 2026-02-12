import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BlogPost() {
  return (
    <div className="blogPage">
      <Navbar />

      <main className="blogMain">
        <article>
          <h1 className="blogTitle">Ontology vs. Common Data Model in Biobanking</h1>

          <p className="blogMeta">Published Feb 12, 2026 · by Jeff Ross</p>

          <section className="blogProse">
            <p>
              Modern biobanking is not just about storing specimens — it’s about structuring data so research is discoverable, reproducible, and scalable.
              At Memorial Sloan Kettering (MSK), we designed a shared Common Data Model (CDM) across multiple biobanks and layered an ontology in
              Palantir Foundry to power cross-biobank search and specimen discovery for cancer research investigators.
            </p>

            <figure className="blogFigure">
              <img src="/images/ontology-cdm-architecture.png" alt="Biobanking data architecture: SaaS ops service to Foundry to Ontology to research discovery" />
              <figcaption className="blogCaption">
                Architecture: SaaS biobank operations service → Foundry ingestion/transforms → ontology objects → research discovery workflows.
              </figcaption>
            </figure>

            <h2>What Is a Common Data Model?</h2>
            <p>
              A <strong>Common Data Model (CDM)</strong> defines the standardized structure of data — the tables, fields, relationships, and constraints that
              keep multiple systems consistent. Think of it as the blueprint for how data is stored.
            </p>
            <p>In biobanking, that includes:</p>
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
              An <strong>ontology</strong> builds on top of the CDM by defining meaning and behavior: what entities represent, how they relate, how they can be
              queried, and how they should be reused across analytics and applications.
            </p>
            <p>
              Put simply: a CDM structures data; an ontology operationalizes it — turning tables into domain objects like <strong>Patient</strong>,
              <strong> Specimen</strong>, and <strong>Aliquot</strong> that can be permissioned, joined, and searched consistently.
            </p>

            <figure className="blogFigure">
              <img src="/images/ontology-cdm-comparison.png" alt="Comparison of Common Data Model versus Ontology" />
              <figcaption className="blogCaption">
                Comparison: CDM provides durable structure; ontology provides a queryable, app-friendly semantic layer.
              </figcaption>
            </figure>

            <h2>The Biobanking Challenge</h2>
            <p>
              MSK operated multiple biobanks — tissue, non-tissue (blood/plasma, etc.), and microbiome. Each had similar operational workflows and specimen
              hierarchies, but also biobank-specific metadata and processing needs.
            </p>
            <p>
              Rather than building three separate systems, MSK created a shared <strong>SaaS operations web service</strong> that supported a consistent workflow
              and data hierarchy, while allowing controlled customization via CDM extensions.
            </p>

            <h2>The Shared Data Hierarchy</h2>
            <p>
              Across biobanks, we standardized a core hierarchy that became the backbone of the CDM:
            </p>

            <figure className="blogFigure">
              <img src="/images/ontology-cdm-hierarchy.png" alt="Shared biobank hierarchy: patient to accession to specimen to aliquot to sub-aliquot" />
              <figcaption className="blogCaption">
                Standardized hierarchy used across tissue, non-tissue, and microbiome biobanks.
              </figcaption>
            </figure>

            <h2>Designing the Common Data Model</h2>
            <p>
              The CDM was intentionally split into:
            </p>
            <ul>
              <li>
                <strong>Core tables</strong> shared across biobanks (Patient, Accession, Specimen, Aliquot, Sub-aliquot, Consent, Protocol)
              </li>
              <li>
                <strong>Extension tables</strong> for biobank-specific fields (e.g., tissue pathology details, microbiome collection conditions,
                blood processing metadata)
              </li>
            </ul>

            <div className="blogCallout">
              <strong>Why extensions?</strong> They preserve cross-biobank consistency while enabling biobank-specific metadata without fragmenting the model.
              It’s the difference between “one model with controlled variation” and “three incompatible schemas.”
            </div>

            <h2>From CDM to Ontology in Foundry</h2>
            <p>
              Data from the SaaS operations service was ingested into Palantir Foundry, transformed and normalized where necessary, and then mapped into
              ontology objects representing the domain hierarchy:
            </p>
            <ul>
              <li><strong>Patient</strong></li>
              <li><strong>Accession</strong></li>
              <li><strong>Specimen</strong></li>
              <li><strong>Aliquot</strong></li>
            </ul>

            <h2>Enabling Research Discovery</h2>
            <p>
              Once modeled in Foundry, the biobank ontology was combined with additional research context:
            </p>
            <ul>
              <li>Demographics</li>
              <li>Clinical diagnoses and treatment history</li>
              <li>Genomics and molecular profiling</li>
              <li>Protocol and consent constraints</li>
            </ul>
            <p>
              This enabled cancer research investigators to search across biobanks and locate specimens for distribution and study feasibility — without
              needing to understand underlying storage schemas or biobank-specific quirks.
            </p>

            <h2>Takeaway</h2>
            <p>
              A CDM gives you consistency. An ontology gives you usability. In biobanking, you need both to turn specimen inventory into a discoverable,
              compliant, and scalable research platform.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
