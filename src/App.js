import React from 'react';
import GlobalStyle from "./styling/Global";

import { Route } from "react-router-dom";

import Home from './pages/Home'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <PrivateRoute path="/home" component={Home} />
      <GlobalStyle />
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
