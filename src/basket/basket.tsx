import * as React from 'react'
import {BasketProps} from '../webpage-types'

export default class Basket extends React.Component<BasketProps> {
    render() {
        return (
            <div>
                {this.props.myBasket.map((product, i) => {
                    return(

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
                    <div data-testid='buy-div'>
                        Add to basket
                    </div>

                </div>
                    )
                })}
            </div>
        )
    }
}
//TODO Add basket tests