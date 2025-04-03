import React, { useState } from 'react'; //https://react.dev/reference/react/useState

function FoodSearch() {
    //initializing states
    const [foodItem, setFoodItem] = useState('');
    const [nutritionInfo, setNutritionInfo] = useState(null);

    //function updates fooditem with value entered
    const handleInputChange = (event) => {
        setFoodItem(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();                                                 //preventing the default form submission behavior
        
        if (foodItem) {                                                         //checking there is an input
            //fetch is used to make network requests        https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
            //encodedURIComponet makes sure that whatever is passed by is URL safe
            fetch(`https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(foodItem)}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",                         //data received is in JSON format
                    "X-Api-Key": "F3g78oIv4V3DmK3hpntj6A==YM1y8QIdF97jdT9T"     //¿¿¿need to figure out how to hide key¿¿¿
                }
            })
            .then(response => response.json())                                  //handling 'Promise'
            .then(data => {
                setNutritionInfo(data);                                         //setting state nutritionInfo to the data
                // console.log(data);
            })
            .catch(error => {                                                   //handles if any erros occur
                console.error('Error:', error);
            });
        }
    };

    //https://react.dev/learn/conditional-rendering
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={foodItem}
                    onChange={handleInputChange}
                    placeholder="Enter food item"
                />
                <button type="submit">Search</button>
            </form>
            {nutritionInfo && (
                <div>
                    <h3 id="ND-title">Nutrition Details</h3>
                    {/* Render nutritional information here */}
                    <pre id="nutrition-info">{JSON.stringify(nutritionInfo, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default FoodSearch;
