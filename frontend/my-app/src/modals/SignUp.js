import React, { useState } from 'react'
import { Modal, Button, Form, Col, Row, Container } from 'react-bootstrap'
import InputAlert from './InputAlert';
import SignUpSuccess from './SignUpSuccess';
import axios from 'axios';

const SignUp = ({ show, onHide }) => {
    const [inputAlertOn, setInputAlertOn] = useState(false);
    const [SignUpSuccessOn, setSignUpSuccessOn] = useState(false);
    const initFormData = {
        userEmail: "",
        userPassword: "",
        userName: "",
        userPhone: "",
        userAddr: "",
    };
    const [formData, setFormData] = useState(initFormData);

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // 가입하기 버튼 클릭 핸들러
    const handleSubmit = () => {
        console.log("Form Data:", formData);
        const hasEmptyField = Object.values(formData).some((value) => value.trim() === "");
        if (hasEmptyField) {
            setInputAlertOn(true);
        } else {
            setSignUpSuccessOn(true);
            setInputAlertOn(false);
            onHide(); // 모달 창 닫기
        }
        // 서버로 formData 전송
        axios.post('http://localhost:8080/users/registerUser', formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log('회원가입 성공:', response);
            setFormData(initFormData);
        }).catch(error => {
            console.error('회원가입 실패:', error);
            //setFormData(initFormData);
        });
    };

    return (
        <>
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
                            가입하기
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="userEmail">
                                    <Form.Label>이메일</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={formData.userEmail} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="userPassword">
                                    <Form.Label>비밀번호</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={formData.userPassword} onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="userName">
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control placeholder="이름을 적어주세요." value={formData.userName} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="userPhone">
                                    <Form.Label>전화번호</Form.Label>
                                    <Form.Control placeholder="전화번호를 적어주세요." value={formData.userPhone} onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="userAddr">
                                <Form.Label>주소</Form.Label>
                                <Form.Control placeholder="1234 Main St" value={formData.userAddr} onChange={handleChange} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            가입하기
                        </Button>
                        <Button onClick={onHide}>닫기</Button>
                    </Modal.Footer>
                </Container>
            </Modal>
            <Container>
                <InputAlert
                    show={inputAlertOn}
                    onHide={() => setInputAlertOn(false)} // 모달 닫는 핸들러
                />
                <SignUpSuccess
                    show={SignUpSuccessOn}
                    onHide={() => setSignUpSuccessOn(false)} // 모달 닫는 핸들러
                />
            </Container>
        </>
    )
}

export default SignUp