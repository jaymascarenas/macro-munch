import express from 'express';
import type { Request, Response } from 'express';

//make fetch to nutrition API
const router = express.Router();
// GET /users/:id - Get a user by id
router.get('/:food', async (req: Request, res: Response) => {
  const { food } = req.params;
  const url = `${process.env.USDA_BASE_URL_API}/foods/search?api_key=${process.env.USDA_API_KEY}&query=${food}`;
  try {
  const response = await fetch(
    url
  );
  //get all foods(data.foods). loop
const data = await response.json();

// res.status(200).json(data);
// return;


//loop through food items. look at their nutrients
const chosenFood = data.foods[0];

//look at nutrients and get properties you want
const filteredFoods = chosenFood.foodNutrients.map((n: any) => {
  return {
    'nutrientId': n.nutrientId ,
    'nutrientName': n.nutrientName,
    'derivationDescription': n.derivationDescription,
  };
});

console.log(filteredFoods);

  res.status(200).json(filteredFoods);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export {router as nutritionRouter};