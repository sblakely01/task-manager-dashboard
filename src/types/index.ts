export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => void;
  search?: string;
}

export interface Task {
    id: string,
    title: string,
    description: string,
    status?: string,
    priority?: string,
    dueDate: string
}

export interface TaskItemProps {
    task: Task,
    onStatusChange: (taskId: string, status: string) => void,
    onDelete: (taskId: string) => void
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}