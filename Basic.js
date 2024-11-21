// function WebDeveloper(){
//     console.log("Shahil");
    
// }
// WebDeveloper()

//parameter
// function node(javaScript,html,css,python) {
//     console.log(javaScript);
    
// }

// node("javaScript,html,css,python")

//Function and variable

// function Gun(x , y) {
//     const rose = x + y;
//     console.log(rose);
// }

// Gun(5 , 9)

//Return function
// function bang() {
//     const shahil = "output"
//     return shahil
// }
//    const myName = bang()
//    console.log(myName);
 
//searching the biggest number

// const numbers = [2,4,5,7,4,2,23,56,12,87]
// let biggest = numbers[0]
// console.log( "Before  biggest: ",biggest);

// for (let i = 1; i < numbers.length; i++) {
//     console.log("Current number :", numbers[i] , "biggest number :" , biggest);
    
//     if (numbers[i] > biggest) {
//         biggest = numbers[i]
        
//     }
//    console.log("current bigger :", biggest);
   
    
// }
// console.log("After biggest :", biggest);

const numbers = [23 ,64,89,22,2,32,43,2,3,4,5,6,7,100,34]
// let  bigger = numbers[0]
// for (let i = 1; i < numbers.length; i++) {
//     console.log(i);
//     if (numbers[i] > bigger) {
//         bigger = numbers[i]
//     }
//     console.log( bigger);
    
// }
// console.log(bigger); 

console.log(Math.max(...numbers));

