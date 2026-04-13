import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-centra">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
