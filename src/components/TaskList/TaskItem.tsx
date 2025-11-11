import type { TaskItemProps } from "../../types";

// Component that handles and displays each individual TODO card item
export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <div className="bg-zinc-800 rounded-2xl w-screen max-w-2xl flex items-center p-4 gap-3 flex-col space-between">
      <div className="text-center">
        <h3 className="font-bold">{task.title}</h3>
      </div>
      <div>
        <p>{task.description}</p>
      </div>
      <div className="flex flex-row space-between gap-10">
        <p>Priority: {task.priority}</p>
        <p>Due Date: {task.dueDate}</p>
         <label>
          Status:
          <select
            onChange={(e) => onStatusChange(task.id, e.target.value)}
            value={task.status}
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In-Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-amber-500 p-4 rounded-lg shadow-lg shadow-amber-500/50 text-semibold max-w-50"
      >
        Delete
      </button>
    </div>
  );
}
