import React, { useState, useEffect } from "react";

interface TaskFormProps {
  onSubmit: (
    title: string,
    description: string,
    startDate: string,
    endDate: string
  ) => void;
  initialTitle?: string;
  initialDescription?: string;
  initialStartDate?: string;
  initialEndDate?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({
  onSubmit,
  initialTitle = "",
  initialDescription = "",
  initialStartDate = "",
  initialEndDate = "",
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
    setStartDate(initialStartDate);
    setEndDate(initialEndDate);
  }, [initialTitle, initialDescription, initialStartDate, initialEndDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, description, startDate, endDate);
    setTitle(""), setDescription(""), setStartDate(""), setEndDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label>Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div>
        <label>End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <button type="submit">Create Task</button>
    </form>
  );
};
export default TaskForm;
