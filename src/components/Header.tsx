
import logoImg from '../utils/logo.png'
import styles from './Header.module.css';

export function Header(){

    return(
        <div className={styles.header}>
            <img src={logoImg} alt="logo" />
        </div>
    )
}