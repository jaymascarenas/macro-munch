import React from 'react';
import SearchNutrition from '../api/nutritionApi';
import NutrientFacts from '../interfaces/Nutrition';
import { useState , useEffect} from 'react';


const Nutrients = () => {

  const [food, setFood] = useState<string>('');
  const [nutritionFacts, setNutritionFacts] = useState<NutrientFacts[] | null>(null);
  useEffect(() => {
    console.log(nutritionFacts);
  }, [nutritionFacts]);

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
      console.log(data)

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
      
      {nutritionFacts && nutritionFacts.length > 0? (
        <div>
          <h2 className="foodName">{food}</h2>
          <div className="cardContainer">
            <img
              id="nutritionalPic"
              src='./assets/nutritional-pic.webp'
              alt='cool nutritional picture'
            />
            <div className="listContainer">
              <h3>Nutritional Facts</h3>
              <ul id="nutritientList">
                {nutritionFacts.map((nutrient) => (
                  <li key={nutrient.nutrientId}>{nutrient.nutrientName}</li>
                ))}
                 </ul>
                 </div>
                 </div>
        </div>
              ) : (
                <p> No data available </p>
              )}
    </div>
  );

};
export default Nutrients;