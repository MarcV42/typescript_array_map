


// Schritt 1
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((x) => x * 2);
console.log(doubledNumbers); // Gibt [2, 4, 6, 8, 10] aus

// Schritt 2
const words = ['Apfel', 'Banane', 'Kirsche', 'Erdbeere', 'Mango'];
const longerWords = words.filter((word) => word.length > 5);
console.log(longerWords); // Gibt ['Banane', 'Kirsche', 'Erdbeere'] aus


// Schritt 3
// const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Gibt 15 aus


// Schritt 4
const numbersHigh = [5, 8, 12, 3, 7];
const isGreaterThan10 = numbersHigh.some((x) => x > 10);
console.log(isGreaterThan10); // Gibt true aus, da mindestens eine Zahl größer als 10 ist
