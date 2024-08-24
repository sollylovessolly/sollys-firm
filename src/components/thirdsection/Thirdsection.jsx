import { useState } from 'react'
import './Thirdsection.css'
const Thirdsection = () => {
  const[content,setContent] = useState(["Tax Filing: For students, employed, self-employed, corporations, and rental properties."]);
  const[secondcontent,setSecondcontent] = useState(["Tax Preparation: Personal and business tax preparation tailored to your needs."])
  const active = () =>{
    
    setContent("Cloud Accounting: For self-employed individuals, small-medium businesses, and corporations.")
    setSecondcontent("HST Filing & Setup: Includes accounting package setup and HST filing.")
  }
  const active2 = () =>{
    setContent("Business Consulting: For start-ups and existing businesses, including incorporation and tax planning.")
    setSecondcontent("Financial Planning & Payroll: Comprehensive financial planning, payroll, and HR support.")
  }

  return (
    <div className='container4'>
    <h1>Areas Of Specialization</h1>
    <p>We make tax filing simple and stress-free</p>
    <div className='mininav'>
        <ul className='mininav-list'>
            <li  className='start'>Taxes</li>
            <li onClick={active} className='middlelist'>Accounting</li>
            <li onClick={active2} className='end'>Consulting</li>
        </ul>
        <div className='mininav-content'>
            <ul>
              <li className='checkbox'>{content}</li>
              <hr />
              <li className="checkbox">{secondcontent}</li>
            </ul>
        </div>
        <button className='button1'>Get Started</button>
    </div>
</div>
  )
}

export default Thirdsection



  //  <li className='checkbox'>We are committed to preserving an owners’ legacy, business culture, and customer relationships while retaining employees. Unlike private equity, we are long term oriented and growth focused, prioritizing sustainable growth over short-term profits or cost cutting.</li>
  //           <hr />
  //           <li className="checkbox">We are a collaborative and flexible to structure transactions that makes sense for an owner and craft succession plans that helps owners transition from their day-to-day responsibilities.</li>