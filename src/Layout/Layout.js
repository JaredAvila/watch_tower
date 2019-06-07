import React, { Component, Fragment } from "react";

//components
import Footer from "../components/Footer/Footer";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../components/Navigation/Sidedrawer/Sidedrawer";

class Layout extends Component {
  state = {
    open: false
  };

  closeDrawerHandler = () => {
    this.setState({ open: false });
  };

  toggleSideDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <Fragment>
        <Toolbar toggleDrawer={this.toggleSideDrawer} />
        <Sidedrawer open={this.state.open} close={this.closeDrawerHandler} />
        <main>{this.props.children}</main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
