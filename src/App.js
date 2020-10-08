import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import "./styles.css";

import Home from "./components/Home";
import Discover from "./components/Discover";
import Contact from "./components/Contact";
import OurFruits from "./components/OurFruits";
import PageNotFound from "./components/PageNotFound";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul className="nav">
          <Link to="/">Fruit My Life</Link>
          <Link to="/fruits">Our Fruits</Link>
          <Link to="/discover">Discover</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <Switch>
        {/* Syntax 1 for route (passing the router props + custom props) */}
        <Route
          path="/fruits/:name?/:country?"
          render={(props) => <OurFruits data={[1, 2, 3, 4]} {...props} />}
        />

        {/* QueryString approach: */}
        {/* /fruits?country=brazil&name=banana */}

        {/* Syntax 2 for route (passing custom props, but not passing the router props) */}
        {/* <Route path="/fruits/:name?/:country?">
          <OurFruits data={[1, 2, 3, 4]} />
        </Route> */}

        {/* Syntax 3 for route (passing the router props but no custom props) */}
        <Route path="/discover" component={Discover} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route path="/fruitless" component={PageNotFound} />
        <Redirect to="/fruitless" />
      </Switch>
    </div>
  );
}
