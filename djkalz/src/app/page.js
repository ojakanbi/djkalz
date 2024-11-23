import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage/HeroPage";

export default function Home() {
  return (
    <>
      <HeroPage />
      <div className={styles.page}>
        <h2>DJ KALZ</h2>
      </div>
    </>

  );
}
