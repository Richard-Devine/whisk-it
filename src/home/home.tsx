import * as React from 'react'
import {dataProps, HomeProps} from "../webpage-types";
import {data} from "../data";
import {useNavigate} from "react-router-dom";

export default function Home(props: HomeProps) {

    let navigate = useNavigate()
    function  routing(id:number, title:string){
        props.onClick(id)
        navigate('/Products/'+title)
    }

    function newestOffers() {
        let latestOffers: dataProps[] = []
        data.map((product) => {
            if (product.offer) {
                latestOffers.push(product)
            }
        })
        if (latestOffers.length > 2) {
            latestOffers.splice(0, (latestOffers.length - 2))
        }
        return (
            latestOffers.map((offer, i) => {
                return (
                    <div className='new-offers-wrapper' key={i} onClick={() => {
                        routing(offer.id, offer.title)
                    }}>
                        <div data-testid='image-div' className='product-list-image-div'>
                            <img src={offer.imageURL} alt={offer.title}/>
                        </div>
                        <div data-testid='info-container' className='product-list-info-container'>
                            <div data-testid='title-div'
                                 className='product-list-info product-list-title-div'>
                                {offer.title}
                            </div>
                            <div data-testid='description-div' className='product-list-info'>
                                {offer.description}
                            </div>
                            <div data-testid='price-div' className='product-list-info'>
                                £{(offer.price / 100).toFixed(2)}
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className='home-container'>
            <div data-testid='blurb-container'>
                This is the blurb
            </div>
            <div data-testid='new-products-container' className='new-products-container' >
                Our latest products!
                {data.map((product, i) => {
                    if (product.id > data.length - 3) {
                        return (
                            <div className='new-products-wrapper' key={i} onClick={() => {
                                routing(product.id, product.title)}}>
                                <div data-testid='image-div' className='product-list-image-div'>
                                    <img src={product.imageURL} alt={product.title}/>
                                </div>
                                <div data-testid='info-container' className='product-list-info-container'>
                                    <div data-testid='title-div'
                                         className='product-list-info product-list-title-div'>
                                        {product.title}
                                    </div>
                                    <div data-testid='description-div' className='product-list-info'>
                                        {product.description}
                                    </div>
                                    <div data-testid='price-div' className='product-list-info'>
                                        £{(product.price / 100).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div data-testid='new-offers-container' className='new-offers-container' >
                Our latest offers!
                {newestOffers()}
            </div>
            <div data-testid='instagram-container'>
            </div>
        </div>
    )

}
//TODO home page tests
//TODO home page CSS