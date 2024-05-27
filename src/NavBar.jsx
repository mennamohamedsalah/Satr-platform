import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import { HashLink } from 'react-router-hash-link'








function NavBar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


        <HashLink to="/Sigin"><Button variant="outline-info"  className="sigin"  >تسجيل الدخول</Button></HashLink>

      <HashLink to="/New"><Button variant="info" className="acount" >إنشاء الحساب </Button></HashLink>


          <Nav className="me-auto">

            <Nav.Link href="/Tracks">المساحات</Nav.Link>

            <Nav.Link href="/Tracks">المحتوى المقروء</Nav.Link>


            <NavDropdown title="منصاتنا" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Tracks">منصة كودرهب</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="/Tracks">
                منصة المبادرات والمعسكرات
              </NavDropdown.Item>


            </NavDropdown>




            <NavDropdown title="المحتوى التعليمي " id="basic-nav-dropdown">
              <NavDropdown.Item href="/Tracks">المسارات</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="/Tracks">
                الدورات
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="/Tracks">المشاريع التطبيقية</NavDropdown.Item>

            </NavDropdown>















          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand href="/">
        <img  src="logo.svg"  className="logo-nav"   />
        </Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;