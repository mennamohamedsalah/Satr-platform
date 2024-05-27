import React from 'react'
import { HashLink } from 'react-router-hash-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button, Col, Container, Row } from 'react-bootstrap';


const Track1 = () => {
    return (

<>
    <section className='sectrak1'>
        <Container>
            <Row>
                <Col  lg={6}  md={6}  sm={12} >
                    <img src='5ba6e422-5419-4c8a-bd09-6e09eccda7d9.png' className='imgtrak1' />
                </Col>


                
                <Col  lg={6}  md={6}  sm={12} >
                    <div className='shp'>
                    <span className='span1'>مسار تعليمي</span>
                    <h2 className='h2trak1'>مسار منهجيات وإطارات عمل المشاريع التقنية</h2>
                    <p className='p1trak1'>مسار تعليمي مصمّم لمساعدة الأشخاص المهتمين في مجال إدارة المشاريع وتحديداً إدارة المشاريع التقنية، يساعد هذا المسار في فهم المنهجيات وإطارات العمل الشائعة في الوقت الحالي؛ كذلك يركز هذا المسار على تقديم شرح شامل حول منهجية Agile وإطارات العمل الأكثر شيوعاً مثل Scrum و Kanban و Lean.</p>
                    </div>
                    <div className='divspanss'>

                    <div className='divspans1'>
                    <span>المستوى</span>
                    <span>المدة</span>
                    <span>عدد الدورات</span>
                    </div>
                    <div className='divspans2'>
                    <span>مبتدئ</span>
                    <span>14 ساعة</span>
                    <span>7 دورات</span>
                    </div>
                    <div className='dsp'>
                        <span className='ds' > المتطلبات </span>
                        <p className='dp' >  . هذا المسار لا يتطلب أي معرفة مُسبقة بالبرمجة- </p>
                    </div>
                    </div>



                </Col>
            </Row>
        </Container>
    </section>


    <section className='sectrak2'>
        <Container>
            <Row>
                <Col>
                <div className='divtrak2' >
                    <img src='spot-icon-fast.svg' className='spoticon' />
                    <div className='h2h3'>
                        <h2 className='h21'> بعد تعلمك لهذا المسار ستصبح قادراً على </h2>
                    </div>

                    <div className='h3img1'>
                        <img src='icon-check.svg' className='icon-check1' />
                        <h3 className='h31'> .  فهم بشكل عميق لأطر العمل ومنهجيات المشاريع التقنية الرائدة  </h3>
                    </div>


                    <div className='h3img2'>
                    <img src='icon-check.svg' className='icon-check2' />
                        <h3 className='h32'> .  تقييم واختيار أفضل منهجية أو إطار عمل لكل مشروع تقني</h3>
                    </div>

                    <div className='h3img3'>
                    <img src='icon-check.svg' className='icon-check3' />
                        <h3 className='h33'> .   استخدام مهارات متقدمة في التخطيط، التنفيذ، ومراقبة المشاريع التقنية</h3>
                    </div>

                    <div className='h3img4'>
                    <img src='icon-check.svg' className='icon-check4' />
                        <h3 className='h34'> .  إتقان أدوات وتقنيات المشاريع التقنية الحديثة </h3>
                    </div>


                </div>
                </Col>
            </Row>
        </Container>
    </section>

























































                                             {/* //section7// */}


    {/* <section className="sectiont77">

        <img  src="logo-white.svg"  className="logo-white" />
        <img  src="stc.svg"  className="stc-svg"/>
        <img  src="safcsp-logo-white.svg"  className="safcsp-logo-white-svg"/>

</section> */}


</>


  )
}

export default Track1
