import emailjs from 'emailjs-com';
import "../styles/contact.css";
import React, { useState } from 'react';

function Contact() {

    const [emailMsg, setEmailMsg] = useState('') 
    function sendEmail(e){
        e.preventDefault();
        
        console.log('sending email')
        emailjs.sendForm('service_66wqu1k', 'template_dkxs8sb', e.target, 'user_Bu8YkzRL6aJcdBoEQ4UGR')
        .then((result) => {
            setEmailMsg('Thank You for getting in touch. I will get back to you as fast as possible.')
            document.getElementsByClassName('contact-input')[0].reset();
        }, (error) => {
            setEmailMsg('Something didnt quite work there. Try again.')
        });
    }


    return (
      <div className="contact-container">
        <div className="contact-info">
            <h2 className="topSubHead">contact.</h2>
            <h1 className="mainHead">Feel free to contact me.</h1>
            <h3 className="botSubHead">If you have any questions for me don't hesitate to get in touch.</h3>
        </div>
        <form className="contact-input" onSubmit={sendEmail}>
            <input type="text"  className="input-field" placeholder="Name" name='from_name' required></input>
            <input type="text"  className="input-field" placeholder="Email" name='from_email' required></input>
            <input type="text"  className="input-field" placeholder="Subject" name='subject' required></input>
            <textarea rows="10" className="input-message" placeholder="Message" name='message' required></textarea>
            <button className="submit-button" type='submit' >Submit</button>  
        </form>
        <p className='status-message'>{emailMsg}</p>
        <div className="contact-cards">
            
            <div className="contact-card">
            <svg id="Capa_1" enableBackground="new 0 0 479.058 479.058" height="512" viewBox="0 0 479.058 479.058" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"/></svg>
                <h1>EMAIL ME AT</h1>
                <h2>jacklewis2809@gmail.com</h2>
            </div>
            <div className="contact-card">
            <svg id="Layer_1" enableBackground="new 0 0 512.021 512.021" height="512" viewBox="0 0 512.021 512.021" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m367.988 512.021c-16.528 0-32.916-2.922-48.941-8.744-70.598-25.646-136.128-67.416-189.508-120.795s-95.15-118.91-120.795-189.508c-8.241-22.688-10.673-46.108-7.226-69.612 3.229-22.016 11.757-43.389 24.663-61.809 12.963-18.501 30.245-33.889 49.977-44.5 21.042-11.315 44.009-17.053 68.265-17.053 7.544 0 14.064 5.271 15.645 12.647l25.114 117.199c1.137 5.307-.494 10.829-4.331 14.667l-42.913 42.912c40.482 80.486 106.17 146.174 186.656 186.656l42.912-42.913c3.838-3.837 9.361-5.466 14.667-4.331l117.199 25.114c7.377 1.581 12.647 8.101 12.647 15.645 0 24.256-5.738 47.224-17.054 68.266-10.611 19.732-25.999 37.014-44.5 49.977-18.419 12.906-39.792 21.434-61.809 24.663-6.899 1.013-13.797 1.518-20.668 1.519zm-236.349-479.321c-31.995 3.532-60.393 20.302-79.251 47.217-21.206 30.265-26.151 67.49-13.567 102.132 49.304 135.726 155.425 241.847 291.151 291.151 34.641 12.584 71.866 7.64 102.132-13.567 26.915-18.858 43.685-47.256 47.217-79.251l-95.341-20.43-44.816 44.816c-4.769 4.769-12.015 6.036-18.117 3.168-95.19-44.72-172.242-121.772-216.962-216.962-2.867-6.103-1.601-13.349 3.168-18.117l44.816-44.816z"/></g></svg>
                <h1>PHONE ME AT</h1>
                <h2>(+44) 7711 151969</h2>
            </div>
            <div className="contact-card">
            <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m160.007812 423h-70v-226h70zm6.984376-298.003906c0-22.628906-18.359376-40.996094-40.976563-40.996094-22.703125 0-41.015625 18.367188-41.015625 40.996094 0 22.636718 18.3125 41.003906 41.015625 41.003906 22.617187 0 40.976563-18.367188 40.976563-41.003906zm255.007812 173.667968c0-60.667968-12.816406-105.664062-83.6875-105.664062-34.054688 0-56.914062 17.03125-66.246094 34.742188h-.066406v-30.742188h-68v226h68v-112.210938c0-29.386718 7.480469-57.855468 43.90625-57.855468 35.929688 0 37.09375 33.605468 37.09375 59.722656v110.34375h69zm90 153.335938v-392c0-33.085938-26.914062-60-60-60h-392c-33.085938 0-60 26.914062-60 60v392c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60zm-60-412c11.027344 0 20 8.972656 20 20v392c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-392c0-11.027344 8.972656-20 20-20zm0 0"/></svg>
            <h1>MESSAGE ME ON</h1>
            <h2>https://www.linkedin.com/in/jack-lewis-472a1918a/</h2>
            </div>
        </div>
      </div>
    );
    }
    
export default Contact;
