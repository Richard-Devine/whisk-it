import * as React from 'react'
import {BasketProps} from '../webpage-types'

export default class Basket extends React.Component<BasketProps> {

    removeFromBasket(i: number) {
        this.props.myBasket.splice(i, 1)
        this.props.deleteItem()
        this.forceUpdate()
    }

    render() {
        return (
            <div className='basket-wrapper'>
                <div>
                    {this.props.myBasket.map((product, i) => {
                        return (
                            <div key={i} data-testid='basket-items-wrapper' className='basket-items-wrapper'>
                                <div data-testid='image-div' className='basket-image-div image-div'>
                                    <img src={product.imageURL} alt={product.title}/>
                                </div>
                                <div className='basket-content-wrapper' data-testid='basket-content-wrapper'>
                                    <div data-testid='title-div'>
                                        {product.title}
                                    </div>
                                    <div data-testid='delete-button-div'>
                                        <div onClick={() => this.removeFromBasket(i)} className='btn'>X</div>
                                    </div>
                                    <div data-testid='price-div'>
                                        £{(product.price / 100).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='checkout-container'>
                    <div className='sub-total-div'>
                        Subtotal: £{(this.props.myBasketTotal / 100).toFixed(2)}
                    </div>
                    <div className='postage-div'>
                        Postage: £{((this.props.myBasket.length * 350) / 100).toFixed(2)}
                    </div>
                    <div className='total-div'>
                        Total:
                        £{(((this.props.myBasket.length * 350) / 100) + (this.props.myBasketTotal / 100)).toFixed(2)}
                    </div>

                    <div data-testid='buy-div' className='basket-buy-div btn'>
                        Proceed to checkout
                    </div>
                </div>
            </div>
        )
    }
}

//TODO Basket tests for new elements