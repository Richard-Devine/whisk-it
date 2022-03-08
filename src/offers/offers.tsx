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
                            <div data-testid='offer-divs' onClick={() => this.props.onClick(product.id)} key={i}>
                                <div data-testid='title-div'>
                                    {product.title}
                                </div>
                                <div data-testid='img-div'>
                                    <img src={product.imageURL} alt={product.title}/>
                                </div>
                                <div data-testid='description-div'>
                                    {product.description}
                                </div>
                                <div data-testid='price-div'>
                                    {product.price}
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