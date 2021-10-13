import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../screen/home/home";
import Shop from "../screen/shop/shop";
import Login from "../screen/login/login";
import ShoppingCard from '../components/shoppingCards/shoppingCards'
import Signup from "../screen/signUp/signup"
import ProductDetail from "../screen/productsDetail/productdetail"

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
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/productdetail">
            <ProductDetail />
          </Route>
          <Route exact path="/shoppingcard">
            <ShoppingCard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
