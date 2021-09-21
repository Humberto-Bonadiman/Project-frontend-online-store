import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/product/:id&:name" render={ (props) => <Product { ...props } /> } />
        <Route path="/cart" render={ (props) => <Cart { ...props } /> } />
        <Route exact path="/" render={ (props) => <Home { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
