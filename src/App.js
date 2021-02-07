import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;