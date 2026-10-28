import type { Palette } from "./palette";

export interface StarNode {
  id: string;
  ox: number;
  oy: number;
  r: number;
  label: string;
  name: string;
  desc: string;
  tags: string[];
  /** optional destination — makes the star clickable */
  href?: string;
}

export interface Constellation {
  /** star-atlas identity, e.g. "Origo" */
  name: string;
  /** English reading of the name, e.g. "the origin" */
  meaning: string;
  cx: number;
  cy: number;
  nodes: StarNode[];
  edges: [number, number][];
}

export interface SectionText {
  label: string;
  title: string;
  body: string;
}

export interface HoverInfo {
  node: StarNode;
  accent: string;
  x: number;
  y: number;
}

export interface Section {
  id: string;
  cameraZ: number;
  side?: "left" | "right" | "center";
  palette: Palette;
  constellation: Constellation | null;
  text?: SectionText;
}

export const CONTACT = {
  email: "chatterjeearanya0910@gmail.com",
  phone: "+91 96851 75522",
  phoneHref: "tel:+919685175522",
  github: "https://github.com/aranya-chatterjee",
  linkedin: "https://www.linkedin.com/in/aranya-chatterjee",
  resume: "/Aranya_Chatterjee_Resume.pdf",
  location: "Gwalior, Madhya Pradesh, India",
};

export const SECTIONS: Section[] = [
  {
    id: "home",
    cameraZ: 0,
    palette: {
      bg: "#03030a",
      nodeColor: "#7F77DD",
      edgeColor: "#534AB7",
      textAccent: "#AFA9EC",
    },
    constellation: null, // home has no constellation — just ambient stars
  },
  {
    id: "about",
    cameraZ: -180,
    side: "left", // constellation on LEFT, text on RIGHT
    palette: {
      bg: "#02060f",
      nodeColor: "#378ADD",
      edgeColor: "#185FA5",
      textAccent: "#85B7EB",
    },
    constellation: {
      name: "Origo",
      meaning: "the origin",
      cx: 0.22,
      cy: 0.48,
      nodes: [
        {
          id: "n1", ox: -90, oy: -70, r: 2.8,
          label: "origin",
          name: "Aranya Chatterjee",
          desc: "Computer science undergrad in Gwalior, India, building machine learning systems",
          tags: ["AI", "ML", "India"],
        },
        {
          id: "n2", ox: 20, oy: -100, r: 2.2,
          label: "education",
          name: "B.Tech, Computer Science",
          desc: "Madhav Institute of Technology & Science, Gwalior — CGPA 7.7, class of 2027",
          tags: ["MITS", "2023–2027"],
        },
        {
          id: "n3", ox: 100, oy: -30, r: 1.8,
          label: "experience",
          name: "ML Intern at Warewolf",
          desc: "Building a YOLO object detection pipeline for surveillance imagery and video",
          tags: ["YOLO", "OpenCV", "Roboflow"],
        },
        {
          id: "n4", ox: 70, oy: 60, r: 1.6,
          label: "research",
          name: "Published at ICMCTR-2025",
          desc: "Second author on a hybrid IoT + AI approach to risk management in algorithmic trading",
          tags: ["Paper", "IoT", "Finance"],
        },
        {
          id: "n5", ox: -30, oy: 85, r: 1.5,
          label: "competitions",
          name: "National finalist ×2",
          desc: "Hack-O-Calypse at IIT Jammu and Code-N-Compete at IIT Kanpur",
          tags: ["IIT Jammu", "IIT Kanpur"],
        },
        {
          id: "n6", ox: -100, oy: 20, r: 1.4,
          label: "focus",
          name: "Agents, retrieval, and vision",
          desc: "Multi-agent orchestration, retrieval-augmented generation, computer vision, and prompt optimization",
          tags: ["Agents", "RAG", "Vision"],
        },
        {
          id: "n7", ox: -40, oy: -20, r: 1.3,
          label: "leadership",
          name: "Hackathon team lead",
          desc: "Led a developer team to a working prototype inside a 48-hour national sprint",
          tags: ["Team lead", "48 hours"],
        },
      ],
      edges: [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [0, 3], [1, 4],
      ],
    },
    text: {
      label: "// about",
      title: "Building minds\nthat learn.",
      body: "Computer science undergrad at MITS Gwalior, machine learning intern, published research author. Obsessed with agent orchestration, retrieval systems, computer vision, and the space where math meets meaning.",
    },
  },
  {
    id: "projects",
    cameraZ: -360,
    side: "right", // constellation on RIGHT, text on LEFT
    palette: {
      bg: "#030a06",
      nodeColor: "#1D9E75",
      edgeColor: "#0F6E56",
      textAccent: "#5DCAA5",
    },
    constellation: {
      name: "Fabrica",
      meaning: "the forge",
      cx: 0.78,
      cy: 0.46,
      nodes: [
        {
          id: "p1", ox: -70, oy: -95, r: 2.7,
          label: "project",
          name: "Agentic AI Orchestration Engine",
          desc: "Multi-agent GitHub triage built twice — once on Google ADK, once as an explicit LangGraph state machine with human-in-the-loop escalation and Postgres checkpointing",
          tags: ["Google ADK", "LangGraph", "DSPy/GEPA"],
          href: "https://github.com/aranya-chatterjee/langgraph-adk-version",
        },
        {
          id: "p2", ox: 45, oy: -80, r: 2.5,
          label: "project",
          name: "MultimodalRAG",
          desc: "Video and document assistant — Whisper transcription plus FAISS retrieval, 95% retrieval accuracy at sub-second latency",
          tags: ["LangChain", "Whisper", "FAISS"],
          href: "https://github.com/aranya-chatterjee/Multimodal_RAG",
        },
        {
          id: "p3", ox: 110, oy: -5, r: 2.3,
          label: "project",
          name: "MASTERJI",
          desc: "RAG-powered chatbot on Llama-2 with sourced citations — 30% more accurate than base model output",
          tags: ["LangChain", "Llama-2", "FAISS"],
          href: "https://github.com/aranya-chatterjee/RAG-CHATBOT",
        },
        {
          id: "p4", ox: 70, oy: 85, r: 2.0,
          label: "project",
          name: "AI Finance Assistant",
          desc: "Multi-model ML pipeline hitting 92% accuracy on expense categorization with budget forecasting dashboards",
          tags: ["Scikit-learn", "TF-IDF", "Streamlit"],
          href: "https://github.com/aranya-chatterjee/AI_finance_assistant-",
        },
        {
          id: "p5", ox: -30, oy: 100, r: 1.8,
          label: "internship",
          name: "Surveillance detection",
          desc: "YOLO detection pipeline at Warewolf, trained on ~780 hand-annotated surveillance frames",
          tags: ["YOLO", "OpenCV", "Roboflow"],
        },
        {
          id: "p6", ox: -110, oy: 35, r: 1.6,
          label: "research",
          name: "Algorithmic trading risk",
          desc: "Hybrid IoT + AI risk management for high-frequency financial systems, presented at ICMCTR-2025",
          tags: ["Research", "IoT", "Trading"],
        },
        {
          id: "p7", ox: 0, oy: -15, r: 1.4,
          label: "hackathon",
          name: "48-hour prototype",
          desc: "Team-led build at Code-N-Compete, IIT Kanpur — 25% faster integration through parallel workflows",
          tags: ["IIT Kanpur", "Team lead"],
        },
        {
          id: "p8", ox: -130, oy: -40, r: 2.4,
          label: "live · client work",
          name: "Toku's Ramyum Bar",
          desc: "Live website for a ramen bar in Gwalior with automatic table bookings (per-slot seat capacity, instant confirmation), QR table ordering, a PIN-protected staff dashboard with GST billing, and a moderated rating wall",
          tags: ["Cloudflare Workers", "D1", "JavaScript"],
          href: "https://tokusramyumbar.com",
        },
      ],
      edges: [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [6, 0], [6, 2], [6, 4],
        [7, 0], [7, 5],
      ],
    },
    text: {
      label: "// projects",
      title: "Things I've\nshipped.",
      body: "Agent orchestration engines, retrieval pipelines, vision systems, and a live booking and ordering system running a real restaurant — plus published research. Each one a real problem with a real solution.",
    },
  },
  {
    id: "skills",
    cameraZ: -540,
    side: "left", // constellation on LEFT, text on RIGHT
    palette: {
      bg: "#0a0414",
      nodeColor: "#9F7AEA",
      edgeColor: "#6B46C1",
      textAccent: "#C4B5FD",
    },
    constellation: {
      name: "Machina",
      meaning: "the machine",
      cx: 0.22,
      cy: 0.5,
      nodes: [
        {
          id: "sk1", ox: -75, oy: -95, r: 2.6,
          label: "language",
          name: "Python",
          desc: "Primary language — advanced, across every model, pipeline, and interface here",
          tags: ["Advanced", "Primary"],
        },
        {
          id: "sk2", ox: 35, oy: -105, r: 2.5,
          label: "agents",
          name: "Google ADK + LangGraph",
          desc: "Multi-agent orchestration — ADK loop agents and explicit LangGraph state machines with human-in-the-loop interrupts and checkpointed threads",
          tags: ["Google ADK", "LangGraph", "LiteLLM"],
        },
        {
          id: "sk3", ox: 110, oy: -55, r: 2.3,
          label: "deep learning",
          name: "PyTorch + TensorFlow",
          desc: "Model training and evaluation with PyTorch, TensorFlow, and Keras",
          tags: ["PyTorch", "TensorFlow", "Keras"],
        },
        {
          id: "sk4", ox: 120, oy: 15, r: 2.1,
          label: "llm engineering",
          name: "LangChain + Hugging Face",
          desc: "LLM orchestration, fine-tuning, and programmatic prompt optimization with DSPy and GEPA",
          tags: ["LangChain", "DSPy", "GEPA"],
        },
        {
          id: "sk5", ox: 75, oy: 80, r: 2.0,
          label: "retrieval",
          name: "RAG systems",
          desc: "Vector search and cross-modal retrieval with FAISS, Whisper AI, and Sentence Transformers",
          tags: ["FAISS", "Whisper", "Groq"],
        },
        {
          id: "sk6", ox: -5, oy: 105, r: 1.8,
          label: "vision",
          name: "Computer vision",
          desc: "Object detection and image pipelines with YOLO, OpenCV, and Roboflow annotation",
          tags: ["YOLO", "OpenCV", "Roboflow"],
        },
        {
          id: "sk7", ox: -80, oy: 75, r: 1.7,
          label: "serving",
          name: "FastAPI + Docker",
          desc: "Shipping agents and models as containerized FastAPI services, Postgres-backed and Cloud Run ready",
          tags: ["FastAPI", "Docker", "PostgreSQL"],
        },
        {
          id: "sk8", ox: -120, oy: 5, r: 1.5,
          label: "classical ml",
          name: "Scikit-learn",
          desc: "Regression, classification, TF-IDF, and forecasting for production-grade baselines",
          tags: ["sklearn", "TF-IDF", "Regression"],
        },
        {
          id: "sk9", ox: -105, oy: -45, r: 1.4,
          label: "data",
          name: "Data science stack",
          desc: "Pandas, NumPy, Matplotlib, Seaborn, and exploratory data analysis",
          tags: ["Pandas", "NumPy", "EDA"],
        },
        {
          id: "sk10", ox: -20, oy: -30, r: 1.3,
          label: "languages",
          name: "Java, C/C++, SQL",
          desc: "Java at HackerRank 5-star, systems work in C/C++, relational data in MySQL",
          tags: ["Java 5★", "C/C++", "MySQL"],
        },
        {
          id: "sk11", ox: 45, oy: -25, r: 1.2,
          label: "tools",
          name: "Streamlit + Git",
          desc: "Shipping interfaces with Streamlit, versioning in Git, prototyping in Jupyter",
          tags: ["Streamlit", "Git", "Jupyter"],
        },
        {
          id: "sk12", ox: 15, oy: 45, r: 1.9,
          label: "web + edge",
          name: "JavaScript + Cloudflare",
          desc: "Full-stack web apps on Cloudflare Workers with D1 (SQL), deployed by Wrangler and GitHub auto-deploy",
          tags: ["Workers", "D1", "Wrangler"],
        },
      ],
      edges: [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 0],
        [0, 9], [9, 10], [10, 1], [9, 8], [10, 3], [11, 6], [11, 4],
      ],
    },
    text: {
      label: "// skills",
      title: "The stack\nI live in.",
      body: "From multi-agent orchestration and transformer fine-tuning to retrieval pipelines, detection models, and the containers and edge workers that ship them.",
    },
  },
  {
    id: "contact",
    cameraZ: -720,
    side: "center",
    palette: {
      bg: "#0a0305",
      nodeColor: "#D4537E",
      edgeColor: "#993556",
      textAccent: "#ED93B1",
    },
    constellation: {
      name: "Nexus",
      meaning: "the meeting point",
      cx: 0.5,
      cy: 0.38,
      nodes: [
        {
          id: "c1", ox: 0, oy: -60, r: 2.4,
          label: "reach out",
          name: "Email",
          desc: CONTACT.email,
          tags: ["Primary"],
          href: `mailto:${CONTACT.email}`,
        },
        {
          id: "c2", ox: 80, oy: 20, r: 2.0,
          label: "code",
          name: "GitHub",
          desc: "Project repositories and open source work",
          tags: ["Projects"],
          href: CONTACT.github,
        },
        {
          id: "c3", ox: -80, oy: 20, r: 2.0,
          label: "connect",
          name: "LinkedIn",
          desc: "Professional profile and updates",
          tags: ["Professional"],
          href: CONTACT.linkedin,
        },
        {
          id: "c4", ox: 40, oy: 80, r: 1.5,
          label: "document",
          name: "Résumé",
          desc: "Full one-page résumé as a PDF",
          tags: ["PDF"],
          href: CONTACT.resume,
        },
        {
          id: "c5", ox: -40, oy: 80, r: 1.5,
          label: "call",
          name: "Phone",
          desc: CONTACT.phone,
          tags: ["India"],
          href: CONTACT.phoneHref,
        },
      ],
      edges: [
        [0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [0, 3], [0, 4],
      ],
    },
    text: {
      label: "// contact",
      title: "Let's build\nsomething real.",
      body: "Open to internships, research collaborations, and genuinely interesting problems. Based in Gwalior, India, working anywhere.",
    },
  },
];

export const SECTION_IDS = SECTIONS.map((s) => s.id);

/** Map scroll progress (0–1) to a section index (0–4). */
export function progressToSection(progress: number): number {
  if (progress < 0.125) return 0;
  if (progress < 0.375) return 1;
  if (progress < 0.625) return 2;
  if (progress < 0.875) return 3;
  return 4;
}

export const TOTAL_TRAVEL = -720;
