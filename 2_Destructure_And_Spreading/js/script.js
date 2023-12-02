let numbers = [1,2,3,4,5,6,7,8,9,10];
let num = [11,12,13]

let [a,b,c,d,e,f,g] = numbers;


// Destructure
console.log("a,b,c,d,e,f,g = " , a,b,c,d,e,f,g);

// Spreading
let num1 = [...numbers , ...num];
console.log("num1 == ",num1);


let stu ={
    fname :"Abhay",
    age : 29,
    surname : "Radadiya"
}

// Destructure
let {fname} = stu;
console.log("fname = ",fname);

// Spreading
let stu1 = {...stu , id:345}
console.log(stu1);