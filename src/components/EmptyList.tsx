
import styles from './EmptyList.module.css';

import clipboard from '../utils/clipboard.png';

export function EmptyList(){

    return(
        <div className={styles.emptyList}>
            <img src={clipboard} alt="clipboard" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}