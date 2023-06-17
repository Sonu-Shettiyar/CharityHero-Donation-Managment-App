import React from 'react'
import "../styles/footer.css"
import logo from "../images/charityhero_logo.jpg"

const Footer = () => {
  return (
    <div>
        <hr />
        <div className='main'>
        <div className='logo'>
          <img width={"40%"} src={logo} alt="" />
          <div>We are India's most trusted and transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people from across the globe to donate towards raising funds for products required by NGOs and charities in India, which are then delivered to them by us.</div>
        </div>
        <div>
            <h4>Fundraise for</h4>
            <div>Medical</div>
            <div>Emergency</div>
            <div>Memorial</div>
            <div>Education </div>
            <div>Non Profit</div>
            <div>Covid-19</div>
            <div>Cricis Relief</div>
        </div>
        <div>
            <h4>Learn More</h4>
            <div>How CharityHero Works</div>
            <div>Why CharityHero</div>
            <div>Common Questions</div>
            <div>Success Stories</div>
            <div>Supported countries</div>
            <div>Charuty Fundraising</div>
            <div>Pricing</div>
        </div>
        <div>
            <h4>Resources</h4>
            <div>Help center</div>
            <div>Blog</div>
            <div>Press Centre</div>
            <div>Career</div>
            <div>About</div>
            <div>CharityHero Stories</div>
            <div>More Resources</div>
        </div>
        </div>
        <hr />
        <div>
          <div>
            <div></div>
            <div>
              <div>Term</div>
              <div>Privacy Notice</div>
              <div>Legal</div>
              <div>Accessibility Statement</div>
            </div>
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default Footer