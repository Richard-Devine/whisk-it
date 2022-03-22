import * as React from 'react'
import {ProductDetailsProps, ProductDetailsState, dataProps} from "../webpage-types"
import {data} from "../data";
import backButton from '../website-icons/Back-Button.webp'
import {Link} from "react-router-dom";

export default class ProductDetails extends React.Component <ProductDetailsProps, ProductDetailsState> {
    state: ProductDetailsState = {
        productInfo: data,
        selections:{
            selection1:"",
            selection2:""}
    }

    selectBox(product: dataProps) {
        if (product.select) {
            let selectArr:any[] = []
            for (let i:number = 0; i < product.select; i++) {
                selectArr.push(
                    <span className='select-div'>
                        <select onChange={(e) => {this.optionSelected(i, e, product)}}>
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

    optionSelected(i:number, event:any, product:dataProps) {
        if(product.options){
        switch (i) {
            case 0:
                product.options['1'] = event.target.value
                break;
            case 1:
                product.options['2'] = event.target.value
                break;
            case 2:
                product.options['3'] = event.target.value
                break;
            case 3:
                product.options['4'] = event.target.value
                break;
        }
        }
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
                                           <Link to="/Products"> <img src={backButton} alt='Back Button' className='back-button'/></Link>
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
