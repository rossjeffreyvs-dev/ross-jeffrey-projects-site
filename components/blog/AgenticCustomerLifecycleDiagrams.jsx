function Box({ title, text, tone = "blue" }) {
  return (
    <div className={`diagramBox diagramBox-${tone}`}>
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}

function Arrow() {
  return <div className="diagramArrow">→</div>;
}

export function CustomerLifecycleWorkflowDiagram() {
  return (
    <div className="blogDiagram lifecycleDiagram">
      <Box title="Prospect Ingested" text="New lead or account signal" />
      <Arrow />
      <Box title="Fit Evaluated" text="Segment, source, score, value" />
      <Arrow />
      <Box title="Stage Classified" text="Qualified, review, converted" />
      <Arrow />
      <Box title="Human Action" text="Convert, request info, reject" />
      <Arrow />
      <Box
        title="Revenue Updated"
        text="Realized, risk, potential"
        tone="green"
      />
    </div>
  );
}

export function CustomerLifecycleAgentDiagram() {
  return (
    <div className="blogDiagram agentDiagram">
      <Box title="Ingestion Agent" text="Detects prospect activity" />
      <Box title="Evaluation Agent" text="Scores fit and lifecycle stage" />
      <Box title="Revenue Agent" text="Finds revenue blockers" tone="orange" />
      <Box title="Review Agent" text="Routes human decisions" tone="purple" />
      <Box title="Feedback Agent" text="Learns from outcomes" tone="green" />
    </div>
  );
}

export function CustomerLifecycleArchitectureDiagram() {
  return (
    <div className="blogDiagram architectureDiagram">
      <Box title="Next.js Frontend" text="Demo, funnel, review queue" />
      <Arrow />
      <Box title="FastAPI Service" text="Lifecycle and review endpoints" />
      <Arrow />
      <Box title="Lifecycle Data Model" text="Prospects, stages, revenue" />
      <Arrow />
      <Box
        title="Agent Logic"
        text="Evaluation and recommendations"
        tone="purple"
      />
    </div>
  );
}

export function CustomerLifecycleHitlDiagram() {
  return (
    <div className="blogDiagram lifecycleDiagram">
      <Box title="Agent Recommendation" text="High-value blocker detected" />
      <Arrow />
      <Box
        title="Human Review"
        text="Operator evaluates context"
        tone="purple"
      />
      <Arrow />
      <Box
        title="Decision"
        text="Convert, request info, reject"
        tone="orange"
      />
      <Arrow />
      <Box title="Outcome" text="Revenue and queue updated" tone="green" />
    </div>
  );
}
