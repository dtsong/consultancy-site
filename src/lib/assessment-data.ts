// Assessment questions, scoring logic, and use case recommendations

export interface QuestionOption {
  label: string;
  value: string;
  scores: {
    dataReadiness: number;
    aiMaturity: number;
    compliancePosture: number;
    orgReadiness: number;
  };
}

export interface Question {
  id: string;
  group: "context" | "readiness";
  question: string;
  subtitle?: string;
  type: "single" | "multi";
  options: QuestionOption[];
}

export const questions: Question[] = [
  // Group 1: Your Context (3 questions)
  {
    id: "industry",
    group: "context",
    question: "What industry does your organization operate in?",
    subtitle: "This helps us tailor recommendations to your regulatory environment.",
    type: "single",
    options: [
      { label: "Pharmaceutical / Life Sciences", value: "pharma", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 0, orgReadiness: 0 } },
      { label: "Medical Devices", value: "meddevice", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 0, orgReadiness: 0 } },
      { label: "Financial Services / Banking", value: "finserv", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 0, orgReadiness: 0 } },
      { label: "Insurance", value: "insurance", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 0, orgReadiness: 0 } },
      { label: "Healthcare / Hospital Systems", value: "healthcare", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 0, orgReadiness: 0 } },
      { label: "Other Regulated Industry", value: "other", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 0, orgReadiness: 0 } },
    ],
  },
  {
    id: "regulations",
    group: "context",
    question: "Which regulatory frameworks apply to your organization?",
    subtitle: "Select all that apply.",
    type: "multi",
    options: [
      { label: "FDA (21 CFR Part 11, GxP)", value: "fda", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 2, orgReadiness: 0 } },
      { label: "HIPAA", value: "hipaa", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 2, orgReadiness: 0 } },
      { label: "SOX / SEC", value: "sox", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 2, orgReadiness: 0 } },
      { label: "GDPR / CCPA", value: "gdpr", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 1, orgReadiness: 0 } },
      { label: "PCI-DSS", value: "pci", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 1, orgReadiness: 0 } },
      { label: "Not sure / Other", value: "other", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: -1, orgReadiness: 0 } },
    ],
  },
  {
    id: "companySize",
    group: "context",
    question: "How large is your organization?",
    type: "single",
    options: [
      { label: "Under 500 employees", value: "small", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 0, orgReadiness: 2 } },
      { label: "500 - 2,000 employees", value: "mid", scores: { dataReadiness: 1, aiMaturity: 0, compliancePosture: 0, orgReadiness: 1 } },
      { label: "2,000 - 10,000 employees", value: "large", scores: { dataReadiness: 2, aiMaturity: 1, compliancePosture: 1, orgReadiness: 0 } },
      { label: "10,000+ employees", value: "enterprise", scores: { dataReadiness: 3, aiMaturity: 1, compliancePosture: 2, orgReadiness: -1 } },
    ],
  },
  // Group 2: Your AI Readiness (5 questions)
  {
    id: "dataInfra",
    group: "readiness",
    question: "How would you describe your current data infrastructure?",
    type: "single",
    options: [
      { label: "Fragmented legacy systems with limited integration", value: "legacy", scores: { dataReadiness: 1, aiMaturity: 0, compliancePosture: 0, orgReadiness: 0 } },
      { label: "Some cloud adoption, but data is still siloed", value: "partial", scores: { dataReadiness: 3, aiMaturity: 1, compliancePosture: 1, orgReadiness: 1 } },
      { label: "Modern cloud platform with centralized data lake/warehouse", value: "modern", scores: { dataReadiness: 6, aiMaturity: 2, compliancePosture: 2, orgReadiness: 2 } },
      { label: "Cloud-native with automated pipelines and governance", value: "advanced", scores: { dataReadiness: 8, aiMaturity: 3, compliancePosture: 3, orgReadiness: 2 } },
    ],
  },
  {
    id: "aiStage",
    group: "readiness",
    question: "Where is your organization on the AI journey?",
    type: "single",
    options: [
      { label: "Exploring - we haven't started any AI initiatives yet", value: "exploring", scores: { dataReadiness: 0, aiMaturity: 1, compliancePosture: 0, orgReadiness: 1 } },
      { label: "Experimenting - running a few proof-of-concepts", value: "experimenting", scores: { dataReadiness: 1, aiMaturity: 3, compliancePosture: 1, orgReadiness: 2 } },
      { label: "Piloting - some AI in production, evaluating scale", value: "piloting", scores: { dataReadiness: 2, aiMaturity: 6, compliancePosture: 2, orgReadiness: 3 } },
      { label: "Scaling - multiple AI systems in production", value: "scaling", scores: { dataReadiness: 3, aiMaturity: 8, compliancePosture: 3, orgReadiness: 3 } },
    ],
  },
  {
    id: "dataGov",
    group: "readiness",
    question: "How mature is your data governance program?",
    type: "single",
    options: [
      { label: "Ad hoc - no formal data governance", value: "adhoc", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 1, orgReadiness: 0 } },
      { label: "Emerging - basic policies exist but inconsistently applied", value: "emerging", scores: { dataReadiness: 2, aiMaturity: 0, compliancePosture: 3, orgReadiness: 1 } },
      { label: "Established - formal program with data stewards and cataloging", value: "established", scores: { dataReadiness: 3, aiMaturity: 1, compliancePosture: 6, orgReadiness: 2 } },
      { label: "Optimized - automated governance with lineage and quality monitoring", value: "optimized", scores: { dataReadiness: 4, aiMaturity: 2, compliancePosture: 8, orgReadiness: 3 } },
    ],
  },
  {
    id: "challenge",
    group: "readiness",
    question: "What is your biggest data or AI challenge right now?",
    type: "single",
    options: [
      { label: "We have data but can't get insights fast enough", value: "insights", scores: { dataReadiness: 2, aiMaturity: 1, compliancePosture: 0, orgReadiness: 2 } },
      { label: "We're worried about compliance when using AI/ML", value: "compliance", scores: { dataReadiness: 1, aiMaturity: 2, compliancePosture: 1, orgReadiness: 2 } },
      { label: "We don't know which AI use cases would have real ROI", value: "usecases", scores: { dataReadiness: 1, aiMaturity: 1, compliancePosture: 1, orgReadiness: 3 } },
      { label: "Our data quality and documentation are holding us back", value: "quality", scores: { dataReadiness: 1, aiMaturity: 0, compliancePosture: 2, orgReadiness: 1 } },
      { label: "We need to modernize our data platform before doing AI", value: "platform", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 1, orgReadiness: 2 } },
    ],
  },
  {
    id: "timeline",
    group: "readiness",
    question: "What's your timeline for AI adoption?",
    type: "single",
    options: [
      { label: "Just exploring - no specific timeline", value: "exploring", scores: { dataReadiness: 0, aiMaturity: 0, compliancePosture: 0, orgReadiness: 1 } },
      { label: "Within the next 6 months", value: "6months", scores: { dataReadiness: 0, aiMaturity: 1, compliancePosture: 0, orgReadiness: 4 } },
      { label: "Active initiative this quarter", value: "thisquarter", scores: { dataReadiness: 0, aiMaturity: 2, compliancePosture: 0, orgReadiness: 6 } },
      { label: "Board-approved program, looking for a partner now", value: "ready", scores: { dataReadiness: 0, aiMaturity: 2, compliancePosture: 0, orgReadiness: 8 } },
    ],
  },
];

// Scoring
export interface AssessmentScores {
  dataReadiness: number;
  aiMaturity: number;
  compliancePosture: number;
  orgReadiness: number;
  overall: number;
}

export function calculateScores(answers: Record<string, string | string[]>): AssessmentScores {
  const raw = { dataReadiness: 0, aiMaturity: 0, compliancePosture: 0, orgReadiness: 0 };

  for (const q of questions) {
    const answer = answers[q.id];
    if (!answer) continue;

    const selectedValues = Array.isArray(answer) ? answer : [answer];
    for (const val of selectedValues) {
      const option = q.options.find((o) => o.value === val);
      if (option) {
        raw.dataReadiness += option.scores.dataReadiness;
        raw.aiMaturity += option.scores.aiMaturity;
        raw.compliancePosture += option.scores.compliancePosture;
        raw.orgReadiness += option.scores.orgReadiness;
      }
    }
  }

  // Normalize each dimension to 0-100
  const maxes = { dataReadiness: 20, aiMaturity: 18, compliancePosture: 20, orgReadiness: 22 };
  const normalized = {
    dataReadiness: Math.min(100, Math.round((raw.dataReadiness / maxes.dataReadiness) * 100)),
    aiMaturity: Math.min(100, Math.round((raw.aiMaturity / maxes.aiMaturity) * 100)),
    compliancePosture: Math.min(100, Math.round((raw.compliancePosture / maxes.compliancePosture) * 100)),
    orgReadiness: Math.min(100, Math.round((raw.orgReadiness / maxes.orgReadiness) * 100)),
  };

  const overall = Math.round(
    normalized.dataReadiness * 0.25 +
    normalized.aiMaturity * 0.25 +
    normalized.compliancePosture * 0.25 +
    normalized.orgReadiness * 0.25
  );

  return { ...normalized, overall };
}

export function getScoreTier(score: number): { label: string; description: string } {
  if (score >= 75) return { label: "Advanced", description: "Strong foundation - ready for sophisticated AI initiatives" };
  if (score >= 50) return { label: "Developing", description: "Good progress - targeted investments will unlock significant value" };
  if (score >= 25) return { label: "Emerging", description: "Early stage - focused quick wins can build momentum" };
  return { label: "Beginning", description: "Starting out - foundational work needed before scaling AI" };
}

// Use case recommendations
export interface UseCase {
  id: string;
  title: string;
  description: string;
  complexity: "Low" | "Medium";
  timeline: string;
  industries: string[];
  minScoreOverall: number;
  impact: string;
  regulatoryNote?: string;
}

export const useCases: UseCase[] = [
  {
    id: "ai-governance",
    title: "AI Governance & Model Risk Framework",
    description: "Establish the organizational framework for responsible AI deployment: model inventory, risk tiering, validation protocols, and documentation templates aligned to your regulatory environment.",
    complexity: "Medium",
    timeline: "4-6 weeks",
    industries: ["pharma", "meddevice", "finserv", "insurance", "healthcare", "other"],
    minScoreOverall: 0,
    impact: "Foundation for every future AI initiative. Land-and-expand entry point.",
    regulatoryNote: "Aligns to FDA AI/ML guidance, SR 11-7, EU AI Act requirements",
  },
  {
    id: "compliance-copilot",
    title: "Compliance Copilot for SOPs & Policies",
    description: "Deploy an AI-powered assistant trained on your Standard Operating Procedures, quality manuals, and regulatory guidelines. Employees get cited answers to compliance questions instantly.",
    complexity: "Low",
    timeline: "4-6 weeks",
    industries: ["pharma", "meddevice", "healthcare"],
    minScoreOverall: 15,
    impact: "Massive time savings for quality and regulatory teams. Reduces SOP lookup from hours to seconds.",
    regulatoryNote: "Built on Azure AI Search + Azure OpenAI with audit trails for GxP compliance",
  },
  {
    id: "doc-intelligence",
    title: "Regulatory Document Intelligence",
    description: "AI-powered extraction, classification, and summarization of regulatory submissions and compliance documents. Turns weeks of manual review into hours.",
    complexity: "Medium",
    timeline: "6-8 weeks",
    industries: ["pharma", "meddevice", "finserv"],
    minScoreOverall: 20,
    impact: "Clear ROI: person-hours saved per submission cycle. Reduces regulatory review backlog.",
    regulatoryNote: "Leverages Azure AI Document Intelligence with validation workflows",
  },
  {
    id: "prompt-policy",
    title: "AI Usage Policy & Prompt Library",
    description: "Develop curated, tested prompt libraries for common enterprise tasks along with usage policies, guardrails, and employee training materials tailored to your regulatory context.",
    complexity: "Low",
    timeline: "2-3 weeks",
    industries: ["pharma", "meddevice", "finserv", "insurance", "healthcare", "other"],
    minScoreOverall: 0,
    impact: "Quick win that positions you for broader AI adoption. Governs Copilot and ChatGPT Enterprise usage.",
  },
  {
    id: "data-quality",
    title: "Automated Data Quality Monitoring",
    description: "Deploy AI-powered anomaly detection on your data pipelines to catch schema drift, missing values, and distribution shifts before they impact downstream reports or regulatory filings.",
    complexity: "Low",
    timeline: "3-4 weeks",
    industries: ["pharma", "meddevice", "finserv", "insurance", "healthcare", "other"],
    minScoreOverall: 25,
    impact: "Prevents costly data restatements and audit findings. Builds trust in data for AI readiness.",
  },
  {
    id: "data-lineage",
    title: "AI-Assisted Data Lineage & Impact Analysis",
    description: "Use AI to auto-document data lineage across your data platform and generate plain-English impact analysis for proposed changes.",
    complexity: "Medium",
    timeline: "6-8 weeks",
    industries: ["pharma", "meddevice", "finserv", "insurance", "healthcare", "other"],
    minScoreOverall: 30,
    impact: "Regulators increasingly demand data lineage. Replaces manual documentation that's always out of date.",
    regulatoryNote: "Addresses FDA Data Integrity guidelines and SOX data traceability requirements",
  },
  {
    id: "catalog-enrichment",
    title: "Intelligent Data Catalog Enrichment",
    description: "Use AI to auto-generate business glossary entries, column descriptions, sensitivity tags, and data ownership suggestions for undocumented data assets.",
    complexity: "Low",
    timeline: "3-4 weeks",
    industries: ["pharma", "meddevice", "finserv", "insurance", "healthcare", "other"],
    minScoreOverall: 20,
    impact: "Addresses the #1 data governance gap: thousands of undocumented tables. AI-assisted with human review.",
  },
  {
    id: "change-control",
    title: "Automated Change Control Classification",
    description: "AI triages and classifies change requests by regulatory impact level, routing them to the correct review workflow. Eliminates change control backlogs.",
    complexity: "Low",
    timeline: "3-4 weeks",
    industries: ["pharma", "meddevice"],
    minScoreOverall: 15,
    impact: "Universal pain point in GxP environments. Straightforward classification that shows immediate ROI.",
  },
  {
    id: "audit-evidence",
    title: "Automated Audit Evidence Collection",
    description: "AI agent that traverses your systems to collect, organize, and pre-format evidence packages for SOC 2, HITRUST, GxP, or regulatory audits.",
    complexity: "Medium",
    timeline: "6-8 weeks",
    industries: ["pharma", "meddevice", "finserv", "insurance", "healthcare", "other"],
    minScoreOverall: 35,
    impact: "Audit prep consumes weeks of senior staff time multiple times per year. Automates the tedious parts.",
  },
  {
    id: "deidentification",
    title: "Clinical/Financial Data De-identification Pipeline",
    description: "Automated pipeline to detect and redact PII/PHI from datasets before use in analytics, AI training, or cross-border transfers. Includes validation reporting.",
    complexity: "Medium",
    timeline: "4-6 weeks",
    industries: ["pharma", "healthcare", "finserv", "insurance"],
    minScoreOverall: 25,
    impact: "Unlocks data for AI training and analytics while maintaining privacy compliance.",
    regulatoryNote: "Addresses HIPAA Safe Harbor, GDPR anonymization requirements",
  },
  {
    id: "bi-modernization",
    title: "Executive Dashboard and BI Modernization",
    description: "Replace scattered spreadsheets and static reports with a unified Power BI analytics platform. Automated data refreshes, self-service exploration, and executive scorecards that drive decisions.",
    complexity: "Low",
    timeline: "3-5 weeks",
    industries: ["pharma", "meddevice", "finserv", "insurance", "healthcare", "other"],
    minScoreOverall: 10,
    impact: "Immediate visibility into KPIs. Replaces hours of manual report building with automated, trustworthy dashboards.",
  },
  {
    id: "process-optimization",
    title: "Process Optimization with Data-Driven Insights",
    description: "Apply Lean Six Sigma methodology to identify bottlenecks, eliminate waste, and redesign workflows. Combine process analysis with data instrumentation to measure improvements and sustain gains.",
    complexity: "Medium",
    timeline: "4-8 weeks",
    industries: ["pharma", "meddevice", "finserv", "insurance", "healthcare", "other"],
    minScoreOverall: 5,
    impact: "Measurable cost and time savings. Builds a culture of continuous improvement backed by data.",
  },
];

export function getRecommendedUseCases(
  industry: string,
  scores: AssessmentScores,
  count: number = 3
): UseCase[] {
  return useCases
    .filter((uc) => uc.industries.includes(industry) && scores.overall >= uc.minScoreOverall)
    .sort((a, b) => {
      // Prioritize lower complexity for lower-scoring orgs
      if (scores.overall < 40) {
        const complexityOrder = { Low: 0, Medium: 1 };
        const diff = complexityOrder[a.complexity] - complexityOrder[b.complexity];
        if (diff !== 0) return diff;
      }
      // Then by minimum score proximity (closest match = most relevant)
      return Math.abs(scores.overall - a.minScoreOverall) - Math.abs(scores.overall - b.minScoreOverall);
    })
    .slice(0, count);
}
