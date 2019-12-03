import React, { Component, lazy, Suspense } from "react";
import { Route, withRouter, Router, Switch } from "react-router-dom";


const App1 = lazy(() => import("./app1/src/app"));
const App2 = lazy(() => import("./app2/src/app"));
const App3 = lazy(() => import("./app3/src/app"));
const App4 = lazy(() => import("./app4/src/app"));
const App5 = lazy(() => import("./app5/src/app"));
const App6 = lazy(() => import("./app6/src/app"));
const App7 = lazy(() => import("./app7/src/app"));
const App8 = lazy(() => import("./app8/src/app"));
const App9 = lazy(() => import("./app9/src/app"));
const App10 = lazy(() => import("./app10/src/app"));
const App11 = lazy(() => import("./app11/src/app"));

class App extends Component {
  render() {
    return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path="/app1"
          render={() => <App1 {...this.props} heading="Rendering app 1 now" />}
        />
        <Route
          path="/app2"
          render={() => <App2 {...this.props} heading="Rendering app 2 now" />}
        />
        <Route
          path="/app3"
          render={() => <App3 {...this.props} heading="Rendering app 3 now" />}
        />
        <Route
          path="/app4"
          render={() => <App4 {...this.props} heading="Rendering app 4 now" />}
        />
        <Route
          path="/app5"
          render={() => <App5 {...this.props} heading="Rendering app 5 now" />}
        />
        <Route
          path="/app6"
          render={() => <App6 {...this.props} heading="Rendering app 6 now" />}
        />
        <Route
          path="/app7"
          render={() => <App7 {...this.props} heading="Rendering app 7 now" />}
        />
        <Route
          path="/app8"
          render={() => <App8 {...this.props} heading="Rendering app 8 now" />}
        />
        <Route
          path="/app9"
          render={() => <App9 {...this.props} heading="Rendering app 9 now" />}
        />
        <Route
          path="/app10"
          render={() => (
            <App10 {...this.props} heading="Rendering app 10 now" />
          )}
        />
        <Route
          path="/app11"
          render={() => (
            <App11 {...this.props} heading="Rendering app 11 now" />
          )}
        />
      </Switch>
      </Suspense>
    );
  }
}

export default withRouter(App);
