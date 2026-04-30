import React from "react";

function Card({ className = "", children }) {
  return <div className={`trialDiagramCard ${className}`}>{children}</div>;
}

function Arrow({ label, vertical = false, dashed = false }) {
  return (
    <div
      className={`trialDiagramArrow ${vertical ? "vertical" : ""} ${
        dashed ? "dashed" : ""
      }`}
    >
      {label ? <span className="trialDiagramArrowLabel">{label}</span> : null}
      <span className="trialDiagramArrowLine" />
      <span className="trialDiagramArrowHead">→</span>
    </div>
  );
}

export function TrialWorkflowDiagram() {
  return (
    <figure className="trialDiagramFigure">
      <div className="trialDiagramSurface">
        <div className="trialWorkflowGrid">
          <Card className="trialWorkflowInputGroup">
            <div className="trialDiagramEyebrow">Inputs</div>

            <div className="trialWorkflowInputStack">
              <div className="trialWorkflowMiniCard">
                <div className="trialWorkflowMiniIcon">👤</div>
                <div>
                  <div className="trialWorkflowMiniTitle">Patient data</div>
                  <div className="trialWorkflowMiniText">
                    demographics, diagnosis, labs, treatments
                  </div>
                </div>
              </div>

              <div className="trialWorkflowMiniCard">
                <div className="trialWorkflowMiniIcon">📄</div>
                <div>
                  <div className="trialWorkflowMiniTitle">Trial protocol</div>
                  <div className="trialWorkflowMiniText">
                    inclusion, exclusion, ambiguity, exceptions
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="trialWorkflowConnector">
            <Arrow />
          </div>

          <Card className="trialWorkflowEngine">
            <div className="trialDiagramEyebrow">Agent system</div>

            <div className="trialWorkflowEngineStack">
              <div className="trialWorkflowStep">Semantic retrieval</div>
              <div className="trialWorkflowStep">Criteria evaluation</div>
              <div className="trialWorkflowStep">Reasoning + scoring</div>
              <div className="trialWorkflowStep">Evidence synthesis</div>
            </div>
          </Card>

          <div className="trialWorkflowConnector">
            <Arrow />
          </div>

          <Card className="trialWorkflowOutputGroup">
            <div className="trialDiagramEyebrow">Outputs</div>

            <div className="trialWorkflowOutputStack">
              <div className="trialWorkflowDecisionCard">
                <div className="trialWorkflowDecisionHeader">
                  <span>Eligibility recommendation</span>
                  <span className="trialWorkflowDecisionPill">
                    Requires review
                  </span>
                </div>

                <div className="trialWorkflowDecisionBody">
                  Likely eligible based on diagnosis match, ECOG fit, and recent
                  treatment history. One exclusion criterion remains uncertain.
                </div>
              </div>

              <div className="trialWorkflowEvidenceCard">
                <div className="trialWorkflowEvidenceTitle">
                  Supporting evidence
                </div>
                <ul className="trialWorkflowEvidenceList">
                  <li>Diagnosis aligned to trial indication</li>
                  <li>Performance status compatible</li>
                  <li>Recent lab values partially complete</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <figcaption className="blogCaption">
        Figure: patient context and protocol criteria flow through a staged
        agentic evaluation process to produce a reviewable recommendation.
      </figcaption>
    </figure>
  );
}

export function TrialAgentArchitectureDiagram() {
  return (
    <figure className="trialDiagramFigure">
      <div className="trialDiagramSurface">
        <h3 className="trialDiagramTitle">Agent architecture</h3>

        <div className="trialArchitectureWrap">
          <div className="trialArchitectureTop">
            <Card className="trialArchitectureOrchestrator">
              <div className="trialDiagramEyebrow">Coordinator</div>
              <div className="trialArchitectureOrchestratorTitle">
                Workflow orchestrator
              </div>
              <div className="trialArchitectureOrchestratorText">
                routes evaluation steps, maintains state, and coordinates
                outputs
              </div>
            </Card>
          </div>

          <div className="trialArchitectureLines" />

          <div className="trialArchitectureBottom">
            <Card className="trialArchitectureAgent">
              <div className="trialArchitectureAgentIcon">🔎</div>
              <div className="trialArchitectureAgentTitle">
                Patient context agent
              </div>
              <div className="trialArchitectureAgentText">
                structures relevant patient attributes for the active trial
              </div>
            </Card>

            <Card className="trialArchitectureAgent">
              <div className="trialArchitectureAgentIcon">📋</div>
              <div className="trialArchitectureAgentTitle">Criteria agent</div>
              <div className="trialArchitectureAgentText">
                interprets protocol rules and evaluates inclusion / exclusion
                logic
              </div>
            </Card>

            <Card className="trialArchitectureAgent">
              <div className="trialArchitectureAgentIcon">🧠</div>
              <div className="trialArchitectureAgentTitle">Reasoning agent</div>
              <div className="trialArchitectureAgentText">
                synthesizes findings into recommendation, rationale, and
                confidence
              </div>
            </Card>
          </div>
        </div>
      </div>

      <figcaption className="blogCaption">
        Figure: a coordinating workflow layer manages specialized agents rather
        than relying on a single opaque model response.
      </figcaption>
    </figure>
  );
}

export function TrialSystemArchitectureDiagram() {
  return (
    <figure className="trialDiagramFigure">
      <div className="trialDiagramSurface">
        <h3 className="trialDiagramTitle">System architecture</h3>

        <div className="trialSystemStack">
          <Card className="trialSystemLayer">
            <div className="trialSystemLayerLabel">Presentation</div>
            <div className="trialSystemLayerTitle">
              Next.js clinical trial dashboard
            </div>
            <div className="trialSystemLayerText">
              trial worklist, patient selector, evaluation viewer, review
              controls
            </div>
          </Card>

          <div className="trialSystemArrow">↓</div>

          <Card className="trialSystemLayer">
            <div className="trialSystemLayerLabel">Application services</div>
            <div className="trialSystemLayerTitle">Workflow + API layer</div>
            <div className="trialSystemLayerText">
              trials, patients, evaluations, playback, review actions, demo
              reset
            </div>
          </Card>

          <div className="trialSystemArrow">↓</div>

          <Card className="trialSystemLayer">
            <div className="trialSystemLayerLabel">Decision layer</div>
            <div className="trialSystemLayerTitle">
              Agentic evaluation logic
            </div>
            <div className="trialSystemLayerText">
              retrieval, criteria checks, evidence synthesis, recommendation
              logic
            </div>
          </Card>

          <div className="trialSystemArrow">↓</div>

          <Card className="trialSystemLayer">
            <div className="trialSystemLayerLabel">Data layer</div>
            <div className="trialSystemLayerTitle">
              Structured trial + patient datasets
            </div>
            <div className="trialSystemLayerText">
              protocols, patient attributes, evaluation artifacts, workflow
              events
            </div>
          </Card>
        </div>
      </div>

      <figcaption className="blogCaption">
        Figure: the product separates presentation, workflow services,
        evaluation logic, and supporting trial data into clear layers.
      </figcaption>
    </figure>
  );
}

export function TrialHitlDiagram() {
  return (
    <figure className="trialDiagramFigure">
      <div className="trialDiagramSurface">
        <h3 className="trialDiagramTitle">Human-in-the-loop review</h3>

        <div className="trialHitlWrap">
          <Card className="trialHitlCenter">
            <div className="trialDiagramEyebrow">AI output</div>
            <div className="trialHitlCenterTitle">
              Eligibility recommendation
            </div>
            <div className="trialHitlCenterText">
              likely eligible, not eligible, or requires review
            </div>
          </Card>

          <Card className="trialHitlNode topRight">
            <div className="trialHitlNodeTitle">Uncertain case</div>
            <div className="trialHitlNodeText">
              missing evidence, ambiguity, or conflicting criteria
            </div>
          </Card>

          <Card className="trialHitlNode bottomRight">
            <div className="trialHitlNodeTitle">Reviewer decision</div>
            <div className="trialHitlNodeText">
              approve, reject, or request more review
            </div>
          </Card>

          <Card className="trialHitlNode bottomLeft">
            <div className="trialHitlNodeTitle">Feedback + audit trail</div>
            <div className="trialHitlNodeText">
              rationale captured for transparency and iteration
            </div>
          </Card>

          <Card className="trialHitlNode topLeft">
            <div className="trialHitlNodeTitle">Improved workflow quality</div>
            <div className="trialHitlNodeText">
              clearer rules, better review paths, stronger trust
            </div>
          </Card>

          <div className="trialHitlLoop loopTop" />
          <div className="trialHitlLoop loopRight" />
          <div className="trialHitlLoop loopBottom" />
          <div className="trialHitlLoop loopLeft" />
        </div>
      </div>

      <figcaption className="blogCaption">
        Figure: ambiguous recommendations move into review, where human judgment
        closes the loop and strengthens trust in the system.
      </figcaption>
    </figure>
  );
}
