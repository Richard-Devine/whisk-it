import * as React from "react";
import {OffersProps} from "../webpage-types";
import {data} from "../data";
import {useNavigate} from "react-router-dom";

export default function Offers(props: OffersProps) {

    let navigate = useNavigate();

    function routing(id: number, title: string) {
        props.onClick(id);
        navigate("/Products/" + title);
    }

    return (
        <div data-testid="offers-wrapper">
            {data.map((product, i) => {
                if (product.offer) {
                    return (
                        <div onClick={() => routing(product.id, product.title)} key={i} className="offers-wrapper">
                            <div className="offers-img-div">
                                <img src={product.imageURL} alt={product.title} className="offers-image"/>
                            </div>
                            <div className="offers-info-container">
                                <div className="offers-info offers-title-div">
                                    {product.title}
                                </div>
                                <div className="offers-info offers-description-div">
                                    {product.description}
                                </div>
                                <div className="offers-info offers-price-div">
                                    £{(product.price / 100).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            })
            }
        </div>
    );
};
