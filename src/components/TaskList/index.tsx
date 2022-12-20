import { useState } from "react";
import * as S from "./styles";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleCreateNewTask() {
    if (!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };

    const idExists = tasks.filter(
      (oldTask) => oldTask.id === newTask.id
    ).length;

    if (idExists >= 1) return;

    setTasks((oldTasks) => [...oldTasks, newTask]);
    setNewTaskTitle("");
  }

  function handleToggleTaskCompletion(id: number) {
    const newTask = tasks.map((task) => {
      if (task.id !== id) return task;

      return { ...task, isComplete: !task.isComplete };
    });
    setTasks(newTask);
  }

  function handleRemoveTask(id: number) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  }
  return (
    <S.Section>
      <S.Header>
        <h3>My tasks</h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="Insert a task"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button onClick={handleCreateNewTask}>Add</button>
        </div>
      </S.Header>

      <S.Main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div
                className={task.isComplete ? "completed" : ""}
                data-testid="task"
              >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button
                type="button"
                data-testid="remove-task-button"
                onClick={() => handleRemoveTask(task.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </S.Main>
    </S.Section>
  );
}
