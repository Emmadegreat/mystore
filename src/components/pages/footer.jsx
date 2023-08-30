import '../static/css/footer.css'

import React from 'react'

const Footer = (props) => {
  return (
        <section className='footer'>
            <div className="first-section">
                     <p></p>
                </div>
                <div style={{}} />
          {/*<ScrollToTop smooth />*/}
                <div className="second-section">
                    <div className="card">
                        <p>{props.copyright} &nbsp;&nbsp; { props.date}</p>
                    </div>
                    <div className="card">
                        <p>Contact { props.contact}</p>
                    </div>
                </div>
        </section>
    )
}

export default Footer
