import React from 'react';
import SearchNutrition from '../api/nutritionApi';
import NutrientFacts from '../interfaces/Nutrition';
import { useState } from 'react';


const Nutrients: React.FC = () => {

  const [food, setFood] = useState<string>('');
  const [nutritionFacts, setNutritionFacts] = useState<NutrientFacts | null>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFood(e.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchFood(food);
   
  };

  const fetchFood = async (props: string) => {
    try {
      const data = await SearchNutrition(props)
     setNutritionFacts(data);
   } catch (err) {
    console.error('Could not fetch nutrient data', err);
   }
   };
  
  return (
    <div>
      <div className="headContainer">
      <h1> Nutritional Facts</h1>
      <p>Nutrition Deets!</p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search Food Item"
          value={food}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
        </form>
      </div>
      
      {nutritionFacts ? (
        <div>
          <h2 className="foodName">{nutritionFacts?.foodName}</h2>
          <div className="cardContainer">
            <img
              id="nutritionalPic"
              src='./dist/assets/nutritional-pic.webp'
              alt='cool nutritional picture'
            />
            <div className="listContainer">
              <h3>Nutritional Facts</h3>
              <ul id="nutritientList">
                {nutritionFacts.foodNutrients.map((nutrient, index) => (
                  <li key={index}>{nutrient}</li>
                ))};
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <>Nutritional Data</>
      )}
    </div>
  );

};
export default Nutrients;