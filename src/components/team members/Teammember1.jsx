// import React from 'react'
import './Teammember1.css'
import './Teammember2.css'
import './Advisors.css'
// import profile1 from './profile1.jpg'

const Teammember1 = () => {
  return (
    <>
      <div className='container7'>
        <div className="section-1">
          <div className="member-img-section">
            <div className="member-img">
              <div className="image-container"></div>
            </div>
            <div className="member-img-name">
              <h2>Patrick Payne</h2>
              <p>Founder of Your Modern Accountant Ltd.</p>
            </div>
          </div>
          <div className="member-details">
            <h2>Patrick is the Founder of Your Modern Accountant Ltd.</h2>
            <p>Patrick founded Your Modern Accountant Ltd. (formerly KHFinancial) in 2010 while pursuing the Business Commerce program at Ryerson University and working full-time. What began as a one-man operation has now evolved into a strong team of skilled accountants. Patrick's dedication and passion for the field are evident in the personalized approach he brings to client relationships.</p>
            <p>Patrick received a degree in Business Commerce from Ryerson University and currently resides in Toronto, Canada.</p>
          </div>
        </div>
        <div className="section-2">
          <div className="col">
            <div className="row">
              <h3>Biggest Accomplishment</h3>
              <p>Establishing and growing Your Modern Accountant from a one-man operation to a successful firm.</p>
            </div>
            <div className="row">
              <h3>Most Impactful Experience</h3>
              <p>Juggling full-time work while pursuing a degree and founding a company.</p>
            </div>
          </div>
          <div className="hr"></div>
          <div className="col">
            <div className="row">
              <h3>Favourite Aspect of the Job</h3>
              <p>Mentoring young accountants and helping clients understand their financial situations.</p>
            </div>
            <div className="row">
              <h3>Core Value</h3>
              <p>Precision and thoroughness in all aspects of tax filing and accounting.</p>
            </div>
          </div>
          <div className="hr"></div>
          <div className="col">
            <div className="row">
              <h3>Grew Up In</h3>
              <p>Toronto, Canada</p>
            </div>
            <div className="row">
              <h3>Vision for the Company</h3>
              <p>Making tax filing in Canada easy, accessible, affordable, and stress-free.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container8'>
        <div className="section-3">
          <div className="member-details">
            <h2>Nicole is a Senior Accountant at Your Modern Accountant</h2>
            <p>Nicole joined Your Modern Accountant in January 2018 and has become an integral part of the team. With expertise in standard and self-employed tax filing, she plays a crucial role in assisting clients with their tax matters and managing communications with the Canada Revenue Agency (CRA).</p>
            <p>Nicole holds a degree in Accounting and currently resides in Canada.</p>
          </div>
          <div className="member-img-section">
            <div className="member-img">
              <div className="image-container2"></div>
            </div>
            <div className="member-img-name">
              <h2>Nicole Jennex</h2>
              <p>Senior Accountant</p>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="col">
            <div className="row">
              <h3>Biggest Accomplishment</h3>
              <p>Managing complex client portfolios and effectively handling CRA communications.</p>
            </div>
            <div className="row">
              <h3>Most Impactful Experience</h3>
              <p>Navigating challenging CRA objections and requests with successful outcomes.</p>
            </div>
          </div>
          <div className="hr"></div>
          <div className="col">
            <div className="row">
              <h3>Favourite Aspect of the Job</h3>
              <p>Providing peace of mind to clients by ensuring their tax matters are handled professionally.</p>
            </div>
            <div className="row">
              <h3>Core Value</h3>
              <p>Dedication to accuracy and client satisfaction in all tax-related processes.</p>
            </div>
          </div>
          <div className="hr"></div>
          <div className="col">
            <div className="row">
              <h3>Grew Up In</h3>
              <p>Canada</p>
            </div>
            <div className="row">
              <h3>Vision for the Company</h3>
              <p>Continuously improving client services and maintaining high standards of accuracy.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container9'>
        <h1>Advisors</h1>
        <div className="hr1"></div>
        <div className="inner-container">
          <div className="box-3">
            <div className="advisors-img-section">
              <div className="advisors-img">
                <div className="image-container3"></div>
              </div>
              <div className="advisors-details">
                <h2><a href="#">Travis McDougall</a></h2>
                <ul>
                  <li>Joined YMA in January 2022.</li>
                  <li>Implemented new processes that improved efficiency.</li>
                  <li>Brings a strong background in accounting and finance.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box-4">
            <div className="advisors-img-section">
              <div className="advisors-img">
                <div className="image-container4"></div>
              </div>
              <div className="advisors-details">
                <h2><a href="#">Alex Thompson</a></h2>
                <ul>
                  <li>Expert in financial strategy and process optimization.</li>
                  <li>Former CFO at a leading Canadian startup.</li>
                  <li>Currently an advisor to multiple small businesses.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Teammember1;
