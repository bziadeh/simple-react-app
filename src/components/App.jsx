import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Customers from "./Customers";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/customers" />} />
          <Route path="/customers" component={Customers}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
