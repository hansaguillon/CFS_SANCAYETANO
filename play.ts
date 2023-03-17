import * as rls from "readline-sync";
let vuelta1 : number = rls.questionFloat("Ingrese tiempo de la primera vuelta: ");
let vuelta2 :number = rls.questionFloat("Ingrese tiempo de la segunda vuelta: ");
let vuelta3 :number = rls.questionFloat("Ingrese tiempo de la tercera vuelta: ");
let vuelta4 :number = rls.questionFloat("Ingrese tiempo de la cuarta vuelta: ");

let total : number = vuelta1+ vuelta2+vuelta3+vuelta4;
let promedio : number = total /4;

console.log("el promedio de las vueltas es: ", promedio);





/*let nombre : string = "";

nombre = rls.question("ingrese su nombre: ");
console.log("su nombre es ",nombre);*/