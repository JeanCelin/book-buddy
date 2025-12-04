import { BookOpen, PlusIcon } from "lucide-react";

import Button from "./Button.tsx";

import styles from "./NotFoundBook.module.css";
export default function NotFoundBook({ setShowForm }) {
  return (
    <div className={styles.notFoundBook}>
      <BookOpen
        className={styles.icon}
        style={{ width: "54px", height: "54px" }}
      />
      <span>Nenhum livro encontrado</span>
      <p>Comece Adicionando seu primeiro livro!</p>
      <Button
        icon={<PlusIcon />}
        background="var(--background)"
        color="var(--foreground)"
        text="Adicionar Primeiro Livro"
        onClick={() => {
          setShowForm(true);
        }}
      />
    </div>
  );
}
