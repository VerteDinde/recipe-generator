import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import '../styles/GroceryList.css';

export default function GroceryItem({ ingredient }) {
  return (
    <ListGroupItem className="grocery-item">
      <input 
        className="toggle" 
        type="checkbox"
      />
      {ingredient.amount} {ingredient.name}
    </ListGroupItem>
  );
}