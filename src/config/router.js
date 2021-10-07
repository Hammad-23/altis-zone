import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../screen/home/home";
import Shop from "../screen/shop/shop";
import Login from "../screen/login/login";
import Signup from "../screen/signUp/signup";
import ProductDetail from "../screen/productsDetail/productdetail";
import ShoppingCard from '../components/shoppingCards/shoppingCards'
import StockSkits from '../components//stocksKits/stock'
import CustomerCare from "../components/customerCare/customer";

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
          <Route exact path="/stockSkits">
            <StockSkits/>
          </Route>
          <Route exact path="/customerCare">
            <CustomerCare/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
