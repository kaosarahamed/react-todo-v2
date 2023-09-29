import './App.css';
import TodoLists from './components/ToDoList';
import TodoForm from './components/ToDoForm';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState();
  const [editToDo, setEditToDo] = useState(null);

  return (
    <div className='section'>
      <div className='container'>
        <div className='body'>
          <div className="head">
            <h2>React to do application</h2>
            <p>Enter your daily task here</p>
          </div>
          <TodoForm input={input} setInput={setInput} tasks={tasks} setTasks={setTasks} editTodo={editToDo} setEditToDo={setEditToDo}/>
          <TodoLists tasks={tasks} setTasks={setTasks} setEditToDo={setEditToDo}/>
        </div>
      </div>
    </div>
  )
}

export default App
