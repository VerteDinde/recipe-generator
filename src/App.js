import React, { Component } from 'react';
import recipesAPI from './data/data';
import GroceryList from './components/GroceryList';
import Header from './components/Header';
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
        <Header />
        <p className="App-intro">
        </p>
        {recipes && <Recipes recipes={recipes} onAdd={this.addToShoppingList} />}
        {recipes && <GroceryList shoppingList={shoppingList} onAdd={this.addToShoppingList} />}
      </div>
    );
  }
}
