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
                Calories: {Math.round(calories)}
            </Card.Text>   
            <Card.Text>
             Serves {servings}
            </Card.Text>
                {title && time > 0 ?  
                <Card.Text>
                    Takes about {time} min to make.
                </Card.Text>
                 : null 
                } 
         <ListGroup className="list-group-flush">
       
                {ingredients.map(ing => (
                <ListGroup.Item>{ing.text}</ListGroup.Item>
            ))}
        
        </ListGroup>   
        </Card.Body>
       </Card>
    </>
    )
}

export default Recipe;
