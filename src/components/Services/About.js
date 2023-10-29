import React from 'react'
import './about.css'
import Typewriter from "typewriter-effect";
// import { BiPhoneCall } from 'react-icons/bi';
import {motion} from 'framer-motion'
const About = () => {
  return (
    <>
      <section className="mission">
        <div className="mission-container">
          <div className="mission-text">
            <h3>Our Mission</h3>
            <p 
            className='mission-heading'>Making Business better for everyone</p>
            <p className='mission-content'>We help people achive independence by making it easier to start, run and grow a business. We believe the future of commerce has more voice, not fewer, so we're redusing the barriers to business ownership to make commerce better for everyone. </p>
          </div>
        </div>
      </section>

      <section className='about'>
        <div className="about-container">
          <div className="text">
            <h3>About Us</h3>
            <h1><Typewriter className="typewriter"

              onInit={(typewriter) => {
                typewriter
                  .typeString("Helping People To Grow Your Business Better")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Welcomes You")
                  .start();
              }}
            />
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nam quam. Eos quia cupiditate odio. Iusto beatae, quae rerum vel deserunt nostrum laudantium, animi molestiae omnis autem, asperiores minus accusamus!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium recusandae modi quod labore, cupiditate nostrum veritatis maxime minus id quo ipsam sed saepe quas, voluptatem soluta dolores autem et dolorum.
            </p>
            <button>
              <a href="">Contact Now &nbsp; &#9743;</a>
            </button>
          </div>
          <div className="picture">
            <img  className='img'
            src="/images/meeting.jpg" alt="about" />
          </div>

        </div>
      </section>
    </>
  )
}

export default About