// let and const 
const hobby =' Mahmud Khan';
let phone = 'iphone 15';
phone = 'samsung galaxy s17'
// const use korle pore r value update kore use kora jabe na .tokhon let use korte hobe. reassign korte caile let use korte hobe 
//2 template string 
const myBook = `I am Mahmud Khan . ${hobby} I have many friends ${phone} `
// ata use korre dynamic vabe jekono var use kora jai 
console.log(myBook);

//3. default parameter
// spread or three dots 
function maxNumber (array =[]) {
    const max = Math.max(...array);
    return max;
}
const bigNum = maxNumber();
console.log(bigNum);

//arrow function 
/* function squre (x){
    return x*x 
// } */ //ata one line a arrow function diye lekha jai //
const squre = x=> x*x;
console.log(squre(9));
