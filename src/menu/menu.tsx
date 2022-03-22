import * as React from 'react'
import {MenuProps} from "../webpage-types";
import basket from '../website-icons/shopping-cart.webp'
import {Link, useNavigate} from "react-router-dom";

export default function Menu(props:MenuProps){
    let navigate = useNavigate()
        return (
            <div>
                <span onClick={() => props.onClick('Home')} className="menu-options" data-testid='home-button'>
                    <Link to="/">Home</Link>
                </span>
                    <span onClick={() => props.onClick('ProductList')} className="menu-options"
                          data-testid='products-button'>
                        <Link to="/Products">Products</Link>
                </span>
                    <span onClick={() => props.onClick('Offers')} className="menu-options"
                          data-testid='offers-button'>
                        <Link to="/Offers">Offers</Link>
                </span>
                    <span onClick={() => props.onClick('Gallery')} className="menu-options"
                          data-testid='gallery-button'>
                        <Link to="/Gallery">Gallery</Link>
                </span>
                    <span onClick={() => props.onClick('ContactUs')} className="menu-options"
                          data-testid='contact-us-button'>
                    Contact Us
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

