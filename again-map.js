const friends = ['Mahmud', 'Khan', 'Tom', 'Sohag','Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
products.map(product => console.log(product));
// products.forEach(product => console.log(product));
/* foreach for looper moto onekta .ata use korbo jokhonn return lagbe na .map er moto kaj kore. difference only map kaj kore full array return korbe otherhand foreach return korbe na just every element er jonne kaj koprbe   */ 
// console.log(productPrices);