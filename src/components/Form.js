import React from "react";
import { Link } from 'react-router-dom';
import "../Form.css";

export default function PizzaForm(props) {
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
                    <form id="pizza-form">
                        <label>
                            Name for the order: 
                            <input 
                                id="name-input"
                                type="text"
                                name="name"
                                />
                        </label>
                    </form>
                </div>
            </section>
        </div>
    )
}