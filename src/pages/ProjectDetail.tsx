import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { SiGithub } from 'react-icons/si'
import { ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { getProjectBySlug, categoryMeta } from '../data/projects'

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0  },
}

export const ProjectDetail = () => {
  const { slug }   = useParams<{ slug: string }>()
  const navigate   = useNavigate()
  const project    = slug ? getProjectBySlug(slug) : undefined

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-24">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/#projects" className="btn-gradient px-6 py-3 rounded-xl">
          ← Back to Projects
        </Link>
      </div>
    )
  }

  const meta = categoryMeta[project.category]

  return (
    <main className="pt-20 pb-24">
      {/* Hero banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-72 md:h-96 flex items-end overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
        }}
      >
        {/* Large monogram watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none">
          <span className="text-[20rem] font-black text-white leading-none">
            {project.title.split(' ').map(w => w[0]).join('').slice(0, 2)}
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 mb-4 text-sm"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <span className={`cat-badge border ${meta.bg} ${meta.color} mb-3 inline-block`}>
            {meta.label}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 space-y-12">

        {/* Meta row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-6 text-sm text-text-muted border-b border-white/10 pb-8"
        >
          <div>
            <p className="text-xs uppercase tracking-widest mb-1 text-white/40">Year</p>
            <p className="text-white font-medium">{project.year}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-1 text-white/40">Category</p>
            <p className={`font-medium ${meta.color}`}>{meta.label}</p>
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest mb-2 text-white/40">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="tech-tag text-sm px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-4"
          >
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5
                           text-white hover:bg-white/10 transition-all duration-200 font-medium"
              >
                <SiGithub size={18} /> View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white
                           transition-all duration-200 hover:opacity-90"
                style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }}
              >
                <ExternalLink size={18} /> View Live Site
              </a>
            )}
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-text-muted text-lg leading-relaxed">{project.description}</p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="text-2xl font-bold mb-6">Key Highlights</h2>
          <ul className="space-y-4">
            {project.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-3 text-text-muted text-base leading-relaxed"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 mt-0.5"
                  style={{ color: project.gradientFrom }}
                />
                {h}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Back to projects */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={16} /> Back to all projects
          </Link>
        </motion.div>

      </div>
    </main>
  )
}
