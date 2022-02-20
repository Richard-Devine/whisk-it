import * as React from 'react'
import {ProductProps} from "../webpage-types";

export default function Product(props:ProductProps) {
    return (
        <div onClick={() => props.onClick(props.id)}>
            <div data-testid='image-div'>
                <img src={props.image} alt={props.title}/>
            </div>
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
    )
}