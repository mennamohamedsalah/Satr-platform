import React from 'react'
import { HashLink } from 'react-router-hash-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Tracks = () => {
  return (

<>
      <section   className='section-Tracks'>
        <div className='div-Tracks'>
          <HashLink to="/Features"  className='contact-tracks'>  المحتوى التعليمي  </HashLink>
    </div>
      <h3  className='h3-tracks'>مسارات تعليمية</h3>
      <input placeholder='ابحث هنا'   className="input-Tracks"/>



<section className='cards'>


<section className='cards-tracks'>

<CardGroup>

  <Card  className='card3-tracks'>
  <HashLink to="/Track1" className='hashtrack' >
  <Card.Body     className='card3'>
    <Card.Title    className='Title-card3'>    
مسار الطالب الجامعي    </Card.Title>
    <Card.Text     className='Text-card3'>
    يقدم هذا المسار سلسلة من الدورات التعليمية المتكاملة بهدف تعزيز فهم الطالب للمناهج الأكاديمية الجامعية في مجال علوم الحاسب، والذي يكسبهم المهارات ا... 
    </Card.Text>
  </Card.Body>
  </HashLink>
</Card>


<Card    className='card2-tracks'>
<HashLink to="/Track1" className='hashtrack' >
  <Card.Body  className='card2'>
    <Card.Title      className='Title-card2'>    ...  
مسار علم البيانات والذكاء ال     </Card.Title>
    <Card.Text      className='Text-card2'>
    مسار تعليمي يساعد المهتمين في دخول مجال علم البيانات والذكاء الاصطناعي على التعرف على أهم المفاهيم الأساسية والتي تشمل: التعامل مع أنواع البيانات ا... 
      {' '}
    </Card.Text>
  </Card.Body>
  </HashLink>
</Card>


<Card    className='card1-tracks'>
<HashLink to="/Track1" className='hashtrack' >
  <Card.Body   className='card1'>
    <Card.Title  className='Title-card1'> 
مسار منهجيات وإطارات عمل </Card.Title>
    <Card.Text   className='Text-card1'>
    مسار تعليمي مصمّم لمساعدة الأشخاص المهتمين في مجال إدارة المشاريع وتحديداً إدارة المشاريع التقنية، يساعد هذا المسار في فهم المنهجيات وإطارات العمل ... 
    </Card.Text>
  </Card.Body>
  </HashLink>
</Card>


</CardGroup>
</section>

<section className='cards-tracks2'>
  <CardGroup>
<Card  className='card3-tracks'>
<HashLink to="/Track1" className='hashtrack' >
  <Card.Body     className='card3'>
    <Card.Title    className='Title-card4'>  Flutter
مسار تطوير تطبيقات    </Card.Title>
    <Card.Text     className='Text-card4'>
    سنتعرف في المسار  على طريقة بناء تطبيقات الموبايل والويب باستخدام Flutter، حيث تبدأ رحلتك بتعلم لغة Dart ثم تنتقل لتعلم مبادئ وأساسيات بناء التطبيق... 
    </Card.Text>
  </Card.Body>
  </HashLink>
</Card>


<Card    className='card2-tracks'>
<HashLink to="/Track1" className='hashtrack' >
  <Card.Body  className='card2'>
    <Card.Title    className='Title-card5'> Linux
مسار نظام      </Card.Title>
    <Card.Text    className='Text-card5'>
    تعرف في هذا المسار على أهم الأدوات المستخدمه لإدارة أنظمة Linux، ومنها أدوات تهم أي مطور برمجيات مثل أدوات Command-line و الأتمتة مع Bash Scripting... 
      {' '}
    </Card.Text>
  </Card.Body>
  </HashLink>
</Card>


<Card    className='card1-tracks'>
<HashLink to="/Track1" className='hashtrack' >
  <Card.Body   className='card1'>
    <Card.Title    className='Title-card6'>   Java   مسار     </Card.Title>
    <Card.Text      className='Text-card6'>
    مسار تعليمي مخصص للمطورين الذين يرغبون في اكتساب مهارات أساسية في مجال البرمجة باستخدام لغة Java، بحيث تبدأ رحلتك بتعلم أساسيات البرمجة ثم التعرف ع... 
    </Card.Text>
  </Card.Body>
  </HashLink>
</Card>
</CardGroup>


</section>



<section className='cards-tracks3'>

<CardGroup>
<Card  className='card3-tracks'>
<HashLink to="/Track1" className='hashtrack' >
  <Card.Body     className='card3'>
    <Card.Title   className='Title-card7'>   Android 
مسار تطوير تطبيقات      </Card.Title>
    <Card.Text      className='Text-card7'>
    سيأخذك هذا المسار في رحلة تتعلم من خلالها تطوير تطبيقات Android، حيث تبدأ رحلتك بتعلّم أساسيات البرمجة بلغة Kotlin مرورًا بمجموعة من المفاهيم التي ... 
    </Card.Text>
  </Card.Body>
</HashLink>
</Card>



<Card    className='card2-tracks'>
<HashLink to="/Track1" className='hashtrack' >
  <Card.Body  className='card2'>
    <Card.Title      className='Title-card8'>   Full-Stack Python
مسار      </Card.Title>
    <Card.Text      className='Text-card8'>
    ستتعلم في هذا المسار كيفية تطوير وبناء تطبيقات ويب تفاعلية متكاملة باستخدام Python، حيث تبدأ رحلتك بتعلم أساسيات تطوير وبناء التطبيقات (Back-End) و... {' '}
    </Card.Text>
  </Card.Body>
</HashLink>
</Card>



<Card    className='card1-tracks'>
<HashLink to="/Track1" className='hashtrack' >
  <Card.Body   className='card1'>
    <Card.Title     className='Title-card9'>    Full-Stack .NET
مسار     </Card.Title>
    <Card.Text    className='Text-card9'>
    ستتعرف في هذا المسار على طريقة تطوير وبناء تطبيقات ويب تفاعلية متكاملة باستخدام NET.، حيث تبدأ رحلتك بتعلم أساسيات تطوير وبناء التطبيقات (Back-End)... 
    </Card.Text>
  </Card.Body>
</HashLink>
</Card>
</CardGroup>


</section>




<section className='cards-tracks4'>

<CardGroup>
<Card    className='card42-tracks'>
<HashLink to="/Track1" className='hashtrack' >
  <Card.Body  className='card42'>
    <Card.Title      className='Title-card10'>  iOS 
مسار تطوير تطبيقات  </Card.Title>
    <Card.Text      className='Text-card10'>
    سيأخذك هذا المسار في رحلة تتعلم من خلالها تطوير تطبيقات iOS، ستبدأ بتعلّم أساسيات البرمجة بلغة Swift 
مرورًا بمجموعة من المفاهيم التي تحتاجها في تط...           </Card.Text>
  </Card.Body>
</HashLink>
</Card>



<Card    className='card41-tracks'>
<HashLink to="/Track1" className='hashtrack' >
  <Card.Body   className='card41'>
    <Card.Title     className='Title-card11'>  
مسار Full-Stack JavaScript </Card.Title>
    <Card.Text    className='Text-card11'>
    سيأخذك هذا المسار في رحلة تتعلم من خلالها تطوير وبناء تطبيقات ويب تفاعلية متكاملة، تبدأ رحلتك بتعلم أساسيات البرمجة بلغة JavaScript ثم ستتعرف على ط... 
    </Card.Text>
  </Card.Body>
</HashLink>
</Card>
</CardGroup>


</section>

</section>




                                             {/* //section7// */}


    <section className="sectiont77">

      <img  src="logo-white.svg"  className="logo-white" />
        <img  src="stc.svg"  className="stc-svg"/>
        <img  src="safcsp-logo-white.svg"  className="safcsp-logo-white-svg"/>

</section>
















</section>


















</>

















  )
}

export default Tracks
