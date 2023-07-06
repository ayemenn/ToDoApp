
import React from 'react'
import { useState } from 'react'
import Task from './Task';
import './App.css'

function App() {
  const [ids, incrementids] = useState(0)
  const [tasks, setTasks] = useState([])

  const addTask = function () {
    incrementids(prevstate => prevstate + 1)
    const newTask = { id: ids, title: "Title", description: "Description" };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }
  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };
  return (

    <div>

      <div className='Navbar'>
        <button className='AddButton'
          onClick={addTask}>
          <img style={{ height: '100%', width: '100%' }} src="/add_button.svg" alt="Add Button" />
        </button>
      </div>


      <div className='Divider' />

      <div className='MainScreen' >

        <div className='Showtasks'>
          <div className='maintext' ><h1>Notes</h1></div>
          {tasks.map(task => (
            <Task key={task.id} id={task.id} title={task.title} description={task.description} onDelete={deleteTask} />
          ))}

        </div>

      </div>
    </div>

  );
}


export default App;
