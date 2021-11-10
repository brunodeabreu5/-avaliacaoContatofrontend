import React from "react";

import{BrowserRouter, Switch, Route } from "react-router-dom";

import home from "./pages/home/index";

export default function routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home}/>
      </Switch>
    </BrowserRouter>
  );
}