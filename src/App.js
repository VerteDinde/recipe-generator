import React, { Component } from "react";
import recipesAPI from "./data/data";
import GroceryList from "./components/GroceryList";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import "./styles/App.css";

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
    recipesAPI.get().then(recipes => this.setState({ recipes }));
  }

  addToShoppingList(recipe) {
    let list = recipe.ingredients.concat(this.state.shoppingList);
    list = this.uniqueArray(list, "name");
    this.setState({ shoppingList: list });
  }

  uniqueArray(list, name) {
    return list.reduce((prev, item) => {
      let newItem = prev.find(i => {
        return i.name === item.name;
      });
      if (!newItem) {
        prev.push({ name: item.name, amount: item.amount });
      } else {
        newItem.amount = newItem.amount + item.amount;
      }
      return prev;
    }, []);
  }

  render() {
    const { recipes, shoppingList } = this.state;
    return (
      <div className="App">
        <Header />
        <p className="App-intro" />
        {recipes && (
          <Recipes recipes={recipes} onAdd={this.addToShoppingList} />
        )}
        {recipes && (
          <GroceryList
            shoppingList={shoppingList}
            onAdd={this.addToShoppingList}
          />
        )}
      </div>
    );
  }
}
