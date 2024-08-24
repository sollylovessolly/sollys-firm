// import React from 'react'
import './Fourthsection.css'

const Fourthsection = () => {
  return (
    <div>
        <div className='container5' id='contact-us'>
            <h1 className='h1'>Think You Could Benefit from Our Expertise? Let’s Connect!.</h1>
            <div className='main-box'>
                <div className='box-1'>
                    <p className='box1-text'>We invite individuals to register with us and discover how our tailored accounting solutions can simplify your financial journey and enhance your peace of mind.</p>
                    <div className='contact'>
                        <div>
                            <p>Ahmed</p>
                            <p>+1 (705) 772 1805 <br />
                            <a href="">ahmed@herencia.partners</a></p>

                        </div>
                        <div>
                            <p>Nate</p>
                            <p>+1 (647) 227 9843 <br />
                            <a href="">nate@herencia.partners</a></p>
                        </div>
                    </div>
                </div>
                <div className='box2'>
                    <div className="form-group">
                        <input type="text" name="subject" required placeholder='subject' />
                        <textarea name="body" id="textarea" cols="30" rows="10" placeholder='message'  ></textarea>
                        <button type="submit" className='button2'>SEND</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container6">
            <div className='logo-copyright'>
                <div className='logo'></div>
                <p>© 2022 Herencia Partners.</p>
            </div>
            <div className="footer-links">
                <div className="item"><a href="#">Home</a></div>
                <div className="item"><a href="#">Team</a></div>
                <div className="item"><a href="#">Investment Criteria</a></div>
                <div className="item"><a href="#">LinkedIn</a></div>
            </div>
        </div>
    </div>
  )
}

export default Fourthsection