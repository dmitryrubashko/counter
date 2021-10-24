import React from 'react';

import {ROUTES} from "../../Routes/routeNames";
import {Link} from "react-router-dom";
import styles from './styles.module.scss'

const homePage = () => {
  return (
    < >
    {/*<Link to={ROUTES.COUNTER_PAGE}>*/}
    {/*  <button className={styles.button}>Counter Pаge</button>*/}
    {/*</Link>*/}
    <div className={styles.buttons}>
      <Link to={ROUTES.FUNCTIONAL_COUNTER}>
        <button className={styles.button}>Simple Counter</button>
      </Link>

      <Link to={ROUTES.FUNCTIONAL_COUNTERS}>
        <button className={styles.button}>Counter of Counters</button>
      </Link>
    </div>
      <h1>Home Page</h1>
    </>
  );
};

export default homePage;
