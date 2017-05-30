import React, { Component } from 'react';
import logo from './logo.svg';
import recipesAPI from './data/data';
import GroceryList from './components/GroceryList';
import Recipes from './components/Recipes';
import './styles/App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      recipes: null,
      shoppingList: []
    };

    this.addToShoppingList = this.addToShoppingList.bind(this);
  }

  componentDidMount() {
    recipesAPI.get()
      .then(recipes => this.setState({ recipes }));
  }

  addToShoppingList(recipe) {
    let list = recipe.ingredients.concat(this.state.shoppingList);
    this.setState({ shoppingList: list });
  }

  render() {
    const { recipes, shoppingList } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>'Run Fast, Eat Slow' Meal Generator</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {recipes && <GroceryList shoppingList={shoppingList} onAdd={this.addToShoppingList} />}
        {recipes && <Recipes recipes={recipes} onAdd={this.addToShoppingList} />}
      </div>
    );
  }
}
