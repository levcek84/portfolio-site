import React, { useMemo, useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Languages,
  Award,
  ExternalLink,
  ChevronRight,
  Globe2,
  Building2,
  FolderKanban,
  BadgeCheck,
  UserRound,
  FileBadge2,
  Sparkles,
  CheckCircle2,
  Link as LinkIcon,
} from "lucide-react";

const ASSETS = {
  // User noted the old portrait path was not visible. Use the international festival photo (shows Renato) as a reliable visual.
  portrait: "/Renato LI.jpg",
  mednarodna: "/Mednarodna.jpg",
  presentation: "/Predstavitev.png",
  letterRuzzier: "sandbox:/mnt/data/7a4ac7a3-a002-4e40-b917-8e31268d81f3.png",
  letterMilost: "sandbox:/mnt/data/e6da183d-2cd9-48da-baa1-96c15343ff67.png",
  bjtCertificate: "sandbox:/mnt/data/95405c8a-ec92-46ee-a649-f03a1fe7a4ac.png",
  bjtTranscript: "sandbox:/mnt/data/1708bb67-acb5-4598-8761-ca100706e045.png",
  bjtCourseDesc: "sandbox:/mnt/data/0df549cd-bc47-4b93-8244-db3b0223ac22.png",
};

const CONTACT = {
  linkedin: "https://www.linkedin.com/in/renatokostomaj/",
  email: "renato.kostomaj@gmail.com",
};

const LINKS = {
  mensa: "/Mensa certifikat.pdf",
  nuix: "/Nuix certificate.pdf",
};

const SKILLS = {
  sl: [
    "Mednarodna koordinacija",
    "Čezmejna komunikacija",
    "Vodenje v reguliranem okolju",
    "Skladnost in administracija",
    "Standardizacija procesov",
    "Digitalna forenzika",
    "Reševanje tveganj",
    "Operativno vodenje",
    "Projektna koordinacija",
    "Jasno pisno komuniciranje",
  ],
  en: [
    "International Coordination",
    "Cross-Border Communication",
    "Regulated case management",
    "Compliance & Administration",
    "Process improvement",
    "Digital Forensics",
    "Risk resolution",
    "Operational leadership",
    "Project coordination",
    "Clear writing",
  ],
};

const EXP = [
  {
    role: {
      sl: "Višji finančni svetovalec inšpektor specialist",
      en: "Senior Financial Advisor Inspector Specialist",
    },
    org: {
      sl: "Finančna uprava Republike Slovenije (FURS)",
      en: "Financial Administration of the Republic of Slovenia (FURS)",
    },
    period: "02/2020 - danes",
    location: { sl: "Ljubljana · hibridno", en: "Ljubljana · hybrid" },
    bullets: {
      sl: [
        "Koordinacija čezmejnih OSS postopkov in komunikacije med državami članicami EU.",
        "Vodenje in usklajevanje zahtevnih administrativnih primerov v reguliranem okolju.",
        "Podpora izboljšavam procesov, strukturirani obravnavi zadev in reševanju problemov.",
        "Povezovanje področij mednarodnega sodelovanja, skladnosti poslovanja in digitalne forenzike.",
        "Izboljšujem konsistentnost in jasnost čezmejne komunikacije z uporabo strukturiranih predlog in dokumentiranja.",
      ],
      en: [
        "Leads cross-border OSS coordination and communication with EU Member States.",
        "Coordinates complex administrative cases in a regulated environment.",
        "Supports process improvement, structured case handling, and problem solving.",
        "Combines international cooperation, compliance work, and digital forensics expertise.",
        "Improved consistency and clarity of cross-border case communication through structured templates and documentation.",
      ],
    },
    accent: "from-emerald-500 to-teal-500",
  },
  {
    role: { sl: "Namestnik vodje oddelka", en: "Deputy Head of Department" },
    org: { sl: "Lidl Slovenija", en: "Lidl Slovenija" },
    period: "12/2016 - 02/2020",
    location: { sl: "Slovenija · na lokaciji", en: "Slovenia · on-site" },
    bullets: {
      sl: [
        "Vodenje dnevnih operacij in ekip velikosti 3-10 zaposlenih na izmeno.",
        "Planiranje razporedov, nadzor zalog in zagotavljanje operativnih standardov.",
        "Usposabljanje zaposlenih ter podpora razvoju uspešnosti in timskemu delu.",
        "Optimizacija procesov za večjo učinkovitost in boljši potek dela.",
      ],
      en: [
        "Managed daily operations and shift teams of 3-10 employees.",
        "Oversaw scheduling, inventory control, and operational standards.",
        "Led staff training and supported performance development.",
        "Improved process flow and operational efficiency in a fast-paced retail environment.",
      ],
    },
    accent: "from-lime-500 to-emerald-500",
  },
  {
    role: { sl: "Vodja kavarne", en: "Coffee Shop Manager" },
    org: { sl: "Celjski mladinski center (MCC)", en: "Celjski mladinski center (MCC)" },
    period: "06/2016 - 11/2016",
    location: { sl: "Celje", en: "Celje" },
    bullets: {
      sl: [
        "Vodenje dnevnih operacij, zalog in razporejanja osebja.",
        "Koordinacija dobaviteljev in skrb za kakovost storitve.",
        "Uvedba izboljšav na področju uporabniške izkušnje.",
      ],
      en: [
        "Managed day-to-day operations, inventory, and staff scheduling.",
        "Handled supplier coordination and service quality.",
        "Implemented customer-service improvements.",
      ],
    },
    accent: "from-cyan-500 to-blue-500",
  },
  {
    role: { sl: "Projektni vodja", en: "Project Manager" },
    org: { sl: "Creative lab - Kreativni laboratorij d.o.o.", en: "Creative lab - Kreativni laboratorij d.o.o." },
    period: "09/2011 - 09/2013",
    location: { sl: "Slovenija", en: "Slovenia" },
    bullets: {
      sl: [
        "Vodenje projektov dogodkov od koncepta do izvedbe.",
        "Upravljanje proračuna, rokov in odnosov z dobavitelji.",
        "Priprava ponudb, komunikacijskih vsebin in podpore pri javnih naročilih.",
      ],
      en: [
        "Managed event projects from concept to execution.",
        "Handled budget, timelines, and vendor coordination.",
        "Prepared proposals, communications content, and tender-related support.",
      ],
    },
    accent: "from-fuchsia-500 to-pink-500",
  },
];

const PROJECTS = [
  {
    title: "MladiSmo (OPEN AIR) 2013",
    role: { sl: "Soorganizator", en: "Co-organizer" },
    subtitle: {
      sl: "Soorganizacija in operativno vodenje dogodka",
      en: "Co-organization and event operations",
    },
    points: {
      sl: [
        "Soorganizacija enega večjih open-air dogodkov v Celju (na LinkedIn profilu navedenih 3.000+ obiskovalcev).",
        "Koordinacija tehničnih operacij, dobaviteljev in varnostnih protokolov na lokaciji.",
        "Vodenje ekipe in podizvajalcev za nemoten potek dogodka.",
      ],
      en: [
        "Co-organized a large open-air event in Celje (3,000+ visitors stated on LinkedIn).",
        "Coordinated technical operations, vendors, and on-site safety protocols.",
        "Led staff and subcontractor coordination for smooth execution.",
      ],
    },
  },
  {
    title: "Ptujski športni vikend 2013",
    role: { sl: "Spletni razvijalec", en: "Web developer" },
    subtitle: {
      sl: "Koncept in spletna predstavitev",
      en: "Concept and website presentation",
    },
    points: {
      sl: [
        "Razvoj koncepta dogodka in izdelava uradne spletne strani.",
        "Skrb za usklajenost vizualne podobe in osnovnega brendinga.",
        "Predaja projekta nosilni ekipi po začetni fazi.",
      ],
      en: [
        "Developed the event concept and created the official website.",
        "Ensured visual consistency and baseline branding.",
        "Handed over execution to the core team after initial concept delivery.",
      ],
    },
  },
  {
    title: "Karate1 World Cup 2013",
    role: { sl: "VIP koordinator", en: "VIP coordinator" },
    subtitle: {
      sl: "Koordinacija VIP večera",
      en: "VIP social evening coordination",
    },
    points: {
      sl: [
        "Organizacija uradnega družabnega večera za VIP goste, sodnike in funkcionarje.",
        "Koordinacija prizorišča, programa in gostinske izkušnje.",
        "Usklajevanje z organizatorji glede protokola in nivoja izvedbe.",
      ],
      en: [
        "Organized the official social evening for VIP guests, judges, and officials.",
        "Coordinated venue setup, flow, and guest experience.",
        "Aligned execution with event protocol and expected standards.",
      ],
    },
  },
];

const EDUCATION = [
  {
    degree: {
      sl: "Magisterij managementa",
      en: "Master's Degree in Management",
    },
    school: { sl: "Fakulteta za management, Univerza na Primorskem", en: "Faculty of Management, University of Primorska" },
    period: "2024",
    desc: {
      sl: "Magistrsko delo o vplivu pandemije COVID-19 na delo na daljavo na primeru FURS. Vključevalo je anketni vprašalnik, analizo podatkov ter predloge za dolgoročno organizacijo dela.",
      en: "Master's thesis on the impact of the COVID-19 pandemic on remote work in FURS. Included survey design, data analysis, and recommendations for long-term work model integration.",
    },
  },
  {
    degree: {
      sl: "Študijska izmenjava (ekonomija in management)",
      en: "Exchange Semester (Economics & Management)",
    },
    school: "Beijing Jiaotong University",
    period: "03/2015 – 06/2015",
    desc: {
      sl: "Predmeti s področja HR v multinacionalnih podjetjih ter logistike in operacij. Krepitev medkulturne komunikacije, prilagodljivosti in mednarodnega sodelovanja.",
      en: "Coursework in multinational HR and logistics/operations. Strengthened cross-cultural communication, adaptability, and international collaboration.",
    },
  },
  {
    degree: {
      sl: "Diplomirani ekonomist (management)",
      en: "Bachelor of Economics (Management)",
    },
    school: { sl: "Fakulteta za management, Univerza na Primorskem", en: "Faculty of Management, University of Primorska" },
    period: "2005 – 2011",
    desc: {
      sl: "Osnove managementa, ekonomike poslovanja, organizacijskega razvoja in analitičnega razmišljanja skozi študij, primere in projektno delo.",
      en: "Foundation in management, business economics, organizational development, and analytical thinking through coursework and projects.",
    },
  },
];

const CERTS = [
  {
    name: "Nuix Certificate",
    issuer: "INsig2 Ltd.",
    year: "2022",
    link: LINKS.nuix,
    desc: {
      sl: "Potrdilo o znanju uporabe orodij Nuix za preiskave, obdelavo dokazov in analitične delovne tokove v digitalni forenziki.",
      en: "Certificate validating knowledge of Nuix tools for investigations, evidence processing, and digital forensics analytics workflows.",
    },
  },
  {
    name: "Mensa International – IQ Test",
    issuer: "Mensa International",
    year: "2014",
    link: LINKS.mensa,
    desc: {
      sl: "Uradni certifikat z rezultatom testiranja (Cattell).",
      en: "Official certificate showing the test result (Cattell).",
    },
  },
];

const LANGUAGES_LIST = [
  { label: { sl: "Slovenščina", en: "Slovenian" }, level: { sl: "materni jezik", en: "Native" }, key: "sl" },
  { label: { sl: "Angleščina", en: "English" }, level: { sl: "polna poklicna usposobljenost", en: "Full professional proficiency" }, key: "en" },
  { label: { sl: "Hrvaščina", en: "Croatian" }, level: { sl: "polna poklicna usposobljenost", en: "Full professional proficiency" }, key: "hr" },
  { label: { sl: "Srbščina", en: "Serbian" }, level: { sl: "poklicno delovno znanje", en: "Professional working proficiency" }, key: "sr" },
];

// new docs section items (bilingual titles/subtitles + PDF links)
const DOC_ITEMS = [
  {
    key: "ruzzier",
    title: { sl: "Priporočilno pismo prof. Mitja Ruzzier", en: "Recommendation Letter – Prof. Mitja Ruzzier" },
    subtitle: { sl: "Akademsko priporočilo", en: "Academic Recommendation Letter" },
    link: "/Priporočilno pismo prof. Mitja Ruzzier.pdf",
  },
  {
    key: "milost",
    title: { sl: "Priporočilno pismo prof. Franko Milost", en: "Recommendation Letter – Prof. Franko Milost" },
    subtitle: { sl: "Akademsko priporočilo", en: "Academic Recommendation Letter" },
    link: "/Priporočilno pismo prof. Franko Milost.pdf",
  },
  {
    key: "bjt-cert",
    title: { sl: "Beijing Jiaotong University Certificate", en: "Beijing Jiaotong University Certificate" },
    subtitle: { sl: "Potrdilo o študijski izmenjavi – Kitajska", en: "Study Exchange Certificate – China" },
    link: "/Beijing Jiaotong University Certificate.pdf",
  },
];

const I18N = {
  sl: {
    heroTag: "Mednarodne operacije • skladnost • digitalna forenzika",
    heroTitle: "Renato Koštomaj",
    heroSubtitle:
      "Mednarodna koordinacija v reguliranih okoljih (EU) – od obravnave primerov do izboljšav procesov. Povezujem skladnost, operativno izvedbo in digitalno-forenzični način razmišljanja.",
    ctaPrimary: "Kontakt",
    ctaSecondary: "Projekti",
    ctaRecruiter:
      "Na voljo za mednarodne koordinacijske, operativne, compliance in projektne vloge z močnim poudarkom na izvedbi.",
    location: "Maribor, Slovenija",
    roleOpen: "Odprt za mednarodne koordinacijske / operativne vloge",
    quick1Label: "EU sodelovanje",
    quick1Value: "27 držav članic",
    quick2Label: "Ozadje",
    quick2Value: "Javni + zasebni sektor",
    quick3Label: "Fokus",
    quick3Value: "Operacije / skladnost / forenzika",
    miniNavAbout: "Predstavitev",
    miniNavExperience: "Izkušnje",
    miniNavProjects: "Projekti",
    miniNavContact: "Kontakt",
    workingStylePart1: "Strukturirano",
    workingStylePart2: "mirno",
    workingStylePart3: "usmerjeno v izvedbo",
    aboutTitle: "Predstavitev",
    aboutSub: "Strategično razmišljanje in praktična izvedba.",
    aboutP1:
      "Imam več kot desetletje izkušenj na presečišču javne uprave, operativnega vodenja, projektov in mednarodnega sodelovanja. V zahtevnih situacijah delujem strukturirano, mirno in usmerjeno v rešitev.",
    aboutP2:
      "Kot OSS koordinator v okolju FURS usklajujem čezmejno administrativno sodelovanje, hkrati pa v profil prinašam tudi izkušnje vodenja ekip, logistike, dogodkov in procesnih izboljšav iz zasebnega sektorja.",
    bringTitle: "Kaj prinašam",
    bringSub: "Profil za vloge, kjer se srečajo koordinacija, odgovornost in izvedba.",
    // working-style phrase is stored in three parts for translation
    // convenience; the UI combines them into a single pill when rendering.
    bringList: [
      "Čezmejna komunikacija in usklajevanje deležnikov",
      "Razumevanje regulative z operativnim pristopom",
      "Vodenje ekip in procesov v hitrem tempu",
      "Projektna izvedba, logistika in dobavitelji",
      "Analitično razmišljanje, raziskave in forenzična usmerjenost",
    ],
    experienceTitle: "Izkušnje",
    experienceSub: "Izbrane vloge iz javne uprave, retaila, projektov in operativnih okolij.",
    projectsTitle: "Izbrani projekti",
    projectsSub: "Primeri vodenja dogodkov, konceptnega razvoja in koordinacije VIP aktivnosti.",
    eduTitle: "Izobrazba",
    eduSub: "Management, raziskovalno delo in mednarodna izmenjava.",
    certTitle: "Certifikati",
    certSub: "Poudarek na digitalni forenziki in analitičnih kompetencah.",
    langTitle: "Jeziki",
    langSub: "Profesionalna komunikacija v lokalnem in mednarodnem okolju.",
    docsTitle: "Priporočila in akademska potrdila",
    docsSub: "Objavljam izbrani priporočilni pismi profesorjev ter potrdilo o študijski izmenjavi.",
    docsNote: "Dokumenti so objavljeni kot skeni (PDF).",
    coreStrengths: "Ključne kompetence",
    intlTitle: "Mednarodna izmenjava",
    intlSub: "Predstavitev Slovenije na mednarodnem festivalu (Beijing Jiaotong University).",
    volunteerTitle: "Prostovoljstvo",
    volunteerSub: "Dolgotrajna skupnostna vključenost in delo pod pritiskom.",
    volunteerRole: "Prostovoljni gasilec",
    volunteerDesc:
      "Izkušnje z odzivanjem v izrednih razmerah, sodelovanjem v ekipi, koordinacijo na terenu in odločanjem pod pritiskom.",
    contactTitle: "Kontakt",
    contactSub: "Za mednarodne koordinacijske, operativne, compliance in projektne priložnosti.",
    contactCardTitle: "Kontakt za recruiterje / sodelovanje",
    contactCardDesc: "Najhitreje preko LinkedIna ali e-pošte.",
    linkedinBtn: "LinkedIn profil",
    emailBtn: "Pošlji e-pošto",
    footer:
      "Dvojezična predstavitvena stran (SL/EN). Vsebine temeljijo na javno deljenih informacijah z LinkedIn profila in dokumentih, ki jih je dodal avtor.",
    allExperienceHint: "Na LinkedIn profilu je prikazan tudi širši seznam izkušenj, projektov in organizacij.",
  },
  en: {
    heroTag: "International operations • compliance • digital forensics",
    heroTitle: "Renato Koštomaj",
    heroSubtitle:
      "International coordination in regulated environments (EU) — from case handling to process improvement. I connect compliance, operational delivery, and a digital-forensics mindset.",
    ctaPrimary: "Contact",
    ctaSecondary: "Projects",
    ctaRecruiter:
      "Available for international coordination, operations, compliance, and project-delivery roles with a strong execution focus.",
    location: "Maribor, Slovenia",
    roleOpen: "Open to international coordination / operations roles",
    quick1Label: "EU cooperation",
    quick1Value: "27 Member States",
    quick2Label: "Backgrounds",
    quick2Value: "Public + Private sector",
    quick3Label: "Focus",
    quick3Value: "Operations / Compliance / Forensics",
    miniNavAbout: "About",
    miniNavExperience: "Experience",
    miniNavProjects: "Projects",
    miniNavContact: "Contact",
    workingStylePart1: "Structured",
    workingStylePart2: "calm",
    workingStylePart3: "execution-focused",
    aboutTitle: "About",
    aboutSub: "Strategic thinking with hands-on execution.",
    aboutP1:
      "I bring more than a decade of experience across public administration, operations leadership, project work, and international cooperation. In complex situations, I work in a structured, calm, and solution-oriented way.",
    aboutP2:
      "As an OSS coordinator within FURS, I manage cross-border administrative cooperation while also drawing on private-sector experience in team leadership, logistics, events, and process improvement.",
    bringTitle: "What I bring",
    bringSub: "A profile for roles where coordination, accountability, and execution meet.",
    bringList: [
      "Cross-border communication and stakeholder coordination",
      "Regulatory understanding with an operational mindset",
      "Team and process leadership in fast-paced environments",
      "Project delivery, logistics, and vendor management",
      "Analytical thinking, research, and forensics orientation",
    ],
    experienceTitle: "Experience",
    experienceSub: "Selected roles across public administration, retail, projects, and operations.",
    projectsTitle: "Selected projects",
    projectsSub: "Examples of event management, concept development, and VIP coordination.",
    eduTitle: "Education",
    eduSub: "Management background, research work, and international exchange.",
    certTitle: "Licenses & certifications",
    certSub: "Focused on digital forensics and analytical capabilities.",
    langTitle: "Languages",
    langSub: "Professional communication across local and international contexts.",
    docsTitle: "Recommendations & Academic Credentials",
    docsSub: "Selected recommendation letters and an academic exchange certificate are published below.",
    docsNote: "Documents are published as scanned PDFs.",
    coreStrengths: "Core strengths",
    intlTitle: "International exchange",
    intlSub: "Presentation of Slovenia at an international festival (Beijing Jiaotong University).",
    volunteerTitle: "Volunteering",
    volunteerSub: "Long-term community engagement and high-pressure teamwork.",
    volunteerRole: "Volunteer firefighter",
    volunteerDesc:
      "Experience in emergency response, field coordination, teamwork, and decision-making under pressure.",
    contactTitle: "Contact",
    contactSub: "For international coordination, operations, compliance, and project opportunities.",
    contactCardTitle: "Recruiter / collaboration contact",
    contactCardDesc: "Fastest via LinkedIn or email.",
    linkedinBtn: "LinkedIn profile",
    emailBtn: "Send email",
    footer:
      "Bilingual portfolio page (SL/EN). Content is based on public LinkedIn profile information and documents shared by the owner.",
    allExperienceHint: "The LinkedIn profile includes a broader list of roles, projects, and organizations.",
  },
};

function cx(...arr) {
  return arr.filter(Boolean).join(" ");
}

function SectionTitle({ icon: Icon, title, subtitle, dark = false }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div
          className={cx(
            "rounded-2xl p-2 border shadow-sm",
            dark ? "border-white/15 bg-white/10" : "border-emerald-200/70 bg-white"
          )}
        >
          <Icon className={cx("h-5 w-5", dark ? "text-white" : "text-emerald-800")} />
        </div>
        <h2 className={cx("text-2xl md:text-3xl font-semibold tracking-tight", dark ? "text-white" : "text-slate-900")}>
          {title}
        </h2>
      </div>
      {subtitle ? <p className={cx("mt-2", dark ? "text-emerald-100/85" : "text-slate-600")}>{subtitle}</p> : null}
    </div>
  );
}

function SoftCard({ children, className = "" }) {
  return (
    <div className={cx("rounded-3xl border shadow-sm", "border-emerald-100 bg-white", className)}>
      {children}
    </div>
  );
}

function SkillPill({ children, dark = false }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-3 py-1 text-sm border",
        dark
          ? "border-white/15 bg-white/10 text-white"
          : "border-emerald-200 bg-emerald-50 text-emerald-900"
      )}
    >
      {children}
    </span>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div className="text-xs uppercase tracking-wider text-emerald-100/70">{label}</div>
      <div className="mt-1 text-sm font-medium text-white">{value}</div>
    </div>
  );
}

function LangToggle({ lang, setLang }) {
  return (
    <div className="inline-flex rounded-2xl border border-white/15 bg-white/10 p-1 backdrop-blur">
      <button
        className={cx(
          "px-3 py-1.5 text-sm rounded-xl transition",
          lang === "sl" ? "bg-white text-slate-900 font-semibold" : "text-white hover:bg-white/10"
        )}
        onClick={() => setLang("sl")}
      >
        SL
      </button>
      <button
        className={cx(
          "px-3 py-1.5 text-sm rounded-xl transition",
          lang === "en" ? "bg-white text-slate-900 font-semibold" : "text-white hover:bg-white/10"
        )}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}

function ImageWithFallback({ src, alt, className = "", loading = "lazy" }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={cx("grid place-items-center bg-slate-800 text-white", className)}>
        <div className="text-center p-4">
          <UserRound className="h-10 w-10 mx-auto opacity-70" />
          <div className="mt-2 text-sm opacity-80">Image unavailable</div>
        </div>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} loading={loading} onError={() => setFailed(true)} />;
}


export default function RenatoPortfolioSite() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "sl";
    } catch {
      return "sl";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);
  const t = I18N[lang];

  const translatedProjects = useMemo(
    () =>
      PROJECTS.map((p) => ({
        ...p,
        subtitleText: p.subtitle[lang],
        roleText: p.role ? p.role[lang] : "",
        pointsText: p.points[lang],
      })),
    [lang]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-slate-50 to-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <section className="relative overflow-hidden rounded-3xl border border-emerald-900/80 bg-slate-950 shadow-2xl">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={ASSETS.festival}
              alt="Presentation of Slovenia at international festival"
              className="h-full w-full object-cover opacity-20"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-emerald-950/85" />
            <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-teal-400/15 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-lime-300/10 blur-3xl" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] p-6 md:p-10">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-emerald-100 backdrop-blur">
                  <BadgeCheck className="h-4 w-4 text-emerald-300" />
                  {t.heroTag}
                </div>
                <LangToggle lang={lang} setLang={setLang} />
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
                {t.heroTitle}
              </h1>

              <p className="mt-4 text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
                {t.heroSubtitle}
              </p>

              <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 mt-0.5 text-emerald-300 shrink-0" />
                  <span>{t.ctaRecruiter}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-200">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <MapPin className="h-4 w-4 text-emerald-300" /> {t.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <Briefcase className="h-4 w-4 text-emerald-300" /> {t.roleOpen}
                </span>
              </div>



              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div><MiniStat label={t.quick1Label} value={t.quick1Value} /></div>
                <div><MiniStat label={t.quick2Label} value={t.quick2Value} /></div>
                <div><MiniStat label={t.quick3Label} value={t.quick3Value} /></div>
              </div>

              {/* quick-links positioned right below the stats to fill the
                  bottom-left whitespace */}
              <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                <a href="#about" className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-950 bg-white hover:bg-slate-100 transition">{t.miniNavAbout}</a>
                <a href="#projects" className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-950 bg-white hover:bg-slate-100 transition">{t.miniNavProjects}</a>
                <a href="#certificates" className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-950 bg-white hover:bg-slate-100 transition">
                  {lang === "sl" ? "Certifikati" : "Certifications"}
                </a>
                <a href="#contact" className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-950 bg-white hover:bg-slate-100 transition">{t.miniNavContact}</a>
              </div>
            </div>

            <div className="grid gap-4 content-start">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                  <ImageWithFallback
                    src={ASSETS.portrait}
                    alt="Renato Koštomaj"
                    className="h-[360px] w-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4">
                    <div className="text-white font-semibold">Renato Koštomaj</div>
                    <div className="text-slate-300 text-sm">Operations • Compliance • Digital Forensics</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-300/15 bg-emerald-400/5 p-5 backdrop-blur-md">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-100">{t.coreStrengths}</h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SKILLS[lang].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
                      <span className="text-sm text-emerald-50/95 leading-snug">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-10 grid gap-6 lg:grid-cols-[1.12fr_0.88fr] scroll-mt-24">
          <SoftCard className="p-6 md:p-8 bg-gradient-to-b from-white to-emerald-50/40">
            <SectionTitle icon={Globe2} title={t.aboutTitle} subtitle={t.aboutSub} />
            <div className="grid gap-5">
              <p className="text-slate-700 leading-relaxed">{t.aboutP1}</p>
              <p className="text-slate-700 leading-relaxed">{t.aboutP2}</p>
              <div className="rounded-2xl overflow-hidden border border-emerald-100">
                <ImageWithFallback
                  src={ASSETS.presentation}
                  alt="Predstavitev"
                  className="w-full h-auto aspect-video object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </SoftCard>

          <SoftCard className="p-6 md:p-8 bg-gradient-to-b from-emerald-950 via-teal-950 to-slate-950 border-emerald-900/70 text-white shadow-xl">
            <SectionTitle icon={ShieldCheck} title={t.bringTitle} subtitle={t.bringSub} dark />
            <div className="space-y-3 text-sm">
              {/* working-style row inserted as first list item; uses same
                  structure as the rest of bringList so visual appearance is
                  identical. text is combined from translation parts with
                  commas. */}
              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300 shrink-0" />
                <span className="text-emerald-50/95">
                  {`${t.workingStylePart1}, ${t.workingStylePart2}, ${t.workingStylePart3}`}
                </span>
              </div>

              {t.bringList.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300 shrink-0" />
                  <span className="text-emerald-50/95">{item}</span>
                </div>
              ))}
            </div>
          </SoftCard>
        </section>

        <section id="experience" className="mt-10 rounded-3xl border border-emerald-100 bg-white p-6 md:p-8 shadow-sm scroll-mt-24">
          <SectionTitle icon={Building2} title={t.experienceTitle} subtitle={t.experienceSub} />
          <div className="space-y-5">
            {EXP.map((exp, idx) => (
              <div
                key={`${exp.org.en}-${exp.period}-${idx}`}
                className="relative rounded-2xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/40 p-5 shadow-sm"
              >
                <div className={cx("absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b", exp.accent)} />
                <div className="pl-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-900 mb-2">
                                              </div>
                      <h3 className="text-lg font-semibold text-slate-900">{exp.role[lang]}</h3>
                      <p className="text-slate-700">{exp.org[lang]}</p>
                    </div>
                    <div className="text-sm text-slate-600 md:text-right">
                      <div>{exp.period}</div>
                      <div>{exp.location[lang]}</div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {exp.bullets[lang].map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-700" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 text-sm text-slate-600">{t.allExperienceHint}</div>
        </section>

        <section id="projects" className="mt-10 rounded-3xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/30 p-6 md:p-8 shadow-sm scroll-mt-24">
          <SectionTitle icon={FolderKanban} title={t.projectsTitle} subtitle={t.projectsSub} />
          <div className="grid gap-5 md:grid-cols-3">
            {translatedProjects.map((project, i) => (
              <div key={project.title} className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm hover:shadow-md transition">
                <div className={cx("h-1 rounded-full mb-4", i === 0 ? "bg-gradient-to-r from-emerald-500 to-teal-500" : i === 1 ? "bg-gradient-to-r from-blue-500 to-cyan-500" : "bg-gradient-to-r from-fuchsia-500 to-pink-500")} />
                <h3 className="text-lg font-semibold leading-tight text-slate-900">{project.title}</h3>
                <p className="text-sm text-emerald-700 mt-1 font-medium">{project.subtitleText}</p>
                {project.roleText && (
                  <p className="text-sm text-slate-700 mt-1 font-semibold">{lang === "sl" ? "Vloga:" : "Role:"} {project.roleText}</p>
                )}
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {project.pointsText.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-700" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="mt-10 grid gap-6 lg:grid-cols-2 scroll-mt-24">
          <SoftCard className="p-6 md:p-8 bg-gradient-to-b from-white to-slate-50">
            <SectionTitle icon={GraduationCap} title={t.eduTitle} subtitle={t.eduSub} />
            <div className="space-y-4">
              {EDUCATION.map((item) => (
                <div key={item.period} className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.degree[lang]}</h3>
                      <p className="text-slate-700">{item.school[lang]}</p>
                    </div>
                    <span className="text-xs md:text-sm text-slate-600 whitespace-nowrap">{item.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">{item.desc[lang]}</p>
                </div>
              ))}
            </div>
          </SoftCard>

          <div id="certificates" className="space-y-6">
            <SoftCard className="p-6 md:p-8 bg-gradient-to-b from-white to-emerald-50/30">
              <SectionTitle icon={Award} title={t.certTitle} subtitle={t.certSub} />
              <div className="space-y-4">
                {CERTS.map((c) => (
                  <div key={c.name} className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-900">{c.name}</h3>
                        <p className="text-slate-700 text-sm">{c.issuer}</p>
                      </div>
                      <span className="text-sm text-slate-600">{c.year}</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-700 leading-relaxed">{c.desc[lang]}</p>
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-emerald-800 hover:text-emerald-900">
                      <ExternalLink className="h-4 w-4" />
                      {lang === "sl" ? "Ogled dokumenta" : "View document"}
                    </a>
                  </div>
                ))}
              </div>
            </SoftCard>

            <SoftCard className="p-6 md:p-8 bg-gradient-to-b from-emerald-950 to-slate-950 border-emerald-900/70">
              <SectionTitle icon={Languages} title={t.langTitle} subtitle={t.langSub} dark />
              <div className="grid gap-3 sm:grid-cols-2">
                {LANGUAGES_LIST.map(({ label, level, key }) => (
                  <div key={key} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-medium text-white">{label[lang]}</div>
                    <div className="text-sm text-emerald-100/80">{level[lang]}</div>
                  </div>
                ))}
              </div>
            </SoftCard>
          </div>
        </section>

        <section id="credentials" className="mt-10 rounded-3xl border border-emerald-100 bg-white p-6 md:p-8 shadow-sm scroll-mt-24">
          <SectionTitle icon={FileBadge2} title={t.docsTitle} subtitle={t.docsSub} />
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOC_ITEMS.map((item) => (
              <div
                key={item.key}
                className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
              >
                <h3 className="font-semibold text-slate-900">{item.title[lang]}</h3>
                <p className="text-sm text-emerald-700 mt-1">{item.subtitle[lang]}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-800 hover:text-emerald-900"
                >
                  {lang === "sl" ? "Odpri dokument" : "View Document"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/30 p-6 md:p-8 shadow-sm">
          <SectionTitle icon={Globe2} title={t.intlTitle} subtitle={t.intlSub} />
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-2xl border border-emerald-100 shadow-sm">
              <ImageWithFallback
                src={ASSETS.mednarodna}
                alt="Mednarodna izmenjava"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                {lang === "sl" ? "Medkulturna izkušnja v praksi" : "Cross-cultural experience in practice"}
              </h3>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                {lang === "sl"
                  ? "Fotografija dopolnjuje dokazila o študijski izmenjavi in kaže praktično predstavitev Slovenije v mednarodnem okolju. To lepo podpira kompetence, kot so medkulturna komunikacija, prilagodljivost in javno nastopanje."
                  : "This photo complements the exchange documentation and shows practical representation of Slovenia in an international environment. It supports skills such as cross-cultural communication, adaptability, and public speaking."}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <SkillPill>{lang === "sl" ? "Medkulturna komunikacija" : "Cross-Cultural Communication"}</SkillPill>
                <SkillPill>{lang === "sl" ? "Mednarodno sodelovanje" : "International Collaboration"}</SkillPill>
                <SkillPill>{lang === "sl" ? "Javno nastopanje" : "Public Speaking"}</SkillPill>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-emerald-100 bg-white p-6 md:p-8 shadow-sm">
          <SectionTitle icon={ShieldCheck} title={t.volunteerTitle} subtitle={t.volunteerSub} />
          <div className="rounded-2xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/40 p-5 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{t.volunteerRole}</h3>
                <p className="text-slate-700">Gasilska zveza Slovenije / PGD Teharje</p>
              </div>
              <div className="text-sm text-slate-600">2013 - Present</div>
            </div>
            <p className="mt-4 text-sm text-slate-700 leading-relaxed">{t.volunteerDesc}</p>
          </div>
        </section>

        <section id="contact" className="mt-10 rounded-3xl border border-emerald-900 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 p-6 md:p-8 shadow-2xl">
          <SectionTitle icon={Mail} title={t.contactTitle} subtitle={t.contactSub} dark />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">{t.contactCardTitle}</h3>
              <p className="mt-2 text-sm text-emerald-100/80">{t.contactCardDesc}</p>
              <div className="mt-4 space-y-2 text-sm text-white">
                <div className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4 text-emerald-300" />
                  <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline break-all">
                    {CONTACT.linkedin}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-300" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:underline break-all">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-100 transition"
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.linkedinBtn} <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/15 transition"
                  href={`mailto:${CONTACT.email}`}
                >
                  {t.emailBtn} <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">{lang === "sl" ? "Ciljne vloge" : "Target roles"}</h3>
              <ul className="mt-3 space-y-2 text-sm text-emerald-100/85">
                {[
                  "International Operations / Coordination",
                  "Compliance & Administrative Process Roles",
                  "Project / Program Coordination",
                  "Operations Manager / Office Manager (international environments)",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </section>

        <footer className="mt-8 text-center text-xs text-slate-500 px-2">
          {t.footer}
        </footer>
      </div>
    </div>
  );
}
