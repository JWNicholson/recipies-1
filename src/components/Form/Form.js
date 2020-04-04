import React, { useState, useEffect} from 'react';
import Recipe from '../Recipe/Recipe';
import './form.css';
import Axios from 'axios';




function Form() {
   
    const APP_ID = "267c58c7";
    const APP_KEY = "dbbf068a8f2e35a9be49a54c7d2c3441";

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        console.log('useEffect ran');
    getRecipes();
      },[]);

      const getRecipes = () =>{
          const response = 
          Axios
            .get(`https:api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
                .then(res => {
                    console.log("axios", res.data.hits);
                    setRecipes(res.data.hits);
                    
                })
                console.log("Recipes returned: ",response)
      }
    
    return (
        <div>
            <form className="form-search">
                <input 
                    className="search-box" 
                    type="text"
                    />
                <button 
                    className="btn-search" 
                    type="submit"
                 
                    >
                       Search
                    </button>
            </form>
            {recipes.map(recipe => (
                  <Recipe 
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    servings={recipe.recipe.yield}
                    time={recipe.recipe.totalTime}
                  />
            ))}
        </div>
    )
}

export default Form
