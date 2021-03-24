import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";
import Detail from "Routes/Detail";

// 라우터에는 페이지들이 들어감
// Redirect는 특정 페이지로 돌아가는 역할
export default () => (
  <Router>
    <Header></Header>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/tv" exact component={TV}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
      <Route path="/tv/:id" component={Detail}></Route>
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  </Router>
);
