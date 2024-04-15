import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c39538ee-ba3b-464d-811d-72569bd87f0c");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis numquam amet molestias assumenda inventore in ad aut quidem? Repudiandae corporis illum officiis dolore minima temporibus debitis vero id. Provident.</p>
                    <div className="conatct-details">
                        <div className="conatct-detail">
                            <img src={mail_icon} alt="" /> <p>skamalesh865@gmail.com</p>
                        </div>
                        <div className="conatct-detail">
                            <img src={call_icon} alt="" /> <p>8918956982</p>
                        </div>
                        <div className="conatct-detail">
                            <img src={location_icon} alt="" /> <p>Barasat, West Bengal</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} action="" className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" required placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" required placeholder='Enter your email' name='email' />               
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact