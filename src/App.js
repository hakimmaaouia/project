import React from "react";
import "./App.css";
import Layout from "./Layout/layout";
import Login from "./components/login";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <Router>
        {" "}
        <Layout>
          <Switch>
            <Route path="/login"   >
              <Login />
            </Route>
            <Route exact path="/"   >
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
