export interface Skill {
  name: string
  icon: string
  iconLib: 'si' | 'fa'
  level: 'primary' | 'secondary'
  category: string
}

// Top 3 highlighted skills (shown as large featured cards)
export const primarySkills: Skill[] = [
  { name: 'React',       icon: 'SiReact',      iconLib: 'si', level: 'primary', category: 'Frontend' },
  { name: 'TypeScript',  icon: 'SiTypescript', iconLib: 'si', level: 'primary', category: 'Language'  },
  { name: 'AWS',         icon: 'FaAws',        iconLib: 'fa', level: 'primary', category: 'Cloud'     },
]

// All other skills (shown as badge grid)
export const secondarySkills: Skill[] = [
  // Frameworks & Runtimes
  { name: 'Angular',     icon: 'SiAngular',     iconLib: 'si', level: 'secondary', category: 'Framework' },
  { name: 'Node.js',     icon: 'SiNodedotjs',   iconLib: 'si', level: 'secondary', category: 'Runtime'   },
  // Languages
  { name: 'JavaScript',  icon: 'SiJavascript',  iconLib: 'si', level: 'secondary', category: 'Language'  },
  { name: 'Python',      icon: 'SiPython',      iconLib: 'si', level: 'secondary', category: 'Language'  },
  { name: 'Java',        icon: 'FaJava',        iconLib: 'fa', level: 'secondary', category: 'Language'  },
  { name: 'C#',          icon: 'SiDotnet',      iconLib: 'si', level: 'secondary', category: 'Language'  },
  { name: 'C++',         icon: 'SiCplusplus',   iconLib: 'si', level: 'secondary', category: 'Language'  },
  { name: 'PHP',         icon: 'SiPhp',         iconLib: 'si', level: 'secondary', category: 'Language'  },
  // Frontend
  { name: 'HTML5',       icon: 'SiHtml5',       iconLib: 'si', level: 'secondary', category: 'Frontend'  },
  { name: 'CSS3',        icon: 'SiCss',        iconLib: 'si', level: 'secondary', category: 'Frontend'  },
  { name: 'Tailwind',    icon: 'SiTailwindcss', iconLib: 'si', level: 'secondary', category: 'Frontend'  },
  // Databases
  { name: 'PostgreSQL',  icon: 'SiPostgresql',  iconLib: 'si', level: 'secondary', category: 'Database'  },
  { name: 'MongoDB',     icon: 'SiMongodb',     iconLib: 'si', level: 'secondary', category: 'Database'  },
  { name: 'MySQL',       icon: 'SiMysql',       iconLib: 'si', level: 'secondary', category: 'Database'  },
  { name: 'GraphQL',     icon: 'SiGraphql',     iconLib: 'si', level: 'secondary', category: 'Database'  },
  // AWS Services (text-only badges for service-specific icons)
  { name: 'DynamoDB',    icon: 'FaAws',         iconLib: 'fa', level: 'secondary', category: 'AWS'       },
  { name: 'Amplify',     icon: 'FaAws',         iconLib: 'fa', level: 'secondary', category: 'AWS'       },
  // Tools & Platforms
  { name: 'Docker',      icon: 'SiDocker',      iconLib: 'si', level: 'secondary', category: 'DevOps'    },
  { name: 'Git',         icon: 'SiGit',         iconLib: 'si', level: 'secondary', category: 'Tools'     },
  { name: 'Stripe',      icon: 'SiStripe',      iconLib: 'si', level: 'secondary', category: 'Tools'     },
  { name: 'Firebase',    icon: 'SiFirebase',    iconLib: 'si', level: 'secondary', category: 'Cloud'     },
  // CMS & Website Builders
  { name: 'WordPress',   icon: 'SiWordpress',   iconLib: 'si', level: 'secondary', category: 'CMS'       },
  { name: 'Webflow',     icon: 'SiWebflow',     iconLib: 'si', level: 'secondary', category: 'CMS'       },
  { name: 'Squarespace', icon: 'SiSquarespace', iconLib: 'si', level: 'secondary', category: 'CMS'       },
  // Mobile
  { name: 'Android',     icon: 'SiAndroid',     iconLib: 'si', level: 'secondary', category: 'Mobile'    },
]
