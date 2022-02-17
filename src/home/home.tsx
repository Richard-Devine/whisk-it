import * as React from 'react'

export default class Home extends React.Component {
    render(){
        return(
            <div>
                <div data-testid='blurb-container'>
                    This is the blurb
                </div>
                <div data-testid='new-products-container'>
                    This is the new products
                </div>
                <div data-testid='offers-container'>
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