import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default function GroceryItem({ ingredient }) {
  return (
    <ListGroupItem className="grocery-item">
      <input type="checkbox"></input>
      {ingredient}
    </ListGroupItem>
  );
}