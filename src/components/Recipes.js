import React from 'react';
import Recipe from './Recipe';

export default function Recipes({ recipes }) {
  return (
    <div>
      <h2>Recipes</h2>
      <p>Below are the selection of recipes available:</p>
      <ul>
        {recipes.map((recipe, i) => <Recipe
          key={i}
          {...recipe}
        />)}
      </ul>
    </div>
  );
}