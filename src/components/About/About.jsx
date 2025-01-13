import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

const About = () => {
  return (
    <section id="about" className={styles.container}> 
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/about.png")} 
            alt="abtimage" 
            className={styles.abtimage} />

          <ul className={styles.aboutitems}>

             <li className={styles.aboutitem}>
               <img src={getImageUrl("about/brain.png")} alt="cursor" />
               <div className={styles.abtitmetxt}>
                <h3>Machine Learning</h3>
                <p>Proficient in building and deploying machine learning models using Python (Scikit-learn, TensorFlow).
                Experienced in preprocessing and analyzing large datasets using pandas, NumPy, and visualization libraries (Matplotlib, Seaborn).</p>
               </div>
             </li>

             <li className={styles.aboutitem}>
               <img src={getImageUrl("about/cpu.png")} alt="cpu" />
               <div className={styles.abtitmetxt}>
                <h3>FrontEnd</h3>
                <p>Proficient in creating responsive and user-friendly interfaces using HTML, CSS, and JavaScript frameworks (React).
                </p>
               </div>
             </li>

             <li className={styles.aboutitem}>
               <img src={getImageUrl("about/ui.png")} alt="" />
               <div className={styles.abtitmetxt}>
                <h3>Backend</h3>
                <p>Experience in building scalable and secure server-side applications using Node.js, Python (Django/node).
                Proficient in database management (SQL, MongoDB) and RESTful API development</p>
               </div>
             </li>
          </ul>
        </div>

    </section>
  )
}

export default About