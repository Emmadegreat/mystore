import '../static/css/cart.css'
import '../static/css/checkout.css'

import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.handleCart);

    var total = 0;
    const itemlist = (item) => {
        total = total + item.price;
        return (
            <li>
                <h6 class="my-0">{ item.title}</h6>
                <span class="text-body-secondary">${ item.price}</span>
            </li>
        )
    }

    return (
        <>
            <section className='checkout-page'>
                <h2>Checkout page</h2>
                <div className='container'>
                    <div className="first-part">
                        <h4>Your cart ({ state.length})</h4>
                        <ol>
                            { state.map(itemlist) }
                            <span>Total (USD)</span><strong>${ total}</strong>
                        </ol>

                        <form className="form-1">
                            <input type="text" placeholder="Promo code" />
                            <button type="submit">Redeem</button>
                        </form>
                    </div>
                    <div> <br />
                        <h4>Billing Address</h4>
                        <form className="form-2" novalidate="">
                            <div className="form-element">
                                <label for="firstName">First name</label>
                                <input type="text" id="firstName" placeholder="" required="" />

                            </div>

                            <div  className="form-element">
                                <label for="lastName">Last name</label>
                                <input type="text" id="lastName" placeholder="" required="" />

                            </div>

                            <div  className="form-element">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" id="username" placeholder="Username" required="" />

                            </div>
                            <div  className="form-element">
                                <label for="email">Email<span>(Optional)</span></label>
                                <input type="email" id="email" placeholder="you@example.com" />

                            </div>
                            <div  className="form-element">
                                <label for="address">Address</label>
                                <input type="text" id="address" placeholder="1234 Main St" required="" />

                            </div>
                            <div  className="form-element">
                                <label for="address2">Address 2 <span>(Optional)</span></label>
                                <input type="text" id="address2" placeholder="Apartment or suite" />
                            </div>

                            <div className="form-element">
                                <label for="country">Country</label>
                                <select id="country" required="">
                                    <option value="">Choose...</option>
                                    <option>Nigeria</option>
                                    <option>USA</option>
                                    <option>Ghana</option>
                                </select>
                            </div>

                            <div className="form-element">
                                <label for="state">State</label>
                                <select id="state" required="">
                                    <option value="">Choose...</option>
                                    <option>Lagos</option>
                                    <option>Abuja</option>
                                    <option>California</option>
                                </select>
                            </div>

                            <div className="form-element">
                                <label for="zip">Zip</label>
                                <input type="text" id="zip" placeholder="" required="" />
                            </div>
                        </form>
                    </div>
                        <hr className="my-4"/>

                        <div className="form-check">
                            <input type="checkbox" id="same-address" />
                            <label for="same-address">Shipping address is the same as my billing address</label>
                        </div>

                        <div className="form-element">
                            <input type="checkbox" id="save-info" />
                            <label for="save-info">Save this information for next time</label>
                        </div>

                        <hr class="my-4"/>

                        <h4>Payment</h4>

                        <div>
                        <div>
                            <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="" />
                            <label for="credit">Credit card</label>
                        </div>
                        <div>
                            <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="" />
                            <label  for="debit">Debit card</label>
                        </div>
                        <div class="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="" />
                            <label class="form-check-label" for="paypal">PayPal</label>
                        </div>
                    </div>

                    <div className="payment-card">
                        <div className="form-element">
                            <label for="cc-name" className="form-label">Name on card</label>
                            <input type="text" id="cc-name" placeholder="" required="" />
                        </div>

                        <div className="form-element">
                            <label for="cc-number">Credit card number</label>
                            <input type="text" id="cc-number" placeholder="" required="" />
                        </div>

                        <div className="form-element">
                            <label for="cc-expiration" class="form-label">Expiration</label>
                            <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" />

                        </div>

                        <div className="form-element">
                            <label for="cc-cvv" >CVV</label>
                            <input type="text"  id="cc-cvv" placeholder="" required="" />

                        </div>
                    </div>

                    <hr class="my-4"/>

                    <button type="submit" id='submit'>Continue to checkout</button>
                </div>
            </section>
        </>
    )
}

export default Checkout
