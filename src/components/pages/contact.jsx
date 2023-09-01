import React, { useRef } from 'react'

import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_hpwftru',
            'template_0ko02r8',
            form.current, 'uqeNFiEeopkQJod9d'
        )
        .then((result) => {
            console.log(result.text);
            console.log('error');
        }, (error) => {
            console.log(error.text);
            console.log('success');
        });
    };

    return (
        <section className='contact-page'>

            <div style={{ width: "100%" }}>
                <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3-6%20Alhaji%20Adejumo%20Avenue,%20Ilupeju%20Industrial%20Estate%20Ilupeju,%20Lagos.+(e-store)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
            </div>

            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </section>
    )
}

export default Contact
