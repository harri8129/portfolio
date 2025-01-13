import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
       <div className={styles.content}>
        <h1 className={styles.title}>Hi , I'M Hari</h1>
        <p className={styles.description}>Hey there! i'm Harikrishna prajapati Motivated and detail-oriented software developer 
          with a strong understanding in python and React. seeking a challenging role where i can leverage my expertise in data science 
          ,AI field and machine learning . where i can learn and make a meaningful impact 
        </p>
        <a href="mailto:hariprajap8129@gmail.com" className={styles.contactbtn}>Contact me </a>
       </div>
       <img src={getImageUrl("hero/hro.png")} alt="heroimg" className={styles.heroimg} />
       <div className={styles.topblur}/>
       <div className={styles.bottomblur}/>

    </section>
  )
}

export default Hero