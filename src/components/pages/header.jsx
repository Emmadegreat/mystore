import '../static/css/header.css'

import React,{useState} from 'react'

import { NavLink } from 'react-router-dom'
import logo from '../static/images/shop-qik-icon.png'
import { useSelector } from 'react-redux'

const Header = () => {
    const [click, setClick] = useState(false);
    const Open = () => {
        setClick(!click);
    }
    const Close = () => {
        setClick(false);
    }
    const state = useSelector((state)=> state.handleCart)
    return (
        <header>
            <div className="logo">
                <NavLink to="/" ><img src={logo} alt="shop-qik" /></NavLink>
            </div>
            <nav className={click ? 'navbar active' : 'navbar'}>
                <li><NavLink
                    onClick={Close} to="/"
                    className={({ isActive }) => isActive ? "navbar.active" : ""}
                    end style={({ isActive }) => ({ borderBottom: isActive ? "2px solid#e82129" : "#1d3344" })}>
                    Home
                </NavLink></li>
                <li><NavLink onClick={Close} to="/about">About</NavLink></li>
                <li><NavLink onClick={Close} to="/contact">Contact</NavLink></li>

            </nav>
            <li className='cart-icon'><NavLink onClick={Close} to="/cart" id='cart'>cart({state.length})</NavLink></li>
            <div className="hamburger" onClick={Open}>
                {click ? (<span>x</span>) : (<span>=</span>)}
            </div>

        </header>
    )
}

export default Header
