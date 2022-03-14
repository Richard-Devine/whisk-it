import * as React from 'react'
import {ProductDetailsProps, ProductDetailsState, dataProps} from "../webpage-types"
import {data} from "../data";
import backButton from '../website-icons/Back-Button.webp'

export default class ProductDetails extends React.Component <ProductDetailsProps, ProductDetailsState> {
    state: ProductDetailsState = {
        productInfo: data
    }

    selectBox(product: dataProps) {
        if (product.select) {
            let selectArr:any[] = []
            for (let i:number = 0; i < product.select; i++) {
                selectArr.push(
                    <span className='select-div'>
                        <select>
                            <option>Choose Flavour</option>
                        {this.options()}
                        </select>
                    </span>)
                }
            return(selectArr)
        }
    }

    options(){
        return(
        this.state.productInfo.map((product, i) => {
            if(!product.offer)
            return (
                <option value={product.title}>
                {product.title}
                </option>
            )
        })
        )
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
                                    <div className='select-wrapper' data-testid='select-wrapper'>
                                    {this.selectBox(product)}
                                    </div>
                                    <div className='allergy-price-buy-container'>
                                        <div data-testid='allergy-div'>
                                            <div data-testid='allergens-div' className='allergens-div'>Allergens:</div>
                                            {product.allergens}
                                        </div>
                                        <div className='price-buy-wrapper'>
                                            <div data-testid='price-div'>
                                                £{(product.price / 100).toFixed(2)}
                                            </div>
                                            <div data-testid='buy-div' className='product-details-buy-div btn'
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

//TODO add custom select boxes to offer products
//TODO add tests for new elements
