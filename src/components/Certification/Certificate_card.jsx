import React from 'react'
import styles from "./Certificate_card.module.css"
import { getImageUrl } from '../../utils'

const CertificateCard = ({project:{title,imageSrc,description,skills,demo,source}}) => {
  return (
    <div className={styles.container}>
         {/* <img src={getImageUrl(imageSrc)} 
         alt={`image of ${title}`} 
         className={styles.image}/> */}
         <h3 className={styles.title}>{title}</h3>
         <p className={styles.description}>{description}</p>
         <ul className={styles.skills}>
            {skills.map((skill,id)=>{
              return( 
                <li key={id} className={styles.skill}>{skill}</li>
              )
            })
            }
         </ul>
         <div className={styles.links}>
            {/* <a href={demo} className={styles.link}>Demo</a> */}
            <a href={source} className={styles.link}>Certificate</a>
         </div>
    </div>
  )
}

export default CertificateCard