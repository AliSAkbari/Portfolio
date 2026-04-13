import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SiGithub } from 'react-icons/si'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { type Project, categoryMeta } from '../data/projects'

interface Props {
  project: Project
}

export const ProjectCard = ({ project }: Props) => {
  const meta = categoryMeta[project.category]

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-dark-card h-full"
    >
      {/* Image / gradient thumbnail */}
      <div className="proj-imgbx h-48 flex-shrink-0" style={{
        background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
      }}>
        {/* Project initial monogram */}
        <div className="w-full h-full flex items-center justify-center opacity-20">
          <span className="text-6xl font-black text-white tracking-tighter select-none">
            {project.title.split(' ').map(w => w[0]).join('').slice(0, 3)}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="proj-overlay">
          <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
          <p className="text-white/80 text-sm italic mb-4">{project.shortDescription}</p>
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 text-white font-semibold text-sm border border-white/60 px-4 py-2 rounded-full hover:bg-white hover:text-dark-bg transition-all duration-200"
          >
            View Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Category + year */}
        <div className="flex items-center justify-between">
          <span className={`cat-badge text-xs border ${meta.bg} ${meta.color}`}>
            {meta.label}
          </span>
          <span className="text-xs text-text-muted">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-white leading-snug group-hover:gradient-text transition-all duration-200">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="text-text-muted text-sm leading-relaxed flex-1">
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-tag">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-1 border-t border-white/5">
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-sm text-brand-pink hover:text-white transition-colors duration-200 font-medium"
          >
            Case Study <ArrowRight size={13} />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-text-muted hover:text-white transition-colors duration-200"
            >
              <SiGithub size={14} /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-text-muted hover:text-white transition-colors duration-200"
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
