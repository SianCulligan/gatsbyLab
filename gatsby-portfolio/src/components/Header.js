import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/SianCulligan.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Oh, hello </strong> I'm Sian. Seattle based software developer  & designer.
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
