// import NutritionFacts from '../interfaces/Nutrition';


// const NutritionFacts = (props:  NutritionFacts | string) => {
//     const meal = props;
    
//     const nutritional = async () => {
//       try {
//         const response = await fetch(
//           '/api/food'
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

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
// export default NutritionFacts;