import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import contactImg from '../assets/img/contact-img.svg'

type Status = 'idle' | 'sending' | 'success' | 'error'

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0  },
}

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-white/10 border border-white/50 rounded-2xl text-white px-6 py-4 text-base font-medium ' +
    'placeholder:text-white/70 placeholder:font-normal ' +
    'focus:outline-none focus:bg-white focus:text-dark-bg focus:placeholder:text-dark-bg/60 ' +
    'transition-all duration-300'

  return (
    <section
      id="connect"
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — image + info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-heading mb-4">Get In Touch</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Have a project in mind, a question, or just want to say hi? My inbox is always
              open. I'll get back to you as soon as possible.
            </p>

            {/* Social links */}
            <div className="flex gap-4 mb-10">
              <a
                href="https://www.linkedin.com/in/alisakbari/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/30
                           text-white hover:bg-white hover:text-brand-purple transition-all duration-200 font-medium"
              >
                <FaLinkedinIn size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/AliSAkbari"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/30
                           text-white hover:bg-white hover:text-brand-purple transition-all duration-200 font-medium"
              >
                <SiGithub size={18} /> GitHub
              </a>
            </div>

            <motion.img
              src={contactImg}
              alt="Contact illustration"
              className="w-4/5 max-w-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  required
                  className={inputClass}
                />
                <input
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  required
                  className={inputClass}
                />
              </div>
              <input
                name="from_email"
                type="email"
                placeholder="Email Address"
                required
                className={inputClass}
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number (optional)"
                className={inputClass}
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project or question..."
                required
                className={inputClass + ' resize-none'}
              />

              {/* Feedback */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-white bg-white/10 rounded-xl px-4 py-3"
                >
                  <CheckCircle size={18} className="text-green-300 shrink-0" />
                  <span>Message sent! I'll be in touch soon.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-white bg-white/10 rounded-xl px-4 py-3"
                >
                  <AlertCircle size={18} className="text-red-300 shrink-0" />
                  <span>Something went wrong. Please try emailing me directly.</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-4 font-bold text-dark-bg bg-white
                           rounded-2xl transition-all duration-300 hover:bg-opacity-90 hover:scale-[1.01]
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
