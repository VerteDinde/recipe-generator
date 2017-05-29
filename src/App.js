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
      recipes: null
    };
  }

  componentDidMount() {
    recipesAPI.get()
      .then(recipes => this.setState({ recipes }));
  }

  render() {
    const { recipes } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*{recipes && <GroceryList ingredients={recipes.ingredients} />}*/}
        {recipes && <Recipes recipes={recipes} />}
      </div>
    );
  }
}
