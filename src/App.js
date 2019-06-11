import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import Layout from "./Layout/Layout";
import Landing from "./containers/Landing/Landing";
import Movies from "./containers/Movies/Movies";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/" component={Landing} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
