import styles from "./page.module.css";
import Header from "./(main-componentes)/Header";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.main__section}>
          <Header />
        </div>
        <div className={styles.main__section} >
          <SearchBar />
        </div>
      </main>
    </div>
  );
}
