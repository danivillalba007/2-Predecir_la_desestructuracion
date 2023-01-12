const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Tesla Mercedes Honda
//Mercedes

console.log(randomCar)
console.log(otherRandomCar)

//Pensé que se iban a listar todas las marcas, el error es que sólo se guarda un dato del array si hay sólo una variable, si hubieran dos más si se hubieran impreso todos

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//sale error porque la variable name ya se cambió de nombre con otherName
//Elon


console.log(name);
console.log(otherName);

//no sale error pero sale vacío

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;


//Pensé mucho y la verdad que no estoy seguro, pienso de repente que password cambia de nombre a hashedPassword e ingresa como propiedad al objeto persona

console.log(password);
console.log(hashedPassword);

// password imprimió tranquilamente y saltó que hasheedPassword no estaba definido, calculo que es porque password no estaba definido dentro del objeto person


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers; //2
const [, , , second] = numbers; //5
const [, , , , , , , , third] = numbers; //2


//2
//2

console.log(first == second);
console.log(first == third);

//pensé que al poner == se igualaría el valor, después de ejecutar me dí cuenta que tendría que haber sido una comparación



const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;

//value
// [1, 5, 1, 8, 3, 3]
//1
//5

console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//todo correcto