import React, { useRef } from 'react'
import './Services.css'
import Tilt from 'react-parallax-tilt';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Service = () => {
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1we2mjy', 'template_zcm8r8f', form.current, 'SzXEvmRTSQW21cYxw')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            Swal.fire({
              icon: "success",
              title: "Well Done!!",
              text: "You Message is send successfully",
              showConfirmButton: false,
              timer: 1000
            });
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <>
      {/* Creative Hiring Section  */}
      <section className='Intro'>
        <div className='intro-container'>
          <img src="/images/hiring.webp" alt="" />
          <h1>No. 1 Digital Marketing Company in Lucknow</h1>
          <h3>-A Google Partner Agency-</h3>
          <p>Today's expanded internet access has fueled the rise of numerous digital channels.
            It has changed the way people sell and purchase, and offline marketing is no longer as successful as it once was.
            So here is Digital Nawab a digital marketing company in lucknow to helping your business to grow.</p>
          <p>The primary method of reaching out to an audience or clients has changed from offline to online.
            Most advertisers today use new platforms, software, and strategies to communicate with their consumers,
            which is known as Digital Marketing Services.</p>
        </div>
      </section>

      {/* Our Service */}
      <section className='service-type'>
        <h1 className='serve-heading'>Our Services</h1>
        <div className='container'>
          <Tilt className="card" data-tilt data-tilt-max="20" data-tilt-speed="400">
            <img src="/images/webdesign.gif" alt="not found" />
            <div className="card-content">
              <h3>Website Design 	&amp; Development</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quis nobis eligendi deleniti ipsam libero. Sequi deleniti
                exercitationem accusamus minima voluptatem in, corrupti libero
              </p>
              <a href="" className='btn'> Websites..</a>
            </div>
          </Tilt>

          <Tilt className="card" data-tilt data-tilt-max="20" data-tilt-speed="400">
            <img src="/images/SEO.gif" alt="not found" />
            <div className="card-content">
              <h3>Social Media Management</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quis nobis eligendi deleniti ipsam libero. Sequi deleniti
                exercitationem accusamus minima voluptatem in, corrupti libero
              </p>
              <a href="" className='btn'> Websites..</a>
            </div>
          </Tilt>


          <Tilt className="card" data-tilt data-tilt-max="20" data-tilt-speed="400">
            <img src="/images/web.gif" alt="not found" />
            <div className="card-content">
              <h3>Deigital Marketing</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quis nobis eligendi deleniti ipsam libero. Sequi deleniti
                exercitationem accusamus minima voluptatem in, corrupti libero
              </p>
              <a href="" className='btn'> Websites.. </a>
            </div>
          </Tilt>


          <Tilt className="card" data-tilt data-tilt-max="20" data-tilt-speed="400">
            <img src="/images/web.gif" alt="not found" />
            <div className="card-content">
              <h3>Deigital Marketing</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quis nobis eligendi deleniti ipsam libero. Sequi deleniti
                exercitationem accusamus minima voluptatem in, corrupti libero
              </p>
              <a href="" className='btn'> Websites.. </a>
            </div>
          </Tilt>

          <Tilt className="card" data-tilt data-tilt-max="20" data-tilt-speed="400">
            <img src="/images/webdesign.gif" alt="not found" />
            <div className="card-content">
              <h3>Website Design 	&amp; Development</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quis nobis eligendi deleniti ipsam libero. Sequi deleniti
                exercitationem accusamus minima voluptatem in, corrupti libero
              </p>
              <a href="" className='btn'> Websites..</a>
            </div>
          </Tilt>

          <Tilt className="card" data-tilt data-tilt-max="20" data-tilt-speed="400">
            <img src="/images/SEO.gif" alt="not found" />
            <div className="card-content">
              <h3>Social Media Management</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quis nobis eligendi deleniti ipsam libero. Sequi deleniti
                exercitationem accusamus minima voluptatem in, corrupti libero
              </p>
              <a href="" className='btn'> Websites..</a>
            </div>
          </Tilt>
        </div>
      </section>

      {/* Service Contact From */}
      <section className='contact-form'>
        <div className='form-container'>
          <div className="contact-card">
            <h1>Make Your Business Faster Growth <blink>Quick Connect</blink> !</h1>
            <div className="contact-form-fields">
              <form action="" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Enter Your Name' name='your_name'/>
                <input type="text" placeholder='Enter Your Email' name='your_email'/>
                <input type="text" placeholder='Enter Your Mobile No.' name='your_phone'/>
                <input type="text" placeholder='Subject' name='message'/>
                <input type="submit" value='Send' placeholder='Submit' />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why we are the best */}
      <section className='Digital'>
        <div className='Digi-container'>
          <div className='para'>
            <h1>Why we are the best for the Digital Marketing</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae delectus
              quo iste quam quae labore ad cupiditate temporibus? Enim, ullam voluptatem molestiae
              maiores voluptate laborum eum officiis minus eveniet?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo fuga sed unde, deleniti distinctio. Molestias ducimus enim exercitationem sapiente,
              qui quos minus necessitatibus error ab quia officiis totam velit?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae delectus
              quo iste quam quae labore ad cupiditate temporibus? Enim, ullam voluptatem molestiae
              maiores voluptate laborum eum officiis minus eveniet?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo fuga sed unde, deleniti distinctio. Molestias ducimus enim exercitationem sapiente,
              qui quos minus necessitatibus error ab quia officiis totam velit?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae delectus
              quo iste quam quae labore ad cupiditate temporibus? Enim, ullam voluptatem molestiae
              maiores voluptate laborum eum officiis minus eveniet?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo fuga sed unde, deleniti distinctio. Molestias ducimus enim exercitationem sapiente,
              qui quos minus necessitatibus error ab quia officiis totam velit?
            </p>
          </div>
          <div className='images-para'>
            <img src="images/digi.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* Why Choose us  */}
      <section className='Aboutus'>
        <div className='Digi-container'>
          <div className='images-para'>
            <img src="images/aboutimg.webp" alt="" />
          </div>

          <div className='para'>
            <h1>Why we are the best for the Digital Marketing</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae delectus
              quo iste quam quae labore ad cupiditate temporibus? Enim, ullam voluptatem molestiae
              maiores voluptate laborum eum officiis minus eveniet?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo fuga sed unde, deleniti distinctio. Molestias ducimus enim exercitationem sapiente,
              qui quos minus necessitatibus error ab quia officiis totam velit?
            </p>

            <div className='accordion-items'>
              <ul className="accordion">
                <li>
                  <input type="radio" name="accordion" id="first" />
                  <label htmlFor="first">Product</label>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                      voluptatum.
                    </p>
                  </div>
                </li>
                <li>
                  <input type="radio" name="accordion" id="second" />
                  <label htmlFor="second">Information</label>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                      voluptatum.
                    </p>
                  </div>
                </li>
                <li>
                  <input type="radio" name="accordion" id="third" />
                  <label htmlFor="third">Services</label>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                      voluptatum.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Search Engine optimization */}
      <section className="seo">
        <div className="seo-container">
          <div className="seocontent">
            <h1>Is it Digital Marketing <br /> you are looking For</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quisquam,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            </p>
            {/* connect to me  */}
            <div className="seo-btn">
              <button className='btn'>
                <a href="tel:894-891-1871" className='a'>Discuss Your Project </a>
                <span> &gt; </span>
              </button>

              <button className='btn'>
                <a href="https://wa.me/918948911871" target="_blank" className='a'>+91 8948911871</a>
                <span> &#9742;</span>
              </button>
            </div>
          </div>
          <div className="seo-features">
            <div className="features">
              <img src="/images/teams.png" alt="" />
              <p>Dedicated <br />Team of Expert</p>
            </div>
            <div className="features">
              <img src="/images/price.png" alt="" />
              <p>Compitative <br />Price</p>
            </div>
            <div className="features">
              <img src="/images/timer.png" alt="" />
              <p>Always <br />With You</p>
            </div>
            <div className="features">
              <img src="/images/dicussion.png" alt="" />
              <p>Direct<br /> Discussion</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="faqs">
        <p className='faqs-heading'>FAQs</p>
        <div className="faqs-container">

          <div className='accordion-faqs'>
            <ol className="accordions">
              <li>
                <input type="radio" name="accordions" id="firsts" />
                <label htmlFor="firsts"> 1.&nbsp;<span>Product</span></label>
                <div className="contents">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    voluptatum.
                    <ul className='paralist'>
                      <li type='disc'>Lorem ipsum dolor sit amet consectetur. ipsum</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                  </p>
                </div>
              </li>
              <li>
                <input type="radio" name="accordions" id="seconds" />
                <label htmlFor="seconds">2.&nbsp;<span>Information</span></label>
                <div className="contents">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    voluptatum.
                  </p>
                </div>
              </li>
              <li>
                <input type="radio" name="accordions" id="thirds" />
                <label htmlFor="thirds">3.&nbsp;<span>Services</span></label>
                <div className="contents">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    voluptatum.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className='accordion-faqs'>
            <ol className="accordions">
              <li>
                <input type="radio" name="accordions" id="fourth" />
                <label htmlFor="fourth">4. &nbsp;<span>New Product </span></label>
                <div className="contents">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    voluptatum.
                  </p>
                </div>
              </li>
              <li>
                <input type="radio" name="accordions" id="fivth" />
                <label htmlFor="fivth">5.&nbsp;<span> More Information</span></label>
                <div className="contents">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    voluptatum.
                  </p>
                </div>
              </li>
              <li>
                <input type="radio" name="accordions" id="sixth" />
                <label htmlFor="sixth">6.&nbsp;<span>New Services</span></label>
                <div className="contents">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    voluptatum.
                  </p>
                </div>
              </li>
            </ol>

          </div>

        </div>
      </section>

      {/* Business button section*/}
      <section className='btn-section'>
        <div className="btn-container">
          <div className='contact-btn'>
            <div className="business-btn">
              <button>
                <a href="tel:894-891-1871" className='a'>Discuss Your Project </a>
              </button>
            </div>

            <div className="business-btn">
              <button>
                <a href="tel:894-891-1871" className='a'>Discuss Your Project </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* more information */}
      <section className="footer-info">
        <div className="footer-info-container">
          <div className="logo">
            <img src="/images/call.png" alt="" />
          </div>
          <h1>Want more information fast?</h1>
          <p>Speak to a Expert at <span> <a href="tel:+918948911871"> +91-8948911871 </a></span></p>
        </div>
      </section>


      

    </>
  )
}

export default Service