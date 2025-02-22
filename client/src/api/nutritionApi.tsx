import NutrientFacts from '../interfaces/Nutrition';


const SearchNutrition = async (food: string) =>{ 
      try {
        const response = await fetch(
          `/api/foods/https://api.nal.usda.gov/fdc/v1/foods/search${food}`
          // `/api/food?food=${encodeURIComponent(food)}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

// const filterProperties = (array, properties) =>
//     array.map(obj => 
//       properties.reduce((acc, prop) => {
//         if (obj.hasOwnProperty(prop)) acc[prop] = obj[prop];
//         return acc;
//       }, {})
//     );
  
  const foodNutrients = [
    {nutrientId: 0, nutrientName: "", derivationDescription: ""}
  ];
  
  const filteredFoods = data.foodNutrients.map(foodNutrients, ['nutrientId', 'nutrientName', 'derivationDescription']);
  
  console.log(filteredFoods);
return filteredFoods;
      } catch (err) {
        console.log("Unable to retrieve data", err);
        return Promise.reject("Could not fetch nutritional facts");
      }
    };
   
export default SearchNutrition;
