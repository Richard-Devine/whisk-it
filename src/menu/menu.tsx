import * as React from 'react'
import {MenuProps} from "../webpage-types";
import basket from '../website-icons/shopping-cart.webp'
import {Link, useNavigate} from "react-router-dom";
import menuIcon from '../website-icons/menu-icon.webp'
import DropDown from "../DropDown";

export default function Menu(props:MenuProps){
    let navigate = useNavigate()

        return (
            <div>
                <div className="menu-wrapper">
                <span className="menu-options" data-testid='home-button'>
                    <Link to="/">Home</Link>
                </span>
                    <span className="menu-options"
                          data-testid='products-button'>
                        <Link to="/Products">Products</Link>
                </span>
                    <span className="menu-options"
                          data-testid='offers-button'>
                        <Link to="/Offers">Offers</Link>
                </span>
                    <span className="menu-options"
                          data-testid='gallery-button'>
                        <Link to="/Gallery">Gallery</Link>
                </span>
                </div>
                <span className="drop-down-container">
                    <DropDown/>
                </span>
                    <span onClick={() => navigate('/Basket')} className="menu-options basket-button"
                          data-testid='basket-button'>
                    <div className='basket-div'>
                    <img src={basket} alt='My Basket' className='basket-image'/>
                    </div>
                    <div className='menu-options basket-total'>
                        £{(props.myBasket / 100).toFixed(2)}
                    </div>
                </span>

                </div>
        )
    }

