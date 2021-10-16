import styles from './styles.module.scss'

const UserCard = ({name, age, city}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Name: {name}</h1>
      <h2 className={styles.h2}>Age: {age}</h2>
      <h3 className={styles.h3}>City: {city}</h3>
    </div>
  );
};

export default UserCard;
