import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="profilePage">
      <Navbar />

      <main className="profileMain">
        <section className="profileHero">
          <div className="profileHeroInner">
            <div className="profileHeroText">
              <p className="profileEyebrow">Technical Product Manager</p>

              <h1 className="profileTitle">
                Where AI, Product Vision, and Engineering Meet
              </h1>

              <p className="profileLead">
                I build data platforms and agentic workflows that turn complex
                technical capabilities into scalable, real-world products.
              </p>

              <p className="profileIntro">
                My work spans LLM-driven applications, semantic search,
                enterprise data platforms, and workflow automation across
                regulated environments. I combine hands-on technical depth with
                product strategy, stakeholder alignment, and delivery
                leadership.
              </p>

              <div className="profileActions">
                <Link href="/projects" className="profileButtonPrimary">
                  View Projects
                </Link>
                <Link
                  href="/docs/jeffrey-ross-resume.pdf"
                  target="_blank"
                  className="profileButtonSecondary"
                >
                  View Résumé
                </Link>
                <Link href="/contact" className="profileButtonSecondary">
                  Contact Me
                </Link>
              </div>
            </div>

            <aside className="profileSidebar">
              <div className="profileCard">
                <h2 className="profileCardTitle">Core Focus</h2>
                <ul className="profileList">
                  <li>AI-powered product strategy</li>
                  <li>Agentic workflows and LLM applications</li>
                  <li>Enterprise data platforms</li>
                  <li>Workflow automation</li>
                  <li>APIs, integrations, and data pipelines</li>
                </ul>
              </div>

              <div className="profileCard">
                <h2 className="profileCardTitle">Domains</h2>
                <p className="profileCardText">
                  Healthcare, clinical research, biobanking, financial
                  information platforms, and enterprise SaaS.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="profileLogos">
          <div className="profileLogosInner">
            <img src="/logos/mskcc.png" alt="MSKCC" className="profileLogo" />
            <img
              src="/logos/euromoney.png"
              alt="Euromoney"
              className="profileLogo"
            />
            <img
              src="/logos/palantir.png"
              alt="Palantir"
              className="profileLogo"
            />
            <img
              src="/logos/salesforce.png"
              alt="Salesforce"
              className="profileLogo"
            />
          </div>
        </section>

        <section className="profileSection">
          <div className="profileSectionInner">
            <div className="profileSectionHeader">
              <h2 className="profileSectionTitle">What I Focus On</h2>
              <p className="profileSectionSubtitle">
                I work at the intersection of product strategy, technical
                architecture, and delivery.
              </p>
            </div>

            <div className="profileGrid profileGridThree">
              <article className="profileFeatureCard">
                <h3 className="profileFeatureTitle">
                  AI &amp; Data Platform Leadership
                </h3>
                <p className="profileFeatureText">
                  Built enterprise-scale AI and data infrastructure at Memorial
                  Sloan Kettering, integrating LIMS, Palantir Foundry, and
                  GPT-powered workflows to streamline research operations and
                  clinical-trial eligibility analysis.
                </p>
              </article>

              <article className="profileFeatureCard">
                <h3 className="profileFeatureTitle">
                  Full-Stack Product Innovation
                </h3>
                <p className="profileFeatureText">
                  Led modernization of global SaaS platforms at Euromoney,
                  spanning Salesforce, APIs, workflow automation, and
                  data-driven systems that improved operational efficiency and
                  scaled digital products.
                </p>
              </article>

              <article className="profileFeatureCard">
                <h3 className="profileFeatureTitle">
                  Founder-Driven Engineering Mindset
                </h3>
                <p className="profileFeatureText">
                  I bring a builder’s mindset shaped by startup and early-stage
                  product experience, combining hands-on coding fluency with
                  user-centered thinking and practical execution.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="profileSection">
          <div className="profileSectionInner">
            <div className="profileSectionHeader">
              <h2 className="profileSectionTitle">Selected Impact</h2>
              <p className="profileSectionSubtitle">
                A few examples of the product and platform outcomes I’ve led.
              </p>
            </div>

            <div className="profileImpactGrid">
              <div className="profileImpactCard">
                <h3 className="profileImpactTitle">
                  GPT-powered clinical trial workflow
                </h3>
                <p className="profileImpactText">
                  Built a GPT-powered clinical trial eligibility workflow with
                  human-in-the-loop validation to improve screening throughput,
                  consistency, and accuracy.
                </p>
              </div>

              <div className="profileImpactCard">
                <h3 className="profileImpactTitle">Semantic search at scale</h3>
                <p className="profileImpactText">
                  Implemented semantic search across research datasets, reducing
                  biospecimen discovery time from weeks to hours.
                </p>
              </div>

              <div className="profileImpactCard">
                <h3 className="profileImpactTitle">
                  Data synchronization and automation
                </h3>
                <p className="profileImpactText">
                  Designed Python and API-based synchronization services that
                  improved biobank sample processing time by 50%.
                </p>
              </div>

              <div className="profileImpactCard">
                <h3 className="profileImpactTitle">
                  Enterprise platform modernization
                </h3>
                <p className="profileImpactText">
                  Led modernization of enterprise workflows and digital products
                  that reduced operational costs by millions annually.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="profileSection">
          <div className="profileSectionInner profileNarrative">
            <div className="profileNarrativeText">
              <h2 className="profileSectionTitle">How I Work</h2>
              <p className="profileBody">
                I’m most effective in environments where the work is ambiguous,
                cross-functional, and technically demanding. I partner closely
                with engineering, business stakeholders, and users to shape
                ideas into production-ready systems with measurable impact.
              </p>
              <p className="profileBody">
                My approach blends product discovery, systems thinking, and
                delivery rigor—especially in organizations where AI, data, and
                workflow automation must work together in a scalable and
                trustworthy way.
              </p>
            </div>

            <div className="profileNarrativeCard">
              <h3 className="profileCardTitle">Explore More</h3>
              <p className="profileCardText">
                See examples of AI demos, platform architecture, and product
                thinking across my projects and writing.
              </p>
              <div className="profileStackedLinks">
                <Link href="/projects" className="profileInlineLink">
                  View Projects
                </Link>
                <Link href="/blog" className="profileInlineLink">
                  Read Blog
                </Link>
                <Link href="/contact" className="profileInlineLink">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
