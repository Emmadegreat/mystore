import '../static/css/products.css'
import '../static/css/index.css'

import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const [selectCategory, setSelectCategory] = useState("all");

    const Fetch = async (category) => {
        try {
            let url = 'https://fakestoreapi.com/products';
            if (category !=="all") {
                url = url + `/category/${category}`
            }
            const res = await axios.get(url);
            setProducts(res.data)

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        Fetch(selectCategory)
    }, [selectCategory]);

    const filtered = products.filter(product => {
        return product.title.toLowerCase().includes(search.toLowerCase())
    })

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    console.log(search);

    const Links = ["men's clothing", "jewelery", "electronics", "women's clothing"];

    return (

        <>
            <section className='product-page-container'>
                <div className="category-wrapper">
                    <div className="category">
                        {Links.map((item) => {
                            return (
                                <ul>
                                    <li>
                                        <NavLink
                                            to="#"
                                            key={item}
                                            className={selectCategory === item ? 'active' : ''}
                                            onClick={()=>setSelectCategory(item)}
                                        >{ item === 'all' ? 'All products' : item}
                                        </NavLink>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                    <form className="search-wrapper">
                        <input
                            type="search"
                            name="search"
                            value={search}
                            onChange={handleChange}
                            placeholder='Search your favourite'
                        />
                    </form>
                </div>

                <div className="products">
                    {filtered.map((product) => {
                        return (
                            <div className='products-container' key={product.id}>
                                <div className='img-wrapper'>
                                    <img src={product.image} alt="prouct" />
                                </div>
                                <div className="box">
                                    <p>{product.title.substring(0, 15)}</p>
                                    <p>${product.price}</p><br />
                                    <NavLink to={`/products/${product.id}`} id='view'>View</NavLink>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>

        </>
    )
}

export default Products
