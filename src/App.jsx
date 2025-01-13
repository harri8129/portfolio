import styles from './App.module.css'
import About from './components/About/About.jsx'
import Certificates from './components/Certification/Certificate.jsx'
import  Contact  from './components/Contact/Contact.jsx'
import Experience from './components/Experience/Experience.jsx'
import Hero  from './components/Hero/Hero.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import  Projects  from './components/Projects/Projects.jsx'

function App() {

  return (
    <div className={styles.app}> 
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Certificates/>
    <Contact/>
    </div> 
  )

}

export default App
