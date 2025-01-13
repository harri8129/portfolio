import React from 'react'
import certificate from "../../data/certificate.json"
import Certificatecard from './Certificate_card'
import styles from "./Certificate.module.css"


const Projects = () => {
    return (
      <section id='certificate' className={styles.container}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.projects}>
           {certificate.map((project,id)=>{
              return    <Certificatecard  key={id} project={project}/>
          })}
      </div>
  </section>
    )
  }
  
export default Projects



