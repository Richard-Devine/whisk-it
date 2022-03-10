import * as React from 'react'
import {OffersProps, OffersState} from "../webpage-types";
import {data} from "../data";

export default class Offers extends React.Component <OffersProps, OffersState> {
    state: OffersState = {
        productRange: data
    }

    render() {
        return (
            <div data-testid='offers-wrapper'>
                {this.state.productRange.map((product, i) => {
                    if (product.offer) {
                        return (
                            <div data-testid='offer-divs' onClick={() => this.props.onClick(product.id)} key={i} className='offers-wrapper'>
                                <div data-testid='img-div' className='offers-img-div'>
                                    <img src={product.imageURL} alt={product.title}/>
                                </div>
                                <div data-testid='offers-content-div' className='offers-info-container'>
                                    <div data-testid='title-div' className='offers-info offers-title-div'>
                                        {product.title}
                                    </div>
                                    <div data-testid='description-div' className='offers-info'>
                                        {product.description}
                                    </div>
                                    <div data-testid='price-div' className='offers-info'>
                                        £{(product.price/100).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
                }
            </div>
        )
    }
}