import React, { Component } from 'react';
import GroceryItem from './GroceryItem';

export default class GroceryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ingredients } = this.props.recipes;
    return (
      <div>
        <h2>Grocery List</h2>
        <p>Click the recipes above to add ingredients to your grocery list. You can check these items off as you shop.</p>
        <GroceryItem ingredients={ingredients} />
      </div>
    );
  }
}