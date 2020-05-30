import React from 'react';
import './assets/styles/Vars.scss';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/AppNavbar'
import Login from './components/LoginRegister';
import Cameras from './components/Cameras';
import NotFound from './components/NotFound'
import PrivateRoute from './components/PrivateRoute'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Navbar />
            <Login />
          </Route>
          
          <PrivateRoute path="/cameras">
            <Navbar />
            <Cameras />
          </PrivateRoute>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
