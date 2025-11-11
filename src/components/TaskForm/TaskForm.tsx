import React from "react";
import { useState } from "react";

interface TaskFormProps {
  onSubmit: (
    title: string,
    description: string,
    priority: string,
    status: string,
    dueDate: string
  ) => void;
}

// Component that handles the form that adds new todos to the list
export function TaskForm({ onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simple form validation that checks the required fields
    if (!title.trim() || !description.trim() || !dueDate) {
      alert("Please fill out all fields!");
      return;
    }

    onSubmit(title, description, priority, status, dueDate);

    setTitle("");
    setDescription("");
    setPriority("");
    setStatus("");
    setDueDate("");
  };

  return (
    <div className="h-70 size-full">
      <h3 className="text-2xl font-semibold mb-4 items-center text-center">Add New Task</h3>
      <form
        onSubmit={handleSubmit}
        className="flex gap-5 items-center flex-col space-between bg-zinc-800 p-6 rounded-2xl my-6 w-full max-w-3xl shadow-lg"
      >
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div className="flex gap-10 flex-row">
          <label>
            Status:
            <select onChange={(e) => setStatus(e.target.value)} value={status}>
              <option className="text-black" value="pending">Pending</option>
              <option className="text-black" value="in-progress">In-Progress</option>
              <option className="text-black" value="completed">Completed</option>
            </select>
          </label>
          <label>
            Priority:
            <select
              onChange={(e) => setPriority(e.target.value)}
              value={priority}
            >
              <option className="text-black" value="low">Low</option>
              <option className="text-black" value="medium">Medium</option>
              <option className="text-black" value="high">High</option>
            </select>
          </label>
          <label>
            Due Date:
            <input
              type="date"
              value={dueDate}
              name="dueDate"
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit} className="bg-sky-400 p-4 rounded-lg shadow-lg shadow-blue-500/50 text-bold">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}
