export const COMPANY = {
  name: "MECHLYTIX",
  parentCompany: "Shyyam Enterprise & Pinnacle IE Consultancy",
  tagline: "Engineering Tomorrow. Optimizing Today.",
  positioning:
    "Your Trusted Partner for Operational Excellence, Business Transformation & Sustainable Growth.",
  website: "www.mechlytix.in",
  contactName: "Kunal R Mistry",
  contactNames: ["Kunal R Mistry", "Ankit D Rathwa"],
  email: "info@mechlytix.in",
  emailHref: "mailto:info@mechlytix.in",
  phone: "+91 81550 63984",
  phoneHref: "tel:+918155063984",
  phones: [
    { number: "+91 81550 63984", href: "tel:+918155063984" },
    { number: "+91 63515 65387", href: "tel:+916351565387" },
  ],
  location:
    "B 215/A, B Wing, Hubtown, Makarpura Depot, Makarpura Rd, Vadodara, Gujarat 390010",
  statement: "We Don't Just Recommend Improvements — We Help Implement Them.",
} as const;

export const CORE_AREAS = [
  "Engineering",
  "Automation",
  "Optimization",
  "Quality",
  "Growth",
] as const;

export const STATS = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Industries Served" },
] as const;

export const WHO_WE_ARE = [
  "Mechlytix is a professional consulting and engineering solutions provider dedicated to helping organizations achieve operational excellence and sustainable growth.",
  "We work closely with businesses to identify challenges, optimize processes, eliminate inefficiencies, and implement practical solutions that deliver measurable and long-term impact.",
  "Our expertise spans Industrial Engineering, Lean Manufacturing, Operational Excellence, TPM, Six Sigma, Process Improvement, Technical Consulting, Compliance Readiness, and Workforce Development.",
];

export const VISION =
  "To be a trusted partner enabling organizations to achieve operational excellence, business excellence, sustainable growth, and world-class performance.";

export const MISSION =
  "To empower organizations through practical implementation, technical expertise, innovative solutions, and continuous improvement methodologies that enhance productivity, quality, efficiency, profitability, and customer satisfaction.";

export type NavItem = { label: string; to: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Industries", to: "/industries" },
  { label: "Solutions", to: "/solutions" },
  { label: "Assessments", to: "/assessments" },
  { label: "Technical Expertise", to: "/technical-expertise" },
  { label: "Training", to: "/training" },
  { label: "Recruitment & Workforce", to: "/recruitment" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_NAV: NavItem[] = [
  ...NAV_ITEMS.slice(0, 8),
  { label: "Partnership", to: "/partnership" },
  { label: "Contact", to: "/contact" },
];

export type ServiceCard = {
  title: string;
  description: string;
  icon: string;
  to: string;
  hash?: string;
};

export const SERVICES: ServiceCard[] = [
  {
    title: "Manufacturing & Machining Services",
    description:
      "VMC CNC machining, 3D design and programming, wire and profile cutting, metal fabrication, and fiber fabrication.",
    icon: "Cog",
    to: "/solutions",
    hash: "manufacturing-machining",
  },
  {
    title: "Lean Manufacturing & Operational Excellence",
    description:
      "Eliminate waste, improve efficiency and build a culture of continuous improvement.",
    icon: "Workflow",
    to: "/solutions",
    hash: "lean",
  },
  {
    title: "Industrial Engineering & Productivity Improvement",
    description:
      "Scientific methods applied to productivity, efficiency and resource utilization.",
    icon: "Ruler",
    to: "/solutions",
    hash: "industrial-engineering",
  },
  {
    title: "TPM & Reliability Excellence",
    description:
      "Improve equipment effectiveness, reduce downtime and enhance reliability.",
    icon: "Cog",
    to: "/solutions",
    hash: "tpm",
  },
  {
    title: "Six Sigma & Quality Excellence",
    description:
      "Structured problem solving and data-driven decision making for quality improvement.",
    icon: "ShieldCheck",
    to: "/solutions",
    hash: "quality",
  },
  {
    title: "OEE & Production Excellence",
    description: "Maximize production performance and operational effectiveness.",
    icon: "Gauge",
    to: "/solutions",
    hash: "oee",
  },
  {
    title: "Supply Chain, Inventory & Warehouse Excellence",
    description: "Optimize material flow, inventory control and supply chain performance.",
    icon: "Truck",
    to: "/solutions",
    hash: "supply-chain",
  },
  {
    title: "Business Process & Service Excellence",
    description: "Improve overall business performance and customer experience.",
    icon: "LineChart",
    to: "/solutions",
    hash: "business-process",
  },
  {
    title: "Business Assessments & Diagnostics",
    description: "Structured current state analysis with a prioritized improvement roadmap.",
    icon: "ClipboardCheck",
    to: "/assessments",
  },
  {
    title: "New Plant Setup & Expansion Support",
    description: "Greenfield and Brownfield projects from concept to operational readiness.",
    icon: "Factory",
    to: "/solutions",
    hash: "plant-setup",
  },
  {
    title: "EHS & Safety Excellence",
    description: "Creating safer and more compliant workplaces.",
    icon: "HardHat",
    to: "/solutions",
    hash: "ehs",
  },
  {
    title: "Digital Transformation Support",
    description: "Supporting organizations in their digital improvement journey.",
    icon: "MonitorCog",
    to: "/solutions",
    hash: "digital",
  },
  {
    title: "Technical Expertise",
    description: "Specialist process and automation support through our expert network.",
    icon: "Wrench",
    to: "/technical-expertise",
  },
  {
    title: "Training & Capability Development",
    description: "Practical, implementation-focused and customized training programs.",
    icon: "GraduationCap",
    to: "/training",
  },
  {
    title: "Recruitment & Workforce Solutions",
    description: "Build high-performing teams and access specialized expertise.",
    icon: "Users",
    to: "/recruitment",
  },
];

export type Industry = {
  name: string;
  group: string;
  description: string;
  solutions: string[];
  icon: string;
};

export const INDUSTRY_GROUPS = [
  "All",
  "Manufacturing",
  "Process",
  "Logistics & Distribution",
  "Services & Public",
] as const;

export const INDUSTRIES: Industry[] = [
  {
    name: "Manufacturing & Engineering",
    group: "Manufacturing",
    description:
      "Discrete and engineered-to-order manufacturing operations seeking higher throughput and lower cost.",
    solutions: ["Lean Manufacturing", "Industrial Engineering", "OEE Improvement"],
    icon: "Factory",
  },
  {
    name: "Automotive & Auto Components",
    group: "Manufacturing",
    description:
      "Tier 1 and Tier 2 component manufacturers working to demanding quality and delivery standards.",
    solutions: ["Six Sigma & Quality", "TPM", "Value Stream Mapping"],
    icon: "Car",
  },
  {
    name: "Valves, Pumps & Industrial Equipment",
    group: "Manufacturing",
    description:
      "Assembly and machining-intensive operations with high product variety and long lead times.",
    solutions: ["Layout Optimization", "SMED", "Bottleneck Analysis"],
    icon: "Cog",
  },
  {
    name: "Foundries, Casting & Forging",
    group: "Manufacturing",
    description: "Hot processes where yield, rejection and equipment reliability drive performance.",
    solutions: ["Casting Process Improvement", "Defect Reduction", "Reliability Excellence"],
    icon: "Flame",
  },
  {
    name: "Fabrication & Heavy Engineering",
    group: "Manufacturing",
    description: "Project-based fabrication and welding operations with variable workflows.",
    solutions: ["Fabrication Excellence", "Welding Process Optimization", "Standard Work"],
    icon: "Hammer",
  },
  {
    name: "Electrical & Electronics Manufacturing",
    group: "Manufacturing",
    description: "High-mix assembly lines requiring balanced flow and first time right quality.",
    solutions: ["Line Balancing", "Poka-Yoke", "First Time Right"],
    icon: "CircuitBoard",
  },
  {
    name: "Pharmaceutical Industries",
    group: "Process",
    description: "Regulated environments where compliance readiness and documentation matter.",
    solutions: ["Compliance Readiness", "SOP Development", "Process Capability"],
    icon: "Pill",
  },
  {
    name: "Chemical & Process Industries",
    group: "Process",
    description: "Continuous process plants focused on yield, uptime and energy performance.",
    solutions: ["Reliability Improvement", "Energy Optimization", "SPC"],
    icon: "FlaskConical",
  },
  {
    name: "Packaging",
    group: "Process",
    description: "High-speed converting and packing lines where changeover and OEE define output.",
    solutions: ["OEE Improvement", "Changeover Reduction", "Autonomous Maintenance"],
    icon: "Package",
  },
  {
    name: "Food & Beverage",
    group: "Process",
    description: "Hygiene-critical operations balancing throughput, quality and compliance.",
    solutions: ["5S Implementation", "SQF Compliance Awareness", "FIFO / FEFO Systems"],
    icon: "Utensils",
  },
  {
    name: "Plastic & Polymer",
    group: "Process",
    description: "Moulding and extrusion operations targeting cycle time and rejection reduction.",
    solutions: ["Moulding Process Optimization", "Cycle Time Reduction", "Variation Reduction"],
    icon: "Boxes",
  },
  {
    name: "Textile & Garment",
    group: "Process",
    description: "Labour-intensive lines where work measurement and balancing unlock productivity.",
    solutions: ["Time & Motion Study", "Line Balancing", "Ergonomics Improvement"],
    icon: "Shirt",
  },
  {
    name: "Renewable Energy",
    group: "Process",
    description: "Growing manufacturing and service operations scaling capacity rapidly.",
    solutions: ["Capacity Planning", "New Plant Setup", "KPI Development"],
    icon: "Sun",
  },
  {
    name: "Oil & Gas",
    group: "Process",
    description: "Asset-intensive operations where reliability and safety performance are critical.",
    solutions: ["TPM & Reliability", "Safety Audits", "Preventive Maintenance Support"],
    icon: "Fuel",
  },
  {
    name: "Aerospace & Precision Engineering",
    group: "Manufacturing",
    description: "Precision, traceability and process capability driven manufacturing.",
    solutions: ["Cp / Cpk Analysis", "FMEA", "CNC Process Optimization"],
    icon: "Plane",
  },
  {
    name: "Warehousing & Logistics",
    group: "Logistics & Distribution",
    description: "Storage and movement operations focused on space, accuracy and speed.",
    solutions: ["Warehouse Optimization", "Storage System Design", "Material Flow Optimization"],
    icon: "Warehouse",
  },
  {
    name: "E-Commerce & Distribution Centers",
    group: "Logistics & Distribution",
    description: "High-volume fulfilment operations with demanding service levels.",
    solutions: ["Process Mapping", "Productivity Improvement", "KPI Dashboards"],
    icon: "ShoppingCart",
  },
  {
    name: "Retail & Distribution Businesses",
    group: "Logistics & Distribution",
    description: "Multi-location businesses seeking inventory control and process consistency.",
    solutions: ["Inventory Optimization", "ABC / FSN Analysis", "Demand Forecasting"],
    icon: "Store",
  },
  {
    name: "Healthcare & Hospitals",
    group: "Services & Public",
    description: "Service operations improving patient flow, waiting time and resource use.",
    solutions: ["Waiting Time Reduction", "Workflow Optimization", "Service Excellence"],
    icon: "Stethoscope",
  },
  {
    name: "Educational Institutions",
    group: "Services & Public",
    description: "Institutions strengthening administrative processes and capability building.",
    solutions: ["Process Mapping", "Training Programs", "Performance Management"],
    icon: "GraduationCap",
  },
  {
    name: "Hospitality & Facility Management",
    group: "Services & Public",
    description: "Service delivery organizations standardizing quality and response times.",
    solutions: ["Standard Work Development", "Visual Management", "5S Implementation"],
    icon: "ConciergeBell",
  },
  {
    name: "Infrastructure & Construction",
    group: "Services & Public",
    description: "Project organizations improving planning, productivity and safety.",
    solutions: ["Manpower Planning", "Safety Excellence", "Resource Utilization Analysis"],
    icon: "Building2",
  },
  {
    name: "Service Organizations",
    group: "Services & Public",
    description: "Back-office and customer-facing operations improving end-to-end processes.",
    solutions: ["Business Process Reengineering", "KPI Development", "PDCA Implementation"],
    icon: "Headset",
  },
  {
    name: "Government & Public Sector Organizations",
    group: "Services & Public",
    description: "Public bodies improving process efficiency, transparency and turnaround.",
    solutions: ["Process Mapping", "SOP Development", "Performance Management Systems"],
    icon: "Landmark",
  },
  {
    name: "SMEs & Large Enterprises",
    group: "Services & Public",
    description: "Organizations of every scale seeking practical, affordable improvement support.",
    solutions: ["Business Assessment", "Kaizen", "Cost Reduction Projects"],
    icon: "Building",
  },
];

export const CHALLENGES = [
  { title: "Low Productivity", icon: "TrendingDown" },
  { title: "High Downtime", icon: "AlarmClock" },
  { title: "Quality Issues", icon: "Bug" },
  { title: "Long Lead Times", icon: "Hourglass" },
  { title: "High Costs", icon: "Coins" },
  { title: "Process Inefficiencies", icon: "Workflow" },
  { title: "Resource Utilization", icon: "Users" },
  { title: "Equipment Reliability", icon: "Cog" },
  { title: "Compliance Challenges", icon: "FileCheck" },
  { title: "Business Growth", icon: "TrendingUp" },
];

export const WHY_MECHLYTIX = [
  {
    title: "Practical Implementation-Oriented Approach",
    description: "Solutions designed around real-world implementation.",
    icon: "Hammer",
  },
  {
    title: "Multi-Industry Experience",
    description: "Experience across diverse industrial and business environments.",
    icon: "Layers",
  },
  {
    title: "Strong Industrial Engineering Expertise",
    description:
      "Deep focus on productivity, process improvement and operational performance.",
    icon: "Ruler",
  },
  {
    title: "Data-Driven Methodologies",
    description: "Use measurable data and structured improvement methodologies.",
    icon: "BarChart3",
  },
  {
    title: "Customized Solutions",
    description: "Solutions tailored to organizational challenges and objectives.",
    icon: "SlidersHorizontal",
  },
  {
    title: "Technical Expert Network",
    description: "Access to specialized industry and technical expertise.",
    icon: "Network",
  },
];

export type SolutionBlock = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
};

export const SOLUTION_BLOCKS: SolutionBlock[] = [
  {
    id: "manufacturing-machining",
    number: "01",
    title: "Manufacturing & Machining Services",
    description:
      "Practical manufacturing support from CNC machining and design through cutting and fabrication.",
    icon: "Cog",
    items: [
      "VMC CNC Machining",
      "3D Design",
      "CNC Programming",
      "Wire Cutting",
      "Profile Cutting",
      "Metal Fabrication",
      "Fiber Fabrication",
    ],
  },
  {
    id: "lean",
    number: "02",
    title: "Lean Manufacturing & Operational Excellence",
    description:
      "Helping organizations eliminate waste, improve efficiency, optimize processes, and build a culture of continuous improvement.",
    icon: "Workflow",
    items: [
      "Lean Manufacturing",
      "Operational Excellence Programs",
      "Continuous Improvement Initiatives",
      "5S Implementation",
      "Kaizen",
      "Kanban Systems",
      "Just-In-Time (JIT)",
      "Heijunka (Level Loading)",
      "Continuous Flow Manufacturing",
      "Cellular Manufacturing",
      "Gemba Walks",
      "Visual Management Systems",
      "Andon Systems",
      "Waste Elimination (Muda, Mura, Muri)",
      "Value Stream Mapping (VSM)",
      "Standard Work Development",
      "Poka-Yoke (Error Proofing)",
    ],
  },
  {
    id: "industrial-engineering",
    number: "03",
    title: "Industrial Engineering & Productivity Improvement",
    description:
      "Applying scientific methods to improve productivity, efficiency, and resource utilization.",
    icon: "Ruler",
    items: [
      "Time Study",
      "Motion Study",
      "Work Measurement",
      "Ergonomics Improvement",
      "Line Balancing",
      "Capacity Analysis",
      "Takt Time Analysis",
      "Bottleneck Analysis",
      "Process Flow Analysis",
      "Layout Optimization",
      "Workstation Design",
      "SMED (Setup Reduction)",
      "Manpower Planning & Optimization",
      "Productivity Improvement Projects",
      "Resource Utilization Analysis",
    ],
  },
  {
    id: "tpm",
    number: "04",
    title: "TPM & Reliability Excellence",
    description:
      "Improving equipment effectiveness, reducing downtime, and enhancing reliability.",
    icon: "Cog",
    items: [
      "Total Productive Maintenance (TPM)",
      "Autonomous Maintenance",
      "Planned Maintenance",
      "Preventive Maintenance Support",
      "Predictive Maintenance Support",
      "Quality Maintenance",
      "Focused Improvement (Kobetsu Kaizen)",
      "Early Equipment Management",
      "Office TPM",
      "Reliability Improvement Programs",
      "OEE Improvement",
      "MTTR Improvement",
      "MTBF Improvement",
      "Breakdown Reduction",
      "Reliability Enhancement",
    ],
  },
  {
    id: "quality",
    number: "05",
    title: "Six Sigma & Quality Excellence",
    description:
      "Driving quality improvement through structured problem-solving and data-driven decision-making.",
    icon: "ShieldCheck",
    items: [
      "Six Sigma (DMAIC / DMADV)",
      "Root Cause Analysis (RCA)",
      "Statistical Process Control (SPC)",
      "Process Capability Analysis (Cp / Cpk)",
      "Failure Mode & Effects Analysis (FMEA)",
      "Defect Reduction Programs",
      "First Time Right (FTR)",
      "Zero Quality Defect (ZQD)",
      "5 Why Analysis",
      "Pareto Analysis",
      "Fishbone Diagram",
      "Check Sheets",
      "Histogram",
      "Control Charts",
      "Stratification & Process Flow Analysis",
    ],
  },
  {
    id: "oee",
    number: "06",
    title: "OEE & Production Excellence",
    description: "Maximizing production performance and operational effectiveness.",
    icon: "Gauge",
    items: [
      "OEE Improvement",
      "Throughput Improvement",
      "Bottleneck Elimination",
      "Cycle Time Reduction",
      "Production Flow Optimization",
      "Capacity Enhancement",
      "Changeover Time Reduction",
      "Production Planning Support",
      "Manufacturing Performance Improvement",
    ],
  },
  {
    id: "supply-chain",
    number: "07",
    title: "Supply Chain, Inventory & Warehouse Excellence",
    description: "Optimizing material flow, inventory control, and supply chain performance.",
    icon: "Truck",
    items: [
      "Inventory Optimization",
      "ABC Analysis",
      "FSN Analysis",
      "VED Analysis",
      "EOQ Analysis",
      "Warehouse Optimization",
      "FIFO / FEFO Systems",
      "Vendor Management",
      "Supply Chain Improvement",
      "ERP & SCM Support",
      "Material Flow Optimization",
      "Demand Forecasting",
      "Storage System Design",
    ],
  },
  {
    id: "business-process",
    number: "08",
    title: "Business Process & Service Excellence",
    description:
      "Helping organizations improve overall business performance and customer experience.",
    icon: "LineChart",
    items: [
      "Process Mapping",
      "Workflow Optimization",
      "KPI Development",
      "Performance Management Systems",
      "Data Analysis & Dashboarding",
      "SMART Goal Deployment",
      "Hoshin Kanri (Policy Deployment)",
      "PDCA Implementation",
      "Service Delivery Improvement",
      "Waiting Time Reduction",
      "Resource Utilization Improvement",
      "Cost Reduction Projects",
      "Customer Experience Improvement",
      "Business Process Reengineering",
    ],
  },
  {
    id: "plant-setup",
    number: "10",
    title: "New Plant Setup & Expansion Support",
    description:
      "Supporting Greenfield and Brownfield projects from concept to operational readiness.",
    icon: "Factory",
    items: [
      "Plant Layout Design",
      "Capacity Planning",
      "Material Flow Design",
      "Warehouse Planning",
      "Production Line Design",
      "Manpower Planning",
      "Utility Planning Support",
      "SOP Development",
      "KPI Development",
      "Lean Factory Design",
      "Operational Readiness Assessment",
      "Startup & Ramp-Up Support",
    ],
  },
  {
    id: "ehs",
    number: "11",
    title: "EHS & Safety Excellence",
    description: "Creating safer and more compliant workplaces.",
    icon: "HardHat",
    items: [
      "Safety Audits",
      "Workplace Risk Assessments",
      "Safety Awareness Programs",
      "Visual Safety Systems",
      "Near Miss Reporting Systems",
      "Safety Culture Development",
    ],
  },
  {
    id: "digital",
    number: "12",
    title: "Digital Transformation Support",
    description: "Supporting organizations in their digital improvement journey.",
    icon: "MonitorCog",
    items: [
      "KPI Dashboards",
      "ERP Process Mapping",
      "Digital SOP Systems",
      "Shop Floor Digitization",
      "Reporting Systems",
      "Performance Monitoring Systems",
      "Data Analysis & Visualization",
    ],
  },
];

export const ASSESSMENT_AREAS = [
  { title: "Productivity Assessment", icon: "TrendingUp" },
  { title: "Operational Excellence Assessment", icon: "Workflow" },
  { title: "TPM Assessment", icon: "Cog" },
  { title: "OEE Assessment", icon: "Gauge" },
  { title: "5S Assessment", icon: "LayoutGrid" },
  { title: "Quality Assessment", icon: "ShieldCheck" },
  { title: "Safety Assessment", icon: "HardHat" },
  { title: "Certification Readiness Assessment", icon: "FileCheck" },
  { title: "Inventory Assessment", icon: "Boxes" },
];

export const ASSESSMENT_DELIVERABLES = [
  "Current State Analysis",
  "Gap Identification",
  "Improvement Opportunities",
  "Prioritized Action Plan",
  "Implementation Roadmap",
  "Assessment Report",
];

export const TECHNICAL_EXPERTISE = [
  "CNC Productivity Improvement",
  "CNC Process Optimization",
  "Casting Process Improvement",
  "Moulding Process Optimization",
  "Forging Process Improvement",
  "Fabrication Excellence",
  "Welding Process Optimization",
  "Automation Solutions",
  "PLC & Control Systems",
  "Industry 4.0 Support",
  "ERP Integration",
  "Energy Optimization Projects",
  "Technical Troubleshooting",
];

export const TRAINING_CATEGORIES = [
  {
    title: "Operational Excellence",
    icon: "Workflow",
    items: [
      "Lean Manufacturing",
      "Continuous Improvement",
      "Operational Excellence",
      "Productivity Improvement",
    ],
  },
  {
    title: "Lean Tools",
    icon: "LayoutGrid",
    items: ["5S", "VSM", "Kaizen", "Visual Management", "Kanban", "Poka-Yoke", "Standard Work"],
  },
  {
    title: "Industrial Engineering",
    icon: "Ruler",
    items: [
      "Time Study",
      "Motion Study",
      "Work Measurement",
      "Ergonomics",
      "Line Balancing",
      "Capacity Analysis",
      "Plant Layout Design",
    ],
  },
  {
    title: "TPM & Maintenance",
    icon: "Cog",
    items: [
      "TPM",
      "OEE",
      "Autonomous Maintenance",
      "Planned Maintenance",
      "Reliability Improvement",
    ],
  },
  {
    title: "Quality",
    icon: "ShieldCheck",
    items: [
      "Six Sigma",
      "SPC",
      "Lean Tools",
      "FMEA",
      "RCA",
      "Problem Solving Techniques",
      "5 Why Analysis",
    ],
  },
  {
    title: "Production Excellence",
    icon: "Gauge",
    items: ["SMED", "Throughput Improvement", "Bottleneck Analysis", "Variation Reduction"],
  },
  {
    title: "Supply Chain & Warehouse",
    icon: "Truck",
    items: ["Inventory Management", "Material Flow Analysis", "Warehouse Management"],
  },
  {
    title: "Leadership & Management",
    icon: "Users",
    items: ["HR Management", "Performance Management"],
  },
  {
    title: "Compliance & Certification",
    icon: "FileCheck",
    items: [
      "ISO Awareness Programs",
      "IMS Awareness",
      "Internal Audit Awareness",
      "SQF Compliance",
    ],
  },
];

export const RECRUITMENT_SERVICES = [
  "Technical Recruitment",
  "Engineering Recruitment",
  "Plant Head Hiring",
  "Operations Leadership Hiring",
  "Production Professionals",
  "Quality Professionals",
  "Maintenance Professionals",
  "Lean & CI Professionals",
  "Contract Staffing",
  "Project-Based Consultant Deployment",
  "Interim Management Support",
];

export const PARTNERSHIP_POINTS = [
  {
    title: "Training + Consulting + Implementation",
    description:
      "Capability building, expert guidance and hands-on implementation delivered together.",
    icon: "Layers",
  },
  {
    title: "Sustainable Results",
    description: "Improvements designed to hold, with systems and standards that sustain them.",
    icon: "Recycle",
  },
  {
    title: "End-to-End Improvement Support",
    description: "Support from assessment and planning through execution and review.",
    icon: "Route",
  },
  {
    title: "Focus on Measurable Business Impact",
    description: "Every initiative tied to measurable operational and business metrics.",
    icon: "BarChart3",
  },
  {
    title: "One-Stop Business Improvement Partnership",
    description:
      "A single partner across engineering, operations, quality, training and workforce.",
    icon: "Handshake",
  },
];

export const PARTNERSHIP_PROCESS = [
  { step: "Assess", description: "Understand the current state through structured diagnostics." },
  { step: "Identify", description: "Pinpoint gaps, losses and improvement opportunities." },
  { step: "Plan", description: "Build a prioritized action plan and implementation roadmap." },
  { step: "Implement", description: "Work on the ground with your teams to execute changes." },
  { step: "Measure", description: "Track results against defined KPIs and targets." },
  { step: "Sustain", description: "Standardize, train and embed a continuous improvement culture." },
];

export const SERVICE_OPTIONS = [
  "Operational Excellence",
  "Lean Manufacturing",
  "Industrial Engineering",
  "TPM & Reliability",
  "Quality & Six Sigma",
  "Production Excellence",
  "Supply Chain",
  "Business Assessment",
  "New Plant Setup",
  "EHS & Safety",
  "Digital Transformation",
  "Technical Expertise",
  "Training",
  "Recruitment & Workforce",
  "Other",
];

export const APPROACH = [
  {
    title: "Practical Implementation",
    description:
      "We work on the shop floor and in the process, not only in the boardroom, so improvements actually happen.",
    icon: "Hammer",
  },
  {
    title: "Technical Expertise",
    description:
      "Industrial engineering depth supported by a trusted network of specialist industry experts.",
    icon: "Wrench",
  },
  {
    title: "Data-Driven Methodologies",
    description:
      "Structured methodologies and measurable data guide every decision and priority.",
    icon: "BarChart3",
  },
  {
    title: "Continuous Improvement",
    description:
      "Kaizen, PDCA and standard work build a culture where improvement continues after we leave.",
    icon: "Recycle",
  },
  {
    title: "Measurable Business Impact",
    description:
      "Productivity, quality, efficiency, profitability and customer satisfaction outcomes.",
    icon: "Target",
  },
  {
    title: "Sustainable Results",
    description:
      "Systems, standards and capability that keep performance gains in place long term.",
    icon: "ShieldCheck",
  },
];
