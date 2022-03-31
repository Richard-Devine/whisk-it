import * as React from "react";
import {dataProps, HomeProps} from "../webpage-types";
import {data} from "../data";
import {useNavigate} from "react-router-dom";

export default function Home(props: HomeProps) {

    let navigate = useNavigate();

    function routing(id: number, title: string) {
        props.onClick(id);
        navigate("/Products/" + title);
    }

    function newestOffers() {
        let latestOffers: dataProps[] = [];
        data.map((product) => {
            if (product.offer) {
                return latestOffers.push(product)
            } else {
                return null
            }
        });
        if (latestOffers.length > 2) {
            latestOffers.splice(0, (latestOffers.length - 2));
        }
        return (
            latestOffers.map((offer, i) => {
                return (
                    <div className="new-offers-wrapper" key={i} onClick={() => {
                        routing(offer.id, offer.title)
                    }}>
                        <div data-testid="image-div" className="product-list-image-div">
                            <img src={offer.imageURL} alt={offer.title}/>
                        </div>
                        <div data-testid="info-container" className="product-list-info-container">
                            <div data-testid="title-div"
                                 className="product-list-info product-list-title-div">
                                {offer.title}
                            </div>
                            <div data-testid="description-div" className="product-list-info">
                                {offer.description}
                            </div>
                            <div data-testid="price-div" className="product-list-info">
                                £{(offer.price / 100).toFixed(2)}
                            </div>
                        </div>
                    </div>
                );
            })
        );
    }

    return (
        <div className="home-container">
            <div className="blurb-header">About us!</div>
            <div data-testid="blurb-container" className="blurb-container">
                Welcome to Whisk it!<br/>
                <br/>
                After spending most of our days off baking and receiving really positive, lovely comments from family
                and friends about our various flavours of Brownies, Blondies and Cookie Bars, we thought why not create
                a little business and see where it takes us!<br/>
                <br/>
                We started our business off during the start of the pandemic and the support we received from you all
                was overwhelming and we are so grateful. So we’ve decided to open our very own website for you to buy
                your own Brownies, Blondies and Cookie Bars whenever you want, at whatever hour!<br/>
                <br/>
                For those who don't know, Soph and myself, Kayla, are sisters and whilst we don't rate ourselves as pro
                bakers the various Brownies, Blondies and Cookie bars we have made have always gone down a treat. We are
                self taught and enjoy baking yummy treats. We both work full time in the public services sector but love
                nothing more than baking up the highest quality Brownies, Blondies and Cookie Bars for you to enjoy, on
                our rest days.<br/>
                <br/>
                If you fancy trying some of our bakes and would like to support our small business then please place an
                order!
            </div>
            <div data-testid="new-products-container" className="new-products-container">
                Our latest products!
                {data.map((product, i) => {
                    if (product.id > data.length - 3) {
                        return (
                            <div className="new-products-wrapper" key={i} onClick={() => {
                                routing(product.id, product.title)
                            }}>
                                <div data-testid="image-div" className="product-list-image-div">
                                    <img src={product.imageURL} alt={product.title}/>
                                </div>
                                <div data-testid="info-container" className="product-list-info-container">
                                    <div data-testid="title-div"
                                         className="product-list-info product-list-title-div">
                                        {product.title}
                                    </div>
                                    <div data-testid="description-div" className="product-list-info">
                                        {product.description}
                                    </div>
                                    <div data-testid="price-div" className="product-list-info">
                                        £{(product.price / 100).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div data-testid="new-offers-container" className="new-offers-container">
                Our latest offers!
                {newestOffers()}
            </div>
            <div data-testid="instagram-container">
            </div>
        </div>
    );
};
