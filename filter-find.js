const numbers = [5,23,45,67,78,78,98,56];
const largeNum = numbers.filter(num => num > 70);
const sotoNum = numbers.filter(number =>number<60);
console.log(largeNum,sotoNum);
// filter korle akta condition thakbe jodi condition fill up hoi tahole kaj hobe na hole hobe na 

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const damijinis = products.filter(jinisPotro => jinisPotro.price >100);
// console.log(damijinis);
//string keo filter kora jai 
const blacks = products.filter(product => product.color == 'blue');
console.log(blacks);
//output empty array dibe cause match korbe na  blue color 
// Map vs Filter : map gonohare  sob element ke niye operation kore result ta akta array akare dibe . r filter  every element er jonne akta condition thakbe jodi condition true hoi tahole oi element dibe 
