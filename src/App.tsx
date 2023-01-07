import { useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { Info } from './components/Info';
import { Task } from './components/Task';

import styles from './App.module.css';

import "./global.css";

interface Task {
  id: number;
  description: string;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateTask(description: string){
    setTasks([...tasks, {id:tasks.length + 1, description}])
  }

  return (
    <div className={styles.app}>
      <Header/>
      <AddTask handleCreateTask={handleCreateTask}/>
      <Info createdTasks={324534} finishedTasks={0}/>
      <div className={styles.taskList}>
        {
          tasks.map((task)=>(
            <Task
              key={task.id}
              description={task.description}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
