import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { HashLink } from 'react-router-hash-link'






const Home = () => {
  return (

<>

                                                {/* //section1// */}

        <section  className="section1" >

            <Container fluid>
            <Row>
                <Col lg={5} md={5} sm={12}>
                <img src="hero.svg" className="hero"/>
                </Col>

                <Col lg={7} md={7} sm={12}>
                <div className="text1">
                <h3 className="texth3" >  تعلم البرمجة  </h3>
                <h4 className="texth4" >  وابدأ بصناعة حلول لمشاكل العالم  </h4>
                <p className="textp" > توفر لك منصة سطر التعليمية محتوى متنوع ومتكامل يساعدك في تعلم البرمجة بكل سهولة ومتعة </p>
                <HashLink to="/New"><Button className="button1" >  سجل وابدأ التعلم </Button></HashLink>

                
                    </div>
                    </Col>
                    </Row>
                            </Container>
                            </section>





                                               {/* //section2// */}


        <section  className="section2">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="divcolall">
                            <div>
                            <h3 className="number" >2975</h3>
                            <p> مقطع قيديو </p>
            </div>

                        <div>
                            <h3 className="number"  >119</h3>
                            <p>مشروع تطبيقى</p>
            </div>

                        <div>
                            <h3 className="number" >454</h3>
                            <p>سؤال اختبار</p>
            </div>

                        <div>
                            <h3  className="number">411</h3>
                            <p>مقال</p>
            </div>

        </div>
            </Col>
                    </Row>
                        </Container>
                            </section>





                                               {/* //section3// */}


        <section  className="section3" >
            <Container>
                <Row>
                    <Col sm={12} >
                        <div className="divtext">
                            <h2  className="divtexth2" >   محتوى تعليمي مجاني وبجودة عالية </h2>
                                    <p className="divtextp">   نفخر بتقديم محتوى عربي تقني عالي الجودة وغير مدفوع بروح سعودية،
يمكن من خلاله تعلم البرمجة في أهم المجالات التقنية   </p>
            </div>
                </Col>
                        </Row>
                            </Container>
        </section>


<h2 className="import">  أهم المميزات </h2>

                                                        {/* //section4// */}


                    <section  className="section4" >

<Container>
    <Row>
    <Col lg={3} md={3} sm={12}>
    <Card className="card1">
    <img  src="feature-tech.svg"  className="icon3"/>
        <Card.Body>
        <Card.Title  className="cardtitle"> تعلّم أحدث التقنيات   </Card.Title>
        <Card.Text  className="cardtext">
        تقدم محتوى متجدد وفقًا لأحدث التقنيات المطلوبة في سوق العمل.
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>

        <Col lg={3} md={3} sm={12}>
        <Card  className="card2" >
        <img  src="feature-content.svg"  className="icon2"   />
        <Card.Body>
        <Card.Title className="cardtitle"> محتوى تعليمي متنوع </Card.Title>
        <Card.Text  className="cardtext">
        تقدم محتوى متنوع ومتكامل يخدم مختلف الفئات والمجالات
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>

    <Col lg={3} md={3} sm={12}>
        <Card className="card3" >
            <img  src="feature-easy.svg "  className="icon1"   />
        <Card.Body>
        <Card.Title className="cardtitle">   تعلّم سهل وممتع </Card.Title>
        <Card.Text  className="cardtext">تقدم محتوى تعليمي بشكل بسيط وممتع وبجودة عالية. </Card.Text>
    </Card.Body>
    </Card>
    </Col>


    </Row>
</Container>
</section>


                                                          {/* //section5// */}



                    <section  className="section5" >

                    <h2 className="contant">  أنواع المحتوى التعليمي  </h2>

            <div className="cards">
                <Container>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                            <div className="card53">
                            <img src="howto.svg"  className='icon3card' />
                                <HashLink to="/Tracks"  className="card5" >
                                <Card.Body>
                                <Card.Title  className="cardtitle53">  مشاريع تطبيقية  </Card.Title>
                                <Card.Text  className="cardtext53">
                                دروس مصغّرة توضح لك كيفية إتقان مهارة برمجية محددة تحتاجها لبناء مشروعك.   
            </Card.Text>
        </Card.Body>
        </HashLink>

</div>
</Col>

                        <Col lg={3} md={3} sm={12}>
                            <div className="card52">
                            <img src="courses.svg"  className='icon2card' />
                                <HashLink to="/Tracks"  className="card5" >
                                <Card.Body>
                                <Card.Title    className="cardtitle52">  دورات  </Card.Title>
                                <Card.Text  className="cardtext52"  >
                                مجموعة من الدروس التعليمية والمشاريع التطبيقية بهدف إتقان المهارات والتقنيات الحديثة.  
            </Card.Text>
            </Card.Body>
                </HashLink>
        </div>
        </Col>


                            <Col lg={3} md={3} sm={12}>
                                <div className="card51">
                                    <img src="path.svg"  className='icon1card' />
                                <HashLink to="/Tracks" className="card5" >
                                <Card.Body>
                                <Card.Title  className="cardtitle51" >   مسارات   </Card.Title>
                                <Card.Text  className="cardtext51" >
                                توضح لك معالم الطريق الذي تحتاجه لتصل لهدف معين من خلال مجموعة من الدورات والمشاريع التطبيقية المقترحة التي تشكل حزمة تعليمية متكاملة.   
            </Card.Text>
            </Card.Body>
            </HashLink>
            </div>
            </Col>
        </Row>
        </Container>

</div>
</section>


                                                   {/* //section6// */}


        <section className="section6">
            <Col>
                <img src="calltoaction.svg" className="calltoaction"/>
                    </Col>
            <Col>
                <h2  className="h2section6"   >يمكنك البدء بتصفح كامل المحتوى التعليمي </h2>
                    <HashLink to="/Features"><button  className="but1" >    الانتقال الي المحتوى التعليمي  </button></HashLink>
            </Col>
        </section>



                                                                     {/* //section7// */}


        <section className="section7">
            <div className='photos'>
                <img  src="logo-white.svg"  className="logo-white"/>
                    <img  src="stc.svg"  className="stc-svg"/>
                        <img  src="safcsp-logo-white.svg"  className="safcsp-logo-white-svg"   />
            </div>
        </section>




</>

    )
}

export default Home