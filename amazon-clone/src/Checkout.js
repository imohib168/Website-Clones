import React from 'react'
import './Checkout.css'

import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <>
            <div className="checkout__message">
                <p>Amazon's Response to Covid-19</p>
            </div>
            <div className="checkout">
                <div className="checkout__left">
                    <div>
                        {
                            basket?.length === 0 ? (
                                <div className="checkout__emptyCart">
                                    <h1>Your Shopping Cart is Empty</h1>
                                    <p>
                                        You've no items in your basket. To buy one or more items, click "Add to cart"
                                        next to the item.
                            </p>
                                </div>
                            ) : (
                                    <div className="checkout__title">
                                        <h1>Your Shopping Cart</h1>
                                        {basket.map(item => {
                                            return (
                                                <CheckoutProduct
                                                    id={item.id}
                                                    title={item.title}
                                                    price={item.price}
                                                    rating={item.rating}
                                                    image={item.image}
                                                />
                                            )
                                        })}
                                    </div>
                                )
                        }
                    </div>
                </div>
                <div className="checkout__right">
                    {basket?.length > 0 && (
                        <Subtotal />
                    )}
            </div>
            </div>
        </>
    )
}

export default Checkout;
