import React from 'react';
import styles from './styles.module.scss'

const Counter = ({countValue, handleIncrement, handleDecrement}) => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.display}>
        {countValue}
      </div>

      <div className={styles.contolButtons}>
        <button className={styles.controlButton} onClick={handleDecrement}>Decrement</button>
        <button className={styles.controlButton} onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
