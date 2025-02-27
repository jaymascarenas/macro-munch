import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { RecipeFactory } from './savedRecipe.js';

const User = UserFactory(sequelize);
const Recipe = RecipeFactory(sequelize);

User.hasMany(Recipe, {
    onDelete: 'CASCADE',
})
Recipe.belongsTo(User, {
})

export {sequelize, User, Recipe }; //add Recipe once model is complete for it
