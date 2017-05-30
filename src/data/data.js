import broccoliChevreImg from '../img/broccoli-chevre-soup.jpg';
import superheroMuffinImg from '../img/superhero-muffins.jpg';
import sausageMinestroneImg from '../img/sausage-minestrone.jpg';
import veggieFriedRiceImg from '../img/veg-fried-rice.jpg';
import sweetSourImg from '../img/sweet-and-sour-chicken.jpg';

const recipes = [{
  name: 'Broccoli Chevre Soup',
  recipeID: 'broccoli-soup',
  imgUrl: broccoliChevreImg,
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
    '4 oz chevre'
  ],
  description: 'null',
  quantity: 1
},
{
  name: 'Superhero Muffins',
  recipeID: 'superhero-muffins',
  imgUrl: superheroMuffinImg,
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
  description: 'null',
  quantity: 1
},
{
  name: 'Sausage Minestrone',
  recipeID: 'sausage-minestrone',
  imgUrl: sausageMinestroneImg,
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
  description: 'null',
  quantity: 1
},
{
  name: 'Veggie Fried Rice',
  recipeID: 'veggie-rice',
  imgUrl: veggieFriedRiceImg,
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
  description: 'null',
  quantity: 1
},
{
  name: 'Sweet and Sour Chicken',
  recipeID: 'sweet-sour-chicken',
  imgUrl: sweetSourImg,
  ingredients: [
    'Chicken thighs',
    '15 oz canned pineapple',
    '2 green bell peppers',
    '1 yellow onion',
    'green onions',
    'Sweet/sour sauce',
  ],
  description: 'null',
  quantity: 1,
},
{
  name: 'Creamy Italian Sausage Soup',
  recipeID: 'creamy-sausage-soup',
  imgUrl: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/pomeranian-puppies/pomeranian-puppy-1.jpg',
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
  description: 'null',
  quantity: 1,
}];

export default {
  get() { return Promise.resolve(recipes); },

  addRecipe(recipe) {
    const saved = {
      ...recipe,
    };
    return Promise.resolve(saved);
  }

};