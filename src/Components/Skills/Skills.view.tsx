import styles from "./Skills.module.scss";
import { SKILLS } from "./Skills.config.ts";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import SkillCard from "./SkillCard/SkillCard.tsx";
import type { TSkillsProps } from "./Skills.types.ts";

const SkillsView: React.FC<TSkillsProps> = (props) => {
  const { expanded, toggleExpand, skillRef, handleShowAll, showAll } = props;
  const previewSkills = SKILLS.slice(0, 6);
  const fullSkills = SKILLS.slice(6);

  return (
    <section className={styles.wrapper} id="skills">
      <div className={styles.container}>
        <h2>Skills</h2>

        <div className={styles.container__body}>
          <div className={styles.list}>
            {previewSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                index={skill.id}
                expanded={expanded}
                toggleExpand={toggleExpand}
                skillRef={skillRef}
              />
            ))}
          </div>

          <div
            className={`${styles.list} ${
              showAll ? styles.list__expanded : styles.list__hidden
            }`}
          >
            {fullSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                index={skill.id}
                expanded={expanded}
                toggleExpand={toggleExpand}
                skillRef={skillRef}
              />
            ))}
          </div>
        </div>

        <button className={styles.show__all} onClick={handleShowAll}>
          {showAll ? <UpOutlined /> : <DownOutlined />}
        </button>
      </div>
    </section>
  );
};

export default SkillsView;
