import React,{useState} from 'react'
import styles from './Navbar.module.css'
import {getImageUrl}  from '../../utils.js'

const Navbar = () => {

    const[menuOpen,setMenuOpen]=useState(false);
  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menubtn} 
            src={menuOpen ? getImageUrl("nav/closeicon.png") : getImageUrl("nav/bars.png")} alt='menubtn' 
            onClick={()=>setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} 
            onClick={()=>setMenuOpen(false)}>
                <li>
                 <a href="#about">About</a>
                </li>
                <li>
                 <a href="#experience">Skills</a>   
                </li>
                <li>
                 <a href="#project">Project</a>
                </li>
                <li>
                 <a href="#contact">Contact</a>
                </li>
                <li>
                 <a href="#certificate">Certifications</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar


