import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [show, setShow] = useState([]);

  const post = async () => {
    try {
      const data = await fetch(`https://dummyjson.com/products`);
      const res = await data.json();
      setShow(res.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    post();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Products Details</h2>
      <Row className="g-4 justify-content-center">
        {show.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={item.thumbnail}
                className="product-img"
              />
              <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                <Card.Title className="text-primary">{item.title}</Card.Title>
                <Card.Text className="text-muted description">
                  {item.description}
                </Card.Text>
                <div className="w-100">
                  <p className="mb-1">
                    Category:-{item.category}
                  </p>
                  <p className="mb-2">
                   price:-₹{item.price}
                  </p>
                  <Button variant="dark" className="w-100">
                    View More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
