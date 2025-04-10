import styles from "./App.module.scss";
import Home from "./Components/Home/Home.tsx";
import About from "./Components/About/About.tsx";
import Skills from "./Components/Skills/Skills.container.tsx";
import Portfolio from "./Components/Portfolio/Portfolio.container.tsx";
import Contacts from "./Components/Contacts/Contacts.tsx";
import Footer from "./Components/Footer/Footer.tsx";

function App() {
  return (
    <div className={styles.main__wrapper}>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
