import superheroes from 'superheroes';
import uniqueRandomArray from 'unique-random-array';
import supervillains from 'supervillains';

const randomHero = uniqueRandomArray(superheroes);
const randomVillain = uniqueRandomArray(supervillains);

console.log(randomHero());
console.log(randomVillain());

const battleMessage = `${randomHero()} battles against ${randomVillain()} in an epic battle! Who will win?`;
console.log(battleMessage);

//Aqui falta leer el archivo de texto para revelar el secreto.
