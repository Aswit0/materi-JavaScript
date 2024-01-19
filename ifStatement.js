// Deklarasi variabel
let nilai = 75;

// If statement
if (nilai >= 70) {
  console.log("Anda lulus!"); 
}

// If-else statement
if (nilai >= 70) {
  console.log("Anda lulus!"); 
} else {
  console.log("Anda tidak lulus.");
}

// If-else if statement
if (nilai >= 80) {
  console.log("Anda mendapatkan nilai A");
} else if (nilai >= 70) {
  console.log("Anda mendapatkan nilai B");
} else if (nilai >= 60) {
  console.log("Anda mendapatkan nilai C");
} else {
  console.log("Anda tidak lulus.");
}

// Conditional Operator (Ternary Operator)
let status = (nilai >= 70) ? "Lulus" : "Tidak lulus";
console.log(`Status: ${status}`);