import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss?v=1.2.0";
import "./assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import EmployerAdminLayout from "./layouts/employerAdmin.js";
import EmployeeAdminLayout from "./layouts/employeeAdmin.js";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
const hist = createBrowserHistory();

//import  userDetails2 from "./components/userDetails2.component";
function App() {
  window.MyLib = {}
  return (
  
  <Router history={hist}>
    
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-up" component={SignUp} />
            
            <Route path="/sign-in" component={Login} />
            
            <Route path="/employeradmin" render={(props) => <EmployerAdminLayout {...props} />} />
            <Route path="/employeeadmin" render={(props) => <EmployeeAdminLayout {...props} />} />
    
          </Switch>
        </Router>
  );
}

export default App;
