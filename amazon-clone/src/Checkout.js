import React from 'react'
import './Checkout.css'

import { useStateValue } from './StateProvider'

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <h1>Checkout Page</h1>
        </div>
    )
}

export default Checkout;
