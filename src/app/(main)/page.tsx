"use client";

import styles from "./page.module.css";
import Header from "./(main-componentes)/Header";
import SearchBar from "@/components/SearchBar";
import SearchButtons from "@/components/SearchButtons";
import { useState } from "react";

import AddBookForm from "@/components/AddBookForm";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
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
        {showForm && (
          <div className={`${styles.section} ${styles.form}`}>
            <AddBookForm />
          </div>
        )}
      </main>
    </div>
  );
}
