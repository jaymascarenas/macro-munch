import { Recipe } from '../models/index.js';

export const seedRecipes = async () => {
  await Recipe.bulkCreate(
    [
      {
        name: 'Nachos', 
        ingredients: ['tortilla chips', 'cheddar cheese', 'jalapenos', 'ground beef'], 
        description: 'Really good nachos.',
        UserId: 1
      },
      {
        name: 'French Fries',
        ingredients: ['potatoes', 'oil', 'salt'],
        description: 'Crispy and delicious fries.',
        UserId: 3
      },
      {
        name: 'Best in the West Baked Beans',
        ingredients: ['ground beef', 'bacon', 'ketchup', 'onion', 'garlic', 'molasses', 'barbeque sauce', 'brown sugar', 'pinto beans', 'kidney beans'],
        description: 'Really good baked beans. Almost a chili!',
        UserId: 1
      },
      {
        name: 'Spaghetti Carbonara',
        ingredients: ['spaghetti', 'eggs', 'parmesan cheese', 'pancetta', 'black pepper'],
        description: 'Classic Italian pasta dish with a creamy egg-based sauce.',
        UserId: 3
      },
      {
        name: 'Chicken Alfredo',
        ingredients: ['fettuccine', 'chicken breast', 'heavy cream', 'parmesan cheese', 'garlic', 'butter'],
        description: 'Creamy and rich Alfredo pasta with tender chicken.',
        UserId: 2
      },
      {
        name: 'Chocolate Chip Cookies',
        ingredients: ['flour', 'butter', 'brown sugar', 'white sugar', 'eggs', 'vanilla extract', 'baking soda', 'chocolate chips'],
        description: 'Chewy and gooey homemade chocolate chip cookies.',
        UserId: 1
      },
      {
        name: 'Classic Cheeseburger',
        ingredients: ['ground beef', 'cheddar cheese', 'burger bun', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard'],
        description: 'A juicy, classic cheeseburger with all the fixings.',
        UserId: 3
      },
      {
        name: 'Caesar Salad',
        ingredients: ['romaine lettuce', 'parmesan cheese', 'croutons', 'Caesar dressing', 'chicken breast'],
        description: 'Crispy and refreshing salad with a creamy Caesar dressing.',
        UserId: 1
      },
      {
        name: 'Buffalo Wings',
        ingredients: ['chicken wings', 'hot sauce', 'butter', 'garlic powder', 'salt', 'pepper'],
        description: 'Spicy and tangy wings perfect for game day.',
        UserId: 2
      },
      {
        name: 'Vegetarian Stir-Fry',
        ingredients: ['broccoli', 'carrots', 'bell peppers', 'snap peas', 'tofu', 'soy sauce', 'garlic', 'ginger'],
        description: 'A healthy and colorful stir-fry packed with fresh veggies.',
        UserId: 3
      }
    ],
    { individualHooks: true }
  );
};
