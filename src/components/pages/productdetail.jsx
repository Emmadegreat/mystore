import '../static/css/productdetail.css'
import '../static/css/index.css'

import { Link, NavLink, useParams } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import { addCart, delCart } from '../../redux/action/index';

import axios from 'axios';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProducts] = useState([]);
    const [cartBtn, setCartBtn] = useState("Add to cart");
    const dispatch = useDispatch();

    const handleCartbtn = (product) => {
        if (cartBtn === "Add to cart") {
            dispatch(addCart(product))
            setCartBtn("Remove from cart")
        } else {
            dispatch(delCart(product))
            setCartBtn("Add to cart")
        }
    }

    useEffect(() => {
        try {
            const getProduct = async () => {
                //setLoading(true);
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProducts(response.data);
                //setLoading(false)
            }
            getProduct()

        } catch (error) {
            console.log(error, 'error!');
        }

    }, [id])

    /*const Loading = () => {
        return (
            <>
                <p>Loading</p>
            </>
        )
    }*/

    return (
        <>
            {product ? (
                <section className='product-detail'>
                    <img src={product.image} alt={product.title} />
                    <div>
                        <h4>{product.title}</h4>
                        <h5>{product.category}</h5>
                        <b>${product.price}</b>
                        <b>Rating: { product.rating && product.rating.rate}</b>
                        <p>{product.description}</p> <br />

                        <div className='button-wrapper'>
                            <button onClick={() => handleCartbtn(product)} >{cartBtn}</button>
                            <NavLink className="go-to-cart" to="/cart">Go to cart</NavLink>
                        </div>
                    </div>
                </section>


            ) : (<p>" Loading..."</p>)}
            <div className='continue-shopping'>
                <Link to="/">⬅️Continue Shopping</Link>
            </div>

        </>
    )
}

export default ProductDetail
