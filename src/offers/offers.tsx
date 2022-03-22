import * as React from 'react'
import {OffersProps, OffersState} from "../webpage-types";
import {data} from "../data";
import {useNavigate} from "react-router-dom";

export default function Offers (props:OffersProps){
    let navigate = useNavigate()

    function routing(id:number) {
        props.onClick(id)
        navigate("/Product-Details")
    }

        return (
            <div data-testid='offers-wrapper'>
                {data.map((product, i) => {
                    if (product.offer) {
                        return (
                            <div data-testid='offer-divs' onClick={() => routing(product.id)} key={i} className='offers-wrapper'>
                                <div data-testid='img-div' className='offers-img-div'>
                                    <img src={product.imageURL} alt={product.title}/>
                                </div>
                                <div data-testid='offers-content-div' className='offers-info-container'>
                                    <div data-testid='title-div' className='offers-info offers-title-div'>
                                        {product.title}
                                    </div>
                                    <div data-testid='description-div' className='offers-info'>
                                        {product.description}
                                    </div>
                                    <div data-testid='price-div' className='offers-info'>
                                        £{(product.price/100).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
                }
            </div>
        )
    }
