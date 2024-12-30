import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#DCDCDC',
            position: 'relative',
            bottom: 0,
            width: '100%',
            padding: '10px 0',
            textAlign: 'center',
        }}>
            <Container>
                <div>
                    @Copy; 2024 Kimcho Technologies Inc. All Rights Reserved.
                </div>
            </Container>
        </footer>
    )
}

export default Footer