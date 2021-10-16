import React from 'react';
import styles from './styles.module.scss'
import PropTypes from "prop-types"

const Counter = ({countValue, handleIncrement, handleDecrement, isHidden, handleHiddenToggle}) => {
  return (
    <div className={styles.wrapper} style={{backgroundColor: isHidden? 'pink' : 'lightblue'}}>

      <div>SuperMegaCounter2000</div>

      <div className={styles.display}>
        {countValue}
      </div>

      <div className={styles.contolButtons}>
        <button className={styles.controlButton} onClick={handleDecrement}>-</button>
        <button className={styles.controlButton} onClick={handleIncrement}>+</button>
      </div>

        <button onClick={handleHiddenToggle}>{isHidden ? 'Show' : "Hide"}</button>

      {!isHidden ? <div>Hello I am hidden block</div> : null}

    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
}

export default Counter;
