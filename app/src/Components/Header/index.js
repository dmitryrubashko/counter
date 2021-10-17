import {Link} from "react-router-dom";
import {ROUTES} from "../../Routes/routeNames";
import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={styles.headerButtons}>

      <Link to={ROUTES.HOME}>
        <button className={styles.button}>Home Page</button>
      </Link>

      <Link to={ROUTES.COUNTER_PAGE}>
        <button className={styles.button}>Counter Page (Without negative values)</button>
      </Link>

      <Link to={ROUTES.COUNTER_PAGE_WITH_NEG_VALUE}>
        <button className={styles.button}>Counter Page (Positive and negative values)</button>
      </Link>

    </div>
  );
};

export default Header;
