import {Switch, Route, Redirect} from "react-router-dom";
import homePage from "../Pages/Home";
import CounterPageContainer from "../Pages/CounterPage/Containers/CounterPageContainer";
import CounterPageContainer2 from "../Pages/CounterPage/Containers/CounterPageContainer2";


import {ROUTES} from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={homePage}/>
      <Route path={ROUTES.COUNTER_PAGE} component={CounterPageContainer}/>
      <Route path={ROUTES.COUNTER_PAGE_WITH_NEG_VALUE} component={CounterPageContainer2}/>
      <Redirect path='*' to={ROUTES.HOME}/>
    </Switch>
  );
};

export default Routes;
