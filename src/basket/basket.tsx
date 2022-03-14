import * as React from 'react'
import {BasketProps} from '../webpage-types'

export default class Basket extends React.Component<BasketProps> {

    removeFromBasket(i: number) {
        this.props.myBasket.splice(i, 1)
        this.props.deleteItem()
    }

    render() {
        return (
            <div className='basket-wrapper'>
                <div>
                {this.props.myBasket.map((product, i) => {
                    return (
                        <div key={i} data-testid='basket-items-wrapper' className='basket-items-wrapper'>
                            <div data-testid='image-div' className='image-div'>
                                <img src={product.imageURL} alt={product.title}/>
                            </div>
                            <div className='basket-content-wrapper' data-testid='basket-content-wrapper'>
                                <span data-testid='title-div'>
                                    {product.title}
                                </span>
                                <span data-testid='delete-button-div' onClick={() => this.removeFromBasket(i)}>
                                    X
                                </span>
                                <div data-testid='price-div'>
                                    {product.price}
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div data-testid='buy-div' className='basket-buy-div btn'>
                    Buy Via Paypal
                </div>
            </div>
        )
    }
}

//TODO Basket tests for new elements