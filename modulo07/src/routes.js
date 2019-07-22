import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
