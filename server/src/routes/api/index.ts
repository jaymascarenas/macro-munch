import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { recipeRouter } from './recipe-routes.js';
import nutritionRouter from './NutritionAPI.js';

const router = Router();

router.use('/users', userRouter);
router.use('/recipes', recipeRouter);
router.use('/nutrition', nutritionRouter);

export default router;
