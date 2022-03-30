import * as React from 'react'
import {ProductProps} from "../webpage-types";
import {useNavigate} from "react-router-dom";

export default function Product(props: ProductProps) {
    let navigate = useNavigate()

    function routing(id:number){
        props.onClick(id);
        const string = props.title.replace(/ /g, "")
        navigate("/Products/"+string)
    }

    return (
        <div data-testid='product-wrapper' className='product-wrapper' onClick={() => {routing(props.id)}} >
            <div data-testid='image-div' className='product-list-image-div'>
                <img src={props.imageURL} alt={props.title}/>
            </div>
            <div data-testid='info-container' className='product-list-info-container'>
                <div data-testid='title-div' className='product-list-info product-list-title-div'>
                    {props.title}
                </div>
                <div data-testid='description-div' className='product-list-info'>
                    {props.description}
                </div>
                <div data-testid='price-div' className='product-list-info'>
                    £{(props.price/100).toFixed(2)}
                </div>
            </div>
        </div>
    )
}