import React, { FormEvent, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg";

import { FaPlus } from "react-icons/fa";
import { ITasks } from "../../App";

interface IHeader {
  addTask: (value: string) => void;
}

export function Header({ addTask}: IHeader) {
  const [input, setInput] = useState<string>("");

  function handleAddTask(event:FormEvent ) {
    event.preventDefault()

    if(!input) {
      alert("Por favor, digite um titulo não duvidoso!!")
      return
    }
    addTask(input);
    setInput("")
  }



  return (
    <header className={styles.container}>
      <img src={logo} alt="Logo" />

      <form className={styles.form} onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          Criar
          <FaPlus size={10} />
        </button>
      </form>
    </header>
  );
}
