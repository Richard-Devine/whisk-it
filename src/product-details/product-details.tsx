import * as React from 'react'
import {ProductDetailsProps} from "../webpage-types"

export default class ProductDetails extends React.Component <ProductDetailsProps> {
    render() {
        return(
            <div>
                <div data-testid='back-button-div' onClick={() => {this.props.backButton()}}>

                </div>
                <div data-testid='image-div'>

                </div>
                <div data-testid='title-div'>

                </div>
                <div data-testid='description-div'>

                </div>
                <div data-testid='price-div'>

                </div>
                <div data-testid='allergy-div'>

                </div>
                <div data-testid='image-div'>

                </div>
                <div data-testid='buy-div'>

                </div>

            </div>
        )
    }
}