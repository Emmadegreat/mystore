import '../static/css/home.css'
import '../static/css/index.css'

import React, { useEffect, useState } from 'react'

import Products from './products'
import axios from 'axios'

const Home = (search, input) => {


    return (

        <>
            <main>

                <section className="home-section">
                    <div className="hero"></div>
                </section>
                <Products/>

            </main>

        </>
    )
}

export default Home
