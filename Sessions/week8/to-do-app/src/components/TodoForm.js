import { useState } from "react";

export default function ToDoForm({ addTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Fixed the typo here
        if (task.trim()) {
            addTask(task);
            setTask(''); // Fixed the setter name here
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)} // Fixed the onChange handler here
            />
            <button type="submit">Add</button>
        </form>
    );
}
