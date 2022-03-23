import * as React from 'react'
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {PaymentButtonsProps} from "./webpage-types"
import {useNavigate} from "react-router-dom";
import emailjs from '@emailjs/browser'

export default function PaymentButtons(props:PaymentButtonsProps) {

    let navigate = useNavigate()

    function createOrder(data: Record<string,unknown>, actions:any) {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: props.amount.toString(),
                    },
                },
            ],
        })
    }

    function onApprove(data:any, actions:any){
        return actions.order.capture().then((details:any) => {
            const name = details.payer.name.given_name;
            props.completeOrder(props.order)
            console.log(details)
            emailjs.send()
            navigate("/CheckoutComplete")
        });
    }

    return (
        <PayPalScriptProvider options={{ "client-id": "AX0HZz9MhHlX9OlagRsmk38ODdKF7OqsiNtQOu-eD6uvDzOc1yNXjW6PvfQUy3jM2YbJAH0HQ9bxzKhV", currency:"GBP" }}>
            <PayPalButtons style={{ layout: "horizontal" }}
            createOrder={createOrder}
            onApprove={onApprove}/>
        </PayPalScriptProvider>
    );
}