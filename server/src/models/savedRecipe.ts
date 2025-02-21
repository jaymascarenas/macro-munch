import { DataTypes, type Sequelize, Model,type Optional } from 'sequelize';



interface RecipeAttributes {
    recipe_id: number;
    name: string;
    ingredients: string[];
    description: string;
}

interface RecipeCreationAttributes extends Optional<RecipeAttributes, 'recipe_id'> {}

export class Recipe extends Model<RecipeAttributes, RecipeCreationAttributes> implements RecipeAttributes {
    public recipe_id!: number;
    public name!: string;
    public ingredients!: string[];
    public description!: string;
}

export function RecipeFactory(sequelize: Sequelize): typeof Recipe {
    Recipe.init(
        {
            recipe_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                    type: DataTypes.STRING,
                    allowNull: false,
            },
            ingredients: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
    
        },
        {
            sequelize,
            tableName: 'Recipe',
            freezeTableName: true,
        }
    );
    return Recipe
}