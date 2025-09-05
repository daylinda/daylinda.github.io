import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Hero from './components/Hero'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "primereact/resources/themes/lara-light-blue/theme.css";  // pick a theme
import "primereact/resources/primereact.min.css";                 // core styles
import "primeicons/primeicons.css";                              // icons
import NavBar from './components/MyNavBar';
import About from './components/About';


function App() {
  return (
    <div className="bg-dark text-light d-flex flex-column align-items-center">
      
      <Hero /> 
      <NavBar/>  
      <About/>
        
    </div>
  )
}

export default App
