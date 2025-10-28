"use client";
import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";
import { ChangeEvent, useState } from "react";

export default function SearchBar() {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <input
        type="search"
        key="search"
        id="serach"
        name="search"
        value={text}
        placeholder="Buscar por título ou autor"
        onChange={handleChange}
      />
      <div className={styles.icon}>
        <Search style={{ width: "14px", height: "14px" }} />
      </div>
    </div>
  );
}
