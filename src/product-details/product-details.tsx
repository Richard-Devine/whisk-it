import * as React from 'react'
import {ProductDetailsProps, ProductDetailsState} from "../webpage-types"
import {data} from "../data";
import backButton from '../website-icons/Back-Button.webp'

export default class ProductDetails extends React.Component <ProductDetailsProps, ProductDetailsState> {
    state: ProductDetailsState = {
        productInfo: data
    }

    render() {
        return (
            <div>

                {this.state.productInfo.map((product, i) => {
                    if (product.id === this.props.id) {
                        return (
                            <div key={i} className='product-details-wrapper'>
                                <div data-testid='image-div' className='product-details-image-div'>
                                    <img src={product.imageURL} alt={product.title}/>
                                </div>
                                <div className='product-details-content'>
                                    <div className='title-back-button-wrapper'>
                                        <div data-testid='title-div' className='product-details-title-div'>
                                            {product.title}
                                        </div>
                                        <div data-testid='back-button-div' onClick={() => this.props.backButton()}>
                                            <img src={backButton} alt='Back Button' className='back-button'/>
                                        </div>
                                    </div>
                                    <div data-testid='description-div'>
                                        {product.description}
                                    </div>
                                    <div className='allergy-price-buy-container'>
                                        <div data-testid='allergy-div'>
                                            {product.allergens}
                                        </div>
                                        <div className='price-buy-wrapper'>
                                            <div data-testid='price-div'>
                                                £{(product.price / 100).toFixed(2)}
                                            </div>
                                            <div data-testid='buy-div' className='product-details-buy-div'
                                                 onClick={() => this.props.addProductButton(product)}>
                                                Add to basket
                                            </div>
                                        </div>
                                    </div>
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
