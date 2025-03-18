//  Variables and datatypes
//  in java script, you can store values in variables using :

// 1. let -> Can be changed later 
// 2. const -> Cannot be changed after assigning
// 3. var (old way) -> Can be changed later

let name = "Abu" // string 
const age = 22 // Number
let isStudent = true // Boolean

// 2, Operatores 

let a = 10 , b = 5

console.log(a+b); // Addition
console.log(a-b); // subtraction
console.log(a*b); // Multiplication
console.log(a/b); // Division
console.log(a%b); // Modulus (Remainder)
console.log(a>b); // 
console.log(a==10) // Equal to
console.log(a===10) // Equal to and same type
console.log(a!=10) // Not equal to
console.log(a!==10) // Not equal to or not same type
console.log(a<b) // Less than
console.log(a<=10) // Less than or equal to
console.log(a>=10) // Greater than or equal to  

// 3. Functions
//Functions are blocks of reusable code.
function greet(name){
    return "Hello Mr. " + name + "!";
}

console.log(greet("Abu"));
