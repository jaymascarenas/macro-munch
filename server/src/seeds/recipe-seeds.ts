import { Recipe } from '../models/index.js';

export const seedRecipes = async () => {
  await Recipe.bulkCreate(
    [
      { name: 'nachos', 
        ingredients: ['tortilla chips', 'cheddar cheese', 'jalapenos', 'ground beef'], 
        description: 'really good nachos',
      },
      {
        name: 'french fries',
        ingredients: ['potatoes', 'oil', 'salt'],
        description: 'crispy and delicious',
      },
      {
        name: 'best in the west baked beans',
        ingredients: ['ground beef', 'bacon', 'ketchup', 'onion', 'garlic', 'molasses', 'barbeque sauce', 'brown sugar','pinto beans', 'kidney beans'],
        description: 'really good baked beans. Almost a chili!',
      },
    ],
    { individualHooks: true }
  );
};