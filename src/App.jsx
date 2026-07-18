import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Download,
  FileCheck2,
  Flame,
  Globe2,
  Languages,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import "./App.css";

const BASE = import.meta.env.BASE_URL;

const ASSETS = {
  portrait: `${BASE}renato-portrait-2026.png`,
  international: `${BASE}Mednarodna.jpg`,
  euEvent: `${BASE}euipo-olaf-event.webp`,
};

const CONTACT = {
  email: "renato.kostomaj@gmail.com",
  linkedin: "https://www.linkedin.com/in/renatokostomaj/",
};

const createDocumentRequestLink = (subject, body) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const THESIS_URL = "https://repozitorij.upr.si/IzpisGradiva.php?id=20400&lang=slv";

const CV_DOCUMENTS = {
  sl: `${BASE}Renato-Kostomaj-CV-SL.pdf`,
  en: `${BASE}Renato-Kostomaj-CV-EN.pdf`,
};

const META = {
  sl: {
    title: "Renato Koštomaj | Davčna analitika, digitalna forenzika in EU sodelovanje",
    description: "Renato Koštomaj — davčna analitika, digitalna forenzika, Eurofisc, Fiscalis, IOSS, operativno vodenje in čezmejno evropsko sodelovanje.",
    locale: "sl_SI",
  },
  en: {
    title: "Renato Koštomaj | Tax Analytics, Digital Forensics & EU Cooperation",
    description: "Renato Koštomaj — tax analytics, digital forensics, Eurofisc, Fiscalis, IOSS, operational leadership and cross-border EU cooperation.",
    locale: "en_GB",
  },
};

const DOCUMENTS = [
  {
    sl: "Potrdilo Beijing Jiaotong University",
    en: "Beijing Jiaotong University credential",
    type: { sl: "ŠTUDENTSKA IZMENJAVA · 2015", en: "STUDENT EXCHANGE · 2015" },
  },
  {
    sl: "Nuix potrdilo o usposabljanju",
    en: "Nuix training credential",
    type: { sl: "DIGITALNA FORENZIKA", en: "DIGITAL FORENSICS" },
  },
];

const CONTENT = {
  sl: {
    nav: {
      about: "Profil",
      expertise: "Pristop",
      experience: "Kariera",
      cases: "V praksi",
      credentials: "Dokazila",
      contact: "Kontakt",
    },
    menu: "Odpri meni",
    close: "Zapri meni",
    navigationLabel: "Glavna navigacija",
    mobileNavigationLabel: "Mobilna navigacija",
    skip: "Preskoči na vsebino",
    intro: "NALAGAM PERSPEKTIVO",
    hero: {
      eyebrow: "OPERATIVA · SKLADNOST · MEDNARODNO",
      firstName: "Renato",
      lastName: "Koštomaj",
      role: "Davčna analitika, digitalna forenzika in čezmejno evropsko sodelovanje.",
      lead: "Kjer se srečajo regulativa, ljudje in izvedba, ustvarim jasnost, ritem in rezultat.",
      primary: "Razišči moj profil",
      secondary: "Poveživa se",
      portraitAlt: "Renato Koštomaj",
      portraitCaption: "MARIBOR · SLOVENIJA",
      status: "Na voljo za nove povezave",
      badge: "Širši pogled. Mirna izvedba.",
      scroll: "Povleci navzdol",
    },
    marquee: [
      "EU KOORDINACIJA",
      "OPERATIVNO VODENJE",
      "ANALITIČNO RAZMIŠLJANJE",
      "MEDKULTURNO SODELOVANJE",
      "JASNA KOMUNIKACIJA",
      "MIRNOST POD PRITISKOM",
      "SISTEMSKO RAZMIŠLJANJE",
      "ZANESLJIVA IZVEDBA",
    ],
    about: {
      index: "PROFIL",
      kicker: "Moj način dela",
      title: "Ne zapletam kompleksnosti.",
      titleAccent: "Razvozlam jo.",
      text: "Sem človek za okolja, kjer ni dovolj poznati samo pravila ali samo ljudi. Povežem oboje — razumem sistem, poslušam deležnike in poskrbim, da se stvar premakne od vprašanja do rešitve.",
      note: "Izkušnje iz javne uprave, maloprodajne operative in mednarodnih okolij mi dajejo pogled, ki je hkrati natančen in širok.",
      metrics: [
        { value: "15+", label: "let operativnih izkušenj" },
        { value: "3", label: "evropske strokovne vloge" },
        { value: "4", label: "jeziki za delo brez meja" },
        { value: "2013", label: "prostovoljni gasilec" },
      ],
    },
    expertise: {
      index: "PRISTOP",
      title: "Sistem deluje bolje, ko ga razumejo",
      titleAccent: "ljudje.",
      intro: "Štiri perspektive, ki jih združim pri vsakem zahtevnem izzivu.",
      detailLabel: "V PRAKSI",
      openLabel: "Poglej podrobneje",
      closeLabel: "Skrij podrobnosti",
      items: [
        {
          icon: ShieldCheck,
          title: "Regulativa brez megle",
          text: "Kompleksne postopke pretvorim v razumljive korake, sledljivo dokumentacijo in jasno odgovornost.",
          detail: "Najprej ločim zakonsko zahtevo od operativne navade. Nato določim korake, nosilce in dokazila, da je postopek razumljiv, preverljiv in ponovljiv.",
          meta: "SKLADNOST / EU OSS",
        },
        {
          icon: UsersRound,
          title: "Ljudje v ritmu",
          text: "Uskladim ekipo, prioritete in standarde tako, da izvedba ostane mirna tudi pod pritiskom.",
          detail: "Vodenje zame pomeni jasna pričakovanja, pravočasne informacije in mirno odločanje. Ljudem dam dovolj okvirja za usklajeno delo in dovolj prostora za prevzem odgovornosti.",
          meta: "VODENJE / OPERATIVA",
        },
        {
          icon: Sparkles,
          title: "Od podatkov do odločitev",
          text: "Ne ustavim se pri ugotovitvah. Analizo prevedem v priporočila, ki jih je mogoče dejansko uporabiti.",
          detail: "Podatke povežem s kontekstom: kaj se dogaja, zakaj in kaj lahko izboljšamo. Rezultat ni le poročilo, temveč predlog naslednjega izvedljivega koraka.",
          meta: "ANALIZA / IZBOLJŠAVE",
        },
        {
          icon: Globe2,
          title: "Čez kulturne meje",
          text: "Samozavestno sodelujem v mednarodnem okolju in povezujem različne načine razmišljanja.",
          detail: "Študij in delo v različnih okoljih sta me naučila preveriti predpostavke ter prilagoditi komunikacijo sogovorniku, ne da bi pri tem izgubil cilj ali standard.",
          meta: "MEDNARODNO / KULTURA",
        },
      ],
    },
    experience: {
      index: "KARIERA",
      title: "Izkušnje, ki se ne seštevajo.",
      titleAccent: "Množijo se.",
      intro: "Vsaka vloga je dodala novo plast: natančnost, vodenje, prilagodljivost in občutek za celoto.",
      current: "TRENUTNO",
      items: [
        {
          period: "2020 — DANES",
          mark: "FURS",
          role: "Višji finančni svetovalec inšpektor specialist",
          company: "Generalni finančni urad · Finančna uprava Republike Slovenije",
          text: "Pridobivam, povezujem in analiziram podatke, tudi iz tujine, za izbor zavezancev za nadzor ter prepoznavanje davčnih tveganj in primerov zaposlovanja na črno; pri zahtevnih postopkih zagotavljam tudi digitalno-forenzično podporo. Kot s strani Slovenije imenovani uradnik za zvezo Eurofisc za e-trgovanje sodelujem v evropski mreži. Sem tudi član enoletne delovne skupine Fiscalis, v kateri oblikujemo predloge za izboljšanje postopkov in zakonodaje za učinkovitejši boj proti goljufijam pri uvozu. Pri drugih čezmejnih postopkih sodelujem tudi z Združenim kraljestvom; sodeloval sem pri implementaciji CESOP v Sloveniji.",
          tags: ["EUROFISC", "IOSS", "CESOP", "DIGITALNA FORENZIKA"],
          theme: "violet",
        },
        {
          period: "2016 — 2020",
          mark: "LIDL",
          role: "Pomočnik poslovodje",
          company: "Lidl Slovenija",
          text: "Vodil sem izmene z ekipami od 3 do 10 zaposlenih ter delal v več kot 10 trgovinah po Sloveniji. Odgovarjal sem za organizacijo dela, standarde in nemoteno izvedbo v hitrem maloprodajnem okolju.",
          tags: ["3–10 LJUDI", "10+ TRGOVIN", "OPERATIVA", "STANDARDI"],
          theme: "ivory",
        },
        {
          period: "2010 — 2016",
          mark: "PROJ",
          role: "Projektne, vodstvene in operativne vloge",
          company: "MCC · Kreativni laboratorij · KŠOC · EkoPlus · HIT",
          text: "Vodil sem projekte in dogodke, delo skladišča ter kavarno v MCC; delal sem tudi kot receptor in krupje. Raznolike vloge so zahtevale organizacijo ekip, logistiko, komunikacijo z javnostmi ter natančno izvedbo pod časovnim pritiskom.",
          tags: ["PROJEKTI", "DOGODKI", "GOSTINSTVO", "LOGISTIKA"],
          theme: "orange",
        },
      ],
    },
    cases: {
      index: "IZBRANO DELO",
      title: "Od izziva do",
      titleAccent: "učinka.",
      intro: "Trije konkretni pogledi na moj prispevek — brez razkrivanja občutljivih podrobnosti.",
      labels: {
        challenge: "IZZIV",
        contribution: "MOJ PRISPEVEK",
        outcome: "UČINEK",
      },
      event: {
        meta: "MEDNARODNA STROKOVNA IZMENJAVA",
        metric: "ALICANTE · 2025",
        title: "Znanje proti ponaredkom v e-trgovanju.",
        challenge: "Spletne tržnice omogočajo hitro globalno prodajo, hkrati pa ustvarjajo zahtevna tveganja za potrošnike, pošteno konkurenco in nadzorne organe.",
        contribution: "Kot udeleženec skupne konference OLAF–EUIPO sem spoznaval pristope carinskih organov, preiskovalcev, spletnih platform in ponudnikov plačilnih storitev.",
        outcome: "Pridobljene pristope povezujem z razumevanjem tveganj e-trgovanja, čezmejnim sodelovanjem in iskanjem praktičnih rešitev v digitalnem okolju.",
        imageAlt: "Udeleženci skupnega strokovnega dogodka EUIPO in OLAF o ponarejenem blagu na spletnih tržnicah",
        caption: "»Ordered, counterfeited, unmasked: the global fight against e-commerce fakes« · 7.–8. oktober 2025 · Alicante, Španija",
        credit: "Fotografija: © European Union Intellectual Property Office (EUIPO)",
        sourceLabel: "Vir: Evropski urad za boj proti goljufijam (OLAF)",
        sourceUrl: "https://anti-fraud.ec.europa.eu/media-corner/news/olaf-and-euipo-unite-global-partners-fight-against-e-commerce-fakes-2025-10-08_en",
      },
      items: [
        {
          meta: "ANALITIKA · DIGITALNA FORENZIKA",
          metric: "PODATKI → NADZOR",
          title: "Analitika, ki usmerja ukrepanje.",
          challenge: "Za učinkovit nadzor je treba najprej pridobiti uporabne podatke iz tujine, kar je pogosto zahtevnejše od same analize.",
          contribution: "Sodelujem pri pridobivanju, povezovanju in analizi podatkov ter pri nekaterih postopkih zagotavljam digitalno-forenzično podporo.",
          outcome: "Analize so prispevale k izboru primernih nadzorov in razkritju številnih nepravilnosti, tudi primerov dela na črno.",
        },
        {
          meta: "OPERATIVA · VODENJE LJUDI",
          metric: "3–10 / 10+",
          title: "Vodenje v realnem tempu.",
          challenge: "Različne trgovine, ekipe in obremenitve so zahtevale hitro prilagajanje brez padca standardov.",
          contribution: "Kot pomočnik poslovodje sem vodil od 3 do 10 ljudi na izmeno in delal v več kot 10 trgovinah po Sloveniji.",
          outcome: "Z jasnimi prioritetami in mirno koordinacijo sem zagotavljal dosledno izvedbo v hitro spreminjajočem se okolju.",
        },
      ],
    },
    world: {
      index: "ŠIRINA",
      imageAlt: "Renato Koštomaj na predstavitvi Slovenije v Pekingu",
      overline: "ŠTUDENTSKA IZMENJAVA · PEKING",
      title: "Pogled čez meje.",
      text: "V Pekingu sem bil na študentski izmenjavi na Beijing Jiaotong University. Med izmenjavo sem predstavljal Slovenijo v mednarodnem okolju ter pridobil neposredno izkušnjo medkulturne komunikacije, prilagodljivosti in ustvarjanja zaupanja brez skupnega konteksta.",
      educationLabel: "IZOBRAZBA",
      educationTitle: "Magister managementa · 2024",
      educationSchool: "Univerza na Primorskem · Fakulteta za management",
      secondaryEducationTitle: "Gradbeni tehnik · 2004",
      secondaryEducationSchool: "Srednja šola za gradbeništvo Celje · 2000–2004",
      researchLabel: "MAGISTRSKO RAZISKOVALNO DELO",
      researchTitle: "Vpliv epidemije covid-19 na delo na daljavo: študija primera",
      researchText: "Magistrsko delo, 2024 · študija primera FURS · od zasnove ankete in analize podatkov do priporočil za izboljšave.",
      researchCta: "Odpri magistrsko delo",
      languagesLabel: "JEZIKI",
      languages: ["Slovenščina", "Angleščina", "Hrvaščina", "Srbščina"],
    },
    credentials: {
      index: "DOKAZILA",
      title: "Izkušnje, podprte",
      titleAccent: "z dokazili.",
      text: "Izbrana priporočila in potrdila so povzeta brez objave osebnih in identifikacijskih podatkov.",
      available: "NA VOLJO NA ZAHTEVO",
      recommendationLabel: "AKADEMSKI PRIPOROČILI · 2015",
      recommendationAvailable: "PRIPOROČILNI PISMI NA VOLJO NA ZAHTEVO",
      cvLabel: "ŽIVLJENJEPIS",
      cvTitle: "Celotna zgodba na dveh straneh.",
      cvText: "Pregleden in oblikovno usklajen življenjepis z izkušnjami, evropskimi vlogami, izobrazbo in ključnimi kompetencami.",
      cvCta: "PRENESI SLOVENSKI CV",
      requestCta: "ZAHTEVAJ DOKUMENT",
      requestRecommendationsCta: "ZAHTEVAJ PRIPOROČILNI PISMI",
      requestRecommendationsSubject: "Zahteva za priporočilni pismi",
      requestRecommendationsBody: "Pozdravljeni Renato,\n\nzanima me vpogled v vaši akademski priporočilni pismi. Prosim, če mi ju lahko posredujete.\n\nNamen zahteve:\n\nLep pozdrav,\n",
      requestDocumentSubject: "Zahteva za dokument",
      requestDocumentBody: "Pozdravljeni Renato,\n\nzanima me dokument »{document}«. Prosim, če mi ga lahko posredujete.\n\nNamen zahteve:\n\nLep pozdrav,\n",
      privacy: "Dokumente zaradi varstva osebnih podatkov posredujem neposredno in po presoji glede na namen zahteve.",
      recommendations: [
        {
          text: "Ustvarjalnost, sposobnost timskega dela, točnost, sposobnost dela pod pritiskom in dobre predstavitvene veščine.",
          author: "prof. dr. Mitja Ruzzier",
          role: "Prevod iz angleščine · Fakulteta za management, Univerza na Primorskem",
        },
        {
          text: "Je vedoželjen in se rad uči. Njegove komunikacijske, organizacijske in konceptualne sposobnosti so odlične.",
          author: "izr. prof. dr. Franko Milost",
          role: "Prevod iz angleščine · Fakulteta za management, Univerza na Primorskem",
        },
      ],
    },
    contact: {
      index: "KONTAKT",
      lineOne: "Dobra ideja",
      lineTwo: "potrebuje nekoga,",
      lineThree: "ki jo premakne.",
      text: "Privlačijo me projekti, pri katerih je treba kompleksnost prevesti v jasno in izvedljivo rešitev — od procesov do spletnih strani in drugih digitalnih rešitev. Z veseljem stopim tudi pred občinstvo, predvsem s temami iz ekonomije in podjetništva. Če iščeš sodelavca, predavatelja ali novo okrepitev ekipe, se pogovoriva.",
      email: "Začniva pogovor",
      linkedin: "LinkedIn",
      available: "Za dobre projekte, dobra predavanja in pogovore z ambicijo.",
    },
    footer: "Osebni projekt · zasnova, vsebina in izvedba: Renato Koštomaj.",
    disclaimer: "Osebna predstavitev; vsebina ni uradno stališče ali predstavitev FURS. Projektno sodelovanje ne vključuje davčnega svetovanja.",
    backToTop: "Nazaj na vrh",
  },
  en: {
    nav: {
      about: "Profile",
      expertise: "Approach",
      experience: "Career",
      cases: "In practice",
      credentials: "Proof",
      contact: "Contact",
    },
    menu: "Open menu",
    close: "Close menu",
    navigationLabel: "Primary navigation",
    mobileNavigationLabel: "Mobile navigation",
    skip: "Skip to content",
    intro: "LOADING PERSPECTIVE",
    hero: {
      eyebrow: "OPERATIONS · COMPLIANCE · INTERNATIONAL",
      firstName: "Renato",
      lastName: "Koštomaj",
      role: "Tax analytics, digital forensics and cross-border European cooperation.",
      lead: "Where regulation, people and execution meet, I create clarity, rhythm and results.",
      primary: "Explore my profile",
      secondary: "Let's connect",
      portraitAlt: "Renato Koštomaj",
      portraitCaption: "MARIBOR · SLOVENIA",
      status: "Open to new connections",
      badge: "Wider view. Calm execution.",
      scroll: "Scroll to discover",
    },
    marquee: [
      "EU COORDINATION",
      "OPERATIONAL LEADERSHIP",
      "ANALYTICAL THINKING",
      "CROSS-CULTURAL COLLABORATION",
      "CLEAR COMMUNICATION",
      "CALM UNDER PRESSURE",
      "SYSTEMS THINKING",
      "RELIABLE EXECUTION",
    ],
    about: {
      index: "PROFILE",
      kicker: "How I work",
      title: "I turn complexity",
      titleAccent: "into clarity.",
      text: "I thrive in environments where knowing only the rules or only the people is not enough. I connect both — understand the system, listen to stakeholders and move the work from question to solution.",
      note: "Experience across public administration, retail operations and international settings gives me a view that is both precise and broad.",
      metrics: [
        { value: "15+", label: "years of operational experience" },
        { value: "3", label: "European specialist roles" },
        { value: "4", label: "languages for work without borders" },
        { value: "2013", label: "volunteer firefighter" },
      ],
    },
    expertise: {
      index: "APPROACH",
      title: "A system works better when it is understood by",
      titleAccent: "people.",
      intro: "Four perspectives I bring together for every demanding challenge.",
      detailLabel: "IN PRACTICE",
      openLabel: "Explore further",
      closeLabel: "Hide details",
      items: [
        {
          icon: ShieldCheck,
          title: "Making regulation workable",
          text: "I turn complex procedures into understandable steps, traceable documentation and clear accountability.",
          detail: "I first separate the legal requirement from operational habit. I then define the steps, owners and evidence so the procedure is understandable, verifiable and repeatable.",
          meta: "COMPLIANCE / EU OSS",
        },
        {
          icon: UsersRound,
          title: "People in rhythm",
          text: "I align teams, priorities and standards so execution stays calm even under pressure.",
          detail: "Leadership means clear expectations, timely information and calm decision-making. I give people enough structure to work in sync and enough space to take ownership.",
          meta: "LEADERSHIP / OPERATIONS",
        },
        {
          icon: Sparkles,
          title: "From data to decisions",
          text: "I do not stop at findings. I translate analysis into recommendations that can actually be used.",
          detail: "I connect data with context: what is happening, why, and what can be improved. The outcome is not merely a report, but a proposal for the next feasible step.",
          meta: "ANALYSIS / IMPROVEMENT",
        },
        {
          icon: Globe2,
          title: "Across cultural borders",
          text: "I collaborate confidently in international settings and connect different ways of thinking.",
          detail: "Studying and working in different environments taught me to test assumptions and adapt communication to the person in front of me without losing sight of the goal or standard.",
          meta: "INTERNATIONAL / CULTURE",
        },
      ],
    },
    experience: {
      index: "CAREER",
      title: "Experience",
      titleAccent: "compounds.",
      intro: "Every role added a new layer: precision, leadership, adaptability and a sense of the whole.",
      current: "CURRENT",
      items: [
        {
          period: "2020 — PRESENT",
          mark: "FURS",
          role: "Senior Financial Adviser, Inspector Specialist",
          company: "General Financial Office · Financial Administration of the Republic of Slovenia",
          text: "I obtain, connect and analyse data, including from abroad, to select taxpayers for risk-based audits and identify tax risks and cases of undeclared work; I also provide digital forensic support in complex proceedings. As a Eurofisc liaison official designated by Slovenia for e-commerce, I work within the European network. I am also a member of a one-year Fiscalis working group developing proposals to improve procedures and legislation for a more effective response to import-related fraud. Separately, I cooperate with the United Kingdom in other cross-border procedures; I contributed to Slovenia's CESOP implementation.",
          tags: ["EUROFISC", "IOSS", "CESOP", "DIGITAL FORENSICS"],
          theme: "violet",
        },
        {
          period: "2016 — 2020",
          mark: "LIDL",
          role: "Assistant Store Manager",
          company: "Lidl Slovenia",
          text: "I led shifts with teams of 3 to 10 employees and worked across more than 10 stores in Slovenia. I was responsible for work organisation, standards and reliable execution in a fast-paced retail environment.",
          tags: ["3–10 PEOPLE", "10+ STORES", "OPERATIONS", "STANDARDS"],
          theme: "ivory",
        },
        {
          period: "2010 — 2016",
          mark: "PROJ",
          role: "Project, leadership and operational roles",
          company: "MCC · Kreativni laboratorij · KŠOC · EkoPlus · HIT",
          text: "I led projects and events, warehouse operations and the café at MCC; I also worked in reception and as a croupier. These varied roles demanded team organisation, logistics, public communication and precise execution under time pressure.",
          tags: ["PROJECTS", "EVENTS", "HOSPITALITY", "LOGISTICS"],
          theme: "orange",
        },
      ],
    },
    cases: {
      index: "SELECTED WORK",
      title: "From challenge to",
      titleAccent: "impact.",
      intro: "Three concrete perspectives on my contribution — without disclosing sensitive details.",
      labels: {
        challenge: "CHALLENGE",
        contribution: "MY CONTRIBUTION",
        outcome: "IMPACT",
      },
      event: {
        meta: "INTERNATIONAL KNOWLEDGE EXCHANGE",
        metric: "ALICANTE · 2025",
        title: "Knowledge against e-commerce counterfeits.",
        challenge: "Online marketplaces enable rapid global sales while creating complex risks for consumers, fair competition and enforcement authorities.",
        contribution: "As a participant in the joint OLAF–EUIPO conference, I learned from customs authorities, investigators, online platforms and payment service providers.",
        outcome: "I connect these approaches with my understanding of e-commerce risk, cross-border cooperation and practical problem-solving in digital environments.",
        imageAlt: "Participants at a joint EUIPO and OLAF knowledge-building event on counterfeit goods sold through online marketplaces",
        caption: "“Ordered, counterfeited, unmasked: the global fight against e-commerce fakes” · 7–8 October 2025 · Alicante, Spain",
        credit: "Photo: © European Union Intellectual Property Office (EUIPO)",
        sourceLabel: "Source: European Anti-Fraud Office (OLAF)",
        sourceUrl: "https://anti-fraud.ec.europa.eu/media-corner/news/olaf-and-euipo-unite-global-partners-fight-against-e-commerce-fakes-2025-10-08_en",
      },
      items: [
        {
          meta: "ANALYTICS · DIGITAL FORENSICS",
          metric: "DATA → ACTION",
          title: "Analytics that directs action.",
          challenge: "Effective supervision begins with obtaining usable data from abroad, often a more demanding task than the analysis itself.",
          contribution: "I contribute to obtaining, connecting and analysing data and provide digital forensic support in selected proceedings.",
          outcome: "The analyses have supported risk-based audit selection and helped uncover numerous irregularities, including cases of undeclared work.",
        },
        {
          meta: "OPERATIONS · PEOPLE LEADERSHIP",
          metric: "3–10 / 10+",
          title: "Leadership at real-world pace.",
          challenge: "Different stores, teams and workloads required rapid adaptation without compromising standards.",
          contribution: "As Assistant Store Manager, I led teams of 3 to 10 people per shift and worked across more than 10 stores in Slovenia.",
          outcome: "Through clear priorities and calm coordination, I maintained consistent execution in a fast-changing environment.",
        },
      ],
    },
    world: {
      index: "PERSPECTIVE",
      imageAlt: "Renato Koštomaj representing Slovenia in Beijing",
      overline: "STUDENT EXCHANGE · BEIJING",
      title: "A view beyond borders.",
      text: "I spent a student exchange at Beijing Jiaotong University. During the exchange, I represented Slovenia in an international setting and gained first-hand experience in cross-cultural communication, adaptability and building trust without shared context.",
      educationLabel: "EDUCATION",
      educationTitle: "Master of Management · 2024",
      educationSchool: "University of Primorska · Faculty of Management",
      secondaryEducationTitle: "Construction Technician · 2004",
      secondaryEducationSchool: "Secondary School of Civil Engineering Celje · 2000–2004",
      researchLabel: "MASTER'S RESEARCH",
      researchTitle: "The impact of the COVID-19 epidemic on remote work: a case study",
      researchText: "Master's thesis, 2024 · FURS case study · survey design, data analysis and recommendations for improvement. Written in Slovenian.",
      researchCta: "Open thesis (Slovenian)",
      languagesLabel: "LANGUAGES",
      languages: ["Slovenian", "English", "Croatian", "Serbian"],
    },
    credentials: {
      index: "PROOF",
      title: "Experience, supported",
      titleAccent: "by evidence.",
      text: "Selected recommendations and credentials are summarised without publishing personal or identifying information.",
      available: "AVAILABLE ON REQUEST",
      recommendationLabel: "ACADEMIC RECOMMENDATIONS · 2015",
      recommendationAvailable: "RECOMMENDATION LETTERS AVAILABLE ON REQUEST",
      cvLabel: "CURRICULUM VITAE",
      cvTitle: "The full story in two pages.",
      cvText: "A clear, visually aligned résumé covering experience, European responsibilities, education and core capabilities.",
      cvCta: "DOWNLOAD ENGLISH CV",
      requestCta: "REQUEST DOCUMENT",
      requestRecommendationsCta: "REQUEST RECOMMENDATION LETTERS",
      requestRecommendationsSubject: "Request for academic recommendation letters",
      requestRecommendationsBody: "Hello Renato,\n\nI would like to request access to your academic recommendation letters. Please could you share them with me?\n\nPurpose of the request:\n\nKind regards,\n",
      requestDocumentSubject: "Document request",
      requestDocumentBody: "Hello Renato,\n\nI would like to request the document “{document}”. Please could you share it with me?\n\nPurpose of the request:\n\nKind regards,\n",
      privacy: "To protect personal data, I share documents directly and at my discretion, based on the purpose of the request.",
      recommendations: [
        {
          text: "Creativity, capability of teamwork, punctuality, ability to work under pressure and good presentation skills.",
          author: "Prof. Mitja Ruzzier, PhD",
          role: "Faculty of Management · University of Primorska",
        },
        {
          text: "He has an inquisitive mind and is eager to learn. His communication, organization and conceptualization skills are excellent.",
          author: "Assoc. Prof. Franko Milost, PhD",
          role: "Faculty of Management · University of Primorska",
        },
      ],
    },
    contact: {
      index: "CONTACT",
      lineOne: "A good idea",
      lineTwo: "needs someone",
      lineThree: "to move it forward.",
      text: "I am drawn to projects where complexity needs to become a clear, workable solution — from processes to websites and other digital solutions. I also enjoy stepping in front of an audience, particularly on economics and entrepreneurship. If you are looking for a collaborator, lecturer or a strong addition to the team, let us talk.",
      email: "Start a conversation",
      linkedin: "LinkedIn",
      available: "For strong projects, engaging lectures and conversations with ambition.",
    },
    footer: "Personal project · concept, content and execution: Renato Koštomaj.",
    disclaimer: "Personal presentation; the content is not an official position or representation of FURS. Project work does not include tax advisory services.",
    backToTop: "Back to top",
  },
};

function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame;
    let width = 0;
    let height = 0;
    let points = [];
    let isVisible = true;
    let pageVisible = !document.hidden;
    const pointer = { x: -1000, y: -1000 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 700 ? 34 : 68;
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        size: Math.random() * 1.5 + 0.5,
      }));
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const linkDistance = width < 700 ? 90 : 135;

      points.forEach((point, index) => {
        if (!reducedMotion) {
          point.x += point.vx;
          point.y += point.vy;
        }
        if (point.x < -10) point.x = width + 10;
        if (point.x > width + 10) point.x = -10;
        if (point.y < -10) point.y = height + 10;
        if (point.y > height + 10) point.y = -10;

        const pointerDistance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
        if (!reducedMotion && pointerDistance < 145 && pointerDistance > 0) {
          point.x += ((point.x - pointer.x) / pointerDistance) * 0.45;
          point.y += ((point.y - pointer.y) / pointerDistance) * 0.45;
        }

        context.beginPath();
        context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        context.fillStyle = "rgba(161, 164, 255, 0.56)";
        context.fill();

        for (let secondIndex = index + 1; secondIndex < points.length; secondIndex += 1) {
          const secondPoint = points[secondIndex];
          const distance = Math.hypot(point.x - secondPoint.x, point.y - secondPoint.y);
          if (distance < linkDistance) {
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(secondPoint.x, secondPoint.y);
            context.strokeStyle = `rgba(127, 130, 255, ${(1 - distance / linkDistance) * 0.18})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      });

    };

    const start = () => {
      cancelAnimationFrame(animationFrame);
      draw();
      if (!reducedMotion && isVisible && pageVisible) {
        animationFrame = requestAnimationFrame(start);
      }
    };

    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
      if (pageVisible && isVisible) start();
      else cancelAnimationFrame(animationFrame);
    };

    const onResize = () => {
      resize();
      start();
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && pageVisible) start();
      else cancelAnimationFrame(animationFrame);
    });

    resize();
    start();
    visibilityObserver.observe(canvas);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("resize", onResize);
    if (!reducedMotion) window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", onResize);
      if (!reducedMotion) window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas className="particle-field" ref={canvasRef} aria-hidden="true" />;
}

function LanguageToggle({ lang, setLang }) {
  return (
    <div className="lang-switch" aria-label="Language / Jezik">
      {[
        ["sl", "SL"],
        ["en", "EN"],
      ].map(([value, label]) => (
        <button
          type="button"
          key={value}
          onClick={() => setLang(value)}
          className={lang === value ? "is-active" : ""}
          aria-pressed={lang === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function Intro({ phase, label }) {
  if (phase === "hidden") return null;

  return (
    <div className={`intro-screen${phase === "leaving" ? " is-leaving" : ""}`} aria-hidden="true">
      <div className="intro-mark">
        <span>R</span>
        <i />
        <span>K</span>
      </div>
      <div className="intro-meta">
        <span>{label}</span>
        <div className="intro-progress"><i /></div>
        <span>{new Date().getFullYear()}</span>
      </div>
    </div>
  );
}

function GlowCard({ item, labels, index }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!expanded) return undefined;

    const closeOutside = (event) => {
      if (!cardRef.current?.contains(event.target)) setExpanded(false);
    };

    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [expanded]);

  const moveGlow = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
  };
  const toggleCard = () => setExpanded((current) => !current);
  const Icon = item.icon;
  const detailId = `approach-detail-${index}`;

  return (
    <article
      ref={cardRef}
      className={`approach-card enter${expanded ? " is-expanded" : ""}`}
      onPointerMove={moveGlow}
      onPointerLeave={() => {
        if (window.matchMedia("(hover: hover)").matches) setExpanded(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false);
      }}
    >
      <div className="approach-glow" aria-hidden="true" />
      <div className="approach-card-top">
        <Icon size={25} strokeWidth={1.6} aria-hidden="true" />
      </div>
      <p className="approach-meta">{item.meta}</p>
      <h3>{item.title}</h3>
      <p className="approach-text">{item.text}</p>
      <div className="approach-detail" id={detailId} aria-hidden={!expanded}>
        <div className="approach-detail-inner">
          <span>{labels.detail}</span>
          <p>{item.detail}</p>
        </div>
      </div>
      <button
        className="approach-toggle"
        type="button"
        onClick={toggleCard}
        aria-expanded={expanded}
        aria-controls={detailId}
        aria-label={`${expanded ? labels.close : labels.open}: ${item.title}`}
      >
        <ArrowUpRight size={24} strokeWidth={1.7} aria-hidden="true" />
      </button>
    </article>
  );
}

export default function App() {
  const [lang, setLang] = useState(() => {
    const queryLanguage = new URLSearchParams(window.location.search).get("lang");
    if (queryLanguage === "sl" || queryLanguage === "en") return queryLanguage;
    return localStorage.getItem("portfolio-language") || "sl";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [shouldPlayIntro] = useState(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = sessionStorage.getItem("portfolio-intro-seen") === "true";
    return !reduceMotion && !alreadySeen;
  });
  const [introPhase, setIntroPhase] = useState(shouldPlayIntro ? "active" : "hidden");
  const progressRef = useRef(null);
  const cursorRef = useRef(null);
  const portraitRef = useRef(null);
  const careerCardRefs = useRef([]);
  const menuButtonRef = useRef(null);
  const t = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", META[lang].description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", META[lang].title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", META[lang].description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", META[lang].locale);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", META[lang].title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", META[lang].description);
    const url = new URL(window.location.href);
    if (lang === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url.href.split("#")[0]);
    localStorage.setItem("portfolio-language", lang);
  }, [lang]);

  useEffect(() => {
    if (!shouldPlayIntro) return undefined;
    document.body.classList.add("intro-active");
    const leaveTimer = window.setTimeout(() => setIntroPhase("leaving"), 1150);
    const hideTimer = window.setTimeout(() => {
      setIntroPhase("hidden");
      sessionStorage.setItem("portfolio-intro-seen", "true");
      document.body.classList.remove("intro-active");
    }, 2050);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      document.body.classList.remove("intro-active");
    };
  }, [shouldPlayIntro]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const cards = careerCardRefs.current.filter(Boolean);

    const updateCareerCardTops = () => {
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      const bottomClearance = 112;

      cards.forEach((card, index) => {
        if (!mobileQuery.matches) {
          card.style.removeProperty("--mobile-career-top");
          return;
        }

        const defaultTop = index === 0 ? -120 : -96 + index * 8;
        const fittedTop = viewportHeight - card.offsetHeight - bottomClearance;
        card.style.setProperty("--mobile-career-top", `${Math.min(defaultTop, fittedTop)}px`);
      });
    };

    updateCareerCardTops();
    const resizeObserver = new ResizeObserver(updateCareerCardTops);
    cards.forEach((card) => resizeObserver.observe(card));
    mobileQuery.addEventListener("change", updateCareerCardTops);
    window.addEventListener("resize", updateCareerCardTops);
    window.visualViewport?.addEventListener("resize", updateCareerCardTops);

    return () => {
      resizeObserver.disconnect();
      mobileQuery.removeEventListener("change", updateCareerCardTops);
      window.removeEventListener("resize", updateCareerCardTops);
      window.visualViewport?.removeEventListener("resize", updateCareerCardTops);
    };
  }, [lang]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".enter");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "expertise", "experience", "cases", "credentials", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const updateScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const maximum = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maximum > 0 ? window.scrollY / maximum : 0;
        progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);

        if (!reducedMotion) {
          document.querySelectorAll("[data-parallax]").forEach((element) => {
            const rect = element.getBoundingClientRect();
            const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -0.07;
            element.style.setProperty("--parallax", `${offset}px`);
          });
        }
        frame = null;
      });
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const moveCursor = (event) => {
      cursorRef.current?.style.setProperty("transform", `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", moveCursor, { passive: true });
    return () => window.removeEventListener("pointermove", moveCursor);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const tiltPortrait = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    portraitRef.current.style.setProperty("--tilt-x", `${y * -7}deg`);
    portraitRef.current.style.setProperty("--tilt-y", `${x * 8}deg`);
    portraitRef.current.style.setProperty("--portrait-x", `${(x + 0.5) * 100}%`);
    portraitRef.current.style.setProperty("--portrait-y", `${(y + 0.5) * 100}%`);
  };

  const resetPortrait = () => {
    portraitRef.current?.style.setProperty("--tilt-x", "0deg");
    portraitRef.current?.style.setProperty("--tilt-y", "0deg");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`new-site${shouldPlayIntro ? "" : " intro-skipped"}`}>
      <Intro phase={introPhase} label={t.intro} />
      <a className="skip-link" href="#main">{t.skip}</a>
      <div className="cursor-orbit" ref={cursorRef} aria-hidden="true" />
      <div className="page-progress" ref={progressRef} aria-hidden="true" />

      <header className="nav-shell">
        <a className="nav-brand" href="#home" onClick={closeMenu} aria-label="Renato Koštomaj — home">
          <span>R/K</span>
          <i />
          <small>RENATO<br />KOŠTOMAJ</small>
        </a>

        <nav className="nav-links" aria-label={t.navigationLabel}>
          {Object.entries(t.nav).slice(0, 5).map(([key, label]) => (
            <a
              href={`#${key}`}
              key={key}
              className={activeSection === key ? "is-active" : ""}
              aria-current={activeSection === key ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageToggle lang={lang} setLang={setLang} />
          <a className="nav-contact" href="#contact">
            {t.nav.contact}<ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            ref={menuButtonRef}
            className="nav-menu-button"
            type="button"
            aria-label={menuOpen ? t.close : t.menu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav
          className={`mobile-navigation${menuOpen ? " is-open" : ""}`}
          id="mobile-navigation"
          aria-label={t.mobileNavigationLabel}
        >
          {Object.entries(t.nav).map(([key, label]) => (
            <a
              href={`#${key}`}
              key={key}
              onClick={closeMenu}
              className={activeSection === key ? "is-active" : ""}
              aria-current={activeSection === key ? "location" : undefined}
            >
              {label}<ArrowRight size={20} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section className="opening" id="home">
          <ParticleField />
          <div className="opening-glow opening-glow--one" aria-hidden="true" />
          <div className="opening-glow opening-glow--two" aria-hidden="true" />

          <p className="opening-eyebrow">{t.hero.eyebrow}</p>
          <h1 className="opening-name" aria-label={`${t.hero.firstName} ${t.hero.lastName}`}>
            <span className="opening-first">{t.hero.firstName}</span>
            <span className="opening-last">{t.hero.lastName}</span>
          </h1>

          <div
            className="portrait-stage"
            ref={portraitRef}
            onPointerMove={tiltPortrait}
            onPointerLeave={resetPortrait}
          >
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-card">
              <img
                src={ASSETS.portrait}
                alt={t.hero.portraitAlt}
                width="1122"
                height="1402"
                decoding="async"
                fetchPriority="high"
              />
              <div className="portrait-scan" aria-hidden="true" />
              <span>{t.hero.portraitCaption}</span>
            </div>
            <div className="portrait-badge"><Globe2 size={18} />{t.hero.badge}</div>
          </div>

          <div className="opening-copy">
            <p className="opening-role">{t.hero.role}</p>
            <p className="opening-lead">{t.hero.lead}</p>
            <div className="opening-actions">
              <a className="action action--solid" href="#about">
                {t.hero.primary}<ArrowDown size={17} aria-hidden="true" />
              </a>
              <a className="action action--glass" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                {t.hero.secondary}<ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="opening-status opening-status--inline">
              <i aria-hidden="true" />
              <span>{t.hero.status}</span>
            </div>
          </div>

          <div className="opening-status opening-status--floating">
            <i aria-hidden="true" />
            <span>{t.hero.status}</span>
          </div>
          <a className="scroll-cue" href="#about">
            <span>{t.hero.scroll}</span><i><ArrowDown size={16} /></i>
          </a>
        </section>

        <div className="kinetic-strip" aria-label={t.marquee.join(", ")}>
          <div className="kinetic-track">
            {[0, 1].map((copy) => (
              <div className="kinetic-group" aria-hidden="true" key={copy}>
                {[...t.marquee, ...t.marquee].map((item, index) => (
                  <span key={`${item}-${index}`}>
                    {item}<i>✦</i>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="manifesto" id="about">
          <div className="section-code enter">{t.about.index}</div>
          <div className="manifesto-heading enter">
            <p>{t.about.kicker}</p>
            <h2>{t.about.title}<br /><span>{t.about.titleAccent}</span></h2>
          </div>
          <div className="manifesto-body enter">
            <p>{t.about.text}</p>
            <p>{t.about.note}</p>
          </div>
          <div className="manifesto-metrics">
            {t.about.metrics.map((metric) => (
              <article className="manifesto-metric enter" key={metric.label}>
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
                {metric.value === "2013" && <Flame size={22} aria-hidden="true" />}
              </article>
            ))}
          </div>
        </section>

        <section className="approach" id="expertise">
          <div className="approach-head enter">
            <div className="section-code section-code--light">{t.expertise.index}</div>
            <h2>{t.expertise.title} <span>{t.expertise.titleAccent}</span></h2>
            <p>{t.expertise.intro}</p>
          </div>
          <div className="approach-grid">
            {t.expertise.items.map((item, index) => (
              <GlowCard
                item={item}
                labels={{
                  detail: t.expertise.detailLabel,
                  open: t.expertise.openLabel,
                  close: t.expertise.closeLabel,
                }}
                index={index}
                key={item.title}
              />
            ))}
          </div>
        </section>

        <section className="career" id="experience">
          <div className="career-head enter">
            <div className="section-code">{t.experience.index}</div>
            <h2>{t.experience.title}<br /><span>{t.experience.titleAccent}</span></h2>
            <p>{t.experience.intro}</p>
          </div>
          <div className="career-stack">
            {t.experience.items.map((item, index) => (
              <div
                className="career-card-stage"
                style={{ "--stack-index": index }}
                key={`${item.period}-${item.role}`}
              >
                <article
                  className={`career-card career-card--${item.theme} enter`}
                  ref={(node) => { careerCardRefs.current[index] = node; }}
                >
                  <div className="career-period">
                    <span>{item.period}</span>
                    {index === 0 && <em>{t.experience.current}</em>}
                  </div>
                  <div className="career-role">
                    <span className="career-mark" aria-label={item.company}>{item.mark}</span>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <div className="career-copy">
                    <p>{item.text}</p>
                    <div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="cases" id="cases" aria-labelledby="cases-title">
          <div className="cases-head enter">
            <div className="section-code section-code--light">{t.cases.index}</div>
            <h2 id="cases-title">{t.cases.title} <span>{t.cases.titleAccent}</span></h2>
            <p>{t.cases.intro}</p>
          </div>

          <div className="cases-grid">
            <article className="case-feature enter">
              <div className="case-feature-image">
                <img
                  src={ASSETS.euEvent}
                  alt={t.cases.event.imageAlt}
                  width="966"
                  height="642"
                  loading="lazy"
                  decoding="async"
                />
                <div className="case-feature-shade" aria-hidden="true" />
                <div className="case-feature-caption">
                  <span>{t.cases.event.caption}</span>
                  <small>{t.cases.event.credit}</small>
                  <a href={t.cases.event.sourceUrl} target="_blank" rel="noreferrer">
                    {t.cases.event.sourceLabel}<ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="case-feature-copy">
                <div className="case-meta">{t.cases.event.meta}</div>
                <strong>{t.cases.event.metric}</strong>
                <h3>{t.cases.event.title}</h3>
                <div className="case-story">
                  <div><span>{t.cases.labels.challenge}</span><p>{t.cases.event.challenge}</p></div>
                  <div><span>{t.cases.labels.contribution}</span><p>{t.cases.event.contribution}</p></div>
                  <div><span>{t.cases.labels.outcome}</span><p>{t.cases.event.outcome}</p></div>
                </div>
              </div>
            </article>

            <div className="case-side">
              {t.cases.items.map((item) => (
                <article className="case-card enter" key={item.title}>
                  <div className="case-meta">{item.meta}</div>
                  <strong>{item.metric}</strong>
                  <h3>{item.title}</h3>
                  <div className="case-story">
                    <div><span>{t.cases.labels.challenge}</span><p>{item.challenge}</p></div>
                    <div><span>{t.cases.labels.contribution}</span><p>{item.contribution}</p></div>
                    <div><span>{t.cases.labels.outcome}</span><p>{item.outcome}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="world" aria-labelledby="world-title">
          <div className="world-image" data-parallax>
            <img
              src={ASSETS.international}
              alt={t.world.imageAlt}
              width="1280"
              height="720"
              loading="lazy"
              decoding="async"
            />
            <div className="world-image-overlay" aria-hidden="true" />
            <div className="world-image-label">
              <span>{t.world.overline}</span>
            </div>
          </div>
          <div className="world-copy enter">
            <div className="section-code section-code--light">{t.world.index}</div>
            <h2 id="world-title">{t.world.title}</h2>
            <p>{t.world.text}</p>
          </div>
          <div className="research-panel enter">
            <div className="research-icon"><Award size={26} /></div>
            <p>{t.world.educationLabel}</p>
            <h3>{t.world.educationTitle}</h3>
            <span>{t.world.educationSchool}</span>
            <div className="secondary-education">
              <strong>{t.world.secondaryEducationTitle}</strong>
              <span>{t.world.secondaryEducationSchool}</span>
            </div>
            <div className="research-divider" />
            <p>{t.world.researchLabel}</p>
            <h4>{t.world.researchTitle}</h4>
            <span>{t.world.researchText}</span>
            <a className="research-link" href={THESIS_URL} target="_blank" rel="noreferrer">
              {t.world.researchCta}<ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="language-panel enter">
            <div className="language-panel-title"><Languages size={21} />{t.world.languagesLabel}</div>
            <div>{t.world.languages.map((language) => <span key={language}>{language}</span>)}</div>
          </div>
        </section>

        <section className="proof" id="credentials">
          <div className="proof-head enter">
            <div className="section-code">{t.credentials.index}</div>
            <h2>{t.credentials.title}<br /><span>{t.credentials.titleAccent}</span></h2>
            <p>{t.credentials.text}</p>
          </div>
          <div className="proof-body">
            <div className="recommendations enter">
              <div className="recommendations-label">
                <span>{t.credentials.recommendationLabel}</span>
                <span className="recommendations-available">{t.credentials.recommendationAvailable}</span>
              </div>
              <div className="recommendations-grid">
                {t.credentials.recommendations.map((recommendation) => (
                  <article key={recommendation.author}>
                    <span aria-hidden="true">“</span>
                    <p>{recommendation.text}</p>
                    <strong>{recommendation.author}</strong>
                    <small>{recommendation.role}</small>
                  </article>
                ))}
              </div>
              <a
                className="document-request document-request--recommendations"
                href={createDocumentRequestLink(
                  t.credentials.requestRecommendationsSubject,
                  t.credentials.requestRecommendationsBody,
                )}
              >
                <Mail size={16} aria-hidden="true" />
                {t.credentials.requestRecommendationsCta}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <a className="cv-download enter" href={CV_DOCUMENTS[lang]} download>
              <div>
                <span>{t.credentials.cvLabel}</span>
                <h3>{t.credentials.cvTitle}</h3>
                <p>{t.credentials.cvText}</p>
              </div>
              <strong>{t.credentials.cvCta}<Download size={20} aria-hidden="true" /></strong>
            </a>

            <div className="proof-list enter">
              {DOCUMENTS.map((document) => {
                const documentName = document[lang];
                const requestBody = t.credentials.requestDocumentBody.replace("{document}", documentName);

                return (
                  <article className="proof-item" key={document.sl}>
                    <FileCheck2 size={21} strokeWidth={1.6} aria-hidden="true" />
                    <strong>{documentName}</strong>
                    <small>{document.type[lang]}</small>
                    <span className="proof-available">{t.credentials.available}</span>
                    <a
                      className="document-request"
                      href={createDocumentRequestLink(
                        `${t.credentials.requestDocumentSubject} – ${documentName}`,
                        requestBody,
                      )}
                      aria-label={`${t.credentials.requestCta}: ${documentName}`}
                    >
                      <Mail size={15} aria-hidden="true" />
                      {t.credentials.requestCta}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
            <p className="proof-privacy enter">
              <ShieldCheck size={18} strokeWidth={1.7} aria-hidden="true" />
              {t.credentials.privacy}
            </p>
          </div>
        </section>

        <section className="final-contact" id="contact">
          <div className="final-orbit" aria-hidden="true" />
          <div className="section-code section-code--light enter">{t.contact.index}</div>
          <h2 className="enter">
            <span>{t.contact.lineOne}</span>
            <span>{t.contact.lineTwo}</span>
            <em>{t.contact.lineThree}</em>
          </h2>
          <p className="final-text enter">{t.contact.text}</p>
          <div className="final-actions enter">
            <a href={`mailto:${CONTACT.email}`} className="final-email">
              <Mail size={22} />{t.contact.email}<ArrowUpRight size={22} />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="final-linkedin">
              <Linkedin size={19} />{t.contact.linkedin}
            </a>
          </div>
          <div className="final-status enter"><i />{t.contact.available}</div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="nav-brand nav-brand--footer"><span>R/K</span><small>RENATO<br />KOŠTOMAJ</small></div>
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} · {t.footer}</p>
          <small>{t.disclaimer}</small>
        </div>
        <a href="#home">{t.backToTop}<ArrowUpRight size={15} /></a>
      </footer>
    </div>
  );
}
