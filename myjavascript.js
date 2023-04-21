// const sum = (...numbers)=>{

//     let result = 0 ;
//     for(let num of numbers){
//         result+=num;
//     }

//     return result;
// }

// console.log(sum(12,88,50,50,60,40,-89));

// /* --------------- Array Destructuring ---------------*/
// const grades = [100,90,80,70,60,50,40,30,20,10]

// console.log('abcd\n');

// let [a,b,c,d,...other] = grades ;

// console.log(a,b,c,d,other);

// /* --------------- Object Destructuring ---------------*/

// const info = {
//     name:'Shreedhar',
//     roll:'39',
//     city:'Pune',
//     age:19
// }

// let {name,roll,city,age} = info

// console.log(name,age,roll,city);

const str = "Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away. Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go. Serve with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months."

let arr = str.split(".")

let filteredSteps = arr.filter((step)=>{
    return step!=""
})

console.log(arr);
console.log(filteredSteps);

console.log(str.length)

str.length>400 ? console.log(str.slice(0,399) + "....read more") : console.log(str) ;


filteredSteps.map((item,key)=>{
    console.log(key+1 + ")" +item);
    
})
