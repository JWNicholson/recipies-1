import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';


function App() {
  
  return (
    
      <Container fluid className="App">

        <Row>
          <Col>
          <Header />
          </Col>
        </Row>
      
        <Row>
          <Col>
          <Form />
          </Col>
        </Row>

        <Row>
          <Col>
          <Footer />
          </Col>
        </Row>

     </Container>
   
  );
}

export default App;
