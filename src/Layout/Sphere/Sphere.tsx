import styles from "./Sphere.module.scss";

const Sphere = () => {
  const planes = Array.from({ length: 12 }, (_, i) => i + 1);
  const spokes = Array.from({ length: 36 }, (_, j) => j + 1);

  return (
    <div>
      <div className={styles["sphere-wrapper"]}>
        {planes.map((i) => (
          <div
            key={`plane-${i}`}
            className={`${styles.plane} ${styles[`plane-${i}`]}`}
          >
            {spokes.map((j) => (
              <div
                key={`spoke-${j}`}
                className={`${styles.spoke} ${styles[`spoke-${j}`]}`}
              >
                <div className={styles.dot}></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sphere;
