import * as React from 'react'
import {dataProps, HomeProps} from "../webpage-types";
import {data} from "../data";
import {HomeState} from "../webpage-types";

export default class Home extends React.Component <HomeProps> {
    state: HomeState = {
        productRange: data,
        latestOffers: [],
        index: 0
    }
    render() {
        {console.log(this.state.latestOffers)}
        return (
            <div>
                <div data-testid='blurb-container'>
                    This is the blurb
                </div>
                <div data-testid='new-products-container' className='new-products-container' onClick={() => {
                    this.props.onClick('ProductList')
                }}>
                    Our latest products!
                    {this.state.productRange.map((product, i) => {
                        if (product.id === this.state.productRange.length - 1 || product.id === this.state.productRange.length - 2) {
                            return (
                                <div className='new-products-wrapper' key={i}>
                                    <div data-testid='image-div' className='product-list-image-div'>
                                        <img src={product.imageURL} alt={product.title}/>
                                    </div>
                                    <div data-testid='info-container' className='product-list-info-container'>
                                        <div data-testid='title-div'
                                             className='product-list-info product-list-title-div'>
                                            {product.title}
                                        </div>
                                        <div data-testid='description-div' className='product-list-info'>
                                            {product.description}
                                        </div>
                                        <div data-testid='price-div' className='product-list-info'>
                                            £{(product.price / 100).toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div data-testid='offers-container' onClick={() => {
                    this.props.onClick('Offers')
                }}>
                    Our latest offers!
                    {this.state.productRange.map((product) => {
                        console.log(this.state.latestOffers)
                        if (product.offer) {
                            this.state.latestOffers.push(product)
                            console.log(this.state.latestOffers.length)
                            this.state.latestOffers.map((offer,i) => {
                                console.log(this.state.latestOffers)

                            return (
                                <div className='new-products-wrapper' key={i}>
                                    <div data-testid='image-div' className='product-list-image-div'>
                                        <img src={offer.imageURL} alt={offer.title}/>
                                    </div>
                                    <div data-testid='info-container' className='product-list-info-container'>
                                        <div data-testid='title-div'
                                             className='product-list-info product-list-title-div'>
                                            {offer.title}
                                        </div>
                                        <div data-testid='description-div' className='product-list-info'>
                                            {offer.description}
                                        </div>
                                        <div data-testid='price-div' className='product-list-info'>
                                            £{(offer.price / 100).toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            )

                            })
                            if (this.state.latestOffers.length > 2) {
                                this.state.latestOffers.slice(0, 1)
                        }
                        }
                    })
                    }
                </div>
                <div data-testid='instagram-container'>
                </div>
            </div>
        )
    }
}
//TODO change the map to trigger once and produce the required divs (do this on componentDidMount?).