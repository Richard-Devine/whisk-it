import * as React from "react";
import {MenuProps} from "../webpage-types";
import basket from "../website-icons/shopping-cart.webp";
import {Link, useNavigate} from "react-router-dom";
import Dropdown from "../dropdown-menu/dropdown";

export default function Menu(props: MenuProps) {

    let navigate = useNavigate();

    return (
        <div>
            <div className="menu-wrapper">
                <span className="menu-options">
                    <Link to="/">Home</Link>
                </span>
                <span className="menu-options">
                        <Link to="/Products">Products</Link>
                </span>
                <span className="menu-options">
                        <Link to="/Offers">Offers</Link>
                </span>
                <span className="menu-options">
                        <Link to="/Gallery">Gallery</Link>
                </span>
            </div>
            <span className="drop-down-container">
                    <Dropdown/>
                </span>
            <span onClick={() => navigate("/Basket")} className="menu-options basket-button">
                    <div className="basket-div">
                    <img src={basket} alt="My Basket" className="basket-image"/>
                    </div>
                    <div className="menu-options basket-total">
                        £{(props.myBasket / 100).toFixed(2)}
                    </div>
                </span>

        </div>
    );
};

