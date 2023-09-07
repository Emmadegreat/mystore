import React, { useRef, useState } from 'react'

import emailjs from '@emailjs/browser';

const Email = () => {

    const [user_name, setUser_name] = useState("");
    const [user_email, setUser_email] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        //const templateParams = {
            //fromName: user_name,
            //fromEmail: user_email,
            //message: message
        //}

        emailjs.sendForm(
            'service_hpwftru',//service-id
            'template_0ko02r8',//template id
            form.current,
            'uqeNFiEeopkQJod9d'//public-key
        )
        .then((response) => {
            if (response) {
                setSuccessMessage(`Hello ${user_name}, your mail has been submitted successfully`);
                setTimeout(() => {
                    setSuccessMessage(successMessage);
                    window.location.href = "/";
                }, 2000);
           }
            setUser_name('');
            setUser_email('');
            setMessage('')
        })
            .catch((error) => {
            alert("error")
            console.log(error, 'error');
        });
    };

    return (
        <>
            <section>
                <h1>Send us a mail</h1><br />
                {successMessage && <p style={{color:"#e82129"}}>{ successMessage}</p>}
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name='user_name'
                        required
                        value={user_name}
                        onChange={(e)=>setUser_name(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        required
                        value={user_email}
                        onChange={(e)=>setUser_email(e.target.value)}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        name='message'
                        required
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                    />
                    <button type="submit">Send</button>
                </form>

            </section>

        </>
    )
}

export default Email
