import React, { Component } from 'react';
import GroceryItem from './GroceryItem';
import { ListGroup } from 'react-bootstrap';
import '../styles/GroceryList.css';

export default class GroceryList extends Component {

  render() {
    const { shoppingList } = this.props;
    return (
      <div>
        <h2>Grocery List</h2>
        <p>Click the recipes above to add ingredients to your grocery list.
          You can check these items off as you shop.</p>
        <ListGroup
          className="list"
        >
          {shoppingList &&
            shoppingList.map((ingredient, i) => 
            <GroceryItem
              key={i}
              ingredient={ingredient}
            />)}
        </ListGroup>
      </div>
    );
  }
}