import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

interface Task {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task | null>(null);

  const handleTaskSubmit = (
    title: string,
    description: string,
    startDate: string,
    endDate: string
  ) => {
    if (editTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === editTask.id
          ? { ...task, title, description, startDate, endDate }
          : task
      );
      setTasks(updatedTasks);
      setEditTask(null);
    } else {
      const newTask: Task = {
        id: Date.now(),
        title,
        description,
        startDate,
        endDate,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditTask(task);
  };
  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="appmain">
      <h1 className="mainheader">Real-Time Task Management App</h1>
      {editTask ? (
        <div>
          <Form
            onSubmit={handleTaskSubmit}
            initialTitle={editTask.title}
            initialDescription={editTask.description}
            initialStartDate={editTask.startDate}
            initialEndDate={editTask.endDate}
          />
        </div>
      ) : (
        <div>
          <Form onSubmit={handleTaskSubmit} />
        </div>
      )}

      <h2>Your Tasks:</h2>
      <div>
        {tasks.map((task) => (
          <div className="taskcard">
            <h4 className="taskgrid1">{task.title}</h4>
            <p className="descgrid2">{task.description}</p>
            <p className="startgrid3">Start Date: {task.startDate}</p>
            <p className="endgrid4">End Date: {task.endDate}</p>
            <button className="editbutton" onClick={() => handleEditTask(task)}>
              Edit
            </button>
            <button
              className="deletebutton"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
