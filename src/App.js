import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

import Home from './components/Home';
import PizzaForm from "./components/Form";
import formSchema from "./Validate/validate";

const App = () => {

  const initialFormValues = {
    name: '',
    size: '',
    sauce: '',
    toppings: false,
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
 
  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  const postPizza = newPizza => {
    axios.post("https://reqres.in/api/orders", newPizza)
      .then(resp => {
        setPizzas([resp.data, ...pizzas]);
        setFormValues(initialFormValues);
        console.log(resp);
      }).catch(err => {
        console.log(err);
        setFormValues(initialFormValues);
      })
  }
  
  const onSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce,
      special: formValues.special,
      toppings: ['pepperoni', 'salami', 'redpepper', 'sausage', 'pineapple', 'redonion', 'garlic', 'chicken', 'tomatoes', 'greenpepper'].filter(topping => !!formValues[topping]),
    }
    postPizza(newPizza);
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

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
            errors={formErrors}
            />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
