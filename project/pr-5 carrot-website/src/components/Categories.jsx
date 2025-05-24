import React from 'react';
import { Container, Col, Card, Row, Button } from 'react-bootstrap';

const Categories = () => {
    return (
        <Container style={{ paddingTop: '100px', paddingBottom: '50px' }}>
            <Row>
                <Col xs={12} md={4}>
                    <Card className="text-center border-0 mb-2" style={{ backgroundColor: '#f8f9fa' }}>
                        <Card.Body>
                            <h5 style={{ margin: 0, fontWeight: '600', color: '#6ec186' }}>Cake & Milk</h5>
                            <p style={{ color: '#6c757d' }}>(65 items)</p>
                        </Card.Body>
                    </Card>
                    <Card className="text-center border-0 mb-2" style={{ backgroundColor: '#f8f9fa' }}>
                        <Card.Body>
                            <h5 style={{ margin: 0, fontWeight: '600' }}>Fresh Meat</h5>
                            <p style={{ color: '#6c757d' }}>(30 items)</p>
                        </Card.Body>
                    </Card>
                    <Card className="text-center border-0 mb-2" style={{ backgroundColor: '#f8f9fa' }}>
                        <Card.Body>
                            <h5 style={{ margin: 0, fontWeight: '600' }}>Vegetables</h5>
                            <p style={{ color: '#6c757d' }}>(25 items)</p>
                        </Card.Body>
                    </Card>
                    <Card className="text-center border-0 mb-2" style={{ backgroundColor: '#f8f9fa' }}>
                        <Card.Body>
                            <h5 style={{ margin: 0, fontWeight: '600', }}>Apple & Mango</h5>
                            <p style={{ color: '#6c757d' }}>(45 items)</p>
                        </Card.Body>
                    </Card>
                    <Card className="text-center border-0 mb-2" style={{ backgroundColor: '#f8f9fa' }}>
                        <Card.Body>
                            <h5 style={{ margin: 0, fontWeight: '600' }}>Strawberry</h5>
                            <p style={{ color: '#6c757d' }}>(68 items)</p>
                        </Card.Body>
                    </Card>
                    <Card className="text-center border-0" style={{ backgroundColor: '#f8f9fa' }}>
                        <Card.Body>
                            <h5 style={{ margin: 0, fontWeight: '600', color: '#6ec186' }}>View More</h5>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4}>
                    <Card className="text-white border-0" style={{ position: 'relative' }}>
                        <Card.Img
                            src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/7.jpg"
                            alt="Apple"
                            style={{ height: '575px', objectFit: 'cover' }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                background: 'rgba(0,0,0,0.4)',
                                padding: '10px',
                                borderRadius: '8px',
                            }}
                        >
                            <h1 style={{ fontSize: '48px', margin: 0 }}>30<span style={{ fontSize: '24px' }}>%</span></h1>
                            <p style={{ margin: 0 }}>OFF</p>
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                color: '#fff',
                            }}
                        >
                            <h3 style={{ fontWeight: 'bold', marginLeft: '130px' }}>Apple</h3>
                            <Button style={{ backgroundColor: '#6ec186', border: 'none', marginLeft: '130px' }}>Shop Now</Button>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="text-white border-0" style={{ position: 'relative' }}>
                        <Card.Img
                            src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/8.jpg"
                            alt="Mango"
                            style={{ height: '575px', objectFit: 'cover' }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                background: 'rgba(0,0,0,0.4)',
                                padding: '10px',
                                borderRadius: '8px',
                            }}
                        >
                            <h1 style={{ fontSize: '48px', margin: 0 }}>25<span style={{ fontSize: '24px' }}>%</span></h1>
                            <p style={{ margin: 0 }}>OFF</p>
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                color: '#fff',
                            }}
                        >
                            <h3 style={{ fontWeight: 'bold', marginLeft: '130px' }}>Mango</h3>
                            <Button style={{ backgroundColor: '#6ec186', border: 'none', marginLeft: '130px' }}>Shop Now</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Categories;
