import React from "react";
import { Route } from "react-router-dom";

//components
import Layout from "./Layout/Layout";
import Landing from "./containers/Landing/Landing";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Route path="/" component={Landing} />
      </Layout>
    </div>
  );
};

export default App;
