import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="contenedor-principal">
      <div className="contenedor-todo">
        <h1>Todo List </h1>
        <div>
          <div className="efecto">
            {" "}
            <input
              type="text"
              placeholder="Nueva Tarea"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <ul>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {task}
                  {hoveredIndex === index && (
                    <button onClick={() => handleDeleteTask(index)}>X</button>
                  )}
                </li>
              ))}
              <span>{tasks.length} item</span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
