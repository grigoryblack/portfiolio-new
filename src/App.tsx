import styles from "./App.module.scss";
import Home from "./Components/Home/Home.tsx";
import About from "./Components/About/About.tsx";

function App() {
  return (
    <div className={styles.main__wrapper}>
      <Home />
      <About />
    </div>
  );
}

export default App;
