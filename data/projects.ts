import { Project } from "./Project";

export const projects: Project[] = [
  {
    title: "MatthewPSimons.com",
    status: "current",
    shortDescription:
      "A personal career site featuring an LLM chatbot trained on my professional background.",
    fullDescription:
      "This site is built with Next.js and features a custom-built RAG pipeline to serve AI-driven answers based on my real-world work experience. It hosts additional pages showcasing my projects, public speaking engagements, and a contact section. The site and RAG-related microservices are hosted on my k3s Homelab.",
    images: [
      { src: "/projects/career-site.png", caption: "A screenshot of this site!" }
    ],
    links: [
      { label: "Career-site repo (Github link)", url: "https://github.com/thatsimonsguy/career-site" },
      { label: "Llm-orchestrator repo (Github link)", url: "https://github.com/thatsimonsguy/llm-orchestrator" },
      { label: "Embedding-service repo (Github link)", url: "https://github.com/thatsimonsguy/embedding-service" },
      { label: "Argo app definitions (Github link)", url: "https://github.com/thatsimonsguy/homelab-k8s" }
    ]
  },
  {
    title: "Homelab",
    status: "current",
    shortDescription:
      "A production-grade k8s implementation on minimal, self-hosted hardware.",
    fullDescription:
      "My Homelab project really grew out of a desire to have an easy way to rebuild my home server infrastructure any time I needed. What I've built is effectively a declarative, Infrastructure-as-Code backup of my Homelab. I can tear it down and rebuild it from scratch extremely quickly, and it serves as the deployment location for this website and its associated RAG microservices.",
    images: [
      { src: "/projects/homelab.png", caption: "Argo manages declarative (gitops) deployment for my cluster." }
    ],
    links: [
      { label: "Homelab bootstrapping repo (Github link)", url: "https://github.com/thatsimonsguy/homelab" },
      { label: "Argo app definitions repo (Github link)", url: "https://github.com/thatsimonsguy/homelab-k8s" }
    ]
  },
  {
    title: "Automated Garden Irrigation System",
    status: "current",
    shortDescription:
      "A software-driven, 35-zone intelligent irrigation system for my garden.",
    fullDescription:
      "This is a long project, still in flight. The ultimate goal is to provide software-driven control over 35 irrigation zones in my garden. Zones have attached profiles that match desired irrigation minutes per day according to crop placement, and will adjust lengths according to local weather. I also designed and fabricated custom raised garden beds for this project.",
    images: [
      { src: "/projects/PXL_20240425_185521644.jpg", caption: "The slab where the garden shed will be constructed and house all of the valves and distribution." },
      { src: "/projects/PXL_20230514_190030828.jpg", caption: "The plot designated for the garden, before any improvements." },
      { src: "/projects/PXL_20231005_202930091.jpg", caption: "A section of tilled ground for row crops (corn, potatoes, etc.)" },
      { src: "/projects/PXL_20231020_233330154.jpg", caption: "Irrigation trenches with 35 distribution lines installed (before filling)." },
      { src: "/projects/PXL_20230930_193059036.jpg", caption: "Figuring out how to lay 35 distribution lines in the same trench is complicated." },
      { src: "/projects/PXL_20231011_225752461.jpg", caption: "Distribution lines, holding water after installation." },
      { src: "/projects/PXL_20240309_190841723.jpg", caption: "A jig for building the custom 8'x3'x2' raised beds." },
      { src: "/projects/PXL_20240525_154812837.jpg", caption: "A custom 8'x3'x2' raised garden bed. Made from galvanized, corrugated roofing panels and reinforced with galvanized angle iron stakes. The bottoms get filled with leaves and branches before soil is added on top." },
      { src: "/projects/PXL_20230723_050844257.jpg", caption: "A prototype irrigration controller, made with an OrangePi, some sensors and relays. Connects to a sprinkler valve." }
    ]
  },
  {
    title: "Sleep Chamber",
    status: "current",
    shortDescription:
      "An enclosed canopy bed system designed to control temperature, noise, and light for better sleep.",
    fullDescription:
      "The sleep chamber project is probably the largest, multi-disciplinary project I'm currently undertaking. In its POC phase, the chamber is made of common construction materials and defines an interior space that is roomy, while providing almost complete thermal, acoustic, and optical isolation from the outside environment. Sensors in the interior drive air exchange as well as cooling for the interior of the chamber. Multiple layers of safety features ensure the chamber automatically opens in any failure scenario to ensure occupant safety.",
    images: [
      { src: "/projects/PXL_20241221_203712962.jpg", caption: "The basic interior structure provides a platform for a TwinXL mattress and an interior shelf." },
      { src: "/projects/PXL_20241121_034845581.jpg", caption: "The prototype is built using off-the-shelf construction materials." },
      { src: "/projects/PXL_20241218_195111132.jpg", caption: "The walls of the enclosure have mutiple layers of acoustic and thermal insulation. Wall cavities will be filled with rockwool." }
    ]
  },
  {
    title: "Sauna",
    status: "past",
    shortDescription:
      "A custom-built stand-alone sauna designed for year-round use.",
    fullDescription:
      "When my wife and I lived in Charleston, SC, I built a stand-alone sauna for our home. This was a complete soup-to-nuts effort where I did everything from applying for permits, to foundation work, framing, interior finishing, ecterior cladding -- the whole shebang. Making the custom cedar benches was a lot of fun, and this was a really fulfilling project to see through end-to-end.",
    images: [
      { src: "/projects/PXL_20211206_195336412.jpg", caption: "The finished exterior of the completed sauna." },
      { src: "/projects/IMG_20210206_155820.jpg", caption: "Early site prep -- digging out a basic foundation." },
      { src: "/projects/IMG_20210220_133059.jpg", caption: "Foundation framed and leveled. Dog providing moral support." },
      { src: "/projects/IMG_20210307_133348.jpg", caption: "Basic floor framing on top of the compacted gravel foundation. Ground anchors are added later to hold the structure down." },
      { src: "/projects/IMG_20210314_180939.jpg", caption: "Basic exterior framing completed." },
      { src: "/projects/PXL_20210930_230553332.jpg", caption: "Framing up the interior cedar benches." },
      { src: "/projects/PXL_20210920_184158368.jpg", caption: "Interior wall finishing. Cedar planking over reflective heat insulation." },
      { src: "/projects/PXL_20211114_192254643.jpg", caption: "A look at the finished interior (benches)." },
      { src: "/projects/PXL_20211206_195412657.jpg", caption: "Another angle on the finished interior (heater)." }
    ]
  },
  {
    title: "Hardwood Desk",
    status: "past",
    shortDescription:
      "A hand-built, epoxy-finished hardwood desk crafted from solid cherry, maple, and walnut.",
    fullDescription:
      "When my wife and I bought a condo in Des Moines, we decided the condo needed a desk, but the wall where the desk should go had a pillar in the middle. This was a somewhat challenging build because my workshop and home were an hour away from the condo. We templated, measured, and fabricated, and then everything fit into place perfectly when finished. The trio of woods chosen for the project reflect hardwoods natively found in Iowa.",
    images: [
      { src: "/projects/IMG_20190113_093004.jpg", caption: "The finished desk, installed into the condo." },
      { src: "/projects/IMG_20180820_215355.jpg", caption: "Templating out and measuring the space." },
      { src: "/projects/IMG_20180826_132758.jpg", caption: "Assembled with the cutout framed. Still needs sanding and epoxy." },
      { src: "/projects/IMG_20181202_103112.jpg", caption: "After the first epoxy coat." },
      { src: "/projects/IMG_20190113_093013.jpg", caption: "Like a glove." }
    ]
  },
];
