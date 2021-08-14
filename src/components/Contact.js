import "../styles/contact.css";

function Contact() {
    return (
      <div className="contact-container">
        <div className="contact-info">
            <h2 className="topSubHead">about.</h2>
            <h1 className="mainHead">Let me introduce myself.</h1>
            <h3 className="botSubHead">Feel free to contact me</h3>
        </div>
        <div className="contact-input">
            <input type="text"  className="input-field" placeholder="Name"></input>
            <input type="text"  className="input-field" placeholder="Email"></input>
            <input type="text"  className="input-field" placeholder="Subject"></input>
            <textarea rows="10" className="input-message" placeholder="Message"></textarea>
            <button className="submit-button">Submit</button>
        </div>
      </div>
    );
    }
    
export default Contact;