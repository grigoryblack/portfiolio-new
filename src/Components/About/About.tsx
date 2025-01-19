import styles from "./About.module.scss";
import { aboutMeConfig, educationConfig } from "./About.config.ts";
import ProfilePic from "../../../public/Pictires/MyPhoto.jpg";

const About = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content__block}>
          <div className={styles.content}>
            <h2>About</h2>

            <ul>
              {aboutMeConfig.map((aboutItem) => (
                <li key={aboutItem.id}>
                  <p>{aboutItem.label}:</p>

                  <span>{aboutItem.value}</span>
                </li>
              ))}
            </ul>

            <br />

            <h2>Education</h2>

            <ul>
              <li className={styles.custom__li}>
                <p>university:</p>

                <span>
                  Ural Federal University named after the first President of
                  Russia B. N. Yeltsin ,(UrFU)
                </span>
              </li>

              {educationConfig.map((aboutItem) => (
                <li key={aboutItem.id}>
                  <p>{aboutItem.label}:</p>

                  <span>{aboutItem.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.profile__picture}>
            <img src={ProfilePic} alt="profile_pic" />
            {[...Array(10)].map((_, index) => (
              <div key={index} className={`${styles[`line-${index + 1}`]}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
