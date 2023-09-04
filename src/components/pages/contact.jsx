import '../static/css/index.css'
import '../static/css/contact.css'

import { Link, NavLink, redirect } from 'react-router-dom';
import React, {useRef, useState} from 'react'

import emailjs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const sendDetails = {
            name,
            email,
            message
        }



        emailjs.sendForm(
            //form.current,
            sendDetails,
            'service_hpwftru',//service-id
            'template_0ko02r8',//template id
            'uqeNFiEeopkQJod9d'//public-key
        )
        .then((result) => {
            console.log(result.text);
            console.log('error');
        }, (error) => {
            if (!error) {
               redirect(<Link to="/" />)
            } else {
                console.log('there is error');
            }
            //console.log(error.text);
            //console.log('success');
        });
    };

    return (
        <section className='contact-page'>

            <div style={{ width: "100%" }}>
                <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3-6%20Alhaji%20Adejumo%20Avenue,%20Ilupeju%20Industrial%20Estate%20Ilupeju,%20Lagos.+(e-store)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
            </div>

            <div className="contact-form">
                <h1>Send us a mail</h1><br />
                <form ref={form} onSubmit={sendEmail}>
                    <label for="name">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        required
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <label for="email">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label for="message">Message</label>
                    <textarea
                        name="message"
                        required
                        onChange={(e)=>setMessage(e.target.value)}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
