export type ProjectCategory =
  | 'fullstack'
  | 'professional'
  | 'mobile'
  | 'hci'
  | 'academic'
  | 'freelance'

export interface Project {
  slug: string
  title: string
  shortDescription: string
  description: string
  category: ProjectCategory
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  year: string
  featured: boolean
  highlights: string[]
  gradientFrom: string
  gradientTo: string
}

export const categoryMeta: Record<
  ProjectCategory,
  { label: string; color: string; bg: string }
> = {
  fullstack:    { label: 'Full Stack',   color: 'text-pink-400',   bg: 'bg-pink-400/10 border-pink-400/30' },
  professional: { label: 'Professional', color: 'text-blue-400',   bg: 'bg-blue-400/10 border-blue-400/30' },
  mobile:       { label: 'Mobile',       color: 'text-cyan-400',   bg: 'bg-cyan-400/10 border-cyan-400/30' },
  hci:          { label: 'HCI',          color: 'text-violet-400', bg: 'bg-violet-400/10 border-violet-400/30' },
  academic:     { label: 'Academic',     color: 'text-emerald-400',bg: 'bg-emerald-400/10 border-emerald-400/30' },
  freelance:    { label: 'Freelance',    color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/30' },
}

export const projects: Project[] = [
  // ─── Professional ────────────────────────────────────────────────────────────
  {
    slug: 'csi-dryeye-frontend',
    title: 'CSI DryEye — Clinical Platform',
    shortDescription: 'Multi-region HIPAA-compliant Dry Eye Disease analysis platform, built from scratch to production.',
    description:
      'Full Stack Developer on a multi-region, HIPAA-compliant SaaS platform built for ophthalmologists to diagnose and manage Dry Eye Disease — developed from scratch to production using Angular, JavaScript, and AWS. Led a team of 6 through the ASCRS PreOperative Assessment Project, which was showcased at the 2023 American Society of Cataract and Refractive Surgery (ASCRS) Conference and generated 15+ business inquiries about project integration and acquisition.',
    category: 'professional',
    tech: ['Angular', 'JavaScript', 'TypeScript', 'AWS', 'AWS Amplify', 'AWS Cognito', 'DynamoDB', 'S3', 'HIPAA'],
    year: 'Sept 2021–Present',
    featured: true,
    highlights: [
      'Built the multi-region HIPAA-compliant platform from scratch to production',
      'Led a team of 6 through the ASCRS PreOperative Assessment Project',
      'Showcased at the 2023 ASCRS Conference — 15+ business inquiries generated',
      'Advanced the OSD Algorithm efficiency by 75% with the ASCRS PreOperative Assessment Method',
      'Optimized diagnosis speed by 80%, allowing patients to obtain treatment significantly earlier',
      'Implemented multi-region AWS architecture with Amplify, Cognito, IAM, DynamoDB, and S3',
    ],
    gradientFrom: '#0f3460',
    gradientTo: '#533483',
  },

  // ─── Full Stack ───────────────────────────────────────────────────────────────
  {
    slug: 'react-ecommerce-store',
    title: 'React Keyboard Store',
    shortDescription: 'Team-built e-commerce store for keyboard enthusiasts with MongoDB backend.',
    description:
      'Collaborated with a team of 6 to build an e-commerce keyboard store using React, offering a diverse range of keyboard products for enthusiasts and professionals. Designed the products page through Figma and coded it with a static template holding 8+ products for effective loading speeds. Connected the front-end to MongoDB to dynamically load products from the database.',
    category: 'fullstack',
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'MongoDB', 'Figma'],
    githubUrl: 'https://github.com/AliSAkbari/React-Ecommerce-Store',
    year: '2024',
    featured: true,
    highlights: [
      'Designed the products page in Figma before implementing',
      'Static product template supporting 8+ keyboard SKUs with fast load times',
      'MongoDB integration to dynamically load products from the database',
      'Team of 6, using Git for collaborative version control',
      'Responsive layout across desktop and mobile',
    ],
    gradientFrom: '#AA367C',
    gradientTo: '#4A2FBD',
  },
  {
    slug: 'grocery-store-database',
    title: 'Grocery Store Application',
    shortDescription: 'Full-stack grocery store with MySQL, PHP REST API & HTML/CSS frontend.',
    description:
      'A multi-user grocery store management system built end-to-end. The database layer uses MySQL to model users, products, and orders. A custom PHP REST API exposes CRUD endpoints consumed by a vanilla HTML/CSS frontend. Supports distinct roles for customers, staff, and administrators.',
    category: 'fullstack',
    tech: ['MySQL', 'PHP', 'HTML', 'CSS', 'REST API'],
    githubUrl: 'https://github.com/AliSAkbari/GroceryStore-Database',
    year: '2022',
    featured: true,
    highlights: [
      'Relational MySQL schema with normalized tables',
      'PHP REST API with full CRUD operations',
      'Multi-role user system (customer, staff, admin)',
      'Frontend built with semantic HTML and CSS',
    ],
    gradientFrom: '#134E5E',
    gradientTo: '#71B280',
  },
  {
    slug: 'seng-513',
    title: 'Web-Based Systems',
    shortDescription: 'Advanced web systems project covering modern full-stack development.',
    description:
      'Course project for SENG 513 — Web-Based Systems at the University of Calgary. Covers advanced topics in web architecture including RESTful services, client-server communication, state management, and deployment of web-based applications.',
    category: 'fullstack',
    tech: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    githubUrl: 'https://github.com/AliSAkbari/SENG-513',
    year: '2022',
    featured: false,
    highlights: [
      'RESTful API design and implementation',
      'Client-server architecture',
      'Modern JavaScript patterns',
    ],
    gradientFrom: '#1a1a2e',
    gradientTo: '#4A2FBD',
  },

  // ─── Mobile ───────────────────────────────────────────────────────────────────
  {
    slug: 'android-grocery-app',
    title: 'Android Grocery App',
    shortDescription: 'Android app connected to a live MySQL backend via XAMPP.',
    description:
      'A native Android application that connects to a MySQL database server through XAMPP/phpMyAdmin. Built for CPSC 471 (Database Management), the app demonstrates real-world integration of mobile clients with relational databases, including live data sync and CRUD operations.',
    category: 'mobile',
    tech: ['Java', 'Android', 'MySQL', 'PHP', 'XAMPP'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC471Group16Project',
    year: '2022',
    featured: false,
    highlights: [
      'Native Android UI with Material Design components',
      'Live MySQL connectivity via PHP backend',
      'Product browsing, cart, and order management',
      'Group project with Agile workflow on GitHub',
    ],
    gradientFrom: '#141e30',
    gradientTo: '#243b55',
  },

  // ─── HCI ──────────────────────────────────────────────────────────────────────
  {
    slug: 'hci-interactive-button',
    title: 'Interactive Button Interface',
    shortDescription: 'Button-centric interactive application with sketches and design docs.',
    description:
      'CPSC 581 Project 1 — an HCI application where the central interaction is a button. Includes ideation sketches, iterative design documentation, and a JavaScript implementation exploring how varied button interactions can trigger rich, layered responses.',
    category: 'hci',
    tech: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC-581-Project-1',
    year: '2022',
    featured: false,
    highlights: [
      'Ideation sketches and design documentation',
      'Button-centric interaction design patterns',
      'Layered responses to user input',
    ],
    gradientFrom: '#0d324d',
    gradientTo: '#7f5a83',
  },
  {
    slug: 'mobile-touch-interface',
    title: 'Mobile Touch & Sensor Interface',
    shortDescription: 'Animated touch and sensor-based mobile interface built in C#.',
    description:
      'CPSC 581 Project 2 — an animated mobile interface leveraging touch gestures and device sensors. Built in C# (Unity), the project explores creative interaction paradigms on mobile devices, including gyroscope-based navigation and multi-touch gestures.',
    category: 'hci',
    tech: ['C#', 'Unity', 'Mobile'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC-581-Project-2',
    year: '2022',
    featured: false,
    highlights: [
      'Touch gesture recognition and response',
      'Gyroscope and accelerometer integration',
      'Smooth animation system',
    ],
    gradientFrom: '#0d324d',
    gradientTo: '#7f5a83',
  },
  {
    slug: 'communication-interface',
    title: 'Augmented Communication Interface',
    shortDescription: 'Interface for enhancing in-person and remote communication.',
    description:
      'CPSC 581 Project 3 — an interface designed to augment both in-person and remote communication scenarios. Built with HTML/CSS/JavaScript, the project explores how digital overlays and shared visual contexts can improve collaboration quality.',
    category: 'hci',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC-581-Project-3',
    year: '2022',
    featured: false,
    highlights: [
      'Dual-mode interface (in-person and remote)',
      'Shared visual context for collaboration',
      'Accessibility considerations',
    ],
    gradientFrom: '#0d324d',
    gradientTo: '#7f5a83',
  },
  {
    slug: 'arduino-prototype',
    title: 'Arduino Physical Prototype',
    shortDescription: 'Physical computing prototype solving an everyday problem.',
    description:
      'CPSC 581 Project 4 — a physical prototype built with Arduino hardware. The project applies HCI design principles to the physical world, creating a tangible interface that solves a real everyday problem through sensor input and actuator feedback.',
    category: 'hci',
    tech: ['Arduino', 'C++', 'Electronics'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC-581-Project-4',
    year: '2022',
    featured: false,
    highlights: [
      'Physical sensor input and actuator feedback',
      'Iterative hardware prototyping',
      'HCI design principles applied to tangible interfaces',
    ],
    gradientFrom: '#0d324d',
    gradientTo: '#7f5a83',
  },
  {
    slug: 'hci-project-portfolio',
    title: 'HCI Project Portfolio',
    shortDescription: 'Compiled design portfolio for CPSC 481 Human-Computer Interaction.',
    description:
      'A design portfolio documenting the full HCI process for the CPSC 481 course at the University of Calgary — from initial user research and task analysis through wireframing, prototyping, and usability evaluation.',
    category: 'hci',
    tech: ['Design', 'Prototyping', 'Figma', 'User Research'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC481_Project_Portfolio',
    year: '2022',
    featured: false,
    highlights: [
      'User research and contextual inquiry',
      'Task analysis and personas',
      'Low and high fidelity prototyping',
      'Usability evaluation and heuristic analysis',
    ],
    gradientFrom: '#0d324d',
    gradientTo: '#7f5a83',
  },
  {
    slug: 'hci-team-project',
    title: 'HCI Team Application',
    shortDescription: 'Collaborative HCI course project (CPSC 481) built as a team.',
    description:
      'Team-based project for CPSC 481 at the University of Calgary. The full design and development lifecycle was followed: research, design, prototype, and evaluate. The project demonstrates collaborative software development with shared design ownership.',
    category: 'hci',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC481_Project_TeamI',
    year: '2022',
    featured: false,
    highlights: [
      'Full design lifecycle from research to evaluation',
      'Collaborative team development',
      'Iterative usability testing',
    ],
    gradientFrom: '#0d324d',
    gradientTo: '#7f5a83',
  },

  // ─── Academic ─────────────────────────────────────────────────────────────────
  {
    slug: 'data-structures-algorithms',
    title: 'Data Structures & Algorithms',
    shortDescription: 'Implementations of core data structures and algorithm analysis in Java.',
    description:
      'CPSC 331 — Data Structures, Algorithms, and Their Analysis. Covers fundamental data structures (linked lists, trees, heaps, hash tables) and classic algorithms (sorting, searching, graph traversal) with formal analysis of time and space complexity.',
    category: 'academic',
    tech: ['Java', 'Algorithms'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC-331',
    year: '2021',
    featured: false,
    highlights: [
      'Linked lists, stacks, queues, trees, and heaps',
      'Sorting algorithms: quicksort, mergesort, heapsort',
      'Graph traversal: BFS and DFS',
      'Big-O complexity analysis',
    ],
    gradientFrom: '#134E5E',
    gradientTo: '#1a472a',
  },
  {
    slug: 'programming-paradigms',
    title: 'Programming Paradigms',
    shortDescription: 'Functional programming and language paradigms explored in Haskell.',
    description:
      'CPSC 449 — Programming Paradigms. Explores functional, logic, and object-oriented paradigms. The primary language is Haskell, covering pure functions, lazy evaluation, monads, type classes, and higher-order functions.',
    category: 'academic',
    tech: ['Haskell', 'Functional Programming'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC-449',
    year: '2022',
    featured: false,
    highlights: [
      'Pure functions and immutability',
      'Higher-order functions and function composition',
      'Monads and type classes',
      'Lazy evaluation',
    ],
    gradientFrom: '#134E5E',
    gradientTo: '#1a472a',
  },
  {
    slug: 'computing-machinery',
    title: 'Computing Machinery I',
    shortDescription: 'Low-level assembly language programming and computer architecture.',
    description:
      'CPSC 355 — Computing Machinery I. Covers machine-level representation of data, assembly language programming, processor architecture, the memory hierarchy, and how high-level code maps to machine instructions.',
    category: 'academic',
    tech: ['Assembly', 'ARMv8', 'Computer Architecture'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC-355',
    year: '2021',
    featured: false,
    highlights: [
      'ARMv8 assembly language programming',
      'Memory addressing modes',
      'Procedure call conventions',
      'Bitwise and arithmetic operations',
    ],
    gradientFrom: '#134E5E',
    gradientTo: '#1a472a',
  },
  {
    slug: 'intro-computer-science',
    title: 'Intro to Computer Science',
    shortDescription: 'Foundations of programming and computational thinking in Python.',
    description:
      'CPSC 231 — Introduction to Computer Science for CS Majors. Covers Python fundamentals, problem decomposition, control flow, recursion, and an introduction to object-oriented programming.',
    category: 'academic',
    tech: ['Python'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC-231',
    year: '2020',
    featured: false,
    highlights: [
      'Python fundamentals and control flow',
      'Recursion and problem decomposition',
      'Introduction to OOP',
    ],
    gradientFrom: '#134E5E',
    gradientTo: '#1a472a',
  },
  {
    slug: 'computability-theory',
    title: 'Introduction to Computability',
    shortDescription: 'Formal languages, automata, and the theory of computation.',
    description:
      'CPSC 313 — Introduction to Computability. Covers formal languages, finite automata, regular expressions, context-free grammars, Turing machines, decidability, and computational complexity.',
    category: 'academic',
    tech: ['Theory', 'Automata', 'Formal Languages'],
    githubUrl: 'https://github.com/AliSAkbari/CPSC-313',
    year: '2021',
    featured: false,
    highlights: [
      'Finite automata and regular languages',
      'Context-free grammars and pushdown automata',
      'Turing machines and decidability',
      'Complexity classes P and NP',
    ],
    gradientFrom: '#134E5E',
    gradientTo: '#1a472a',
  },

  // ─── Freelance ────────────────────────────────────────────────────────────────
  {
    slug: 'wanderer-luggage',
    title: 'Wanderer Luggage',
    shortDescription: 'E-commerce site for a Canadian carry-on luggage brand — delivered in under 2 months.',
    description:
      'Designed and developed the e-commerce website for Wanderer Luggage, a Canadian luggage brand specializing in carry-on bags, as part of Atiso Studio freelance work. Delivered the full site in under 2 months with a modern minimalist aesthetic, video hero sections, and a smooth mobile-optimized shopping experience.',
    category: 'freelance',
    tech: ['Wix', 'E-Commerce', 'UX Design'],
    liveUrl: 'https://www.wandererluggage.ca/',
    year: '2023',
    featured: true,
    highlights: [
      'Delivered full e-commerce site in under 2 months',
      'Modern minimalist design with video hero sections',
      'Mobile-first responsive layout',
      'Optimized product showcase and checkout flow',
    ],
    gradientFrom: '#c94b4b',
    gradientTo: '#4b134f',
  },
  {
    slug: 'woodcraft-kc',
    title: 'Woodcraft Kitchen Cabinets',
    shortDescription: 'WordPress site for a Calgary custom cabinet manufacturer.',
    description:
      'Built the professional website for Woodcraft KC, a Calgary-based custom cabinet company with 75+ years of combined expertise. Developed on WordPress with Elementor, featuring a gallery-heavy design showcasing kitchen and bathroom installations, product category pages, and consultation booking.',
    category: 'freelance',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    liveUrl: 'https://woodcraftkc.com/',
    year: '2023',
    featured: true,
    highlights: [
      'Gallery-driven design for finished kitchen projects',
      'Product category pages for MDF, TFL, Thermofoil, and wood doors',
      'Contact and consultation booking integration',
      'SEO optimization for local Calgary searches',
    ],
    gradientFrom: '#c94b4b',
    gradientTo: '#4b134f',
  },
  {
    slug: 'rias-boutique',
    title: "Ria's Boutique",
    shortDescription: 'E-commerce boutique for Afghan bridal and traditional clothing.',
    description:
      "Developed the e-commerce platform for Ria's Boutique, an Alberta-based store specializing in handcrafted Afghan dresses, bridal wear, and traditional clothing. The store serves the Calgary region and broader Canadian market with a curated collection of women's, men's, and jewelry categories.",
    category: 'freelance',
    tech: ['E-Commerce', 'Web Design', 'UX'],
    liveUrl: 'https://www.riasboutique.com/',
    year: '2023',
    featured: true,
    highlights: [
      'Multi-category product catalog (women, men, jewelry)',
      'Bridal collection showcase',
      'Canadian market and CAD currency support',
      'Schema.org structured data for SEO',
    ],
    gradientFrom: '#c94b4b',
    gradientTo: '#4b134f',
  },
  {
    slug: 'anchor-professional-services',
    title: 'Anchor Professional Services',
    shortDescription: 'WordPress → Squarespace migration that boosted site speed and traffic by 15%.',
    description:
      'Developed and upgraded the Anchor Professional Services website from WordPress to Squarespace in 4 months as part of Atiso Studio freelance work. The migration increased website speed and traffic by 15% and enabled the team to shift from an outsourced marketing agency to in-house content management — allowing immediate content updates without agency dependency.',
    category: 'freelance',
    tech: ['Squarespace', 'WordPress', 'Web Design', 'SEO'],
    year: '2023',
    featured: false,
    highlights: [
      'Full WordPress to Squarespace migration completed in 4 months',
      '15% increase in website speed and traffic post-migration',
      'Enabled in-house content management, eliminating outsourced agency costs',
      'Clean, professional design aligned with the brand identity',
    ],
    gradientFrom: '#c94b4b',
    gradientTo: '#4b134f',
  },
  {
    slug: 'protrade-plus',
    title: 'ProTrade+',
    shortDescription: 'Stock trading startup website with advanced design features — 10% monthly visitor growth.',
    description:
      'Created and optimized the website for ProTrade+, a stock trading startup, implementing advanced design features that resulted in a consistent 10% increase in visitors each month. Built as part of Atiso Studio freelance work, the site required a polished, trust-building aesthetic suitable for a fintech brand.',
    category: 'freelance',
    tech: ['Webflow', 'Web Design', 'UX', 'Fintech'],
    year: '2023',
    featured: false,
    highlights: [
      '10% month-over-month visitor growth after launch',
      'Advanced design features for a fintech/trading brand',
      'Trust-building UI appropriate for financial services',
      'Performance-optimized for fast load times',
    ],
    gradientFrom: '#c94b4b',
    gradientTo: '#4b134f',
  },
  {
    slug: 'shovel-city',
    title: 'Shovel City',
    shortDescription: 'Canadian-themed 2D snow-shoveling game built at Calgary Hacks 2021.',
    description:
      'Collaborated with a team of 5 at Calgary Hacks 2021 to develop a Canadian-themed game using Java and JavaFX. Players shovel and clear snow from driveways in a fun, 8-bit pixel art style. Personally conceptualized and crafted 7 original 8-bit sprites using Aseprite for characters, icons, and the overall visual design. Also coded the backend for game states and player states.',
    category: 'fullstack',
    tech: ['Java', 'JavaFX', 'Aseprite', 'Game Dev'],
    year: '2021',
    featured: false,
    highlights: [
      'Built at Calgary Hacks 2021 with a team of 5',
      'Designed and created 7 original 8-bit sprites in Aseprite',
      'Coded game state and player state management backend',
      'Canadian-themed pixel art style with snow-shoveling gameplay',
    ],
    gradientFrom: '#1a6b8a',
    gradientTo: '#0d3b53',
  },
]

export const featuredProjects = projects.filter(p => p.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
