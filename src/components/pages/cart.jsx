import '../static/css/cart.css'
import '../static/css/index.css'

import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import React from 'react'
import { delCart } from '../../redux/action'

const Cart = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.handleCart);

    const handleClose = (item) => {
        dispatch(delCart(item))
    }

    /*const cartItems = (cartItem) => {
        return (
            <div className="wrapper" key={cartItem.id}><hr />
                <div className="cart-wrapper">
                    <div className='cart-card'>
                        <img src={cartItem.image} alt="cart item" />
                    </div>
                    <div className='cart-card'>
                        <h4>{cartItem.title}</h4>
                        <h4>${cartItem.price}</h4>
                        <button className='close' onClick={()=>handleClose(cartItem)}>Remove</button>
                    </div>
                </div>
            </div>
        )
    }*/

    /*const emptyCart = () => {
        return (
            <div>
                <h3>Your cart is empty</h3>
            </div>
        )
    }

    const button = () => {
        return (
            <div className='checkout-link'>
                <NavLink to="/checkout">Proceed to checkout</NavLink>
            </div>
        )
    }*/

    return (
        <>
            <section className="cart-page">
                <h1>My cart</h1>
                {state.length === 0 &&
                    <div>
                        <h3>Your cart is empty</h3>
                    </div>
                }


                {state.length !== 0 && state.map((cartItem) => {

                    return (
                        <div className="wrapper" key={cartItem.id}><hr />
                            <div className="cart-wrapper">
                                <div className='cart-card'>
                                    <img src={cartItem.image} alt="cart item" />
                                </div>
                                <div className='cart-card'>
                                    <h4>{cartItem.title}</h4>
                                    <h4>${cartItem.price}</h4>
                                    <button className='close' onClick={()=>handleClose(cartItem)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {state.length !== 0 && (
                    <div className='checkout-link'>
                        <Link to="/checkout">Proceed to checkout</Link><br />
                    </div>
                )}

                <div className='continue-shopping'>
                    <Link to="/">⬅️Continue Shopping</Link>
                </div>
            </section>

        </>
    )
}

export default Cart