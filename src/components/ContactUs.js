import React from 'react';
import './ContactUs.css';
import ContactUsItem from './ContactUsItem';

function ContactUs() {
  const contacts = [
    {
      name: 'SELANGOR OUTLET',
      email: 'manager1@luxify.com',
      phone: '+60148935749',
      address: '0378 LUXIFY Headquarters, Jalan 42, Shah Alam, Selangor, Malaysia',
      image: './image/picture-7.jpeg', 
    },
    {
      name: 'KEDAH OUTLET',
      email: 'manager2@luxify.com',
      phone: '+60187633093',
      address: '21, Jalan 8, Alor Setar, Kedah, Malaysia',
      image: './image/picture-8.jpeg', 
    },
    {
      name: 'JOHOR OUTLET',
      email: 'manager3@luxify.com',
      phone: '+60173977201',
      address: '443, Jalan 11, Johor Bahru, Johor, Malaysia',
      image: './image/picture-9.jpeg', 
    },
    
    
  ];

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-items-container">
        {contacts.map((contact, index) => (
          <ContactUsItem
            key={index}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            address={contact.address}
            image={contact.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactUs;

