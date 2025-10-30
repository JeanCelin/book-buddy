"use client";
import { useState } from "react";
import styles from "./SearchButtons.module.css";

export default function SearchButtons() {
  // Estado guarda o nome do botão selecionado
  const [selectedButton, setSelectedButton] = useState("");

  // Função para lidar com o clique
  const handleClick = (name: string) => {
    // Se clicar no mesmo botão, desseleciona
    console.log(name);
    if (selectedButton === name) {
      setSelectedButton("");
    } else {
      setSelectedButton(name);
    }
  };

  return (
    <section className={styles.searchButtons}>
      {["Todos", "Lendo", "Quero Ler", "Lidos"].map((name) => (
        <div key={name} className={styles.button__container}>
          <button
            className={
              selectedButton === name
                ? styles.button_active
                : styles.button_standard
            }
            onClick={() => handleClick(name)}>
            {name}
          </button>
        </div>
      ))}
    </section>
  );
}
