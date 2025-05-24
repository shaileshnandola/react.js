import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Organic = () => {
    return (
        <Container className="my-5 pt-5">
            <Row>
                <Col md={7}>
                    <Row>
                        <Col md={4} >
                            <Card className="h-100 text-center p-2" >
                                <Card.Img variant="top" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/1.jpg" />
                                <Card.Body>
                                    <Card.Text className="text-muted">Vegetables</Card.Text>
                                    <div className="text-warning mb-2">★★★★★ <small>(4.5)</small></div>
                                    <Card.Title className="fs-6 fw-bold">Fresh organic villa farm lemon 500gm pack</Card.Title>
                                    <div className="text-success fw-bold">$120.25 <span className="text-decoration-line-through text-muted ms-2">$123.25</span></div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="h-100 text-center p-2">
                                <Card.Img variant="top" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/2.jpg" />
                                <Card.Body>
                                    <Card.Text className="text-muted">Fruits</Card.Text>
                                    <div className="text-warning mb-2">★★★★★ <small>(4.5)</small></div>
                                    <Card.Title className="fs-6 fw-bold">Fresh organic apple 1kg simla marmimg</Card.Title>
                                    <div className="text-success fw-bold">$120.25 <span className="text-decoration-line-through text-muted ms-2">$123.25</span></div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="h-100 text-center p-2">
                                <Card.Img variant="top" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/3.jpg" />
                                <Card.Body>
                                    <Card.Text className="text-muted">Snacks</Card.Text>
                                    <div className="text-warning mb-2">★★★★★ <small>(5.0)</small></div>
                                    <Card.Title className="fs-6 fw-bold">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <div className="text-success fw-bold">$145 <span className="text-decoration-line-through text-muted ms-2">$150</span></div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col md={5}>
                    <Card className="border-0 text-white position-relative h-100" style={{ background: '#f9f9f9' }}>
                        <Card.Img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/products-rightview.jpg" alt="Banner" style={{ height: '100%', objectFit: 'cover' }} />
                        <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-end text-center p-4">
                            <div className="w-100">
                                <h5 className="fw-bold text-dark">Organic & Healthy Vegetables</h5>
                                <p className="text-dark mb-2">
                                    <strong>25%</strong> OFF
                                </p>
                                <Button
                                    variant="success"
                                    className="fw-semibold px-4 text-white"
                                    style={{ borderRadius: '8px', width: '200px' }}
                                >
                                    Shop Now
                                </Button>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Organic;
