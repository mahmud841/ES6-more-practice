const numbers = [5,6,7,8,9,10];
const output2 = [];
// const output = [];
//normal function akare 
/* function double(number){
    return number *3;
} */
//array function akare 
const doubleIt = number => number *3;
/* for (const number of numbers) {
    const result = number * 3;
    output.push(result);
} */
 for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}  
// console.log(output);
//output arry er value 3 gun kore dibe 

//steps
/* 1. loop each elememt 
2.element diye function ke call kora 
3.result akta array er modhe push korsi 
but ai 3ta kaj ami aksate korte pari r atai map */

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number *3);
const output420 = numbers.map(x => x *3);
//ai 3 vabe mapping output showkorano jai 
console.log(output420);

const squares = numbers.map (x => x *x);
console.log(squares);