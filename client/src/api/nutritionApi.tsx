import NutrientFacts from '../interfaces/Nutrition';


const SearchNutrition = (props:  NutritionFacts | string) => {
    const meal = props;
    
    const nutritional = async () => {
      try {
        const response = await fetch(
          '/api/food'
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

const filterProperties = (array, properties) =>
    array.map(obj => 
      properties.reduce((acc, prop) => {
        if (obj.hasOwnProperty(prop)) acc[prop] = obj[prop];
        return acc;
      }, {})
    );
  
  // Example usage:
  const data = [
    { name: 'Alice', age: 25, city: 'New York', occupation: 'Engineer' },
    { name: 'Bob', age: 30, city: 'San Francisco', occupation: 'Designer' },
    { name: 'Charlie', age: 35, city: 'Los Angeles', occupation: 'Teacher' }
  ];
  
  const filteredData = filterProperties(data, ['name', 'age']);
  
  console.log(filteredData);
  // Output:
  // [
  //   { name: 'Alice', age: 25 },
  //   { name: 'Bob', age: 30 },
  //   { name: 'Charlie', age: 35 }
  // ]

//         const data = await response.json();
//         console.log(data)
//         return data;
//       } catch (err) {
//         console.log("Unable to retrieve data", err);
//         return Promise.reject("Could not fetch nutritional facts");
//       }
//     };
//     const search = SearchNutrition();
//     return search;
// }
export default SearchNutrition;