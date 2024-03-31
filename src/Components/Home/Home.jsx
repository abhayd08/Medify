import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.page1}>
        <Header />
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
