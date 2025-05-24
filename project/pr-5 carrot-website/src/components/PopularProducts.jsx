import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';

const PopularProducts = () => {
    return (
        <Container className="py-3 ">
            <h2 className="text-center fw-bold">Popular Products</h2>
            <p className="text-center text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore lacus vel facilisis.
            </p>
            <Row>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center fw-bold text-success p-3" action>
                            All <span>&rarr;</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center fw-semibold p-3" action>
                            Snack <span>&rarr;</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center fw-semibold p-3" action>
                            Vegetable <span>&rarr;</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center fw-semibold p-3" action>
                            Fruit <span>&rarr;</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center fw-semibold p-3" action>
                            Bakery <span>&rarr;</span>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={9}>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <Col>
                            <Card className="h-100 text-center p-2" >
                                <Card.Img variant="top" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/1.jpg" />
                                <Card.Body>
                                    <Card.Text className="text-muted">Vegetables</Card.Text>
                                    <div className="text-warning mb-2">★★★★☆ <small>(4.5)</small></div>
                                    <Card.Title className="fs-6 fw-bold">Fresh organic villa farm lemon 500gm pack</Card.Title>
                                    <div className="text-success fw-bold">$120.25 <span className="text-decoration-line-through text-muted ms-2">$123.25</span></div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="h-100 text-center p-2">
                                <Card.Img variant="top" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/9.jpg" />
                                <Card.Body>
                                    <Card.Text className="text-muted">Snacks</Card.Text>
                                    <div className="text-warning mb-2">★★★★★ <small>(5.0)</small></div>
                                    <Card.Title className="fs-6 fw-bold">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <div className="text-success fw-bold">$145 <span className="text-decoration-line-through text-muted ms-2">$150</span></div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="h-100 text-center p-2">
                                <Card.Img variant="top" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/2.jpg" />
                                <Card.Body>
                                    <Card.Text className="text-muted">Fruits</Card.Text>
                                    <div className="text-warning mb-2">★★★★☆ <small>(4.5)</small></div>
                                    <Card.Title className="fs-6 fw-bold">Fresh organic apple 1kg simla marmimg</Card.Title>
                                    <div className="text-success fw-bold">$120.25 <span className="text-decoration-line-through text-muted ms-2">$123.25</span></div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="h-100 text-center p-2">
                                <Card.Img variant="top" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/17.jpg" />
                                <Card.Body>
                                    <Card.Text className="text-muted">Bakery</Card.Text>
                                    <div className="text-warning mb-2">★★★★★ <small>(5.0)</small></div>
                                    <Card.Title className="fs-6 fw-bold">Delicious white baked fresh bread and toast</Card.Title>
                                    <div className="text-success fw-bold">$205 <span className="text-decoration-line-through text-muted ms-2">$220</span></div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col md={3}  style={{top:'50px'}}>
                    <Card
                        className="text-white text-start p-3 border-0"
                        style={{
                            backgroundImage:
                                "url('https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/product-banner.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            height: '100%',
                            minHeight: '400px',
                        }}
                    >
                        <div className="d-flex flex-column justify-content-between h-100">
                            <div>
                                <h4 className="fw-light">Juicy</h4>
                                <h2 className="fw-bold text-warning">FRUITS</h2>
                                <p className="mb-3">100% Natural</p>
                                <Button
                                    variant="light"
                                    className="fw-semibold px-4 text-success"
                                    style={{ borderRadius: '8px' }}
                                >
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={9} className='mt-4'>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <Col>
                            <Card className="h-100 text-center p-2" >
                                <Card.Img variant="top" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/11.jpg" />
                                <Card.Body>
                                    <Card.Text className="text-muted">Vegetables</Card.Text>
                                    <div className="text-warning mb-2">★★★★☆ <small>(4.5)</small></div>
                                    <Card.Title className="fs-6 fw-bold">Fresh organic villa farm lemon 500gm pack</Card.Title>
                                    <div className="text-success fw-bold">$120.25 <span className="text-decoration-line-through text-muted ms-2">$123.25</span></div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
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

                        <Col>
                            <Card className="h-100 text-center p-2">
                                <Card.Img variant="top" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/10.jpg" />
                                <Card.Body>
                                    <Card.Text className="text-muted">Fruits</Card.Text>
                                    <div className="text-warning mb-2">★★★★☆ <small>(4.5)</small></div>
                                    <Card.Title className="fs-6 fw-bold">Fresh organic apple 1kg simla marmimg</Card.Title>
                                    <div className="text-success fw-bold">$120.25 <span className="text-decoration-line-through text-muted ms-2">$123.25</span></div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="h-100 text-center p-2">
                                <Card.Img variant="top" src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/17.jpg" />
                                <Card.Body>
                                    <Card.Text className="text-muted">Bakery</Card.Text>
                                    <div className="text-warning mb-2">★★★★★ <small>(5.0)</small></div>
                                    <Card.Title className="fs-6 fw-bold">Delicious white baked fresh bread and toast</Card.Title>
                                    <div className="text-success fw-bold">$205 <span className="text-decoration-line-through text-muted ms-2">$220</span></div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default PopularProducts;
