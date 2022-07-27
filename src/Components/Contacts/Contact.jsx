import React, { useState } from "react";
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from "react";

import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
    
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Recruiter_N3w', 'template_9l1kuo8', form.current, 'nDW_rF9rDfeDuJriD')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };



    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white' : ''}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background:"#ABF1FF94" }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="to_name" className="user" placeholder="Name" />
                    <input type="text" name="from_name" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message"></textarea>
                    <div className="blur c-blur1" style={{ background:"var(--purple)" }}></div>
                    <input type="submit" className="button" value="Send" />
                    <span>{done && "Thanks"}</span>
                </form>
            </div>

        </div>
    )
}
export default Contact