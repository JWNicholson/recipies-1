import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



 const Recipe = ({
                    title, 
                    calories, 
                    image,
                    servings,
                    time,
                    ingredients
                }) => {
    return (
    <>
        <Card border="dark" style={{ width: '24rem' }}>
            <Card.Img variant="top" src={image} />
         <Card.Body>
          <Card.Title>{title}</Card.Title>
            <Card.Text>
                <p>Calories: {Math.round(calories)}</p>
                <p>Serves {servings}</p>
                {title && time > 0 ?  <p>Takes about {time} min to make.</p> 
                 : null 
                } 
            </Card.Text>
         </Card.Body>
         <ListGroup className="list-group-flush">
       
                {ingredients.map(ing => (
                <ListGroup.Item>{ing.text}</ListGroup.Item>
            ))}
        
        </ListGroup>   
            
       </Card>
    </>
    )
}

export default Recipe;
