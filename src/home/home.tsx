import * as React from 'react'
import {HomeProps} from "../webpage-types";

export default class Home extends React.Component <HomeProps> {
    render(){
        return(
            <div>
                <div data-testid='blurb-container'>
                    This is the blurb
                </div>
                <div data-testid='new-products-container' onClick={() => {this.props.onClick('ProductList')}}>
                    This is the new products
                </div>
                <div data-testid='offers-container' onClick={() => {this.props.onClick('Offers')}}>
                    This is the current offers
                </div>
                <div data-testid='instagram-container'>
                    This is the instagram feed
                </div>
                <div data-testid='footer-container'>
                    This is the footer
                </div>
            </div>
        )
    }
}