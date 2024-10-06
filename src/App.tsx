import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeTagList from "./RecipeTagList";
import Recipe from "./Recipe"; 
import { IRecipe } from "./types";

const App = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | null>(null); 

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((response) => response.json())
        .then((data) => setRecipes(data.recipes));
    }
  }, [selectedTag]);

  const handleSelectTag = (tagName: string) => {
    setSelectedTag(tagName);
    setSelectedRecipe(null); 
  };

  const handleSelectRecipe = (recipe: IRecipe) => {
    setSelectedRecipe(recipe); 
  };

  const handleGoBack = () => {
    setSelectedRecipe(null); 
    setSelectedTag(null); 
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {!selectedTag && !selectedRecipe ? ( 
        <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
      ) : selectedRecipe ? ( 
        <Recipe recipeData={selectedRecipe} onGoBack={handleGoBack} />
      ) : ( 
        <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />
      )}
    </div>
  );
};

export default App;
