import * as React from "react";
import {CheckoutProps, CheckoutState} from "../webpage-types"
import PaymentButtons from "../paypal-buttons";

export default class Checkout extends React.Component<CheckoutProps> {
    state: CheckoutState = {
        basketTotal: 0,
        order: {}
    }

    orderDetails(e: any, key: string) {

        if(e.target.value < 1){
            alert("please enter your " + key)
        }
        if (key === "name") {
            this.state.order.name = e.target.value
        }
        if (key === "house name/number") {
            this.state.order.house = e.target.value
        }
        if (key === "street name") {
            this.state.order.street = e.target.value
        }
        if (key === "city name") {
            this.state.order.city = e.target.value
        }
        if (key === "postcode") {
            this.state.order.postcode = e.target.value
        }
        if (key === "email address") {
            this.state.order.email = e.target.value
        }
        console.log(this.state.order)
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
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Full Name"
                           onBlur={(e) => this.orderDetails(e, "name")}/><br/>
                    <label htmlFor="house">House name/number:</label>
                    <input type="text" id="house" placeholder="House Name/Number"
                           onBlur={(e) => this.orderDetails(e, "house name/number")}/><br/>
                    <label htmlFor="street">Street:</label>
                    <input type="text" id="street" placeholder="Street Name"
                           onBlur={(e) => this.orderDetails(e, "street name")}/><br/>
                    <label htmlFor="city">Town/City:</label>
                    <input type="text" id="city" placeholder="Town/City Name"
                           onBlur={(e) => this.orderDetails(e, "city name")}/><br/>
                    <label htmlFor="postcode">Post Code:</label>
                    <input type="text" id="postcode" placeholder="Post Code"
                           onBlur={(e) => this.orderDetails(e, "postcode")}/><br/>
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" id="email" placeholder="Email Address"
                           onBlur={(e) => this.orderDetails(e, "email address")}/><br/>

                </form>
                <PaymentButtons amount={this.state.basketTotal} order={this.state.order} completeOrder={(x) => {this.props.completeOrder(x)}}/>
            </div>
        )
    }
}
//<input type="hidden" name="return" value="localhost:3000/CheckoutComplete"/>

/*<PayPalButtons style={{ layout: "horizontal" }}
                                   createOrder={this.createOrder()}
                                    onApprove={this.onApprove}/>*/