import * as React from 'react'
import {ProductProps} from "../webpage-types";

export default function Product(props: ProductProps) {
    return (
        <div data-testid='product-wrapper' className='product-wrapper' onClick={() => props.onClick(props.id)}>
            <div data-testid='image-div' className='product-list-image-div'>
                <img src={props.imageURL} alt={props.title}/>
            </div>
            <div data-testid='info-container' className='product-list-info-container'>
                <div data-testid='title-div'>
                    {props.title}
                </div>
                <div data-testid='description-div'>
                    {props.description}
                </div>
                <div data-testid='price-div'>
                    £{props.price}
                </div>
            </div>
        </div>
    )
}