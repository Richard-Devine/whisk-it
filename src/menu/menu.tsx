import * as React from 'react'
import {MenuProps} from "../webpage-types";
import basket from '../website-icons/shopping-cart.webp'
import {BrowserRouter as Router, Link} from "react-router-dom";

export default class Menu extends React.Component <MenuProps> {

    render() {
        return (
            <div>
                <span onClick={() => this.props.onClick('Home')} className="menu-options" data-testid='home-button'>
                    Home
                </span>
                    <span onClick={() => this.props.onClick('ProductList')} className="menu-options"
                          data-testid='products-button'>
                    Products
                </span>
                    <span onClick={() => this.props.onClick('Offers')} className="menu-options"
                          data-testid='offers-button'>
                    Offers
                </span>
                    <span onClick={() => this.props.onClick('Gallery')} className="menu-options"
                          data-testid='gallery-button'>
                    Gallery
                </span>
                    <span onClick={() => this.props.onClick('ContactUs')} className="menu-options"
                          data-testid='contact-us-button'>
                    Contact Us
                </span>
                    <span onClick={() => this.props.onClick('Basket')} className="menu-options basket-button"
                          data-testid='basket-button'>
                    <div className='basket-div'>
                    <img src={basket} alt='My Basket' className='basket-image'/>
                    </div>
                    <div className='menu-options basket-total'>
                        £{(this.props.myBasket / 100).toFixed(2)}
                    </div>
                </span>
                </div>
        )
    }
}
