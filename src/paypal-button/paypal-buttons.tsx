import * as React from "react";
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {OrderProps, PaymentButtonsProps} from "../webpage-types";
import {useNavigate} from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function PaymentButtons(props: PaymentButtonsProps) {

    const navigate = useNavigate();

    function createOrder(data: Record<string, unknown>, actions: any) {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: props.amount,
                    },
                },
            ],
        });
    }

    function onApprove(data: any, actions: any) {
        return actions.order.capture().then(() => {

            let templateParams: OrderProps = {
                name: props.order.name,
                house: props.order.house,
                street: props.order.street,
                city: props.order.city,
                postcode: props.order.postcode,
                email: props.order.email,
                order: props.order.order
            };
            emailjs.send("service_habig9p", "template_5np2o56", templateParams, "YCFbF33y7QFh9Xc4O").then(() => {
                emailjs.send("service_habig9p", "template_ku8mmba", templateParams, "YCFbF33y7QFh9Xc4O").then(() => {
                });
            });
            props.completeOrder();
            navigate("/CheckoutComplete");
        });
    }

    return (
        <div>
            <PayPalScriptProvider options={{
                "client-id": "AX0HZz9MhHlX9OlagRsmk38ODdKF7OqsiNtQOu-eD6uvDzOc1yNXjW6PvfQUy3jM2YbJAH0HQ9bxzKhV",
                currency: "GBP"
            }}>
                <PayPalButtons style={{layout: "horizontal"}}
                               onApprove={onApprove}
                               createOrder={createOrder}/>
            </PayPalScriptProvider>
        </div>
    );
};