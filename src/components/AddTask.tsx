import { useState, ChangeEvent, useEffect } from 'react';

import styles from './AddTask.module.css';
import iconPlus from '../utils/plus.svg';

interface AddTaskProps {
    handleCreateTask: (description: string) => void;
}

export function AddTask({handleCreateTask}:AddTaskProps){

    const [newTask, setNewTask] = useState("");
    const [inputIsActive, setInputIsActive] = useState(false);

    const windowSize = useWindowSize();
    const smallWindow = windowSize.width < 902;

    return(
        <div className={styles.addTask}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={(event: ChangeEvent<HTMLInputElement>)=>setNewTask(event.target.value)}
                onBlur={()=>setInputIsActive(false)}
                onFocus={()=>setInputIsActive(true)}
                className={inputIsActive && !smallWindow ? styles.inputIsActive: ""}
            />
            {inputIsActive && !smallWindow && (
                <span className={styles.inputDescription}>Descrição da tarefa |</span>
            )}
            <button 
                className={inputIsActive && !smallWindow ? styles.buttonWhenInputIsActive: ""} 
                onClick={
                    newTask.trim().length > 0 ? 
                    ()=>{handleCreateTask(newTask);setNewTask("")} 
                    : ()=>alert("Insira algum texto para adicionar uma nova tarefa.")}
            >
                Criar
                <img src={iconPlus} />
            </button>
        </div>
    )
}

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
