const word = 'Hola';

console.log(word.length);

//Indica que letra está en esa posicion
console.log(word.charAt(3));

//Posición de la última letra
console.log(word.charAt(word.length - 1));

//Indica si el string incluye esa secuencia de letras
console.log(word.includes('ol'));

//Indica en que posición esta la letra
console.log(word.indexOf('a'));

console.log(word.toUpperCase());
console.log(word.toLowerCase());

console.log(word.startsWith('H'));

//Indica las letras que estan desde la posicion 1 hasta la 2 o desde la 1 en adelante
console.log(word.substring(3, 5));

//console.log('Hola' + name + '. Tienes ' + age + ' años ');
//console.log(`Hola ${name}. Tienes ${age} años`);

//EJERCICIOS

// EJ1 Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else
const getWord = word => {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
};
getWord('coche');
getWord('amapola');

// EJ2 Repite el ejercicio anterior pero con un operador ternario
const getWord1 = word1 => {
  word1.length > 5 ? console.log(word1.toUpperCase()) : console.log(word.toLowerCase());
};
getWord1('azul');
getWord1('bicicleta');

//EJ3 Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación"
const checkConjugation = verb => {
  if (verb.endsWith('ar')) {
    return 'es de la primera conjugación';
  }

  if (verb.endsWith('er')) {
    return 'es de la segunda conjugación';
  }

  if (verb.endsWith('ir')) {
    return 'es de la tercera conjugación';
  }

  return false;
};

const getVerb = (verb1, verb2) => {
  const verb1Result = checkConjugation(verb1);
  const verb2Result = checkConjugation(verb2);

  if (!verb1Result || !verb2Result) {
    console.log('Uno de los verbos es incorrecto');
    return;
  }

  console.log(`El verbo ${verb1} ${verb1Result} y el verbo ${verb2} ${verb2Result}`);
};
getVerb('andar', 'comer');
//ar er ir

//EJ4 Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona"
const getRandomLetter = word => {
  const randomeNumberA = Math.floor(Math.random() * word.length);
  const randomeNumberB = Math.floor(Math.random() * word.length);

  const firstLetter = word.charAt(randomeNumberA);
  const secondLetter = word.charAt(randomeNumberB);

  return firstLetter + secondLetter;
};

const generateWord = (wordA, wordB, wordC) => {
  const first = getRandomLetter(wordA);
  const second = getRandomLetter(wordB);
  const third = getRandomLetter(wordC);

  console.log(first + second + third);
};
generateWord('Hola', 'Adiós', 'Mano');

//Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com"
const getEmail = email => {
  const atPosition = email.indexOf('@');
  const name = email.substring(0, atPosition);
  const domain = email.substring(atPosition + 1);
  console.log(`El usuario es ${name} y el dominio es ${domain}`);
};

//Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra
const randomLetter = randomWord => {
  const randomNumber = Math.floor(Math.random() * randomWord.length);
  const randomLetter = randomWord.charAt(randomNumber);
  console.log(randomLetter);
};

//Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs
const intercalateLetters = word => {
  console.log(
    word.charAt(0).toLowerCase() +
      word.charAt(1).toUpperCase() +
      word.charAt(2).toLowerCase() +
      word.charAt(3).toUpperCase() +
      word.charAt(4).toLowerCase()
  );
};

//Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87"
const generateUsername = (name, surname) => {
  const userNameAndSurname = name.charAt(0).toUpperCase + surname;
  const randomNumber = Math.ceil(Math.random() * 100);

  console.log(userNameAndSurname + randomNumber);
};

//Crea una función que reciba una palabra cualquiera e imprima la palabra con la primera y última letra en mayúsculas
const getWord2 = word => {
  const firstLetterUpperCase = word.charAt(0).toUpperCase();
  const lastLetterUpperCase = word.charAt(word.length - 1).toUpperCase();
  const midLetter = Math.floor(word.length / 2);
  const midLetterUpperCase = word.charAt(midLetter).toUpperCase();

  const firstSegment = word.substring(1, midLetter);
  const secondSegment = word.substring(midLetter + 1, word.length - 1);

  console.log(firstLetterUpperCase + firstSegment + midLetterUpperCase + secondSegment + lastLetterUpperCase);
};
getWord2('azul');

//FUncion de reciba 2 palabras y te las devuelva unidas por un guión
const getWords = (worda, wordb) => {
  console.log(`${worda}-${wordb}`);
};
getWords('rojo', 'verde');

//Función que reciba una palabra de 5 letras y te diga cuantas vocales tiene
const getVowels = wordFive => {
  let counter = 0;
  const vowels = 'aeiouAEIOU';
  if (
    //vowels.includes(wordFive.charAt(0)) OTRA SOLUCIÓN
    wordFive.charAt(0) === 'a' ||
    wordFive.charAt(0) === 'e' ||
    wordFive.charAt(0) === 'i' ||
    wordFive.charAt(0) === 'o' ||
    wordFive.charAt(0) === 'u'
  ) {
    counter++;
  }

  if (
    //vowels.includes(wordFive.charAt(1))
    wordFive.charAt(1) === 'a' ||
    wordFive.charAt(1) === 'e' ||
    wordFive.charAt(1) === 'i' ||
    wordFive.charAt(1) === 'o' ||
    wordFive.charAt(1) === 'u'
  ) {
    counter++;
  }

  if (
    wordFive.charAt(2) === 'a' ||
    wordFive.charAt(2) === 'e' ||
    wordFive.charAt(2) === 'i' ||
    wordFive.charAt(2) === 'o' ||
    wordFive.charAt(2) === 'u'
  ) {
    counter++;
  }

  if (
    wordFive.charAt(3) === 'a' ||
    wordFive.charAt(3) === 'e' ||
    wordFive.charAt(3) === 'i' ||
    wordFive.charAt(3) === 'o' ||
    wordFive.charAt(3) === 'u'
  ) {
    counter++;
  }
  if (
    wordFive.charAt(4) === 'a' ||
    wordFive.charAt(4) === 'e' ||
    wordFive.charAt(4) === 'i' ||
    wordFive.charAt(4) === 'o' ||
    wordFive.charAt(4) === 'u'
  ) {
    counter++;
  }

  console.log(counter);
};
getVowels('verde');

//Función que reciba una palabra de 5 letras y la imprima al revés
const getWordFive = wordFive => {
  const letter0 = wordFive.charAt(0);
  const letter1 = wordFive.charAt(1);
  const letter2 = wordFive.charAt(2);
  const letter3 = wordFive.charAt(3);
  const letter4 = wordFive.charAt(4);

  console.log(letter4 + letter3 + letter2 + letter1 + letter0);
};
getWordFive('lapiz');

//CRea una función llamada SumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus dígitos
const sumDigits = randomNumber => {
  const numberString = String(randomNumber);

  const number1 = Number(numberString.charAt(0));
  const number2 = Number(numberString.charAt(1));
  const number3 = Number(numberString.charAt(2));

  console.log(number1 + number2 + number3);
};
sumDigits(123);
