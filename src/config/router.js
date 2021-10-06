import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../screen/home/home";
import Shop from "../screen/shop/shop";
import Products from "../screen/products/product";
import Login from "../screen/login/login";
import ShoppingCard from '../components/shoppingCards/shoppingCards'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/shoppingcard">
            <ShoppingCard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
