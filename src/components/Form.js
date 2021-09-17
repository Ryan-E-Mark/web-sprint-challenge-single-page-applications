import React from "react";
import { Link } from 'react-router-dom';
import "../Form.css";

export default function PizzaForm(props) {

    const { onChange, values, onSubmit, disabled } = props;

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
                    <a><Link to={"/"}>Home</Link></a>
                </div>
            </nav>
            <section className="form-page">
                <div className="form-div">
                    <form id="pizza-form" onSubmit={submit}>
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
                        <button disabled={disabled}>Submit your order!</button>
                    </form>
                </div>
            </section>
        </div>
    )
}