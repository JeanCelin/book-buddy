"use client";
import { useState } from "react";

import styles from "./AddBookForm.module.css";
import Button from "./Button";

// Define as props do componente corretamente
type AddBookFormProps = {
  setShowForm: (value: boolean) => void;
};

export default function AddBookForm({ setShowForm }: AddBookFormProps) {
  const [genre, setGenre] = useState("romance");
  const [status, setStatus] = useState("Quero Ler");

  return (
    <form className={styles.form}>
      <div>
        <span>Adicionar Livro</span>
        <p>Adicione um novo livro à sua biblioteca</p>
      </div>
      <div className={styles.fields__container}>
        <div className={styles.field}>
          <label htmlFor="title">Título *</label>
          <input id="title" type="text" />
        </div>
        <div className={styles.field}>
          <label htmlFor="author">Autor *</label>
          <input id="author" type="text" />
        </div>
        <div className={styles.field}>
          <label htmlFor="genre">Gênero</label>
          <select id="genre" name="genre" defaultValue="romance">
            <option value="autoajuda">Autoajuda</option>
            <option value="autobiografia">Autobiografia</option>
            <option value="aventura">Aventura</option>
            <option value="biografia">Biografia</option>
            <option value="distopia">Distopia</option>
            <option value="drama">Drama</option>
            <option value="educacao">Educação</option>
            <option value="ensaios">Ensaios</option>
            <option value="fantasia">Fantasia</option>
            <option value="ficcao-cientifica">Ficção Científica</option>
            <option value="filosofia">Filosofia</option>
            <option value="historia">História</option>
            <option value="hq">HQ / Graphic Novel</option>
            <option value="infantil">Infantil</option>
            <option value="juvenil">Juvenil</option>
            <option value="misterio">Mistério</option>
            <option value="negocios">Negócios</option>
            <option value="poesia">Poesia</option>
            <option value="psicologia">Psicologia</option>
            <option value="religiao">Religião</option>
            <option value="romance">Romance</option>
            <option value="suspense">Suspense</option>
            <option value="terror">Terror</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="status">Status *</label>
          <select id="status" defaultValue="Quero Ler">
            <option value="Quero Ler">Quero Ler</option>
            <option value="Lendo">Lendo</option>
            <option value="Lido">Lido</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="cover">URL da Capa</label>
          <input id="cover" type="url" placeholder="https://" />
        </div>
        <div className={styles.field}>
          <label htmlFor="rating">Avaliação (1-5)</label>
          <input type="number" min={0} max={5} />
        </div>
        <div className={styles.field}>
          <label htmlFor="notes">Notas</label>
          <textarea id="notes" placeholder="Suas anotações sobre o livro..." />
        </div>
      </div>
      <div className={styles.buttons__container}>
        <Button
          background="var(--foreground)"
          color="var(--background)"
          text="Cancelar"
          onClick={() => setShowForm(false)}
        />
        <Button
          background="var(--background)"
          color="var(--foreground)"
          text="Enviar"
        />
      </div>
    </form>
  );
}
