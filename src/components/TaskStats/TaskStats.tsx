import React from "react";
import type { Task } from "../../types";

interface TaskStatProps {
  tasks: Task[];
}

// Component that displays all stats for the TODO list on the dashboard
export default function TaskStats({ tasks }: TaskStatProps) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const pending = tasks.filter((t) => t.status === "pending").length;
  const inProgress = tasks.filter((t) => t.status === "in-progress").length;

  return (
    <div className="bg-zinc-800 text-white rounded-2xl p-6 shadow-md flex gap-10 my-6 w-full max-w-3xl justify-around">
      <div className="text-center">
        <p className="text-lg">Total</p>
        <p className="text-3xl font-bold text-emerald-400">{total}</p>
      </div>
      <div className="text-center">
        <p className="text-lg">Completed</p>
        <p className="text-3xl font-bold text-sky-400">{completed}</p>
      </div>
      <div className="text-center">
        <p className="text-lg">Pending</p>
        <p className="text-3xl font-bold text-amber-400">{pending}</p>
      </div>
      <div className="text-center">
        <p className="text-lg">In Progress</p>
        <p className="text-3xl font-bold text-fuchsia-400">{inProgress}</p>
      </div>
    </div>
  );
}
