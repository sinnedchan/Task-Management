import React, { useState, useEffect } from "react";
import "./form.css";

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
    <form className="createtaskbox" onSubmit={handleSubmit}>
      <div className="taskinputgrid1">
        <label className="tasklabel">Task</label>
        <textarea
          className="taskinputarea"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="descriptioninputgrid2">
        <label className="desclabel">Description</label>
        <textarea
          className="descinputarea"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="startgrid3">
        <label>Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="endgrid4">
        <label>End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <button className="createbutton" type="submit">
        Create Task
      </button>
    </form>
  );
};
export default TaskForm;
