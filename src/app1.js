import React, { Component} from "react";
import { Route, withRouter, Router, Switch } from "react-router-dom";
//import
class AppMagic extends Component {
  render() {
    return (
        <Route
          path="/"
          render={() => <App {...this.props} heading="Rendering app now" />}
        />
    );
  }
}

export default withRouter(AppMagic);
