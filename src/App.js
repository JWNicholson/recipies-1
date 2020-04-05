import React from 'react';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';


function App() {
  

  //example request with filters  "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  //https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}

  //const request = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

 

  
   

  return (
    
      <Container fluid className="App">
        <Row>
          <Col>
          <h1>Eat me</h1>
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
