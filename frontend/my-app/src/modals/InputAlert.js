import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const InputAlert = ({ show, onHide }) => {
    return (
        <>
            <Modal show={show} onHide={onHide} centered backdrop={false} style={{ zIndex: 1055 }}>
                <Modal.Header closeButton>
                    <Modal.Title>회원가입 에러</Modal.Title>
                </Modal.Header>
                <Modal.Body>빈칸이 있습니다. 모든 필드를 채워주세요.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default InputAlert