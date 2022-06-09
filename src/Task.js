import React from 'react';
import TodoList from './TodoList';

export default function Task({task, toggleTask}) {
    function handleTaskChange() {
        toggleTask(task.id)
    }
    
    return (
        <div>
            <label>
                <input type="checkbox" checked={task.complete} onChange={handleTaskChange} />
                {task.name}
            </label>
        </div>
    )
}