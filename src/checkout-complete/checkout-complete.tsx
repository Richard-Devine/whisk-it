import * as React from 'react'
import {CheckoutCompleteProps} from "../webpage-types";

export default function CheckoutComplete(props:CheckoutCompleteProps) {

    return(
        <div className='payment-complete-div'>
            <br/>
            <br/>
            Thank you for your purchase. You will receive an Email confirmation shortly of your order and delivery details you provided us.
            <br/>
            <br/>
        </div>
    )
}
