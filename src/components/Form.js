import React from "react";
import { Link } from 'react-router-dom';
import "../Form.css";

export default function PizzaForm(props) {

    const { onChange, values, onSubmit, disabled, errors } = props;

    const submit = event => {
        event.preventDefault();
        onSubmit();
    }

    const change = event => {
        const { name, value, checked, type } = event.target;
        const valueUsed = type === 'checkbox' ? checked : value;
        onChange(name, valueUsed);
    }


    return(
        <div>
            <nav>
                <div className="nav-text">
                    <h2>World's Best Pizza!</h2>
                </div>
                <div className="nav-link">
                    <div><Link to={"/"}>Home</Link></div>
                </div>
            </nav>
            <section className="form-page">
                <div className="form-div">
                    <form id="pizza-form" onSubmit={submit}>
                        <div className="error-text">
                            <p>{errors.name}</p>
                            <p>{errors.size}</p>
                            <p>{errors.sauce}</p>
                        </div>
                        <label>
                            Name for the order: 
                            <input 
                                id="name-input"
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={change}
                                />
                        </label>

                        <label>
                            Select your size:
                            <select onChange={change} value={values.size} name="size" id="size-dropdown">
                                <option value="">
                                    --Select a Size--
                                </option>
                                <option value="small">
                                    Small
                                </option>
                                <option value="medium">
                                    Medium
                                </option>
                                <option value="large">
                                    Large
                                </option>
                                <option value="extralarge">
                                    Extra Large
                                </option>
                            </select>
                        </label>

                        <label>
                            Select your sauce:
                            <select onChange={change} value={values.sauce} name="sauce" id="sauce-dropdown">
                                <option value="">
                                    --Select a Sauce--
                                </option>
                                <option value="traditional">
                                    Traditional
                                </option>
                                <option value="garlicbutter">
                                    Garlic Butter
                                </option>
                                <option value="bbq">
                                    BBQ
                                </option>
                                <option value="none">
                                    None
                                </option>
                            </select>
                        </label>

                        <div className="toppings">
                            <h3>Toppings</h3>
                            <p>Select up to five!</p>
                            <label>
                                Pepperoni
                                <input 
                                    type="checkbox"
                                    name="pepperoni"
                                    value={values.pepperoni}
                                    onChange={change}
                                />
                            </label>
                            <label>
                                Salami
                                <input 
                                    type="checkbox"
                                    name="salami"
                                    value={values.salami}
                                    onChange={change}
                                />
                            </label>
                            <label>
                                Red Peppers
                                <input 
                                    type="checkbox"
                                    name="redpepper"
                                    value={values.redpeppers}
                                    onChange={change}
                                />
                            </label>
                            <label>
                                Sausage
                                <input 
                                    type="checkbox"
                                    name="sausage"
                                    value={values.sausage}
                                    onChange={change}
                                />
                            </label>
                            <label>
                                Pineapple
                                <input 
                                    type="checkbox"
                                    name="pineapple"
                                    value={values.pineapple}
                                    onChange={change}
                                />
                            </label>
                            <label>
                                Red Onion
                                <input 
                                    type="checkbox"
                                    name="redonion"
                                    value={values.redonion}
                                    onChange={change}
                                />
                            </label>
                            <label>
                                Roasted Garlic
                                <input 
                                    type="checkbox"
                                    name="garlic"
                                    value={values.garlic}
                                    onChange={change}
                                />
                            </label>
                            <label>
                                Grilled Chicken
                                <input 
                                    type="checkbox"
                                    name="chicken"
                                    value={values.chicken}
                                    onChange={change}
                                />
                            </label>
                            <label>
                                Tomatoes
                                <input 
                                    type="checkbox"
                                    name="tomatoes"
                                    value={values.tomatoes}
                                    onChange={change}
                                />
                            </label>
                            <label>
                                Green Pepper
                                <input 
                                    type="checkbox"
                                    name="greenpepper"
                                    value={values.greenpepper}
                                    onChange={change}
                                />
                            </label>
                        </div>

                        <label>
                            Any special instructions?
                            <input 
                                id="special-text"
                                type="text"
                                name="special"
                                value={values.special}
                                onChange={change}
                            />
                        </label>

                        <button id="order-button" disabled={disabled}>Add to Order!</button>

                    </form>
                </div>
            </section>
        </div>
    )
}