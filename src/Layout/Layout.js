import React, { Fragment } from "react";

//components
import Footer from "../components/Footer/Footer";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../components/Navigation/Sidedrawer/Sidedrawer";

const Layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <Sidedrawer />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
