import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import kimImage from '../assets/kim.jpg';
import choImage from '../assets/cho.jpg';
import idiotImage from '../assets/beatles.jpg';

const CardBoard = () => {
    const cardsPerPage = 12; // 한 페이지에 보여줄 카드 수 (12개)

    // 카드 배열을 생성 (실제 데이터로 교체할 수 있음)
    const cards = [
        { id: 1, title: 'CEO KIM', image: kimImage, description: '첫 물고기를 잡고 신나하는 우리의 CEO KIM 입니다.' },
        { id: 2, title: 'CEO CHO', image: choImage, description: '배멀미에 토를 엄청해서 힘들지만 선장님이 물고기 기념샷을 찍어줘 포즈를 취하는 CEO CHO 입니다.' },
        { id: 3, title: 'THREE IDIOTS', image: idiotImage, description: '비틀즈를 연상하게 하는 포토 입니다.' },
        { id: 4, title: 'CEO PARK', image: kimImage, description: 'CEO PARK 입니다.' },
        { id: 5, title: 'DIRECTOR KIM', image: choImage, description: 'DIRECTOR KIM 입니다.' },
        { id: 6, title: 'MARKETING', image: idiotImage, description: 'MARKETING 팀' },
        { id: 7, title: 'FINANCE', image: kimImage, description: 'FINANCE 팀' },
        { id: 8, title: 'HR TEAM', image: choImage, description: 'HR TEAM' },
        { id: 9, title: 'IT SUPPORT', image: idiotImage, description: 'IT SUPPORT 팀' },
        { id: 10, title: 'RESEARCH', image: kimImage, description: 'RESEARCH 팀' },
        { id: 11, title: 'LEGAL', image: choImage, description: 'LEGAL 팀' },
        { id: 12, title: 'SALES', image: idiotImage, description: 'SALES 팀' },
        { id: 13, title: 'CEO KIM', image: kimImage, description: '첫 물고기를 잡고 신나하는 우리의 CEO KIM 입니다.' },
        { id: 14, title: 'CEO CHO', image: choImage, description: '배멀미에 토를 엄청해서 힘들지만 선장님이 물고기 기념샷을 찍어줘 포즈를 취하는 CEO CHO 입니다.' },
        { id: 15, title: 'THREE IDIOTS', image: idiotImage, description: '비틀즈를 연상하게 하는 포토 입니다.' },
        { id: 16, title: 'CEO PARK', image: kimImage, description: 'CEO PARK 입니다.' },
        { id: 17, title: 'DIRECTOR KIM', image: choImage, description: 'DIRECTOR KIM 입니다.' },
        { id: 18, title: 'MARKETING', image: idiotImage, description: 'MARKETING 팀' },
        { id: 19, title: 'FINANCE', image: kimImage, description: 'FINANCE 팀' },
        { id: 20, title: 'HR TEAM', image: choImage, description: 'HR TEAM' }
    ];


    const totalPages = Math.ceil(cards.length / cardsPerPage); // 총 페이지 수
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

    // 현재 페이지에 맞는 카드들
    const startIndex = (currentPage - 1) * cardsPerPage;
    const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);

    return (
        <Container style={{ minHeight: "87vh", marginTop: "30px" }}>
            <Row>
                {currentCards.map((card) => (
                    <Col key={card.id} md={4} className="mb-4">
                        <Card style={{ height: '100%' }}>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                                <Button variant="primary" href={`/card/${card.id}`}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

                {/* 빈 카드 표시 */}
                {currentCards.length < cardsPerPage &&
                    Array.from({ length: cardsPerPage - currentCards.length }).map((_, index) => (
                        <Col key={`empty-${index}`} md={4} className="mb-4">
                            <Card style={{ height: '100%', visibility: 'hidden' }}>
                                <Card.Body></Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>

            {/* 페이지네이션 */}
            <Pagination className="justify-content-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </Container>
    );
};

export default CardBoard;