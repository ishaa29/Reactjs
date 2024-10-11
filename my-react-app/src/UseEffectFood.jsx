import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure Axios is imported
// import './App.css';

const UseEffectFood = () => {
    let [data, setData] = useState([]);
    let [filter, setFilter] = useState("all");

    async function call() {
        try {
            let apiData = await axios('https://dummyjson.com/recipes');
            setData(apiData.data.recipes);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    useEffect(() => {
        call();
    }, []);

    const filteredData = data.filter((recipe) => {
        if (filter === "all")
            return true;
     return recipe.mealType.includes(filter);


    }); 

      function delet(id){
        let newData=filteredData.filter((a,b)=>{
            return b!==id
        })
        // setVal(true)
        setData(newData)
      }
    return (
        <>
            <div className="button-container">
                <button onClick={() => setFilter("Breakfast")}>Breakfast</button>
                <button onClick={() => setFilter("Lunch")}>Lunch</button>
                <button onClick={() => setFilter("Dinner")}>Dinner</button>
                <button onClick={() => setFilter("all")}>All</button>
            </div>

            <div className="recipe-container">
                {
                    filteredData.length > 0 ? (
                        filteredData.map((recipe, index) => (
                            <div className='card' key={index}>
                            <button onClick={()=>delet(index)}>delete</button>
                                <img src={recipe.image} alt={recipe.name} />
                                <h3>{recipe.name}</h3>
                                <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
                                <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                                <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                                <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                                <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
                                <p><strong>Meal Type:</strong> {recipe.mealType.join(", ")}</p>
                                <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                                <p><strong>Instructions:</strong></p>
                                <ol>
                                    {recipe.instructions.map((instruction, idx) => (
                                        <li key={idx}>{instruction}</li>
                                    ))}
                                </ol>
                            </div>
                        ))
                    ) : (
                        <p>No recipes found for the selected category.</p>
                    )
                }
            </div>
        </>
    );
}

export default UseEffectFood;