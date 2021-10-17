import React from 'react';
import styles from './styles.module.scss'
import PropTypes from "prop-types"

const Counter2 = ({countValue, handleIncrement, handleDecrement, parityType, handleReset}) => {
  return (
    <div className={styles.wrapper} style={{backgroundColor: parityType === 'Even Number'? 'rgb(171,162,134)' : 'rgb(105,105,126)'}}>

      <div className={styles.description}>SuperMegaCounter2000</div>

      <div className={styles.display}>
        {countValue}
      </div>

      <div className={styles.propertiesDisplay}>
        {parityType}
      </div>

      <div className={styles.contolButtons}>
        <button className={styles.controlButtonLeft} onClick={handleDecrement}>-</button>
        <button className={styles.resetButton} onClick={handleReset}>Reset</button>
        <button className={styles.controlButton} onClick={handleIncrement}>+</button>
      </div>

    </div>
  );
};

Counter2.propTypes = {
  countValue: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  parityType: PropTypes.string,
}

export default Counter2;
