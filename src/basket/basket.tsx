import * as React from "react";
import {BasketProps, itemProps} from "../webpage-types";
import {useNavigate} from "react-router-dom";

export default function Basket(props: BasketProps) {

    function removeFromBasket(i: number) {
        props.myBasket.splice(i, 1);
        props.deleteItem();
    }

    function options(product: itemProps) {
        if (product.options) {
            if (!product.options["4"]) {
                return (
                    <div className="product-options">
                        -{product.options["1"]} -{product.options["2"]}
                    </div>
                );
            }
            if (product.options["4"]) {
                return (
                    <div className="product-options">
                        -{product.options["1"]} -{product.options["2"]}
                        <br/>-{product.options["3"]} -{product.options["4"]}
                    </div>
                );
            }
        }
    }

    let navigate = useNavigate();

    return (
        <div className="basket-wrapper">
            <div>
                {props.myBasket.map((product, i) => {
                    return (
                        <div key={i} className="basket-items-wrapper">
                            <div  className="basket-image-div image-div">
                                <img src={product.imageURL} alt={product.title}/>
                            </div>
                            <div className="basket-content-wrapper" data-testid="basket-content-wrapper">
                                <div className="title-div">
                                    {product.title}
                                </div>
                                <div data-testid="delete-button-div">
                                    <div onClick={() => removeFromBasket(i)} className="btn delete-button">X</div>
                                </div>
                                <div>
                                    {options(product)}
                                </div>
                                <div className="price-div">
                                    £{(product.price / 100).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="checkout-wrapper">
                <div className="sub-total-div">
                    Subtotal: £{(props.myBasketTotal / 100).toFixed(2)}
                </div>
                <div className="postage-div">
                    Postage: £{((props.myBasket.length * 350) / 100).toFixed(2)}
                </div>
                <div className="total-div">
                    Total:
                    £{(((props.myBasket.length * 350) / 100) + (props.myBasketTotal / 100)).toFixed(2)}
                </div>
                <div className="basket-buy-div btn" onClick={() => {
                    navigate("/Checkout")
                }}>
                    Proceed to checkout
                </div>
            </div>
        </div>
    );
}


//TODO Basket tests for new elements