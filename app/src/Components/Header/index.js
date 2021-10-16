import {Link} from "react-router-dom";
import {ROUTES} from "../../Routes/routeNames";
import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={styles.headerButtons}>

      <Link to={ROUTES.HOME}>
        <button className={styles.button}>Home Page</button>
      </Link>

      <Link to={ROUTES.USERS_PAGE}>
        <button className={styles.button}>Users Page</button>
      </Link>

      <Link to={ROUTES.COUNTER_PAGE}>
        <button className={styles.button}>Counter Page</button>
      </Link>

    </div>
  );
};

export default Header;
