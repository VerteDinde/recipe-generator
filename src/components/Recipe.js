import React from 'react';
import '../styles/Recipe.css';

export default function Recipe({ name, ingredients, imgUrl }) {
  return (
    <div className="thumbnail">
      <img src={imgUrl} alt={'name'} />
      <h2>{name}</h2>
      <button>Add to Grocery List</button>
      <button>See Recipe</button>
    </div>
  );
}