type MatrixTone = "green" | "amber" | "blue";

type ServiceGalleryItem = {
  imageId: string;
  alt: string;
  category?: string;
  span?: "normal" | "wide" | "tall";
};

type ServiceMatrixRow = {
  context: string;
  trigger: string;
  intervention: string;
  status: string;
  tone: MatrixTone;
  outcome: string;
};

type ServiceProcessStep = {
  title: string;
  description: string;
};

type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetailContent = {
  slug: string;
  breadcrumbLabel: string;
  seoTitle: string;
  seoDescription: string;
  pageTitle: string;
  heroIntro: string;
  keyStats: Array<{ value: string; label: string }>;
  galleryKicker: string;
  galleryTitle: string;
  galleryDescription: string;
  galleryImages: ServiceGalleryItem[];
  matrixKicker: string;
  matrixTitle: string;
  matrixDescription: string;
  matrixRows: ServiceMatrixRow[];
  processKicker: string;
  processTitle: string;
  processSteps: ServiceProcessStep[];
  photoDirective: string;
  engagementItems: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  faqTitle: string;
  faqSubtitle: string;
  faqItems: ServiceFaq[];
  lastUpdated: string;
  nextAudit: string;
};

export const serviceDetailPages: Record<string, ServiceDetailContent> = {
  "turbine-overhauling": {
    slug: "turbine-overhauling",
    breadcrumbLabel: "Turbine Overhauling",
    seoTitle: "Steam Turbine Overhauling Services | Texron Power",
    seoDescription:
      "Structured steam turbine overhauling services for utility and captive plants with inspection, NDT, precision reassembly, and recommissioning support.",
    pageTitle: "Steam Turbine Overhauling",
    heroIntro:
      "A disciplined overhaul restores reliability, recovers performance, and prevents repeat outages. Texron executes end-to-end turbine overhauling with documented tolerances and restart validation.",
    keyStats: [
      { value: "7-15 days", label: "Typical Major Outage" },
      { value: "<0.04 mm", label: "Alignment Precision" },
      { value: "100%", label: "Critical Zone NDT" },
      { value: "200+", label: "Interventions Completed" },
      { value: "24 hr", label: "Initial Findings Report" }
    ],
    galleryKicker: "Field Implementation",
    galleryTitle: "Overhauling and Shutdown Gallery",
    galleryDescription:
      "Execution snapshots from disassembly, inspection, and precision reassembly phases.",
    galleryImages: [
      { imageId: "overhaulingImg1", alt: "Turbine overhauling setup during shutdown", category: "Disassembly", span: "wide" },
      { imageId: "overhaulingImg2", alt: "Bearing and sealing assembly inspection", category: "Inspection" },
      { imageId: "overhaulingImg3", alt: "Blade carrier dismantling and component handling", category: "Mechanical Recovery", span: "tall" }
    ],
    matrixKicker: "Coverage Matrix",
    matrixTitle: "Overhauling Suitability Cross-Reference",
    matrixDescription:
      "Quick-fit view of where a major overhaul delivers the strongest lifecycle and reliability impact.",
    matrixRows: [
      {
        context: "Back-pressure unit, 15+ years",
        trigger: "Efficiency drop and steam rate drift",
        intervention: "Major overhauling with clearance reset",
        status: "High Fit",
        tone: "green",
        outcome: "Improved heat-rate consistency"
      },
      {
        context: "Extraction-condensing unit",
        trigger: "Seal leakage and unstable response",
        intervention: "Seal path recovery and governing checks",
        status: "Recommended",
        tone: "amber",
        outcome: "Stable extraction and loading"
      },
      {
        context: "Frequent emergency stops",
        trigger: "Bearing temp and vibration alarms",
        intervention: "Bearing line audit with rotor checks",
        status: "High Fit",
        tone: "green",
        outcome: "Lower trip risk under load"
      },
      {
        context: "Long deferred shutdown",
        trigger: "Unknown internal wear profile",
        intervention: "Condition-led teardown and grading",
        status: "Assessment First",
        tone: "blue",
        outcome: "Data-backed repair scope"
      }
    ],
    processKicker: "Execution Process",
    processTitle: "From Scope Freeze to Reliability Run",
    processSteps: [
      {
        title: "Pre-Outage Scope and Risk Lock",
        description:
          "Failure history, spare readiness, and outage-window constraints are frozen before execution starts."
      },
      {
        title: "Controlled Disassembly and Inspection",
        description:
          "Part-wise traceability with dimensional, NDT, and wear mapping across critical assemblies."
      },
      {
        title: "Repair, Replacement, and Precision Build",
        description:
          "Component restoration and replacement with alignment and clearance controls to design values."
      },
      {
        title: "Trial Run and Performance Validation",
        description:
          "Balance checks, stabilization run, and documentation handover for operations acceptance."
      }
    ],
    photoDirective:
      "Before/after overhaul board showing bearing housing restoration and rotor alignment verification.",
    engagementItems: [
      "Scope clarity and compatibility review within 24 hours",
      "Execution plan aligned to your shutdown calendar",
      "Post-startup stabilization support during return to service"
    ],
    ctaTitle: "Planning a Turbine Major Overhaul?",
    ctaDescription:
      "Share your turbine rating, operating history, and outage window. We will return a fit-for-purpose overhaul plan and execution roadmap.",
    ctaLabel: "Request Overhauling Assessment",
    faqTitle: "Turbine Overhauling FAQ",
    faqSubtitle: "Common planning and execution questions from plant teams",
    faqItems: [
      {
        question: "How do we know whether full overhauling is needed?",
        answer:
          "We review efficiency trend, alarm history, run hours, and outage records. If signs indicate cumulative wear across multiple subsystems, a full major overhaul is usually the most reliable path."
      },
      {
        question: "Can overhauling be done in phases?",
        answer:
          "Yes. Where outage windows are tight, we split work into priority blocks, but we still preserve sequence controls so no partial intervention creates downstream risk."
      },
      {
        question: "Do you support spares for legacy OEM configurations?",
        answer:
          "Yes. We support OEM, equivalent, and engineered replacement routes depending on lead time, lifecycle economics, and compliance constraints."
      },
      {
        question: "What documents do we receive after completion?",
        answer:
          "You receive measurement logs, replaced component traceability, inspection photos, test records, and next-audit recommendations in a structured completion pack."
      }
    ],
    lastUpdated: "April 2026",
    nextAudit: "Q3 2026"
  },
  "erection-commissioning-testing": {
    slug: "erection-commissioning-testing",
    breadcrumbLabel: "Erection, Commissioning and Testing",
    seoTitle: "Erection and Commissioning Services for Turbine Plants | Texron Power",
    seoDescription:
      "End-to-end erection, commissioning, and performance testing services for turbine-generator systems from cold checks to synchronized load acceptance.",
    pageTitle: "Erection, Commissioning and Testing",
    heroIntro:
      "Commissioning quality defines long-term plant behavior. Texron delivers structured startup from mechanical readiness to synchronized performance acceptance.",
    keyStats: [
      { value: "60+", label: "Projects Commissioned" },
      { value: "3-130 MW", label: "Typical Execution Band" },
      { value: "100%", label: "Trip Logic Verification" },
      { value: "1.5-2.5x", label: "Faster Startup Readiness" },
      { value: "24/7", label: "Escalation Support" }
    ],
    galleryKicker: "Field Implementation",
    galleryTitle: "Erection and Startup Execution Gallery",
    galleryDescription:
      "Snapshots from mechanical integration, panel checkout, and staged load testing.",
    galleryImages: [
      { imageId: "commissioningImg1", alt: "Mechanical erection and turbine alignment activity", category: "Mechanical Integration", span: "wide" },
      { imageId: "commissioningImg2", alt: "Control panel and loop validation", category: "Control Checkout" },
      { imageId: "commissioningImg3", alt: "Commissioning team during final startup sequence", category: "Load Trial", span: "tall" }
    ],
    matrixKicker: "Coverage Matrix",
    matrixTitle: "Commissioning Use-Case Cross-Reference",
    matrixDescription:
      "Where Texron commissioning support creates the most reliability and handover value.",
    matrixRows: [
      {
        context: "New TG set installation",
        trigger: "First startup and synchronization",
        intervention: "Full cold-to-hot commissioning package",
        status: "High Fit",
        tone: "green",
        outcome: "Stable acceptance and handover"
      },
      {
        context: "Post-overhaul return",
        trigger: "Subsystem changes and reset points",
        intervention: "Re-commissioning and logic revalidation",
        status: "Recommended",
        tone: "amber",
        outcome: "Reduced repeat correction loops"
      },
      {
        context: "Control panel retrofit",
        trigger: "Interlock and relay remapping",
        intervention: "Protection and permissive test campaign",
        status: "High Fit",
        tone: "green",
        outcome: "Safe restart with tested trip paths"
      },
      {
        context: "Relocated unit",
        trigger: "Changed mechanical and electrical interfaces",
        intervention: "Site-specific startup sequencing",
        status: "Assessment First",
        tone: "blue",
        outcome: "Context-correct startup envelope"
      }
    ],
    processKicker: "Execution Process",
    processTitle: "Startup Governance from Day One",
    processSteps: [
      {
        title: "Readiness Audit and Punch Closure",
        description:
          "Mechanical, electrical, and control prerequisites are validated before any startup command."
      },
      {
        title: "Loop Checks and Protection Validation",
        description:
          "Interlocks, relay paths, permissives, and trip logic tested under controlled conditions."
      },
      {
        title: "Dry Runs and Governor Optimization",
        description:
          "No-load and low-load behavior tuned for repeatable ramp-up without instability."
      },
      {
        title: "Load Trial and Final Acceptance",
        description:
          "Staged ramp, response monitoring, and formal handover documentation for operations teams."
      }
    ],
    photoDirective:
      "Commissioning board with startup checklist, interlock logic map, and staged load progression chart.",
    engagementItems: [
      "Pre-commissioning gap list and closure tracker",
      "Shift-wise startup supervision during critical windows",
      "Structured operator handover at acceptance stage"
    ],
    ctaTitle: "Preparing for Startup or Re-Commissioning?",
    ctaDescription:
      "Share your unit rating, startup target date, and current readiness state. We will return a commissioning control plan.",
    ctaLabel: "Request Commissioning Plan",
    faqTitle: "Commissioning and Testing FAQ",
    faqSubtitle: "Questions on startup quality, scheduling, and acceptance",
    faqItems: [
      {
        question: "What should be ready before commissioning starts?",
        answer:
          "Mechanical completion, electrical continuity, loop checks, safety interlocks, and draft startup sequence should be in place. We provide a readiness checklist before mobilization."
      },
      {
        question: "Do you support only new projects or also retrofit restarts?",
        answer:
          "Both. We execute first-time commissioning as well as re-commissioning after overhaul, panel retrofit, relay replacement, or relocation."
      },
      {
        question: "Can you coordinate with existing EPC or O&M teams?",
        answer:
          "Yes. Texron commonly works as an integration partner with owner, EPC, and O&M stakeholders under a shared startup protocol."
      },
      {
        question: "What is included in the final handover pack?",
        answer:
          "Startup logs, tested setpoints, protection test records, punch closure status, and acceptance signatures are included in the final dossier."
      }
    ],
    lastUpdated: "April 2026",
    nextAudit: "Q3 2026"
  },
  "vibration-analysis-diagnostics": {
    slug: "vibration-analysis-diagnostics",
    breadcrumbLabel: "Vibration Analysis and Diagnostics",
    seoTitle: "Turbine Vibration Analysis and Diagnostics | Texron Power",
    seoDescription:
      "Advanced vibration diagnostics for steam turbines and auxiliaries including spectrum analysis, phase checks, balancing support, and corrective action planning.",
    pageTitle: "Vibration Analysis and Diagnostics",
    heroIntro:
      "Abnormal vibration is usually the first visible symptom of deeper turbine issues. Texron maps signatures to root causes and actionable correction plans.",
    keyStats: [
      { value: "<48 hr", label: "Rapid Diagnostic Visit" },
      { value: "3-axis", label: "Measurement Coverage" },
      { value: "360 deg", label: "Orbit and Phase Review" },
      { value: "In-situ", label: "Balancing Capability" },
      { value: "Tiered", label: "Severity Classification" }
    ],
    galleryKicker: "Field Implementation",
    galleryTitle: "Vibration and Condition Monitoring Gallery",
    galleryDescription:
      "Typical diagnostic setups used for high-confidence root-cause isolation.",
    galleryImages: [
      { imageId: "vibrationImg1", alt: "Field vibration diagnostic setup near turbine train", category: "Data Capture", span: "wide" },
      { imageId: "vibrationImg2", alt: "Bearing zone condition review", category: "Bearing Analysis" },
      { imageId: "vibrationImg3", alt: "Rotor line vibration interpretation and logging", category: "Root-Cause Review", span: "tall" }
    ],
    matrixKicker: "Coverage Matrix",
    matrixTitle: "Diagnostic Fit by Vibration Scenario",
    matrixDescription:
      "Quick map of where targeted vibration diagnostics produce the highest operational return.",
    matrixRows: [
      {
        context: "Rising trend on one bearing",
        trigger: "Velocity and displacement drift",
        intervention: "Frequency-domain and phase analysis",
        status: "High Fit",
        tone: "green",
        outcome: "Early fault isolation"
      },
      {
        context: "Post-maintenance instability",
        trigger: "Unexpected resonance behavior",
        intervention: "Alignment and soft-foot correlation",
        status: "Recommended",
        tone: "amber",
        outcome: "Stable ramp performance"
      },
      {
        context: "Frequent vibration trips",
        trigger: "Threshold breach at loading",
        intervention: "Severity mapping and correction sequencing",
        status: "High Fit",
        tone: "green",
        outcome: "Trip recurrence reduction"
      },
      {
        context: "Unknown multi-point anomalies",
        trigger: "Conflicting signal behavior",
        intervention: "Expanded diagnostic campaign",
        status: "Assessment First",
        tone: "blue",
        outcome: "Clear remediation pathway"
      }
    ],
    processKicker: "Execution Process",
    processTitle: "From Signal Capture to Corrective Action",
    processSteps: [
      {
        title: "Measurement Plan and Baseline Capture",
        description:
          "Operating envelope and sensor points are mapped before acquiring repeatable reference data."
      },
      {
        title: "Spectrum, Phase, and Orbit Interpretation",
        description:
          "Signal signatures are correlated to probable failure modes with severity grading."
      },
      {
        title: "Root-Cause Validation",
        description:
          "Mechanical, thermal, and control contributors are cross-checked before prescribing intervention."
      },
      {
        title: "Corrective Action and Verification Run",
        description:
          "Balancing, alignment, or structural correction is validated through repeat measurements."
      }
    ],
    photoDirective:
      "Diagnostic workflow board showing vibration spectrum, phase map, and recommended correction priorities.",
    engagementItems: [
      "Fast mobilization for high-severity alarms",
      "Data-backed diagnosis instead of trial-and-error fixes",
      "Verification reporting after corrective action"
    ],
    ctaTitle: "Seeing Vibration Alarms or Unstable Loading?",
    ctaDescription:
      "Share your latest trend snapshots and unit details. We will propose a targeted diagnostic plan with escalation priority.",
    ctaLabel: "Request Vibration Diagnosis",
    faqTitle: "Vibration Diagnostics FAQ",
    faqSubtitle: "Typical questions from operation and reliability teams",
    faqItems: [
      {
        question: "Can vibration diagnostics be done without a long shutdown?",
        answer:
          "Yes. Most investigations start online with targeted runs. We recommend shutdown-only checks when evidence points to hardware correction needs."
      },
      {
        question: "Do you support in-situ balancing?",
        answer:
          "Yes. Texron supports in-situ balancing where access and operating conditions allow controlled correction cycles."
      },
      {
        question: "What output does the report include?",
        answer:
          "The report includes severity class, probable root cause, risk implication, and a prioritized corrective action plan with verification criteria."
      },
      {
        question: "Can diagnostics be integrated into LTSA reviews?",
        answer:
          "Yes. Vibration trend analysis is commonly embedded into LTSA reliability review cycles for condition-based planning."
      }
    ],
    lastUpdated: "April 2026",
    nextAudit: "Q3 2026"
  },
  "turbine-refurbishment-life-extension": {
    slug: "turbine-refurbishment-life-extension",
    breadcrumbLabel: "Turbine Refurbishment",
    seoTitle: "Turbine and Generator Refurbishment Services | Texron Power",
    seoDescription:
      "Life extension refurbishment services for aging turbine-generator assets including component restoration, re-engineering, and controlled recommissioning.",
    pageTitle: "Turbine and Generator Refurbishment",
    heroIntro:
      "Refurbishment is the smart middle path between running-to-failure and full replacement. Texron restores critical turbine-generator assemblies to extend service life with controlled risk.",
    keyStats: [
      { value: "3-8 yrs", label: "Typical Life Extension" },
      { value: "40-65%", label: "Capex Saving vs New" },
      { value: "100%", label: "Component Grading" },
      { value: "OEM+", label: "Equivalent Spares Path" },
      { value: "Stagewise", label: "Outage Planning Option" }
    ],
    galleryKicker: "Field Implementation",
    galleryTitle: "Refurbishment and Recovery Gallery",
    galleryDescription:
      "Examples of component renewal and subsystem restoration from live projects.",
    galleryImages: [
      { imageId: "refurbishmentImg1", alt: "Generator refurbishment and inspection sequence", category: "Electrical Recovery", span: "wide" },
      { imageId: "refurbishmentImg2", alt: "Mechanical component restoration work", category: "Mechanical Recovery" },
      { imageId: "refurbishmentImg3", alt: "Refurbished turbine assembly ready for recommissioning", category: "Return to Service", span: "tall" }
    ],
    matrixKicker: "Coverage Matrix",
    matrixTitle: "Refurbishment Suitability Cross-Reference",
    matrixDescription:
      "A quick decision-support matrix for refurbishment-first asset strategy.",
    matrixRows: [
      {
        context: "Aging unit with stable demand",
        trigger: "Frequent minor failures",
        intervention: "Subsystem refurbishment and reset",
        status: "High Fit",
        tone: "green",
        outcome: "Lifecycle extension with lower capex"
      },
      {
        context: "Obsolete OEM support",
        trigger: "Long spares lead time",
        intervention: "Re-engineered replacement route",
        status: "Recommended",
        tone: "amber",
        outcome: "Improved maintainability"
      },
      {
        context: "Repeated efficiency decline",
        trigger: "Mechanical and electrical wear signs",
        intervention: "Combined turbine-generator refurbishment",
        status: "High Fit",
        tone: "green",
        outcome: "Better stability and output quality"
      },
      {
        context: "Major unknown historical wear",
        trigger: "No recent condition records",
        intervention: "Condition grading campaign",
        status: "Assessment First",
        tone: "blue",
        outcome: "Evidence-based project scope"
      }
    ],
    processKicker: "Execution Process",
    processTitle: "Restoration Workflow with Traceability",
    processSteps: [
      {
        title: "Baseline Condition Grading",
        description:
          "Mechanical and electrical condition classes are assigned to identify high-return restoration targets."
      },
      {
        title: "Repair vs Replace Engineering Decision",
        description:
          "Each major component is evaluated for restoration viability, risk, and lifecycle economics."
      },
      {
        title: "Component Renewal and Integration",
        description:
          "Restoration, re-manufacture, and subsystem refresh executed to agreed standards."
      },
      {
        title: "Functional Validation and Handover",
        description:
          "Post-work testing confirms readiness and supports structured return-to-service decisions."
      }
    ],
    photoDirective:
      "Refurbishment comparison board showing pre-work degradation and post-work restored assembly condition.",
    engagementItems: [
      "Lifecycle-driven scope balancing cost and reliability",
      "Engineering support for obsolete or discontinued parts",
      "Documented post-refurbishment operation envelope"
    ],
    ctaTitle: "Evaluating Refurbishment vs Replacement?",
    ctaDescription:
      "Share your unit age, failure history, and budget horizon. We will help you select the right life-extension strategy.",
    ctaLabel: "Request Refurbishment Review",
    faqTitle: "Refurbishment Services FAQ",
    faqSubtitle: "Questions on viability, savings, and execution planning",
    faqItems: [
      {
        question: "How much life extension is realistic after refurbishment?",
        answer:
          "Depending on baseline condition and duty profile, many projects achieve a 3 to 8 year extension with improved reliability."
      },
      {
        question: "Can refurbishment be phased across planned outages?",
        answer:
          "Yes. We can phase critical-path components first and complete secondary restoration in later windows without compromising engineering continuity."
      },
      {
        question: "Do you handle both turbine and generator scopes together?",
        answer:
          "Yes. Texron supports integrated mechanical and electrical refurbishment programs to avoid fragmented execution risks."
      },
      {
        question: "How do you control quality on restored components?",
        answer:
          "Restored parts are verified through dimensional checks, test records, and documented release criteria before integration."
      }
    ],
    lastUpdated: "April 2026",
    nextAudit: "Q3 2026"
  },
  "ltsa-amc-services": {
    slug: "ltsa-amc-services",
    breadcrumbLabel: "LTSA and AMC Services",
    seoTitle: "LTSA and AMC Services for Turbine Plants | Texron Power",
    seoDescription:
      "Long-term service agreements and annual maintenance contracts for turbine-generator assets with preventive schedules, response SLAs, and reliability reporting.",
    pageTitle: "LTSA and AMC Services",
    heroIntro:
      "Texron LTSA and AMC programs convert maintenance into a planned reliability discipline with response commitments, transparent reporting, and lifecycle accountability.",
    keyStats: [
      { value: "24/7", label: "Emergency Response" },
      { value: "Quarterly", label: "Planned Health Reviews" },
      { value: "SLA", label: "Escalation Matrix" },
      { value: "Predictive", label: "Maintenance Strategy" },
      { value: "Annual", label: "Reliability Dashboard" }
    ],
    galleryKicker: "Field Implementation",
    galleryTitle: "LTSA and AMC Service Delivery Gallery",
    galleryDescription:
      "Illustrative views of preventive visits, diagnostic checkpoints, and reliability audits.",
    galleryImages: [
      { imageId: "ltsaImg1", alt: "Scheduled LTSA diagnostic inspection onsite", category: "Preventive Visit", span: "wide" },
      { imageId: "ltsaImg2", alt: "Maintenance checklist and subsystem review", category: "Periodic Audit" },
      { imageId: "ltsaImg3", alt: "Reliability performance review with plant team", category: "Governance", span: "tall" }
    ],
    matrixKicker: "Coverage Matrix",
    matrixTitle: "LTSA and AMC Program Fit Matrix",
    matrixDescription:
      "How agreement structure maps to plant size, risk profile, and maintenance maturity.",
    matrixRows: [
      {
        context: "Single-unit captive plant",
        trigger: "Lean maintenance staffing",
        intervention: "Annual AMC with escalation support",
        status: "High Fit",
        tone: "green",
        outcome: "Predictable uptime planning"
      },
      {
        context: "Multi-unit industrial site",
        trigger: "Inconsistent maintenance quality",
        intervention: "Standardized LTSA cadence",
        status: "Recommended",
        tone: "amber",
        outcome: "Cross-unit reliability alignment"
      },
      {
        context: "High outage-cost process",
        trigger: "Frequent emergency interventions",
        intervention: "Priority SLA and periodic diagnostics",
        status: "High Fit",
        tone: "green",
        outcome: "Reduced unplanned downtime"
      },
      {
        context: "Aging fleet with unknown risk",
        trigger: "Limited condition history",
        intervention: "Baseline audit before contract design",
        status: "Assessment First",
        tone: "blue",
        outcome: "Right-sized agreement scope"
      }
    ],
    processKicker: "Execution Process",
    processTitle: "Agreement Lifecycle Delivery Model",
    processSteps: [
      {
        title: "Baseline Audit and Risk Ranking",
        description:
          "Plant condition, operating pattern, and failure history are mapped into a risk-classified service plan."
      },
      {
        title: "Maintenance Calendar and SLA Setup",
        description:
          "Visit frequency, escalation tiers, and response windows are locked with owner teams."
      },
      {
        title: "Periodic Diagnostics and Corrective Actions",
        description:
          "Condition trends and field findings are converted into planned interventions instead of emergency reactions."
      },
      {
        title: "Quarterly and Annual Governance Reviews",
        description:
          "Open risks, KPIs, and strategic recommendations are reviewed with management and operations stakeholders."
      }
    ],
    photoDirective:
      "LTSA governance dashboard with SLA response timeline, risk register, and quarterly action closure status.",
    engagementItems: [
      "Clear response commitments with escalation owners",
      "Spares and obsolescence planning built into service cycle",
      "Reliability reporting for operations and management layers"
    ],
    ctaTitle: "Need a Structured Long-Term Service Program?",
    ctaDescription:
      "Share your unit count, maintenance model, and response expectations. We will design a practical LTSA/AMC framework for your plant.",
    ctaLabel: "Discuss LTSA and AMC Scope",
    faqTitle: "LTSA and AMC FAQ",
    faqSubtitle: "Frequently asked questions on agreement scope and response model",
    faqItems: [
      {
        question: "What is the difference between AMC and LTSA?",
        answer:
          "AMC is usually annual with preventive maintenance coverage. LTSA is multi-year and includes deeper reliability governance, strategic spares planning, and stronger SLA frameworks."
      },
      {
        question: "Can the agreement include emergency attendance guarantees?",
        answer:
          "Yes. Escalation and attendance windows are contract-defined based on plant criticality and location."
      },
      {
        question: "Do you provide periodic health and trend reports?",
        answer:
          "Yes. Every cycle includes field findings and periodic trend reviews to support condition-based maintenance decisions."
      },
      {
        question: "Can LTSA be customized for mixed OEM fleets?",
        answer:
          "Yes. We design agreement scope by asset class and risk level, not by a single OEM assumption."
      }
    ],
    lastUpdated: "April 2026",
    nextAudit: "Q4 2026"
  }
};
