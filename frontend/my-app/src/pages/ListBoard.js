import React, { useState } from 'react';
import { Table, Pagination, Container, Dropdown, Row, Col } from 'react-bootstrap';

const ListBoard = () => {
    const posts = [
        { id: 1, title: '첫 번째 게시글', author: '김철수', date: '2024-12-01' },
        { id: 2, title: '두 번째 게시글', author: '박영희', date: '2024-12-02' },
        { id: 3, title: '세 번째 게시글', author: '이민수', date: '2024-12-03' },
        { id: 4, title: '네 번째 게시글', author: '최은지', date: '2024-12-04' },
        { id: 5, title: '다섯 번째 게시글', author: '장서현', date: '2024-12-05' },
        { id: 6, title: '여섯 번째 게시글', author: '정우진', date: '2024-12-06' },
        { id: 7, title: '일곱 번째 게시글', author: '홍길동', date: '2024-12-07' },
        { id: 8, title: '여덟 번째 게시글', author: '김유진', date: '2024-12-08' },
        { id: 9, title: '아홉 번째 게시글', author: '이하늘', date: '2024-12-09' },
        { id: 10, title: '열 번째 게시글', author: '박소영', date: '2024-12-10' },
        { id: 11, title: '열한 번째 게시글', author: '오진호', date: '2024-12-11' },
        { id: 12, title: '열두 번째 게시글', author: '한지민', date: '2024-12-12' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePostsPerPageChange = (numPosts) => {
        setPostsPerPage(numPosts);
        setCurrentPage(1);
    };

    const fillRows = (posts) => {
        const remainingRows = postsPerPage - posts.length;
        const emptyRows = new Array(remainingRows).fill({ id: null, title: "", author: "", date: "" });
        return [...posts, ...emptyRows]; // post 배열과 empty 배열을 병합하여 리턴
    };

    return (
        <Container style={{ marginTop: "30px", marginBottom: "15px" }}>
            <h2>KIMCHO BOARD</h2>

            <Row className="mb-3" style={{ marginTop: "20px" }}>
                <Col>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>글쓴이</th>
                                <th>날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fillRows(currentPosts).map((post, index) => (
                                <tr key={post.id || index} style={{ height: '50px' }}>
                                    <td>{post.id || <span>&nbsp;</span>}</td>
                                    <td>{post.title || <span>&nbsp;</span>}</td>
                                    <td>{post.author || <span>&nbsp;</span>}</td>
                                    <td>{post.date || <span>&nbsp;</span>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* 페이지네이션 및 드롭다운 컨테이너 */}
            <Row className="d-flex justify-content-between align-items-center">
                <Col className="d-flex justify-content-center">
                    {/* 페이지네이션 */}
                    <Pagination>
                        {/*단축평가(short-circuit eval) 왼쪽 조건이 true면 오른쪽함수 실행*/}
                        <Pagination.Prev onClick={() => currentPage > 1 && paginate(currentPage - 1)} />
                        {pageNumbers.map((number) => (
                            <Pagination.Item
                                key={number}
                                active={number === currentPage}
                                onClick={() => paginate(number)}
                            >
                                {number}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)} />
                    </Pagination>
                    {/* 페이지당 게시글 수 선택 드롭다운 */}
                    <Dropdown style={{ marginLeft: "20px" }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {postsPerPage}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handlePostsPerPageChange(5)}>5개</Dropdown.Item>
                            <Dropdown.Item onClick={() => handlePostsPerPageChange(10)}>10개</Dropdown.Item>
                            <Dropdown.Item onClick={() => handlePostsPerPageChange(15)}>15개</Dropdown.Item>
                            <Dropdown.Item onClick={() => handlePostsPerPageChange(20)}>20개</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container >
    );
};

export default ListBoard;