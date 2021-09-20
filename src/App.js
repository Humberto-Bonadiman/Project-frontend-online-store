import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={ (props) => <Home { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
