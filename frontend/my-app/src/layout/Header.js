import React, { useState } from 'react'
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignIn from '../modals/SignIn';
import SignUp from '../modals/SignUp';


const Header = () => {
    const [signInOn, setSignInOn] = useState(false);
    const [signUpOn, setSignUpOn] = useState(false);
    return (
        <>
            <SignIn show={signInOn} onHide={() => setSignInOn(false)} />
            <SignUp show={signUpOn} onHide={() => setSignUpOn(false)} />
            <header>
                <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">KimCho Project</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/list">List Style</Nav.Link>
                                <Nav.Link as={Link} to="/card">Card Style</Nav.Link>
                                <NavDropdown title="introDuce" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="ms-auto">
                                <Nav.Link eventKey="link-1" style={{ marginTop: '9px', marginRight: '15px' }}>
                                    고객지원
                                </Nav.Link>
                                <Nav.Link>
                                    <Button variant="primary" onClick={() => setSignInOn(true)}>로그인</Button>
                                </Nav.Link>
                                <Nav.Link>
                                    <Button variant="secondary" onClick={() => setSignUpOn(true)}>가입하기</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header >
        </>
    )
}

export default Header