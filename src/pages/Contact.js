import React, { Component } from 'react';
import '../styles/css/Contact.css';
import contactContent from '../content/ContactContent';
import Disclaimer from '../components/Disclaimer';

class Contact extends Component {
  render() {
    const officers = contactContent.map((officer, index) =>
      <div className="contact-officer">
        <p>{officer.role}</p>
        <p>{officer.name}</p>
        <p>{officer.email}</p>
      </div>
    );

    return (
      <div>
        <div className="contact">
          <div className="title">Contact Us</div>
          <div className="contact-officers">
            {officers}
          </div>
        </div>
        <Disclaimer />
      </div>
    );
  }
}

export default Contact;
