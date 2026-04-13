import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero }     from '../components/Hero'
import { About }    from '../components/About'
import { Skills }   from '../components/Skills'
import { Projects } from '../components/Projects'
import { Contact }  from '../components/Contact'

export const Home = () => {
  const location = useLocation()

  // Handle hash navigation (e.g. from project detail page clicking nav links)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const attempt = (retries: number) => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else if (retries > 0) {
          setTimeout(() => attempt(retries - 1), 100)
        }
      }
      attempt(5)
    }
  }, [location.hash])

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
