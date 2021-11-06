import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo"
import PageRecipes from "./pages/PageRecipes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        

        <Route path="/pageTwo" component={PageTwo} />

        <Route path="/pageRecipes" children={(props) => <PageRecipes {...props} />} />

        <Route exact path="/" component={Home} />

        {/*<Route exact path="/" render={(props) => <Home {...props} />} />*/}

        {/*<Route path="/path">
          <input placeholder="Say Hello!"></input>
        </Route>*/}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;