import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import "./styles/global.css";

export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  function localStorageSave(tasks: ITasks[]) {
    setTasks(tasks);
    localStorage.setItem("@desafio-1", JSON.stringify(tasks));
  }

  function loadTask() {
    const localTask = localStorage.getItem("@desafio-1");
    if (localTask) {
      setTasks(JSON.parse(localTask));
    }
  }

  useEffect(() => {
    loadTask();
  }, []);

  function addTask(value: string) {
    localStorageSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: value,
        isCompleted: false,
      },
    ]);
  }

  function deleteTask(id: string) {
    localStorageSave(tasks.filter((item) => item.id !== id));
  }

  function changeCompletedTask(id: string) {
    const changeTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    localStorageSave(changeTask);
  }

  return (
    <>
      <Header addTask={addTask} />

      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        changeCompletedTask={changeCompletedTask}
      />
    </>
  );
}

export default App;
