import { useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { Info } from './components/Info';
import { Task } from './components/Task';
import { EmptyList } from './components/EmptyList';

import styles from './App.module.css';

import "./global.css";

interface Task {
  id: number;
  description: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateTask(description: string){
    setTasks([...tasks, {id:tasks.length + 1, description, isCompleted: false}])
  }

  function handleChangeIsCompletedTask(id:number){
    setTasks(tasks.map(task => task.id === id ? {...task, isCompleted: !task.isCompleted} : task));
  }

  function handleDeleteTask(id:number){
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className={styles.app}>
      <Header/>
      <AddTask handleCreateTask={handleCreateTask}/>
      <Info createdTasks={tasks.length} finishedTasks={tasks.filter(task => task.isCompleted).length}/>
      <div className={styles.taskList}>
        {
          tasks.length > 0 ? 
          (
            tasks.map((task)=>(
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                isCompleted={task.isCompleted}
                handleChangeIsCompletedTask={handleChangeIsCompletedTask}
                handleDeleteTask={handleDeleteTask}
              />
            ))
          ):(
            <EmptyList/>
          )
        }
      </div>
    </div>
  )
}

export default App
