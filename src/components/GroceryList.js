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
        <GroceryItem ingredients={ingredients} />
      </div>
    );
  }
}