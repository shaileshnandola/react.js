import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RiRedPacketLine } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const Product = () => {
    return (
        <div>
            <Container className="py-5">
                <Row className="g-4">
                    <Col md={6} lg={3}>
                        <Card className="text-center border-0" style={{ backgroundColor: '#f9f9f9' }}>
                            <Card.Body>
                                <div className="mb-3"><RiRedPacketLine size={40} color="#5cb49e" /></div>
                                <Card.Title className="fw-bold">Product Packing</Card.Title>
                                <Card.Text className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="text-center border-0" style={{ backgroundColor: '#f9f9f9' }}>
                            <Card.Body>
                                <div className="mb-3"><RiCustomerService2Line  size={40} color="#5cb49e" /></div>
                                <Card.Title className="fw-bold">24X7 Support</Card.Title>
                                <Card.Text className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="text-center border-0" style={{ backgroundColor: '#f9f9f9' }}>
                            <Card.Body>
                                <div className="mb-3"><FiTruck size={40} color="#5cb49e" /></div>
                                <Card.Title className="fw-bold">Delivery in 5 Days</Card.Title>
                                <Card.Text className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="text-center shadow-sm border-0" style={{ backgroundColor: '#f9f9f9' }}>
                            <Card.Body>
                                <div className="mb-3"><RiMoneyDollarBoxLine size={40} color="#5cb49e" /></div>
                                <Card.Title className="fw-bold">Payment Secure</Card.Title>
                                <Card.Text className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product
