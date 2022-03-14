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

    componentDidMount() {
        let latestOffers: dataProps[] = []
        this.state.productRange.map((product) => {
            if (product.offer) {
                latestOffers.push(product)
                if (latestOffers.length > 2) {
                    latestOffers.slice(0, 1)
                }
            }

        })
        this.setState({latestOffers: latestOffers})
    }

    newestOffers() {
        return (
            this.state.latestOffers.map((offer, i) => {
                console.log('latest offers')
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
        )
    }

    render() {
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
                    {this.newestOffers()}
                </div>
                <div data-testid='instagram-container'>
                </div>
            </div>
        )
    }
}
//TODO home page tests
//TODO home page CSS