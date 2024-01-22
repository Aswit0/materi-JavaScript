// Metode untuk mendefinisikan string dengan tanda kutip tunggal
let singleQuoteString = 'Ini adalah string dengan tanda kutip tunggal';

// Metode untuk mendefinisikan string dengan tanda kutip ganda
let doubleQuoteString = "Ini adalah string dengan tanda kutip ganda";

// Metode untuk mendefinisikan string dengan backtick (template literals)
let backtickString = `Ini adalah string dengan backtick`;

// Mendapatkan panjang string
let lengthOfString = singleQuoteString.length;
console.log('Panjang String:', lengthOfString);

// Metode ekstraksi string: slice
let slicedString = singleQuoteString.slice(5, 11);
console.log('String yang di-Slice:', slicedString);

// Metode ekstraksi string: substring
let substringString = singleQuoteString.substring(5, 11);
console.log('String yang di-Substring:', substringString);

// Metode ekstraksi string: substr
let substrString = singleQuoteString.substr(5, 6);
console.log('String yang di-Substr:', substrString);

// Metode penggantian string
let replacedString = singleQuoteString.replace('tanda kutip', 'gantungan kunci');
console.log('String yang di-Replace:', replacedString);

// Metode huruf besar/kecil
let upperCaseString = singleQuoteString.toUpperCase();
console.log('Huruf Besar:', upperCaseString);

let lowerCaseString = singleQuoteString.toLowerCase();
console.log('Huruf Kecil:', lowerCaseString);

// Metode penggabungan string
let concatenatedString = singleQuoteString.concat(' ', doubleQuoteString);
console.log('String yang Digabung:', concatenatedString);

// Metode pemangkasan (trim)
let trimmedString = singleQuoteString.trim();
console.log('String yang di-Trim:', trimmedString);

// Metode pencarian string: includes
let includesResult = singleQuoteString.includes('ini');
console.log('Apakah string mengandung "ini":', includesResult);

// Metode pencarian string: search
let searchResult = singleQuoteString.search('adalah');
console.log('Posisi "adalah" dalam string:', searchResult);

// Metode pencarian string: indexOf
let indexOfResult = singleQuoteString.indexOf('string');
console.log('Posisi pertama "string" dalam string:', indexOfResult);

// Metode pencarian string: lastIndexOf
let lastIndexOfResult = singleQuoteString.lastIndexOf('a');
console.log('Posisi terakhir "a" dalam string:', lastIndexOfResult);

// Metode pencarian string: startsWith
let startsWithResult = singleQuoteString.startsWith('Ini');
console.log('Apakah string diawali dengan "Ini":', startsWithResult);
