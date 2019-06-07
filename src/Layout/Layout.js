import React, { Fragment } from "react";

//components
import Footer from "../components/Footer/Footer";

const Layout = props => {
  return (
    <Fragment>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
