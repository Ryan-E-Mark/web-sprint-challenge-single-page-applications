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
    sauce: '',
  }

  const initialPizzas = [];
  const initialDisabled = true;

  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onChange = (name, value) => {
    setFormValues({...formValues, [name]: value});
  }

  const postPizza = newPizza => {
    axios.post("https://reqres.in/api/orders", newPizza)
      .then(resp => {
        console.log(resp)
      }).catch(err => console.log(err))
  }

  const onSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      topping3: formValues.topping3,
      topping4: formValues.topping4,
      topping5: formValues.topping5,
      special: formValues.special,
    }
    postPizza(newPizza);
  }


  return (
    <div>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/pizza"}>
          <PizzaForm 
            values={formValues}
            onSubmit={onSubmit}
            onChange={onChange}
            disabled={disabled}
            />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
