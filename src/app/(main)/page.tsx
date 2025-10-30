import styles from "./page.module.css";
import Header from "./(main-componentes)/Header";
import SearchBar from "@/components/SearchBar";
import SearchButtons from "@/components/SearchButtons";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.section}>
          <Header />
        </div>
        <div className={styles.section}>
          <SearchBar />
        </div>
        <div className={styles.section}>
          <SearchButtons />
        </div>
      </main>
    </div>
  );
}
