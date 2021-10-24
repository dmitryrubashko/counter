import {Switch, Route, Redirect} from "react-router-dom";
import homePage from "../Pages/Home";
// import CounterPageContainer from "../Pages/CounterPage/Containers/CounterPageContainer";
import FunctionalCounterContainer from "../Pages/FunctionalCounter/Containers/FunctionalCounterContainer";
import FunctionalCounterContainers from "../Pages/FunctionalCounters/Containers/FunctionalCounterContainers";


import {ROUTES} from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={homePage}/>
      {/*<Route path={ROUTES.COUNTER_PAGE} component={CounterPageContainer}/>*/}
      <Route path={ROUTES.FUNCTIONAL_COUNTER} component={FunctionalCounterContainer}/>
      <Route path={ROUTES.FUNCTIONAL_COUNTERS} component={FunctionalCounterContainers}/>
      <Redirect path='*' to={ROUTES.HOME}/>
    </Switch>
  );
};

export default Routes;
