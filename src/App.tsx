import React, { useState } from "react";
import Form from "./Form";

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
    <div>
      <h1>Task Management App</h1>
      {editTask ? (
        <div>
          <h2>Edit Task</h2>
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
          <h2>Create Task</h2>
          <Form onSubmit={handleTaskSubmit} />
        </div>
      )}

      <h2>Tasks</h2>
      <div>
        {tasks.map((task) => (
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Start Date: {task.startDate}</p>
            <p>End Date: {task.endDate}</p>
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
