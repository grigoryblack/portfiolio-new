import { BugOutlined } from "@ant-design/icons";
import type { TSkillCardProps } from "../Skills.types.ts";
import styles from "../Skills.module.scss";

const SkillCard: React.FC<TSkillCardProps> = (props) => {
  const { skill, expanded, index, toggleExpand, skillRef } = props;

  return (
    <div
      className={`${styles.skill} ${expanded === index ? styles.expanded : ""}`}
      onClick={() => toggleExpand(index)}
      ref={(el) => {
        skillRef.current[index] = el;
      }}
    >
      <div className={styles.skill__header}>
        <div className={styles.skill__name}>{skill.name}</div>
        <div className={styles.skill__rating}>
          {[...Array(5)].map((_, i) => (
            <BugOutlined
              key={i}
              style={{
                color: skill.rating > i ? "red" : "black",
                marginRight: "5px",
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.skill__description}>
        <ul>
          {skill.description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
