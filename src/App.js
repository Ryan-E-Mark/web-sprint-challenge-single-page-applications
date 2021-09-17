import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
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
    pepperoni: false,
    salami: false,
    redpepper: false,
    sausage: false,
    pineapple: false,
    redonion: false,
    garlic: false,
    chicken: false,
    tomatoes: false,
    greenpepper: false,
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
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(resp => {
        setPizzas([resp.data, ...pizzas]);
        setFormValues(initialFormValues);
        console.log('https://reqres.in/api/orders', resp.data);
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
      special: formValues.special.trim(),
      pepperoni: formValues.pepperoni,
      salami: formValues.salami,
      redpepper: formValues.redpepper,
      sausage: formValues.sausage,
      pineapple: formValues.pineapple,
      redonion: formValues.redonion,
      garlic: formValues.garlic,
      chicken: formValues.chicken,
      tomatoes: formValues.tomatoes,
      greenpepper: formValues.greenpepper,
      // toppings: ['pepperoni', 'salami', 'redpepper', 'sausage', 'pineapple', 'redonion', 'garlic', 'chicken', 'tomatoes', 'greenpepper'].filter(topping => !!formValues[topping]),
    }
    postPizza(newPizza);
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    
      <Switch>
        <Route exact path={"/"}>
          <Home href="/"/>
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
    
  );
};
export default App;
