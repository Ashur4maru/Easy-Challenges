// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let getal1;
let getal2;
let som = 0;

getal1 = parseFloat(await userInput.question('Voer een getal in: '))
getal2 = parseFloat(await userInput.question('Voer een getal in: '))

som = getal1 + getal2;

console.log(som);

process.exit();