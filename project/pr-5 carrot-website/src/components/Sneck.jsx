import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Sneck = () => {
    return (
        <Container className="my-5">
            <Row className="g-4">
                <Col md={4}>
                    <Card
                        className="text-dark p-4 border-0 rounded-4"
                        style={{
                            backgroundImage: 'url("https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/2.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: '250px',
                            position: 'relative',
                        }}
                    >
                        <div style={{  padding: '20px', borderRadius: '12px' }}>
                            <h5 className="fw-bold">Fresh <br />Snacks & Sweets</h5>
                            <p>
                                <span className="fw-bold text-success">20%</span>
                                <span className="text-muted">Off on first order</span>
                            </p>
                            <Button variant="success" className="fw-semibold px-4 py-1">
                                Shop Now
                            </Button>
                        </div>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card
                        className="text-dark p-4 border-0 rounded-4"
                        style={{
                            backgroundImage: 'url("https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/3.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: '250px',
                            position: 'relative',
                        }}
                    >
                        <div style={{ padding: '20px', borderRadius: '12px' }}>
                            <h5 className="fw-bold">Fresh & Healthy <br /> Organic Fruits</h5>
                            <p>
                                <span className="fw-bold text-success">35%</span>
                                <span className="text-muted">Off on first order</span>
                            </p>
                            <Button variant="success" className="fw-semibold px-4 py-1">
                                Shop Now
                            </Button>
                        </div>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card
                        className="text-dark p-4 border-0 rounded-4"
                        style={{
                            backgroundImage: 'url("https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/1.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: '250px',
                            position: 'relative',
                        }}
                    >
                        <div style={{ padding: '20px', borderRadius: '12px' }}>
                            <h5 className="fw-bold">Healthy <br /> Bakery Products</h5>
                            <p>
                                <span className="fw-bold text-success">30%</span>
                                <span className="text-muted">Off on first order</span>
                            </p>
                            <Button variant="success" className="fw-semibold px-4 py-1 ">
                                Shop Now
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Sneck;
