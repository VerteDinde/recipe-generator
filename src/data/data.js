const recipes = [{
  name: 'Broccoli Chevre Soup',
  recipeID: 'broccoli-soup',
  ingredients: [
    'unsalted butter',
    'yellow onion',
    '2 carrots',
    'sea salt',
    '3 cloves garlic',
    '4 cups veggie broth',
    '2 heads broccoli',
    '1 bay leaf',
    'black pepper',
    'tahini',
    '4 oz chevre'],
  quantity: 1
},
{
  name: 'Superhero Muffins',
  recipeID: 'superhero-muffins',
  ingredients: [
    'almond meal',
    'rolled oats',
    'cinnamon',
    'nutmeg',
    'baking soda',
    'sea salt',
    'walnuts',
    'chocolate chips',
    '3 eggs',
    '1 zucchini',
    '2 carrots',
    'unsalted butter',
    'maple syrup',
    'vanilla extract'
  ],
  quantity: 1
},
{
  name: 'Sausage Minestrone',
  recipeID: 'sausage-minestrone',
  ingredients: [
    '1 lb spicy Italian sausage',
    '3 ribs celery',
    '3 carrots',
    '1 yellow onion',
    '3 cloves garlic',
    'oregano',
    'sea salt',
    '8 cups veggie broth',
    '3 zucchini',
    '14 oz diced tomatoes',
    '14 oz cannelli beans',
    '3 cups penne',
    'Parmesan'
  ],
  quantity: 1
},
{
  name: 'Veggie Fried Rice',
  recipeID: 'veggie-rice',
  ingreidents: [
    'Saffron oil',
    '2 cloves garlic',
    'ginger',
    'red pepper flakes',
    '6 cups chopped vegetables',
    'sea salt',
    '4 cups brown rice',
    'soy sauce',
    '2 eggs',
  ],
  quantity: 1
},
{
  name: 'Sweet and Sour Chicken',
  recipeID: 'sweet-sour-chicken',
  ingredients: [
    'Chicken thighs',
    '15 oz canned pineapple',
    '2 green bell peppers',
    '1 yellow onion',
    'green onions',
    'Sweet/sour sauce',
  ],
  quantity: 1,
},
{
  name: 'Creamy Italian Sausage Soup',
  recipeID: 'creamy-sausage-soup',
  ingredients: [
    'mild Italian sausage',
    'red pepper flakes',
    'thick cut bacon',
    '1 large onion',
    '2 cloves garlic',
    'chicken broth',
    'potatoes (Yukon golds)',
    'heavy cream',
    'fresh kale'
  ],
  quantity: 1,
}];

export default {
  get() { return Promise.resolve(recipes.slice()); }
};