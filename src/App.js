import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import Layout from "./Layout/Layout";
import Landing from "./containers/Landing/Landing";
import Movies from "./containers/Movies/Movies";
import SearchResults from "./components/SearchResults/SearchResults";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/search/:query" component={SearchResults} />
          <Route path="/movies" component={Movies} />
          <Route path="/" component={Landing} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
