/*
 * Edit this file to update homepage profile details, publications and writing.
 * Place a portrait in assets/profile-photo.jpg, then set photoUrl to that path.
 * Place the final CV in files/Jiahui-Cris-Qiu-CV.pdf, then set cvUrl accordingly.
 */
window.siteContent = {
  profile: {
    name: "Jiahui (Cris) Qiu",
    field: "Cryosphere Hydrology / Environmental Remote Sensing",
    role: "Doctoral Researcher in Cryosphere Hydrology",
    summary:
      "Monitoring hydrological and environmental change across the cryosphere through multi-source remote sensing, in situ observations, machine learning and deep learning.",
    about:
      "I am a Doctoral Researcher and PhD student in the Digital Waters (DIWA) Flagship at the University of Oulu, Finland. My research investigates hydrological and environmental change in the cryosphere, spanning polar ice sheets, alpine snow and ice, and the pan-Arctic region. I integrate multi-source remote sensing with in situ observations and develop machine-learning and deep-learning approaches to monitor rapidly changing cold-region environments.",
    photoUrl: "assets/hero-ice-sheet.svg",
    photoAlt: "Stylized Greenland Ice Sheet meltwater pathways, awaiting a personal portrait",
    cvUrl: "",
    scholarUrl: "https://scholar.google.com/citations?user=pS-WOdMAAAAJ&hl=en",
    emails: [
      { label: "University email", address: "jiahui.qiu@oulu.fi" },
      { label: "Personal email", address: "crisqiu7@gmail.com" }
    ],
    contactIntro:
      "I welcome conversations about cryosphere hydrology, Earth observation, machine learning for environmental monitoring, data collaboration and doctoral research.",
    profiles: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=pS-WOdMAAAAJ&hl=en" },
      { label: "University of Oulu", url: "https://www.oulu.fi/en/researchers/jiahui-qiu" },
      { label: "DIWA Flagship", url: "https://digitalwaters.fi/" },
      { label: "GitHub", url: "https://github.com/CrisQiu" }
    ],
    metrics: [
      { value: "DIWA", label: "Flagship initiative" },
      { value: "OULU", label: "University affiliation" },
      { value: "AI/EO", label: "Methods & observations" }
    ]
  },
  research: [
    {
      title: "Ice-Sheet Meltwater",
      description:
        "Investigating Greenland surface meltwater and supraglacial lakes to understand ice-sheet hydrological responses to climate warming."
    },
    {
      title: "Arctic Rivers & Lakes",
      description:
        "Mapping river and lake ice conditions, phenology and freshwater dynamics across Arctic and sub-Arctic environments."
    },
    {
      title: "Intelligent Earth Observation",
      description:
        "Integrating satellite and in situ observations with machine learning and deep learning for scalable cryosphere monitoring."
    }
  ],
  fieldNote: {
    quote: "Following water and ice signals from the Greenland Ice Sheet to rapidly changing Arctic freshwater systems.",
    caption:
      "Multi-source remote sensing and in situ observations provide the evidence needed to understand cryospheric hydrological change."
  },
  publications: [
    {
      year: "2026",
      title: "A harmonized 2000-2024 dataset of daily river ice concentration and annual phenology for major Arctic rivers",
      authors: "Jiahui Qiu, Kari Luojus, Harri Kaartinen, Yubao Qiu, Jari Silander, Epari Ritesh Patro, Björn Klöve, and Ali Torabi Haghighi",
      journal: "Earth System Science Data, 18, 2703-2722",
      url: "https://doi.org/10.5194/essd-18-2703-2026",
      type: "Article"
    },
    {
      year: "2025",
      title: "Recent significant subseasonal fluctuations of supraglacial lakes on Greenland monitored by passive optical satellites",
      authors: "Jiahui Qiu, Jiangjun Ran, Natthachet Tangdamrongsub, Xavier Fettweis, Shoaib Ali, Wei Feng, and Xiaoyun Wan",
      journal: "Remote Sensing of Environment, 328, 114896",
      url: "https://doi.org/10.1016/j.rse.2025.114896",
      type: "Article"
    }
  ],
  articles: [
    {
      category: "DIWA PHD PILOT BLOG",
      date: "20 JAN 2026",
      title: "From the Tropic of Cancer to the Arctic Circle: My PhD Journey to Finland",
      excerpt: "A story of pursuing cryosphere hydrology research in Finland and monitoring river ice through integrated observations.",
      url: "https://digitalwaters.fi/from-the-tropic-of-cancer-to-the-arctic-circle-my-phd-journey-to-finland/"
    },
    {
      category: "ARTICLE TEMPLATE",
      date: "FUTURE UPDATE",
      title: "Add a new research note or field update",
      excerpt: "A ready-to-edit article template for your next project note, dataset release or field story.",
      url: "articles/template.html"
    }
  ]
};
