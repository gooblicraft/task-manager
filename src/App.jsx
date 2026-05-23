import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, toggleTask } from "./features/taskSlice";

function App() {
  const [name, setName] = useState("");
  const [recentIndex, setRecentIndex] = useState(null);

  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  return (
    <div className="classroom">
      <div className="classroom-card">
        <header className="board-header">
          <div className="icon">📋</div>
          <h1 className="board-title">Simple Task Manager</h1>
        </header>

        <div className="task-controls">
          <input
            className="task-input"
            type="text"
            placeholder="What needs to be done?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="btn add"
            onClick={() => {
              if (!name) return;
              const newIndex = tasks.length;
              dispatch(addTask(name));
              setName("");
              setRecentIndex(newIndex);
              setTimeout(() => setRecentIndex(null), 900);
            }}
            aria-label="Add task"
          >
            Add
          </button>
        </div>

        <ul className="task-list">
          {tasks.map((task, index) => (
            <li
              className={`task-item ${index === recentIndex ? "new" : ""} ${task.done ? "done" : ""}`}
              key={index}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  className={`checkbox ${task.done ? "checked" : ""}`}
                  onClick={() => dispatch(toggleTask(index))}
                  aria-label={`Toggle task ${index + 1}`}
                >
                  {task.done ? "✓" : ""}
                </button>
                <div className={`task-text ${task.done ? "done" : ""}`}>{task.text}</div>
              </div>
              <div>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeTask(index))}
                  aria-label={`Delete task ${index + 1}`}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p style={{ fontSize: '0.7rem' }}>Made by: Edriane Paul Domanico<br />PELEC202 (BSIT2A)</p>
    </div>
  );
}

export default App;
