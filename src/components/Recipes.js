import React from 'react';
import Recipe from './Recipe';

export default function Recipes({ recipes }) {
  return (
    <ul>
      {recipes.map((recipe, i) => <Recipe
        key={i}
        {...recipe}
      />)}
    </ul>
  );
}