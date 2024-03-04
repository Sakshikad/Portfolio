import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <section id='home' className={styles.container}>
         <div className={styles.content}>
            <h1 className={styles.title}>Hi , I'm Sakshi</h1>
            <p className={styles.discription}>I'm a passionate Full Stack Developer, 
            specializing in React and Node.js. Eager to kickstart my career, 
            I'm actively seeking opportunities to apply my skills and grow in the field.
            </p>
            <a href="#contact" className={styles.contactBtn} >Contact Me</a>
        </div>
        <img className={styles.homeImg} src={getImageUrl("home/homeImage.png")} alt="Home Image" />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
   
  )
}
