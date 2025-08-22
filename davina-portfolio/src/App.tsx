import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column align-items-center">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
