import * as React from 'react'
import {MenuProps} from "../webpage-types";

export default class Menu extends React.Component <MenuProps> {
    render() {
        return (
            <div>
                <span onClick={() => this.props.onClick('Home')} data-testid='home-button'>
                    Home
                </span>
                <span onClick={() => this.props.onClick('ProductList')} data-testid='products-button'>
                    Products
                </span>
                <span onClick={() => this.props.onClick('Offers')} data-testid='offers-button'>
                    Offers
                </span>
                <span onClick={() => this.props.onClick('Gallery')} data-testid='gallery-button'>
                    Gallery
                </span>
                <span onClick={() => this.props.onClick('ContactUs')} data-testid='contact-us-button'>
                    Contact Us
                </span>
                <span onClick={() => this.props.onClick('Basket')} data-testid='basket-button'>
                    <img src='../images/shopping-cart.png' alt='My Basket'/>
                </span>
            </div>
        )
    }
}
