import styles from "./Task.module.css";

import { FaTrash } from "react-icons/fa";
import { ITasks } from "../../App";
import { BsFillCheckCircleFill } from "react-icons/bs";
interface ITaskProps {
  task: ITasks;
  deleteTask: (id: string) => void;
  changeCompletedTask: (id: string) => void;
}

export function Task({ task, deleteTask, changeCompletedTask }: ITaskProps) {
  function handleDeleteTask(id: string) {
    deleteTask(id);
  }

  function handleCompletedTask(id: string) {
    changeCompletedTask(id);
  }
  
  return (
    <div className={styles.container}>
      <button className={styles.check} onClick={() => handleCompletedTask(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted === true ? styles.titleCompleted : ""}>{task.title}</p>
      <button
        className={styles.deleteButton}
        onClick={() => handleDeleteTask(task.id)}
      >
        <FaTrash />
      </button>
    </div>
  );
}
