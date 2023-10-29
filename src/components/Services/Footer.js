import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    {/* last footer */}
    <section className='footer'>
        <div className="last-footer">

          <div className="footer-items-intro">
            <p>Motion Monkeyz is a digital marketing company that believes in bringing solutions and growth-hacking answers for our end-clients.</p>
            <ul>
              <li><a href=""><img src="/logo/facebook.png" alt="Facebook" /></a></li>
              <li><a href=""><img src="/logo/linkedin.png" alt="Linkedin" /></a></li>
              <li><a href=""><img src="/logo/instagram.png" alt="Instagram" /></a></li>
              <li><a href=""><img src="/logo/twiter.png" alt="twiter" /></a></li>
              <li><a href=""><img src="/logo/youtube.png" alt="Youtube" /></a></li>
            </ul>
          </div>

          <div className="footer-items">
            <h2>Services</h2>
            <p> <a href="">Seo Company in Lucknow</a></p>
            <p> <a href="">Pay per click Service</a></p>
            <p> <a href="">Social Media Marketing</a></p>
            <p> <a href="">eCommerce Marketing</a></p>
            <p> <a href="">Website Design and Development</a></p>
            <p> <a href="">Mobile Application</a></p>
            <p> <a href="">UI/UX Design</a></p>
          </div>

          <div className="footer-items">
            <h2>Contact Info</h2>
            <p>
              <a href="location" className='address'>
                <img src="/logo/location.png" alt="icon" />
                Plot no -12 Hans Khera Para Manak Nagar Lucknow UP 226011<br />
                <span>Landmark : </span> Near HP Petrol Pump
              </a><br />
              <img src="/logo/call-icon.png" alt="icon" className='call-icon' />
              <a href="tel:+918948911871">+91-8948911871</a>
              <a href="tel:+918765619819">  +91 8765619819</a><br />
              <a href="" className='mail'><img src="/logo/mail-icon.png" alt="icon" className='mail-icon' />p.prince9819@gmail.com</a>
            </p>
          </div>

          <div className="footer-items">
            <h2>Payment Partner</h2>
            <a href=""  ><img className='payment-partner'   src="/images/phonepay.png" alt="Phonepay" /></a>
            <a href=""  ><img className='payment-partner'   src="/images/paytm.png" alt="Paytm" /></a>
            <a href=""  ><img className='payment-partner'   src="/images/googlepay.jpeg" alt="Googlepay" /></a>
          </div>
          
        </div>
      </section>
    
    </>
  )
}

export default Footer