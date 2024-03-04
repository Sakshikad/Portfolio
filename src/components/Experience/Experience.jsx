import React from 'react'
import data from '../../data/data.json'
import { getImageUrl } from '../../utils'
import styles from './Experience.module.css'

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          
          {data.skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {data.experience.map((experience, id) => {
            return (
              <li key={id} className={styles.historyItem}>

                <div className={styles.historyItemDetails}>
                  <h3>{`${experience.role},${experience.organisation}`}</h3>
                  <p>{`${experience.startDate} - ${experience.endDate}`}</p>
                  <ul>
                    {experience.experiences.map((experience, id) => {
                      return <li key={id}>{experience} </li>
                    }
                    )}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
