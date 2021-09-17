import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

import Home from './components/Home';
import PizzaForm from "./components/Form";

const App = () => {

  const initialFormValues = {
    name: '',
    size: '',
    sauce: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    topping5: false,
    special: '',
  }

  const initialFormErrors = {
    name: '',
    size: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    topping5: false,
  }


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
