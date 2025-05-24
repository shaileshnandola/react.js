import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Food = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/deal/bg-deal.jpg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '10% 0',
                marginBottom:'20px'
            }}
        >
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <Card
                            className="p-4 border-0"
                            style={{
                                borderRadius: '10px',
                                backgroundColor: '#fff5ee',
                                maxWidth: '500px',
                            }}
                        >
                            <Card.Body>
                                <p className="text-success fw-bold mb-1" style={{ fontSize: '1.2rem' }}>
                                    35% <span className="text-dark fw-normal">OFF</span>
                                </p>
                                <h2 className="fw-bold mb-3">Great deal on organic food.</h2>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    maecenas accumsan lacus vel facilisis.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Food;
