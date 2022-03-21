import * as React from "react";
import {CheckoutProps, CheckoutState} from "../webpage-types"

export default class Checkout extends React.Component<CheckoutProps>{
    state:CheckoutState = {
        basketTotal: 0
    }
    componentDidMount() {
        let currentTotal = 0
        this.props.myBasket.map((product) => {

            currentTotal += (product.price + 350)
            let newTotal = (currentTotal/100)

            return(this.setState({basketTotal: newTotal}))

        })
    }

    render(){
        console.log(this.state.basketTotal)
        return(
            <div className='checkout-grid-container'> Delivery Details
            <div className="checkout-grid">
            <div>
                <div className='checkout-grid-titles'>Name:</div>
                <div className='checkout-grid-titles'>House name/number:</div>
                <div className='checkout-grid-titles'>Street:</div>
                <div className='checkout-grid-titles'>Town/City:</div>
                <div className='checkout-grid-titles'>Post Code:</div>
                <div className='checkout-grid-titles'>Email Address:</div>

            </div>
            <div>
                <div className="checkout-div-inputs" contentEditable={true}></div>
                <div className="checkout-div-inputs" contentEditable={true}></div>
                <div className="checkout-div-inputs" contentEditable={true}></div>
                <div className="checkout-div-inputs" contentEditable={true}></div>
                <div className="checkout-div-inputs" contentEditable={true}></div>
                <div className="checkout-div-inputs" contentEditable={true}></div>
            </div>
            </div>
                <input type="hidden" name="cmd" value="_ext-enter"/>
                    <form action="https://www.paypal.com/us/cgi-bin/webscr" method="post">
                        <input type="hidden" name="cmd" value="_xclick"/>
                            <input type="hidden" name="business" value="michaelaparish@hotmail.co.uk "/>
                                <input type="hidden" name="item_name" value="Whisk It order"/>
                                    <input type="hidden" name="currency_code" value="GBP"/>
                                        <input type="hidden" name="amount" value={this.state.basketTotal}/>
                                            <input type="image" src="http://www.paypal.com/en_US/i/btn/x-click-but01.gif" name="submit" alt="Make payments with PayPal - it's fast, free and secure!"/>
                    </form>
            </div>
        )
    }
}
