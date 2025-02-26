import express from 'express';
import type { Request, Response } from 'express';
import { Recipe, User } from '../../models/index.js';

const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
      const recipes = await Recipe.findAll({
        include: [ {model: User} ],
    });
      res.json(recipes);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });



router.get('/:id', async (req: Request, res: Response) => {
    try {
      const recipeData = await Recipe.findByPk(req.params.id, {
        include: [{ model: User }],
      });

      if (!recipeData) {
        res.status(404).json({ message: 'No recipe was found with that id!'});
      }

      res.status(200).json(recipeData);
    } catch(err) {
      res.status(500).json(err);
    }
  });

  router.get('/user/:UserId', async (req: Request, res: Response) => {
    try {
      const recipeData = await Recipe.findAll({
        where: { UserId: req.params.UserId },
        include: [{ model: User }],
      });

      if (!recipeData || recipeData.length === 0) {
        res.status(404).json({ message: 'No recipe was found with that id!'});
      }
      res.status(200).json(recipeData);
    } catch(err) {
      res.status(500).json(err);
    }
  });


  router.post('/', async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      const recipeData = await Recipe.create(req.body);
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const recipeData = await Recipe.destroy({
        where: {
          recipe_id: req.params.id,
        },
      });
  
      if (!recipeData) {
        res.status(404).json({ message: 'No recipe found for that id' });
        return;
      }
  
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  export {router as recipeRouter};