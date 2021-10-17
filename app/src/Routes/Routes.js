import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import homePage from "../Pages/Home";
import CounterPageContainer from "../Pages/CounterPage/Containers/CounterPageContainer";

import {ROUTES} from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={homePage}/>
      <Route path={ROUTES.COUNTER_PAGE} component={CounterPageContainer}/>
      <Redirect path='*' to={ROUTES.HOME}/>
    </Switch>
  );
};

export default Routes;
