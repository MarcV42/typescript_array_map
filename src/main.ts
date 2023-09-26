
/*
Erstellt ein neues TypeScript-Projekt in IntelliJ und führt die folgenden leichten Coding-Aufgaben aus:
    •	Schritt 1: Erstellt ein Array von Zahlen. Nutzt die '.map'-Funktion, um alle Zahlen im Array zu verdoppeln.
	•	Schritt 2: Erstellt ein Array von Wörtern. Nutzt die '.filter'-Funktion, um nur die Wörter auszuwählen, die länger als 5 Buchstaben sind.
	•	Schritt 3: Erstellt ein Array von Zahlen. Nutzt die '.reduce'-Funktion, um die Summe aller Zahlen im Array zu berechnen.
	•	Schritt 4: Erstellt ein Array von Zahlen. Nutzt die '.some'-Funktion, um zu überprüfen, ob mindestens eine Zahl größer als 10 ist.

	*/

// Schritt 1
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((x) => x * 2);
console.log(doubledNumbers); // Gibt [2, 4, 6, 8, 10] aus

// Schritt 2
const words = ['Apfel', 'Banane', 'Kirsche', 'Erdbeere', 'Mango'];
const longerWords = words.filter((element) => element.length > 5);
console.log(longerWords); // Gibt ['Banane', 'Kirsche', 'Erdbeere'] aus


// Schritt 3
// const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(sum); // Gibt 15 aus


// Schritt 4
let numbersHigh = [5, 8, 12, 3, 7];
let isGreaterThan10 = numbersHigh.some((x) => x > 10);
console.log(isGreaterThan10); // Gibt true aus, da mindestens eine Zahl größer als 10 ist
