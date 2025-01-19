import styles from "./Home.module.scss";
import { lazy, Suspense } from "react";
import Sphere from "../../Layout/Sphere/Sphere.tsx";

const HeaderContainer = lazy(() => import("../../Layout/Header"));

const Home = () => {
  return (
    <section className={styles.container}>
      <Suspense>
        <HeaderContainer />
      </Suspense>

      <div className={styles.home__block}>
        <div className={styles.title__block}>
          <h1>
            page_owner:<span>Druzhenkov_Grigory</span>
          </h1>

          <h2>
            role: <span>Frontend_Developer</span>
          </h2>
        </div>

        <div className={styles.sphere__position}>
          <Sphere />
        </div>
      </div>
    </section>
  );
};

export default Home;
