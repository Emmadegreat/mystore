import '../static/css/index.css'
import '../static/css/contact.css'

import Email from '../components/email'
import React from 'react'

const Contact = () => {

    return (
        <section className='contact-page'>

            <div style={{ width: "100%" }}>
                <iframe style={{ width:"100%", height:"400",frameborder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"}} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3-6%20Alhaji%20Adejumo%20Avenue,%20Ilupeju%20Industrial%20Estate%20Ilupeju,%20Lagos.+(e-store)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
            </div>

            <div className="contact-form">
            <Email/>

            </div>
        </section>
    )
}

export default Contact
