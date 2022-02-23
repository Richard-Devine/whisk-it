import * as React from 'react'
import {ProductDetailsProps, ProductDetailsState} from "../webpage-types"
import {data} from "../data";

export default class ProductDetails extends React.Component <ProductDetailsProps, ProductDetailsState> {
    state : ProductDetailsState = {
        productInfo: data
    }
    buy() {
    console.log('hello')
    }
    render() {
        return (
            <div>
                {this.state.productInfo.map((product, i) =>
                {
                    if (product.id === this.props.id) {
                        return (
                            <div key={i}>
                                <div data-testid='back-button-div' onClick={() => this.props.backButton()}>
                                    Back
                                </div>
                                <div data-testid='image-div'>
                                    <img src={product.imageURL} alt={product.title}/>
                                </div>
                                <div data-testid='title-div'>
                                    {product.title}
                                </div>
                                <div data-testid='description-div'>
                                    {product.description}
                                </div>
                                <div data-testid='price-div'>
                                    {product.price}
                                </div>
                                <div data-testid='allergy-div'>
                                    {product.allergens}
                                </div>
                                <div data-testid='buy-div' onClick={() => this.buy()}>
                                    Buy
                                </div>

                            </div>
                        )
                    } else {
                        return null
                    }
                })}
            </div>
        )
    }
}

//TODO link correct data to all the divs
//TODO link Paypal API to buy div