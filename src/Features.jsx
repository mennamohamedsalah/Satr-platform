import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HashLink } from 'react-router-hash-link';



const Features = () => {
  return (
<>
  <input placeholder='ابحث هنا'className="in-put"/>
    <div className='div-Features'>
      <Card.Body    className="Card-Features ">
        <Card.Title className='card-title'>لم تقم بالتسجيل في اي من الدورات بعد</Card.Title>
        <Card.Text   className='card-Text'>  تصفح الدورات وابدأ رحلة التعلم   </Card.Text>
        <HashLink to="/Tracks">
        <Button variant="info" className='Button-Text'>تصفح الدورات</Button>
        </HashLink>
      </Card.Body>
    </div>


                                             {/* //section7// */}
    <section className="section77">
      <img  src="logo-white.svg"  className="logo-white"/>
        <img  src="stc.svg"  className="stc-svg"/>
        <img  src="safcsp-logo-white.svg"  className="safcsp-logo-white-svg"/>
    </section>
















</>
  )
}

export default Features
