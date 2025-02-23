import NutrientFacts from '../interfaces/Nutrition';


const SearchNutrition = async (food: string) =>{ 
      try {
        const response = await fetch(
          `/api/nutrition/${food}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
  
      } catch (err) {
        console.log("Unable to retrieve data", err);
        return Promise.reject("Could not fetch nutritional facts");
      }
    };
   
export default SearchNutrition;
