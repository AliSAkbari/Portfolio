import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import headerImg from '../assets/img/header-img.svg'
import bannerBg from '../assets/img/banner-bg.png'

const toRotate = [
  'Senior Full Stack Developer.',
  'UI/UX Designer.',
  'AWS Cloud Architect.',
]
const PERIOD = 1200

export const Hero = () => {
  const [text, setText]           = useState('')
  const [loopNum, setLoopNum]     = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [delta, setDelta]         = useState(120)
  const navigate = useNavigate()

  const tick = useCallback(() => {
    const i         = loopNum % toRotate.length
    const fullText  = toRotate[i]
    const updated   = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updated)

    if (isDeleting) {
      setDelta(d => d / 2)
    }

    if (!isDeleting && updated === fullText) {
      setIsDeleting(true)
      setDelta(PERIOD)
    } else if (isDeleting && updated === '') {
      setIsDeleting(false)
      setLoopNum(n => n + 1)
      setDelta(120)
    }
  }, [text, isDeleting, loopNum])

  useEffect(() => {
    const ticker = setInterval(tick, delta)
    return () => clearInterval(ticker)
  }, [tick, delta])

  const handleConnect = () => {
    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="tagline-badge">Welcome to my Portfolio</span>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-5 leading-[1.05]">
              Hi! I'm{' '}
              <span className="gradient-text">Ali Akbari</span>
              {'. '}
              <br className="hidden lg:block" />
              {'I am a '}
              <span className="txt-rotate">
                <span className="wrap">{text}</span>
              </span>
            </h1>

            <p className="text-text-muted text-lg leading-relaxed max-w-xl mb-10">
              Full Stack Developer at{' '}
              <span className="text-white font-medium">CSI Innovations</span>, building
              multi-region HIPAA-compliant software for Dry Eye Disease analysis from the
              ground up. Led a team of 6 on a project showcased at the{' '}
              <span className="text-white font-medium">2023 ASCRS Conference</span>.
              BSc Computer Science —{' '}
              <span className="text-white font-medium">University of Calgary</span>, Dean's List.
            </p>

            <button onClick={handleConnect} className="btn-primary text-lg">
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </motion.div>

          {/* Right — illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={headerImg}
              alt="Developer illustration"
              className="w-full max-w-md animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
