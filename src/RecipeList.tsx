import React from "react";
import { IRecipe } from "./types";

interface RecipeListProps {
  recipes: IRecipe[];
  onSelectRecipe: (recipe: IRecipe) => void; // New prop for selecting a recipe
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onSelectRecipe }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} onClick={() => onSelectRecipe(recipe)}> 
          <h4>{recipe.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
