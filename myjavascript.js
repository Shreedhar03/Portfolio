const sum = (...numbers)=>{

    let result = 0 ;
    for(let num of numbers){
        result+=num;
    }

    return result;
}

console.log(sum(12,88,50,50,60,40,-89));

/* --------------- Array Destructuring ---------------*/
const grades = [100,90,80,70,60,50,40,30,20,10]

console.log('abcd\n');

let [a,b,c,d,...other] = grades ;

console.log(a,b,c,d,other);

/* --------------- Object Destructuring ---------------*/

const info = {
    name:'Shreedhar',
    roll:'39',
    city:'Pune',
    age:19
}

let {name,roll,city,age} = info

console.log(name,age,roll,city);
