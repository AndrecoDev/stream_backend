import React from 'react';
import './assets/styles/Vars.scss';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/AppNavbar'
import Login from './components/LoginRegister';
import Cameras from './components/Cameras';
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Navbar />
            <Login />
          </Route>

          <Route exact path="/cameras">
            <Navbar />
            <Cameras />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
