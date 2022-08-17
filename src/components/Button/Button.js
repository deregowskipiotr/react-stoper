import styles from './Button.module.scss';

const Button = ({start,  reset, stop}) => {
  return(
  <div>
    <button className={styles.button} onClick={start}>START</button>
    <button className={styles.button} onClick={reset}>RESET</button>
    <button className={styles.button} onClick={stop}>STOP</button>
        
  </div>
  )
}

export default Button