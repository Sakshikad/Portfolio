import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'
import data from '../../data/data.json'

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <div>
                    {
                        data.about.map((skill,id) => {
                            return (       
                                    <div className={styles.aboutItems} key={id}>
                                        <div className={styles.aboutItem}>
                                        <img  className={styles.aboutIcon}src={getImageUrl("about/uiIcon.png")} alt="Cursor icon" />
                                            <div className={styles.aboutItemText}  >
                                                <h3> {skill.name}</h3>
                                                <p>{skill.about}</p>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                </div>
            </div>
        </section>

    );
};
