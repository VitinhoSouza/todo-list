
import iconDelete from '../utils/delete.svg';

import styles from './Task.module.css';

interface TaskProps {
    description: string;
}

export function Task({description}:TaskProps){

    return(
        <div className={styles.task}>
            <input
                type="checkbox"
            />

            <span>{description}</span>

            <div>
                <img src={iconDelete} alt="deletar tarefa" />
            </div>
        </div>
    )
}