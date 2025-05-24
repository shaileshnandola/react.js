import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Image } from 'react-bootstrap';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-light pt-5 pb-3 border-top">
            <Container>
                <Row className="mb-4">
                    <Col lg={3} md={6} className="mb-4">
                        <h4 className="fw-bold">
                            <img
                                src="https://img.icons8.com/emoji/48/carrot-emoji.png"
                                alt="logo"
                                width="40"
                            />Carrot
                        </h4>
                        <p className="text-muted">
                            Carrot is the biggest market of grocery products. Get your daily needs from our store.
                        </p>
                        <p className="text-muted mb-2" ><FaMapMarkerAlt className="me-2 text-success" />51 Green St. Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</p>
                        <p className="text-muted mb-2"><FaEnvelope className="me-2 text-success" />example@email.com</p>
                        <p className="text-muted"><FaPhoneAlt className="me-2 text-success" />+91 123 4567890</p>
                    </Col>

                    <Col lg={2} md={6} className="mb-4">
                        <h5 className="fw-bold">Company</h5>
                        <p className="text-muted mb-3">About Us</p>
                        <p className="text-muted mb-3">Delivery Information</p>
                        <p className="text-muted mb-3">Privacy Policy</p>
                        <p className="text-muted mb-3">Terms & Conditions</p>
                        <p className="text-muted mb-3">Contact Us</p>
                        <p className="text-muted">Support Center</p>
                    </Col>

                    <Col lg={2} md={6} className="mb-4">
                        <h5 className="fw-bold">Category</h5>
                        <p className="text-muted mb-3">Dairy & Bakery</p>
                        <p className="text-muted mb-3">Fruits & Vegetable</p>
                        <p className="text-muted mb-3">Snack & Spice</p>
                        <p className="text-muted mb-3">Juice & Drinks</p>
                        <p className="text-muted mb-3">Chicken & Meat</p>
                        <p className="text-muted">Fast Food</p>
                    </Col>

                    <Col lg={5} md={6}>
                        <h5 className="fw-bold">Subscribe Our Newsletter</h5>
                        <InputGroup className="my-4">
                            <Form.Control placeholder="Search here..." />
                            <Button variant="light" style={{ border: '1px solid #ddd' }}><IoIosSend /></Button>
                        </InputGroup>

                        <div className="d-flex gap-2 mb-4">
                            <Button variant="outline-dark" size="md"><FaFacebookF /></Button>
                            <Button variant="outline-dark" size="md"><FaTimes /></Button>
                            <Button variant="outline-dark" size="md"><FaDribbble /></Button>
                            <Button variant="outline-dark" size="md"><FaInstagram /></Button>
                        </div>

                        <div className="d-flex gap-2">
                            <Image src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/1.jpg" style={{ width: '70px', height: '70px',borderRadius:'8px' }} />
                            <Image src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/2.jpg" style={{ width: '70px', height: '70px',borderRadius:'8px'  }} />
                            <Image src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/3.jpg" style={{ width: '70px', height: '70px',borderRadius:'8px'  }} />
                            <Image src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/4.jpg" style={{ width: '70px', height: '70px',borderRadius:'8px'  }} />
                            <Image src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/5.jpg" style={{ width: '70px', height: '70px',borderRadius:'8px'  }} />
                        </div>
                    </Col>
                </Row>

                <div className="text-center border-top pt-3 text-muted">
                    © 2025 <span className="text-success fw-bold">Carrot</span>, All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
