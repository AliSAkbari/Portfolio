import { motion } from 'framer-motion'
import {
  SiReact, SiTypescript,
  SiAngular, SiNodedotjs, SiJavascript, SiPython,
  SiDotnet, SiCplusplus, SiPhp, SiHtml5, SiCss, SiTailwindcss,
  SiPostgresql, SiMongodb, SiMysql, SiGraphql,
  SiDocker, SiGit, SiStripe, SiFirebase,
  SiWordpress, SiWebflow, SiSquarespace, SiAndroid,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'
import { primarySkills, secondarySkills, type Skill } from '../data/skills'
import colorSharp from '../assets/img/color-sharp.png'

type IconComponent = React.ComponentType<{ size?: number; className?: string }>

const iconMap: Record<string, IconComponent> = {
  SiReact, SiTypescript,
  SiAngular, SiNodedotjs, SiJavascript, SiPython,
  SiDotnet, SiCplusplus, SiPhp, SiHtml5, SiCss, SiTailwindcss,
  SiPostgresql, SiMongodb, SiMysql, SiGraphql,
  SiDocker, SiGit, SiStripe, SiFirebase,
  SiWordpress, SiWebflow, SiSquarespace, SiAndroid,
  FaJava, FaAws,
}

const SkillIcon = ({ skill, size = 20 }: { skill: Skill; size?: number }) => {
  const Icon = iconMap[skill.icon]
  if (!Icon) return <span className="text-xs opacity-40">?</span>
  return <Icon size={size} />
}

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0  },
}

const primaryGradients = [
  'from-[#61dafb] to-[#2080d0]',  // React — blue
  'from-[#3178c6] to-[#235a9a]',  // TypeScript — blue
  'from-[#FF9900] to-[#c47700]',  // AWS — orange
]

export const Skills = () => {
  return (
    <section id="skills" className="pb-24 relative overflow-hidden">
      {/* Decorative left bleed */}
      <img
        src={colorSharp}
        alt=""
        className="absolute left-0 top-1/4 w-1/3 opacity-60 -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-dark-card rounded-[40px] px-8 py-16 md:px-16 -mt-16 relative z-10 border border-white/5">

          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto mt-3">
              My core stack is React, TypeScript, and AWS — paired with Angular for production
              healthcare software and a broad set of complementary technologies.
            </p>
          </motion.div>

          {/* Primary featured skills */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12"
          >
            {primarySkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="relative rounded-2xl p-6 border border-white/10 bg-white/5
                           flex flex-col items-center gap-3 overflow-hidden group cursor-default"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity
                               duration-300 bg-gradient-to-br ${primaryGradients[i]}`}
                />
                <div className={`bg-gradient-to-br ${primaryGradients[i]} bg-clip-text text-transparent`}>
                  <SkillIcon skill={skill} size={40} />
                </div>
                <p className="font-semibold text-white text-lg relative z-10">{skill.name}</p>
                <p className="text-xs text-text-muted relative z-10">{skill.category}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="border-t border-white/10 mb-10" />

          {/* Secondary skills grid */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {secondarySkills.map(skill => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                transition={{ duration: 0.35 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="skill-badge flex items-center gap-2"
              >
                <SkillIcon skill={skill} size={15} />
                {skill.name}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
