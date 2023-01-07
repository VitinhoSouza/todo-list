import { useState, ChangeEvent } from 'react';

import styles from './AddTask.module.css';
import iconPlus from '../utils/plus.svg';

interface AddTaskProps {
    handleCreateTask: (description: string) => void;
}

export function AddTask({handleCreateTask}:AddTaskProps){

    const [newTask, setNewTask] = useState("");
    const [inputIsActive, setInputIsActive] = useState(false);

    return(
        <div className={styles.addTask}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={(event: ChangeEvent<HTMLInputElement>)=>setNewTask(event.target.value)}
                onBlur={()=>setInputIsActive(false)}
                onFocus={()=>setInputIsActive(true)}
            />
            {inputIsActive && (
                <span className={styles.inputDescription}>Descrição da tarefa |</span>
            )}
            <button 
                className={inputIsActive ? styles.buttonWhenInputIsActive: ""} 
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