import React from "react";
import { Link, useHistory } from 'react-router-dom';
import "../Home.css";



export default function Home(props) {

    // Pizza Form button
    const history = useHistory();
    const pizzaButton = () => history.push("/pizza");

    return (
        <div>
            <nav>
                <div className="nav-text">
                    <h2>World's Best Pizza!</h2>
                </div>
                <div className="nav-link">
                    <a><Link to={"/"}>Home</Link></a>
                </div>
            </nav>
            <div className="pizza-pic">
                    <h1>Saucy Pizza Delivered QUICK!</h1>
                    <button id="pizza-btn" onClick={pizzaButton}>Order a Pizza!</button>
            </div>
            
        </div>
    )
}