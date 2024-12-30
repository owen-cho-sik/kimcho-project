import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const SingUpSuccess = ({ show, onHide }) => {
    return (
        <>
            <Modal show={show} onHide={onHide} centered backdrop={false} style={{ zIndex: 1055 }}>
                <Modal.Header closeButton>
                    <Modal.Title>회원가입 완료</Modal.Title>
                </Modal.Header>
                <Modal.Body>회원님의 가입을 진심으로 축하드립니다.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SingUpSuccess