# "Eat Slow" V2: Recipe and Grocery List Generator

## Getting Started
This app is created with Create React App. To install, clone the repo and run `npm i` (npm install). Run locally with `npm start`, and build out with `npm run build`.

If you run into issues installing, you may need to update `react-scripts`. To update an existing project to a new version of `react-scripts`, [open the changelog](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check package.json in this folder if you’re not sure), and apply the migration instructions for the newer versions. In most cases, bumping the `react-scripts` version in package.json and running `npm i` in this folder should be enough.

## Goals
- To redesign an app I'd previously designed in vanilla JS and CSS.
- To practice using problem solving with React, and using React components.
- To build something fun and simple that I would actually use.
- To practice SCSS design principles.

## Phases
1. Create buttons that would actually generate the grocery lists when a recipe is selected. (complete)
2. Allow multiple recipes to display on the same page, but not show the same recipe more than one time. (complete)
3. Combine ingredients from multiple recipes into the same food item - for example, if Recipe #1 calls for 3 carrots and Recipe #2 calls for 5 carrots, the list should read "8 carrots", not two lines with 3 and 5 carrots, respectively. (complete)
4. Segment the full recipe list by ingredient categories, based on where they would be in a grocery store. Ex: Produce, dairy, canned goods, bread, etc. (in progress)
5. Make the app visually pleasing and responsive, since the user will likely be using it on a phone. Measure of success?: I should be able to send this to my non-technical runner friend and have her use it happily at the store. (in progress)
6. Make the app more performant.

## Possible Eventual Stretch Goals
1. Sort recipes by vegetarian, meat, pasta, etc.
2. Include recommended weekly meal plans with the recipes
3. Allow users to search by ingredients, to find recipes they could use based on existing items in their fridge