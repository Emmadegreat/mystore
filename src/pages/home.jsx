import '../static/css/home.css'
import '../static/css/index.css'

import { NavLink } from 'react-router-dom'
import Products from './products'
import React from 'react'

const Home = () => {


    return (

        <>
            <main>

                <section className="home-section">
                    <div className="hero"></div>
                </section>
                <Products />

                <div className="contact-button">
                    <button><NavLink to="/contact">Contact Us</NavLink></button>
                </div>

            </main>

        </>
    )
}

export default Home
