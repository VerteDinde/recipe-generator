import React, { Component } from 'react';
import Recipe from './Recipe';

export default class Recipes extends Component {
  
  render() {
    const { recipes, onAdd } = this.props;
    
    return (
      <div>
        <h2>Recipes</h2>
        <p>Below are the selection of recipes available:</p>
        <ul>
          {recipes.map((recipe, i) => <Recipe
            key={i}
            {...recipe}
            onAdd={() => onAdd(recipe)}
          />)}
        </ul>
      </div>
    );
  }
}