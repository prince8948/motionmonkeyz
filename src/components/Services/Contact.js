import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className='Contact-page'>
        <h1>Contact</h1>
        <p> Want to get in touch? We'd love to hear from you. Here's how you can react us. Find answers to commonly asked questions, and submit requests to appropriate help teams as needed by choosing the service below:</p>

        <div className="contact-container">
          <div className="contact-content">
            <h2>Get in touch</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <div className="contact-info">
              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div className="contact-info-item-content">
                  <h4>Address</h4>
                  <p>123 Street, New York, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-page-form">
            <form action="">
              <p>Name</p>
              <input type="text" name="name" id="name" placeholder="Enter your name" className='fields' />
              <p>Email</p>
              <input type="email" name="email" id="email" placeholder="Enter your email" className='fields' />
              <p>Phone</p>
              <input type="number" name="phone" id="phone" placeholder="Enter your phone number" className='fields' />
              <p> Message</p>
              <textarea name="message" id="message" cols="30" rows="5" placeholder="Enter your message" className='fields'></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

      </div>


      {/* <section className='contact-form'>
        <div className='form-container'>
          <div className="contact-card">
            <h1>Make Your Business Faster Growth <blink>Quick Connect</blink> !</h1>
            <div className="contact-form-fields">
              <form action="">
                <input type="text" placeholder='Enter Your Name' />
                <input type="text" placeholder='Enter Your Email' />
                <input type="text" placeholder='Enter Your Mobile No.' />
                <input type="text" placeholder='Subject' />
                <input type="submit" placeholder='Submit' />
              </form>
            </div>
          </div>
        </div>
      </section> */}
      
    </>
  )
}

export default Contact