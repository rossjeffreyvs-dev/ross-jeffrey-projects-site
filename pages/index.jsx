import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="homePage">
      <Navbar />

      <main className="homeMain">
        <section className="homeHero">
          <div className="homeHeroInner">
            <p className="homeHeroEyebrow">
              AI PLATFORMS • DATA SYSTEMS • WORKFLOW ORCHESTRATION
            </p>

            <h1 className="homeHeroTitle">
              Designing Data and AI Systems for Complex Workflows
            </h1>

            <p className="homeHeroText">
              I design data and AI systems that connect product strategy,
              workflow orchestration, and hands-on engineering execution.
            </p>

            <div className="homeHeroActions">
              <Link href="/projects" className="homeButton homeButtonPrimary">
                View Projects
              </Link>

              <Link
                href="/docs/jeffrey-ross-resume.pdf"
                target="_blank"
                className="homeButton homeButtonSecondary"
              >
                View Résumé
              </Link>

              <Link href="/contact" className="homeButton homeButtonTertiary">
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        <section className="homeLogoStrip" aria-label="Experience highlights">
          <div className="homeLogoInner">
            <p className="homeLogoEyebrow">
              Experience across enterprise platforms
            </p>
            <div className="homeLogoRow">
              <img src="/logos/mskcc.png" alt="MSKCC" />
              <img src="/logos/euromoney.png" alt="Euromoney" />
              <img src="/logos/palantir.png" alt="Palantir" />
              <img src="/logos/salesforce.png" alt="Salesforce" />
            </div>
          </div>
        </section>

        <section className="homeConfidence">
          <div className="homeConfidenceInner">
            <p className="homeSectionEyebrow">
              Product leadership + engineering execution
            </p>
            <h2 className="homeSectionTitle">
              Why Teams Build with Confidence
            </h2>

            <div className="homeWhyGrid">
              <article className="homeWhyCard">
                <h3 className="homeWhyTitle">
                  <span className="homeWhyIcon">⚡</span>
                  <span>AI & Data Platform Leadership</span>
                </h3>
                <p>
                  Built enterprise-scale biobanking operations, data
                  infrastructure, and AI workflows at Memorial Sloan Kettering,
                  integrating LIMS SaaS, Palantir Foundry, and LLM-powered
                  workflows to streamline research and accelerate trial
                  eligibility analysis.
                </p>
              </article>

              <article className="homeWhyCard">
                <h3 className="homeWhyTitle">
                  <span className="homeWhyIcon">🧠</span>
                  <span>Full-Stack Product Innovation</span>
                </h3>
                <p>
                  Led modernization of $100M global platforms at Euromoney
                  Institutional Investor, architecting Salesforce and
                  Azure-based SaaS systems that improved operational efficiency
                  and grew digital revenue 15% YoY.
                </p>
              </article>

              <article className="homeWhyCard">
                <h3 className="homeWhyTitle">
                  <span className="homeWhyIcon">🚀</span>
                  <span>Founder-Driven Engineering Mindset</span>
                </h3>
                <p>
                  Created and scaled multiple SaaS ventures, from social
                  networking at SixDegrees.com to content and campaign
                  platforms, combining hands-on coding expertise with product
                  vision and user-centered design.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
