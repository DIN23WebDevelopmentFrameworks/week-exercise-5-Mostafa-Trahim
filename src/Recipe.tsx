import React from "react";
import { IRecipeProps } from "./types";

interface RecipeProps extends IRecipeProps {
  onGoBack: () => void; 
}

const Recipe: React.FC<RecipeProps> = ({ recipeData, onGoBack }) => {

  const btnClicked = () => {
    onGoBack(); 
  };

  return (
    <div>
      <button onClick={btnClicked}>Go Back</button>
      <h4>{recipeData.name}</h4>
      <p><strong>Ingredients:</strong> {recipeData.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> {recipeData.instructions.join(", ")}</p>
      <p><strong>Preparation Time:</strong> {recipeData.prepTimeMinutes} minutes</p>
      <p><strong>Cook Time:</strong> {recipeData.cookTimeMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipeData.servings}</p>
      <p><strong>Difficulty:</strong> {recipeData.difficulty}</p>
      <p><strong>Cuisine:</strong> {recipeData.cuisine}</p>
      <p><strong>Calories Per Serving:</strong> {recipeData.caloriesPerServing}</p>
      <img src={recipeData.image} alt={recipeData.name} width={200} />
    </div>
  );
};

export default Recipe;
