import { TaskItem } from "./TaskItem";
import type { TaskStatus, TaskListProps } from "../../types";

// Component that handles the Task List on the Dashboard
function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  return (
    <div className="my-5">
      <h2 className="text-3xl my-5 text-center">Task List</h2>

      <div className="flex flex-col gap-5 w-full max-w-3xl">
        {tasks.map((task) => (
          <div key={task.dueDate} className="flex flex-col gap-2 text-xl border p-2 rounded-lg">
            <TaskItem task={task} onStatusChange={onStatusChange} onDelete={onDelete} />

          
          </div>
        ))}


      </div>
    </div>
  );
}

export default TaskList;









