import * as React from 'react'
import {BasketProps} from '../webpage-types'

export default class Basket extends React.Component<BasketProps> {

    removeFromBasket(i:number) {
        this.props.myBasket.splice(i, 1)
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                {this.props.myBasket.map((product, i) => {
                    return(
                <div key={i} data-testid='basket-wrapper'>
                    <div data-testid='back-button-div' onClick={() => this.props.backButton()}>
                        Back
                    </div>
                    <div data-testid='image-div'>
                        <img src={product.imageURL} alt={product.title}/>
                    </div>
                    <div data-testid='delete-button-div' onClick={() => this.removeFromBasket(i)}>
                        X
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
                    <div data-testid='buy-div' onClick={() => null}>
                        Buy
                    </div>
                </div>
                    )
                })}
            </div>
        )
    }
}