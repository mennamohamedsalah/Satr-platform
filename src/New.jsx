import React from 'react'
import { Row ,Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



const New = () => {
  return (
    <>

      <Container fluid>
        <Row>
          <Col lg={5} className='colnew'>
            <div className='hsnew'>
              <h1  className='h1-new'>الموحد</h1>
                <h1   className='h11-new'>الدخول</h1>
      </div>
            <p   className='p-new'>    لمنصات الاتحاد السعودي للامن السيبراني والبرمجة و الدرونز     </p>
          <img src="logo-pattren.10ba7d16531605d2700a.png"  className='logo-pattren'/>
      </Col>


        <Col>
          <img src="download.svg"   className='download-svg'/>


    <Form   className='form-new' >
          <div className='divform'>
            <h3  className='h3form-new'>   تسجيل جديد   </h3>
                <p  className='p-form'>   المعلومات الشخصية   </p>
      <Row className="mb-3">
        <Form.Label  className='FormLabel1'>  الاسم الاول   </Form.Label>
      <Form.Control />
      <Form.Label    className='FormLabel1'>   الاسم الاخير  </Form.Label>
      <Form.Control />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label     className='FormLabel2'>   البريد الالكتروني  </Form.Label>
        <Form.Control   className='Formcontrol2'  type="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label    className='FormLabel3'  >رقم الجوال</Form.Label>
        <Form.Control  className='Formcontrol3' />
      </Form.Group>

          <p  className='p-form1'  >  معلومات التسجيل  </p>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label    className='FormLabel4'        >   اسم المستخدم   </Form.Label>
        <Form.Control     className='Formcontrol4'  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label     className='FormLabel5'    >  كلمة المرور    </Form.Label>
        <Form.Control   className='Formcontrol5'    type="password" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label     className='FormLabel6' >     تأكيد كلمة المرور  </Form.Label>
        <Form.Control   className='Formcontrol6'    type="password"  />
      </Form.Group>

            <p   className='p-form2'>   بالتسجيل أقر بأني قرأت شروط الاستخدام و سياسية الخصوصية وأوافق عليها   </p>

      </Row>

      <Button   className='form-sigin'  variant="primary" type="submit">
        تسجيل
      </Button>
          </div>
    </Form>
      </Col>

    </Row>
</Container>



































    </>
  )
}

export default New
