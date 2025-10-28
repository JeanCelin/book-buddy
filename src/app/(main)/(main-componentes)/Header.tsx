import { BookOpen, MoonIcon, PlusIcon } from "lucide-react";
import Button from "@/components/Button";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__title_container}>
        <BookOpen className={styles.icon} style={{ width: "26px", height: "26px" }} />
        <div className={styles.header__title}>
          <h1>BB</h1>
        </div>
        <div className={styles.header__title_expended}>
          <h1>Book Buddy</h1>
          <p>Organize sua biblioteca pessoal</p>
        </div>
      </div>
      <div className={styles.header__buttons}>
        <div className={styles.header__button_theme}>
          <Button
            background="var(--foreground)"
            color="var(--background)"
            icon={<MoonIcon style={{ width: "16px", height: "16px" }} />}
          />
        </div>
        <div className={styles.header__button_add}>
          <Button
            text="Adicionar Livro"
            icon={<PlusIcon style={{ width: "16px", height: "16px" }} />}
            background="var(--background)"
            color="var(--foreground)"
          />
        </div>
      </div>
    </header>
  );
}
