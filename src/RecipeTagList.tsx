import React from "react";
import RecipeTag from "./RecipeTag";
import { IRecipeTagListProps } from "./types";
import "./App.css";

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
  return (
    <div>
      <h3>Choose a tag below</h3>
      <ul className="tag-grid">
        {tagList.map((tag) => (
          <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeTagList;
