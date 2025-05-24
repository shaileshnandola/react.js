import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Great = () => {
    return (
        <Container className="my-5 py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Great Words From People</h2>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore lacus vel  facilisis.
                </p>
            </div>

            <Row className="g-4">
                <Col md={4}>
                    <Card className="border-0 text-center p-4 h-100" style={{ backgroundColor: '#f7f7f7' }}>
                        <div className="d-flex justify-content-center">

                            <Image
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                roundedCircle
                                width="100"
                                height="100"
                                className="border border-3 border-white"
                                style={{ marginTop: '-60px' }}
                            />
                        </div>
                        <Card.Body>
                            <p className="text-muted mb-1">Co Founder</p>
                            <h5 className="fw-bold">Stephen Smith</h5>
                            <p className="text-muted">“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus velbr
                                <br /> facilisis.”</p>
                            <div className="text-warning fs-5">
                                ★★★★★
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="border-0  text-center p-4 h-100" style={{ backgroundColor: '#f7f7f7' }}>
                        <div className="d-flex justify-content-center">
                            <Image
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                roundedCircle
                                width="100"
                                height="100"
                                className="border border-3 border-white"
                                style={{ marginTop: '-60px' }}
                            />
                        </div>
                        <Card.Body>
                            <p className="text-muted mb-1">Manager</p>
                            <h5 className="fw-bold">Lorem Robinson</h5>
                            <p className="text-muted">“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel <br /> facilisis.”</p>
                            <div className="text-warning fs-5">
                                ★★★★★
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>                        
                    <Card className="border-0 text-center p-4 h-100" style={{ backgroundColor: '#f7f7f7'  }}>
                        <div className="d-flex justify-content-center">
                            <Image
                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                roundedCircle
                                width="100"
                                height="100"
                                className="border border-3 border-white"
                                style={{ marginTop: '-60px' }}
                            />
                        </div>
                        <Card.Body>
                            <p className="text-muted mb-1">Team Leader</p>
                            <h5 className="fw-bold">Saddika Alard</h5>
                            <p className="text-muted">“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel <br /> facilisis.”</p>
                            <div className="text-warning fs-5">
                                ★★★★★
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Great;
