import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import PizzaForm from "./components/Form";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/pizza"}>
          <PizzaForm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
