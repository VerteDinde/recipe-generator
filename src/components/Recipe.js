import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Recipe.css';

export default function Recipe({ name, ingredients, imgUrl, onAdd }) {
  return (
    <div className="thumbnail">
      <img src={imgUrl} alt={'name'} />
      <h3>{name}</h3>
      <Button className="button" onClick={onAdd}>Add to Grocery List</Button>
      <Button className="button">See Recipe</Button>
    </div>
  );
}