// Contoh penggunaan Number method
let floatNumber = 3.14159;
console.log("Float Number:", floatNumber);

// Mengubah float menjadi string
let floatAsString = floatNumber.toString();
console.log("Float as String:", floatAsString);

// Operasi string + float
let stringNumber = "42";
let result = parseFloat(stringNumber) + floatNumber;
console.log("String + Float:", result);

// Notasi eksponensial dengan dua angka di belakang koma
let exponentialNotation = floatNumber.toExponential(2);
console.log("Exponential Notation:", exponentialNotation);

// Notasi tetap dengan dua angka di belakang koma
let fixedNotation = floatNumber.toFixed(2);
console.log("Fixed Notation:", fixedNotation);

// Notasi presisi dengan empat digit signifikan
let precisionNotation = floatNumber.toPrecision(4);
console.log("Precision Notation:", precisionNotation);

// Contoh penggunaan Math method
let num1 = 5.67;
let num2 = -8.45;

// Pembulatan ke angka terdekat
console.log("Round:", Math.round(num1));

// Pembulatan ke atas
console.log("Ceil:", Math.ceil(num1));

// Pembulatan ke bawah
console.log("Floor:", Math.floor(num1));

// Menghapus angka di belakang koma
console.log("Trunc:", Math.trunc(num1));

// Pangkat dua
console.log("Power:", Math.pow(num1, 2));

// Akar kuadrat positif
let positiveSqrt = Math.sqrt(Math.abs(num2));
console.log("Positive Square Root:", positiveSqrt);

// Nilai minimum
console.log("Min:", Math.min(num1, num2));

// Nilai maksimum
console.log("Max:", Math.max(num1, num2));

// Angka acak antara 0 dan 1
let randomNum = Math.random();
console.log("Random Number:", randomNum);


//lebih lengkap di   https://www.w3schools.com/js/js_math.asp