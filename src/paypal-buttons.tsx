import * as React from 'react'
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {OrderProps, PaymentButtonsProps} from "./webpage-types"
import {useNavigate} from "react-router-dom";
import emailjs from '@emailjs/browser'

export default function PaymentButtons(props:PaymentButtonsProps) {

    let navigate = useNavigate()



    function createOrder(data: Record<string,unknown>, actions:any) {
        if(props.order.name && props.order.order && props.order.email && props.order.city && props.order.street && props.order.postcode && props.order.house) {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: props.amount.toString(),
                        },
                    },
                ],
            })
        } else {
            alert("Please fill out all delivery details")
        }
    }

    function onApprove(data:any, actions:any){
        return actions.order.capture().then((details:any) => {
            const name = details.payer.name.given_name;

            let templateParams:OrderProps = {
                name: props.order.name,
                house: props.order.house,
                street: props.order.street,
                city: props.order.city,
                postcode: props.order.postcode,
                email: props.order.email,
                order: props.order.order
            }
            console.log(templateParams)
            emailjs.send("service_habig9p","template_5np2o56", templateParams, "YCFbF33y7QFh9Xc4O").then(() => {
                emailjs.send("service_habig9p", "template_ku8mmba", templateParams, "YCFbF33y7QFh9Xc4O").then(() => {
                })
            })
            props.completeOrder()
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