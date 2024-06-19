import {useState, useEffect} from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) =>{
    setTasks([...tasks, task]);
  }

  const removeTask = (index) =>{
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
          <ToDoForm addTask={addTask} />
          <ToDoList 
             tasks={tasks}
             removeTask={removeTask}
          />
      </header>
    </div>
    
  );
}

export default App;
