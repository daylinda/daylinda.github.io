import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Timeline from './components/Timeline'
import "primereact/resources/themes/lara-light-blue/theme.css";  // pick a theme
import "primereact/resources/primereact.min.css";                 // core styles
import "primeicons/primeicons.css";                              // icons



function App() {
  return (
    <div className="bg-dark text-light d-flex flex-column align-items-center">
      <Hero />     
      <Experience /> 
      <Timeline />
      
      <Projects />     
     
    </div>
  )
}

export default App
