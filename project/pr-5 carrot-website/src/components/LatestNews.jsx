import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";

const LatestNews = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-3">Latest News</h2>
            <p className="text-center mb-5 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore lacus vel facilisis.
            </p>
            <Row>
                <Col md={4}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <small >By Admin | Snacks</small>
                            <Card.Title className="mt-2">
                                Urna pretium elit mauris cursus at elit Vestibulum.
                            </Card.Title>
                            <Button variant="none" className="text-success p-0">
                                Read More <span><FaArrowRight /></span>
                            </Button>
                        </Card.Body>
                        <div className="position-relative">
                            <Card.Img variant="bottom" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/2.jpg" alt="News 1" />
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    right: '10px',
                                    backgroundColor: '#212529',
                                    color: 'white',
                                    padding: '10px 15px',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                }}
                            >
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>10</div>
                                <div style={{ textTransform: 'uppercase', fontSize: '12px' }}>oct</div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <small>By Admin | Food</small>
                            <Card.Title className="mt-2">
                                Best guide to Shopping for organic ingredients.
                            </Card.Title>
                            <Button variant="none" className="text-success p-0">
                                Read More <span><FaArrowRight /></span>
                            </Button>
                        </Card.Body>
                        <div className="position-relative">
                            <Card.Img variant="bottom" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/1.jpg" alt="News 2" />
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    right: '10px',
                                    backgroundColor: '#212529',
                                    color: 'white',
                                    padding: '10px 15px',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                }}
                            >
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>09</div>
                                <div style={{ textTransform: 'uppercase', fontSize: '12px' }}>sep</div>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <small>By Admin | Snacks</small>
                            <Card.Title className="mt-2">
                                Cursus at elit vestibulum urna pretium elit mauris.
                            </Card.Title>
                            <Button variant="none" className="text-success p-0">
                                Read More <span><FaArrowRight /></span>
                            </Button>
                        </Card.Body>
                        <div className="position-relative">
                            <Card.Img variant="bottom" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/3.jpg" alt="News 3" />
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    right: '10px',
                                    backgroundColor: '#212529',
                                    color: 'white',
                                    padding: '10px 15px',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                }}
                            >
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>12</div>
                                <div style={{ textTransform: 'uppercase', fontSize: '12px' }}>oct</div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LatestNews;
