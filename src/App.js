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
    console.log('List: ', list);
    list = this.uniqueArray(list, "name");
    this.setState({ shoppingList: list });
  }

  uniqueArray(list, name) {
    let obj = {};
    console.log('List: ', list);
    console.log('Name: ', name);

    return Object.keys(list.reduce((prev, next) => {
      console.log('Inside: ', obj[next[name]]);
      if(!obj[next[name]]) {obj[next[name]] = next;}
      return obj;
    }, obj))
    .map((i) => {
      console.log('Object: ', obj[i]);
      return obj[i];
    });
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
