import '../static/css/footer.css'

import React from 'react'

const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className="footer-wrapper">
                <div className="card" id='card1'>
                    <p>{props.copyright} &nbsp;&nbsp; { props.date}</p>
                </div>
                <div className="card">
                    <p>Contact { props.contact}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
