import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'
import resume from "../../data/hari_cv.pdf"



const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to reach out  </p>
    </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
                <a href="mailto:harriprajapati128@gmail.com">harriprajapati128@gmail.com</a>
            </li>
     
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkdin" />
                <a href="https://www.linkedin.com/in/harikrishna-prajapati-052664254/">Harikrishna prajapati</a>
            </li>
      
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="" />
                <a href="https://github.com/harri8129">github.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("")} alt="" />
                <a href={resume} download="resume">Resume</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact