//declare variable based on the namer of an object property 
const myObject = {x: 2 , y:500, z:899, a:123,b:987,c:9878}
const {x, a, c}= myObject;
// console.log(x,a,c,f);
// akhane f er value undefinded dibe 
// mind it  object theke property nite caile variable object akare nite hobe r jodi array teke nite cai tahole array akare nite hobe 

//destructuring array
const [p,q] =[25,67,78,89];
const [best,joy] =['mama','mimi','dafar'];
console.log(p,q,joy,best);
//array er output milbe position onusare 
const {sky,money,color} = {sky:'red', soil:"valona", color:'joghonno',money:465};
// console.log(sky,money,color);

// chaining object 
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka vodka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react js',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};
console.log(company?.web?.tech.third);
// console.log(company?.backgg?.tech.third);

// nested object korte caile and sekhan theke read korte gele thakle to pelam but na thakle error aranor jonne optional chaining korte pari ? symbol use kore uporer moto kore 