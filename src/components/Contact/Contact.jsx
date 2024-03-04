import React, {useRef} from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n8baywe', 'template_rwwzu0a', form.current, {
        publicKey: 't03mk6tohjSCHtEzg',
      })
      .then(
        () => {
          console.log('Message Send');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          {/* <div className={styles.text}> */}
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
            <ul className={styles.links}>
              <li className={styles.link}>
                <div className={styles.imgs}> <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></div>
               
                <a href="mailto:sakshikad51@email.com">sakshikad51@email.com</a>
              </li>
              <li className={styles.link}>
                <div className={styles.imgs}><img
                  src={getImageUrl("contact/linkedinIcon.png")}
                  alt="LinkedIn icon"
                /></div>
                <a href="https://www.linkedin.com/in/sakshi-kad-317227204">linkedin.com/Sakshikad</a>
              </li>
              <li className={styles.link}>
               <div className={styles.imgs}> <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></div>
                <a href="https://github.com/Sakshikad">github.com/Sakshikad</a>
              </li>
            </ul>
          {/* </div> */}
        </div>

        <div className={styles.formContainer}>
          <form ref={form} onSubmit={sendEmail} className={styles.contact}>
            <input type="text" name="username" placeholder="Enter your Name" required/>
            <input type="email" name="email" placeholder="Enter your Email" required/>
            <input type="text" name="subject" placeholder="Enter your Subject" required/>
            <textarea type="text" name="message" cols="30" rows="6" placeholder="Enter your Message" required/>
            <input type="submit" value="Send"/>
          </form>
        </div>

      </div>
    </footer>
  );
};
