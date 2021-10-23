import {ROUTES} from "../../../../Routes/routeNames";
import styles from './styles.module.scss';
import {Link} from "react-router-dom";

const FunctionalCountersLayout = () => {
  return (
    <>
      <div className={styles.buttons}>
        <Link to={ROUTES.HOME}>
          <button className={styles.button}>Home Page</button>
        </Link>
      </div>

      <h1>Counter of Counters</h1>

      <div className={styles.buttons}>
        <button className={styles.button}>Add Counter</button>
        <button className={styles.button}>Remove Counter</button>
        <button className={styles.button}>Reset</button>
      </div>

    </>
    )
}

export default FunctionalCountersLayout;