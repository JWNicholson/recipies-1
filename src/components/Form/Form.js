import React, { useState, useEffect} from 'react';
import Recipe from '../Recipe/Recipe';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './form.css';
import Axios from 'axios';

//require('dotenv').config();

const appId  = process.env.REACT_APP_EDAMAMID; 
//console.log(appId);

const appKey = process.env.REACT_APP_EDAMAMKEY;
console.log(appKey);


function Form() {
  console.log(appId);
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");//default is set to chicken


    const getRecipes = () =>{
      // const response = 
       Axios
         .get(`https:api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`)
             .then(res => {
                 console.log("axios get", res.data.hits);
                 setRecipes(res.data.hits);
                 
             })
   }

    useEffect(() => {
       console.log('useEffect ran');
        getRecipes();
      },[query]);

     

      //handle user search input
      const handleChange = e => {
        setSearch(e.target.value);
        //console.log(search);
      }

    //this function is called by the form's submit button.
    //it sets the query to what's in the input box at the time button is clicked
    //the useEffect function (above in this code) has query in the limiter brackets[]
    //this causes use effect to only run when the form is submitted
    const getSearch = e => {
        e.preventDefault(); // stop the page from refreshing automatically
        setQuery(search);
        setSearch("");//re-set search to empty
    }
    
    return (
        <>
            <form className="form-search" onSubmit={getSearch}>
                <input 
                    className="search-box" 
                    type="text"
                    value={search}
                    onChange={handleChange}
                    />
                <button 
                    className="btn-search" 
                    type="submit"
                 
                    >
                       Search
                    </button>
            </form>

            <Row>
            {recipes.map(recipe => (
                  <Recipe 
                    // key={recipe.recipe.label + recipe.recipe.source}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    servings={recipe.recipe.yield}
                    time={recipe.recipe.totalTime}
                    ingredients={recipe.recipe.ingredients}
                  />
            ))}
            </Row>

        </>
    )
}

export default Form
