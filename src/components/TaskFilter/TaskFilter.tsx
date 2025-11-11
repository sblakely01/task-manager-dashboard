import React, { useState } from "react";
import type { TaskFilterProps } from "../../types";

// Component that handles the filters and search options
export function TaskFilter({ onFilterChange }: TaskFilterProps) {

    const [search, setSearch ] = useState('');

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange({ status: e.target.value as any});
    };

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange({ priority: e.target.value as any });
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        onFilterChange({ search: value });
    }


    return (
        <div className="max-x-3xl size-full h-70">
            <h3 className="text-2xl font-semibold mb-4 items-center text-center">Filter Tasks</h3>
            <div className="bg-zinc-800 rounded-2xl max-w-3xl p-10">

           <label>
                <input type="text" placeholder="Search tasks..." value={search} onChange={handleSearchChange} />
            </label>
            <label>
                Status:
                <select onChange={handleStatusChange}>
                    <option className="text-black" value="">All Statuses</option>
                    <option className="text-black" value="pending">Pending</option>
                    <option className="text-black" value="in-progress">In-Progress</option>
                    <option className="text-black" value="completed">Completed</option>
                </select>
            </label>

            <label>
                Priority:
                <select onChange={handlePriorityChange}>
                    <option className="text-black" value="">All Priorities</option>
                    <option className="text-black" value="low">Low</option>
                    <option className="text-black" value="medium">Medium</option>
                    <option className="text-black" value="high">High</option>
                </select>
            </label>
                        </div>
        </div>
    );
}
