import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddEmployee from "./componnents/employee/add.component";
import ViewEmployee from "./componnents/employee/view.component";
import ListEmployee from "./componnents/employee/list.component";

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/employees" className="navbar-brand">NodeApp</a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/employees"} className="nav-link">
                  Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>
  
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/employees"]} component={ListEmployee}></Route>
              <Route exact path="/add" component={AddEmployee}></Route>
              <Route exact path="/employees/:id" component={ViewEmployee}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;