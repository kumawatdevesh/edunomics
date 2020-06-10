import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './MainPage/Home';
import SignUp from './Auth/SignUp';
import DashBoards from './User/DashBoards';
import Session from './User/Session';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={DashBoards} />
        <Route path="/sessions" component={Session} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
