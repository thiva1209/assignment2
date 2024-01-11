import React from 'react';
import { Link } from 'react-router-dom';

function ContactUsItem(props) {
  return (
    <div className='contact-item'>
      <Link className='contact-item__link' to={props.path}>
        <figure className='contact-item__pic-wrap'>
          <img src={props.image} alt='Outlet Picture' className='contact-item__img' />
        </figure>
        <div className='contact-item__info'>
          <h2 className='contact-item__text'>{props.name}</h2>
          <p>Email: {props.email}</p>
          <p>Phone: {props.phone}</p>
          <p>Address: {props.address}</p>
        </div>
      </Link>
    </div>
  );
}

export default ContactUsItem;

