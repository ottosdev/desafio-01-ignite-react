import { ITasks } from "../../App";
import { Task } from "../Task";
import styles from "./Tasks.module.css";
import {TbClipboardText} from "react-icons/tb"
interface ITasksProps {
  tasks: ITasks[];
  deleteTask: (id: string) => void;
  changeCompletedTask: (id: string) => void;
}

export function Tasks({ tasks, deleteTask, changeCompletedTask }: ITasksProps) {
  const taskQuantity = tasks.length;
  const completedTask = tasks.filter((item) => item.isCompleted).length;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={styles.purple}>Concluidas</p>
          <span>
            {completedTask} de {taskQuantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            deleteTask={deleteTask}
            changeCompletedTask={changeCompletedTask}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
