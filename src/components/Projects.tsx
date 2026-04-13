import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from './ProjectCard'
import { projects, type ProjectCategory } from '../data/projects'
import colorSharp2 from '../assets/img/color-sharp2.png'

type FilterKey = 'all' | ProjectCategory

const filters: { key: FilterKey; label: string; count: number }[] = [
  { key: 'all',          label: 'All',           count: projects.length },
  { key: 'professional', label: 'Professional',  count: projects.filter(p => p.category === 'professional').length },
  { key: 'fullstack',    label: 'Full Stack',    count: projects.filter(p => p.category === 'fullstack').length },
  { key: 'hci',          label: 'HCI',           count: projects.filter(p => p.category === 'hci').length },
  { key: 'freelance',    label: 'Freelance',     count: projects.filter(p => p.category === 'freelance').length },
  { key: 'mobile',       label: 'Mobile',        count: projects.filter(p => p.category === 'mobile').length },
  { key: 'academic',     label: 'Academic',      count: projects.filter(p => p.category === 'academic').length },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0  },
}

export const Projects = () => {
  const [active, setActive] = useState<FilterKey>('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Background accent */}
      <img
        src={colorSharp2}
        alt=""
        className="absolute right-0 top-1/4 w-1/3 opacity-50 -z-0 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-heading">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mt-3">
            From production healthcare software and full-stack web apps to mobile interfaces,
            HCI research, and freelance client sites — click any project for the full story.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === f.key
                  ? 'text-white border-brand-pink/80'
                  : 'text-text-muted border-white/10 bg-white/5 hover:border-white/30 hover:text-white'
              }`}
              style={active === f.key ? {
                background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
              } : undefined}
            >
              {f.label}
              <span className={`ml-1.5 text-xs ${active === f.key ? 'opacity-80' : 'opacity-50'}`}>
                ({f.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/AliSAkbari"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors duration-200"
          >
            See more on GitHub <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
