import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { MapPin, Briefcase, GraduationCap, ArrowRight } from 'lucide-react'

const stats = [
  { value: '3+',  label: 'Years at CSI'         },
  { value: '20+', label: 'Projects Completed'   },
  { value: '75%', label: 'Algorithm Efficiency' },
  { value: '15+', label: 'ASCRS Inquiries'      },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0  },
}

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #AA367C, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — profile image placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Gradient ring */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-70 blur-sm"
                style={{ background: 'linear-gradient(135deg, #AA367C, #4A2FBD)' }}
              />
              {/*
                ── REPLACE THIS with your actual headshot ──
                <img src={headshot} alt="Ali Akbari" className="relative w-72 h-72 object-cover rounded-2xl" />
              */}
              <div className="relative w-72 h-80 rounded-2xl bg-dark-card flex flex-col items-center justify-center gap-3 text-text-muted border border-white/10">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold"
                  style={{ background: 'linear-gradient(135deg, #AA367C, #4A2FBD)' }}
                >
                  AA
                </div>
                <p className="text-sm italic opacity-60">[ headshot coming soon ]</p>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-5 bg-dark-card border border-white/10 rounded-xl px-4 py-2 shadow-xl"
              >
                <p className="text-xs text-text-muted">Currently at</p>
                <p className="text-sm font-bold gradient-text">CSI Innovations</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="section-heading mb-2">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-brand-pink text-sm font-semibold tracking-widest uppercase mb-6">
              Full Stack Developer · Dean's List · University of Calgary
            </p>

            <p className="text-text-muted text-lg leading-relaxed mb-4">
              I'm a Full Stack Developer based in{' '}
              <span className="text-white">Calgary, Alberta</span>. At{' '}
              <span className="text-white">CSI Innovations</span>, I built a multi-region,
              HIPAA-compliant SaaS platform for Dry Eye Disease analysis and management from
              scratch to production. I led a team of 6 on the ASCRS PreOperative Assessment
              Project — showcased at the{' '}
              <span className="text-white">2023 ASCRS Conference</span> where it generated
              15+ business inquiries. The algorithm improvements I drove resulted in{' '}
              <span className="text-white">75% efficiency gains</span> and{' '}
              <span className="text-white">80% faster OSD diagnosis</span>.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              My core stack spans <span className="text-white">Angular</span>,{' '}
              <span className="text-white">React</span>,{' '}
              <span className="text-white">TypeScript</span>, and{' '}
              <span className="text-white">AWS</span> (Amplify, Cognito, DynamoDB, S3),
              with full-stack experience across SQL, NoSQL, GraphQL, and REST APIs. Outside
              of my main role, I freelance through{' '}
              <span className="text-white">Atiso Studio</span> — building and optimizing
              websites for businesses across Calgary.
            </p>

            {/* Experience + Education quick hits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-text-muted">
                <MapPin size={16} className="text-brand-pink shrink-0" />
                <span>Calgary, Alberta, Canada</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <Briefcase size={16} className="text-brand-pink shrink-0" />
                <span>
                  Full Stack Developer —{' '}
                  <span className="text-white">CSI Innovations</span>
                  <span className="text-xs ml-2 opacity-50">Sept 2021 – Present</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <Briefcase size={16} className="text-brand-pink shrink-0" />
                <span>
                  IT Assistant —{' '}
                  <span className="text-white">Fidato Technologies</span>
                  <span className="text-xs ml-2 opacity-50">Aug 2019 – Aug 2021</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <GraduationCap size={16} className="text-brand-pink shrink-0" />
                <span>
                  BSc Computer Science —{' '}
                  <span className="text-white">University of Calgary</span>,{' '}
                  <span className="text-white">Dean's List</span>{' '}
                  <span className="text-xs ml-1 opacity-50">2015–2023</span>
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/alisakbari/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5
                           text-text-muted hover:text-white hover:border-brand-pink/60 transition-all duration-200"
              >
                <FaLinkedinIn size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/AliSAkbari"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5
                           text-text-muted hover:text-white hover:border-brand-pink/60 transition-all duration-200"
              >
                <SiGithub size={16} /> GitHub
              </a>
              <button
                onClick={() =>
                  document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex items-center gap-2 text-brand-pink hover:text-white transition-colors duration-200 font-medium"
              >
                Get in touch <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map(s => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="bg-dark-card rounded-2xl p-6 text-center border border-white/5 hover:border-brand-pink/30 transition-colors duration-300"
            >
              <p className="text-4xl font-bold gradient-text mb-1">{s.value}</p>
              <p className="text-text-muted text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
