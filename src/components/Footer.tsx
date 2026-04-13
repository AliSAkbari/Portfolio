import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'
import logoSvg from '../assets/img/logo.svg'
import footerBg from '../assets/img/footer-bg.png'

const navLinks = [
  { label: 'Home',     id: 'home'     },
  { label: 'About',    id: 'about'    },
  { label: 'Skills',   id: 'skills'   },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact',  id: 'connect'  },
]

export const Footer = () => {
  const navigate  = useNavigate()
  const location  = useLocation()
  const year      = new Date().getFullYear()

  const handleNav = (id: string) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <footer
      className="relative pt-32 pb-12 overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Newsletter / CTA card — lifted up over the section above */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl
                   bg-white rounded-[40px] px-8 py-10 md:px-16 md:py-14 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-dark-bg text-2xl md:text-3xl font-bold leading-snug mb-1">
              Let's build something great together.
            </h3>
            <p className="text-gray-500 text-base">
              Open to full-time roles, freelance projects, and interesting collaborations.
            </p>
          </div>
          <button
            onClick={() => handleNav('connect')}
            className="shrink-0 px-8 py-4 font-bold text-white rounded-2xl transition-all duration-300 hover:opacity-90 hover:scale-105 whitespace-nowrap"
            style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }}
          >
            Get in Touch
          </button>
        </div>
      </motion.div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <img src={logoSvg} alt="Ali Akbari" className="h-10 w-auto" />

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-text-muted hover:text-white text-sm transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/alisakbari/"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white text-base" />
            </a>
            <a
              href="https://github.com/AliSAkbari"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
              aria-label="GitHub"
            >
              <SiGithub className="text-white text-base" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-text-muted text-sm">
            © {year} Ali Akbari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
