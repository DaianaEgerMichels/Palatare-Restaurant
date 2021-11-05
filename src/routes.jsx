import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo"
import PageRecipes from "./pages/PageRecipes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pageTwo" component={PageTwo} />

        <Route exact path="/" component={Home} />

        <Route path="/pageRecipes" children={(props) => <PageRecipes {...props} />} />

        {/*<Route exact path="/" render={(props) => <Home {...props} />} />*/}

        {/*<Route path="/path">
          <input placeholder="Say Hello!"></input>
        </Route>*/}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;