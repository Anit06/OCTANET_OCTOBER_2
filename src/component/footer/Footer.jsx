import React from 'react'
import '../footer/Footer.css'

import { RiWhatsappFill } from "react-icons/ri";
import { RiTelegramFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='container-fluid p-0' id='Footer'>
      <section className='container d-flex justify-content-center' id='Footer1'>
          <h2>Let's Talk</h2>
      </section>
      <section className='container d-flex justify-content-center' id='Footer2'>
        <div className="Footer_social__link d-flex align-items-center">
          <span>
            <a href='https://wa.me/qr/Y3TAH6UJRKNFI1'>
              <h3 className='d-flex justify-content-center'><RiWhatsappFill/></h3>
              <p>WhatsApp</p>
            </a>
          </span>
          <span>
            <a href='https://t.me/+919434941874'>
              <h3 className='d-flex justify-content-center'><RiTelegramFill/></h3>
              <p>Telegram</p>
            </a>
          </span>
          <span>
            <a href='https://instagram.com/scorpion_anit?utm_source=qr&igshid=OGU0MmVlOWVjOQ=='>
              <h3 className='d-flex justify-content-center'><RiInstagramFill/></h3>
              <p>Instagram</p>
            </a>
          </span>
        </div>
      </section>
      <section className='container d-flex justify-content-center' id='Footer3'>
        <p>| Copyright © 2023 To Do List. All rights reserved |</p>
      </section>
    </div>
  )
}

export default Footer