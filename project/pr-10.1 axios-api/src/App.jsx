import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  
  const [form, setForm] = useState([]);

  const post = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/recipes`);
      setForm(res.data.recipes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    post();
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 recipe-heading">🍽️ Popular Recipes</h2>
      <Row className="g-4 justify-content-center">
        {form.map((val, index) => (
          <Col md={4} lg={3} sm={6} xs={12} key={index}>
            <Card className="recipe-card">
              <Card.Img
                variant="top"
                src={val.image}
                className="recipe-img"
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center">{val.name}</Card.Title>
                <Card.Text >
                  ⏱️ Prep Time: {val.prepTimeMinutes} mins
                </Card.Text>
                <Card.Text>
                  ⭐ Rating: {val.rating} ({val.reviewCount} reviews)
                </Card.Text>
                <Button variant="warning" className="mt-auto w-100">
                  View Recipe
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
