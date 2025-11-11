import TaskList from "../TaskList/TaskList";
import { taskList } from "../../utils/taskUtils";
import { TaskFilter } from "../TaskFilter/TaskFilter";
import { useState, useEffect } from "react";
import type { Task, TaskStatus } from '../../types';
import { TaskForm } from "../TaskForm/TaskForm";
import TaskStats from '../TaskStats/TaskStats';


function Dashboard() {

    // Task list is pulled from localStorage
    const [tasks, setTasks] = useState<Task[]>(() => {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    });


    // Applies status filter, priority filter, or search term filter
    const [filters, setFilters] = useState<{ status?: TaskStatus; priority?: string; search?: string}>({});


    // Anytime tasks is updated, the updated version is saved into local Storage
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])


    // Filtering function that shows tasks based on the filters and search
  const filteredTasks = tasks.filter(task => {
    const statusMatch = !filters.status || task.status === filters.status;
    const priorityMatch = !filters.priority || task.priority === filters.priority;
    const searchMatch = !filters.search || task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
    task.description.toLowerCase().includes(filters.search.toLowerCase());
    return statusMatch && priorityMatch && searchMatch;
  });

  const onDelete = (taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id != taskId));
  };

  const onStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? {...task, status: newStatus} : task))
  };

  // function for handling submission of the form that adds a new task
  const handleSubmit = (title: string, description: string, priority: string, status: string, dueDate: string) => {
    const newTask: Task = {
        id: crypto.randomUUID(), 
        title, 
        description, 
        priority, 
        status, 
        dueDate
    }
    
    setTasks(prevTask => [...prevTask, newTask]);
  }

  return (
    <div className="w-full flex gap-3 items-center flex-col">
      <h2 className="text-3xl my-5">Dashboard</h2>

    {/* STATS */}
      <TaskStats tasks={tasks} />

      <div className="flex flex-row space-between items-center justify-center gap-5">

          {/* TASKFILTER */}
    <TaskFilter onFilterChange={setFilters}/>

    {/* Task Form */}
    <TaskForm onSubmit={handleSubmit} />

    </div>

      {/* TASKLIST */}
      <TaskList tasks={filteredTasks} onDelete={onDelete} onStatusChange={onStatusChange}/>
    </div>
  );
}

export default Dashboard;
