import React, { useState } from 'react'
import { Modal, Button, Form, Container } from 'react-bootstrap'
import axios from 'axios';

const SignIn = ({ show, onHide }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                email,
                password,
            });

            if (response.data === 'Login successful') {
                alert('로그인 성공');
            } else {
                alert('로그인 실패');
            }
        } catch (error) {
            console.error(error);
            alert('로그인 중 오류가 발생했습니다.');
        }
    };
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        로그인
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>이메일</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="button" onClick={handleLogin}>
                        로그인
                    </Button>
                    <Button onClick={onHide}>닫기</Button>
                </Modal.Footer>
            </Container>
        </Modal>
    );
}

export default SignIn