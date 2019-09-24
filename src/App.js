import React from 'react';
import GlobalStyle from "./styling/Global";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Home from './pages/Home'

function App() {
  return (
    <div>
      <Home />
      <GlobalStyle />
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
