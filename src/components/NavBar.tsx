import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import logoSvg from '../assets/img/logo.svg'

const navLinks = [
  { label: 'Home',     id: 'home'     },
  { label: 'About',    id: 'about'    },
  { label: 'Skills',   id: 'skills'   },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact',  id: 'connect'  },
]

export const NavBar = () => {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  // Scroll listener — change bg + track active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(l => l.id)
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const handleNavClick = (id: string) => {
    setMobileOpen(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/95 backdrop-blur-sm py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoSvg} alt="Ali Akbari" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-5 py-2 text-[17px] tracking-wide transition-opacity duration-200 ${
                activeSection === link.id ? 'text-white opacity-100' : 'text-white opacity-60 hover:opacity-100'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Social icons + CTA */}
        <div className="hidden md:flex items-center gap-3">
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
          <button
            onClick={() => handleNavClick('connect')}
            className="btn-primary ml-2 text-base py-3 px-6"
          >
            <span className="relative z-10">Let's Connect</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              mobileOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              mobileOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-dark-bg/95 backdrop-blur-sm border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left py-3 text-lg text-white/80 hover:text-white border-b border-white/5 last:border-0 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <a href="https://www.linkedin.com/in/alisakbari/" target="_blank" rel="noreferrer" className="social-circle">
                  <FaLinkedinIn className="text-white text-base" />
                </a>
                <a href="https://github.com/AliSAkbari" target="_blank" rel="noreferrer" className="social-circle">
                  <SiGithub className="text-white text-base" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
