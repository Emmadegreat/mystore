import '../static/css/about.css'
import '../static/css/index.css'

import { NavLink } from 'react-router-dom'
import React from 'react'

const About = () => {

    return (
        <>
            <section className="about">
                <div className="section-1">
                    <div className="card">
                        <h1>About Us</h1>
                    </div>
                    <div className="card"></div>
                </div>
                <div className="section-2">
                    <article>
                        <p>
                            At SHOP-QIK, we're more than just an online shopping destination –
                            we're a hub of fashion, technology, and elegance. Founded with a
                            passion for providing the best in male and female attire, cutting-edge
                            electronics, and exquisite jewelry, our journey began with a simple idea:
                            to create a space where individuals can explore a diverse range of products
                            that complement their lifestyle.
                        </p>
                    </article>
                </div>
                <div className="section-3">
                    <article>
                        <b>Our Vision</b>
                        <p>
                            Our vision is to redefine online shopping by offering a curated selection
                            that caters to the modern, fashion-conscious individual. Whether you're
                            seeking the latest trends in clothing, the most innovative electronics,
                            or that perfect piece of jewelry to express your unique personality,
                            SHOP-QIK is your ultimate destination.
                        </p>
                    </article>
                    <article>
                        <b>What Sets Us Apart</b>
                        <p>
                            We take pride in handpicking each item in our collection, ensuring that
                            it meets the highest standards of quality, style, and functionality.
                            Our team of experts is dedicated to staying ahead of the curve, constantly
                            updating our inventory to reflect the latest fashion movements and technological
                            advancements. With a focus on both classic elegance and contemporary flair,
                            we offer a range that appeals to various tastes and preferences.
                        </p>
                    </article>
                    <article>
                        <b>Customer Oriented</b>
                        <p>
                            Shopping at SHOP-QIK goes beyond a transaction – it's an experience.
                            Our user-friendly interface, secure payment gateways, and reliable
                            delivery services make every step of the journey seamless and enjoyable.
                            We value our customers and strive to provide unparalleled customer service,
                            ready to assist you on your shopping expedition.
                        </p>
                    </article>
                </div>
                <button><NavLink to="/">Shop Here</NavLink></button>

            </section>

        </>
    )
}

export default About
