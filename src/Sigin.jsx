import React from 'react'
import { Row ,Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Sigin = () => {
  return (
    <>

    <Container fluid>
      <Row>
        <Col lg={5} className='colnew'>
          <div className='hsnew'>
            <h1  className='h1-new'>الموحد</h1>
              <h1   className='h11-new'>الدخول</h1>
    </div> 

      <p   className='p-Sigin'>    لمنصات الاتحاد السعودي للامن السيبراني والبرمجة و الدرونز     </p>

        <img src="logo-pattren.10ba7d16531605d2700a.png"  className='logo-pattren'    />
    </Col>


<Col>

      <img src="download.svg"   className='download-svgs'/>
        <Form   className='form-new'>
          <div className='divform'>
          <h3  className='h3form-Sigin'>   تسجيل الدخول   </h3>
            <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label    className='SiginLabel4'>  اسم المستخدم أو البريد الالكتروني  </Form.Label>
        <Form.Control     className='Sigincontrol4'/>
      </Form.Group>




      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label     className='SiginLabel5'>  كلمة المرور    </Form.Label>
        <Form.Control   className='Sigincontrol5'    type="password" />
      </Form.Group>
      </Row>

      <Button   className='sigin-sigin'  variant="primary" type="submit">
        دخول
      </Button>

        <p   className='p-sigin'> ليس لديك حساب؟ إنشاء حساب
أو إنشاء حساب كجهة </p>

          </div>

    </Form>




</Col>


    </Row>
</Container>



































    </>
  )
}

export default Sigin
