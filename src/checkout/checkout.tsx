import * as React from "react";
import {CheckoutProps, CheckoutState} from "../webpage-types"

export default class Checkout extends React.Component<CheckoutProps> {
    state: CheckoutState = {
        basketTotal: 0
    }

    componentDidMount() {
        let currentTotal = 0
        this.props.myBasket.map((product) => {
            currentTotal += (product.price + 350)
            let newTotal = (currentTotal / 100)
            return (this.setState({basketTotal: newTotal}))
        })
    }

    render() {
        console.log(this.state.basketTotal)
        return (
            <div className='checkout-form-container'> Delivery Details
                <form className='checkout-form'>
                        <label htmlFor="name" >Name:</label>
                        <input type="text" id="name" placeholder="Full Name"/><br/>
                        <label htmlFor="house" >House name/number:</label>
                        <input type="text" id="house" placeholder="House Name/Number"/><br/>
                        <label htmlFor="street" >Street:</label>
                        <input type="text" id="street" placeholder="Street Name"/><br/>
                        <label htmlFor="city"  >Town/City:</label>
                        <input type="text" id="city" placeholder="Town/City Name"/><br/>
                        <label htmlFor="postcode">Post Code:</label>
                        <input type="text" id="postcode" placeholder="Post Code"/><br/>
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" id="email" placeholder="Email Address"/><br/>

                </form>
                <input type="hidden" name="cmd" value="_ext-enter"/>
                <form action="https://www.paypal.com/us/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_xclick"/>
                    <input type="hidden" name="business" value="richard_devine@outlook.com"/>
                    <input type="hidden" name="item_name" value="Whisk It order"/>
                    <input type="hidden" name="currency_code" value="GBP"/>
                    <input type="hidden" name="amount" value={this.state.basketTotal.toString()}/>
                    <input type="hidden" name="return" value={this.props.checkoutComplete()}/>
                    <input type="image" src="http://www.paypal.com/en_US/i/btn/x-click-but01.gif" name="submit"
                           alt="Make payments with PayPal - it's fast, free and secure!" />
                </form>
            </div>
        )
    }
}
