import React from "react";
import { IRecipeTagProps } from "./types";
import "./App.css";

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
  return (
    <li className="tag" onClick={() => onSelectTag(tagName)} style={{ cursor: "pointer" }}>
      {tagName}
    </li>
  );
};

export default RecipeTag;
