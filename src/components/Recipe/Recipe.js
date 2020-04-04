import React from 'react';

 const Recipe = ({
                    title, 
                    calories, 
                    image,
                    servings,
                    time,
                    ingredients
                }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title}/>
            <p>Calories: {Math.round(calories)}</p>
            <p>Serves {servings}</p>

        {title && time > 0 ?  <p>Takes about {time} min to make.</p> 
        : null 
        } 

       <ol>
        {ingredients.map(ing => (
            <li>{ing.text}</li>
        ))}
       </ol>
       

        </div>
    )
}

export default Recipe;
