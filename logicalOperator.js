// Mendefinisikan dua variabel untuk perbandingan
let angka1 = 5;
let angka2 = 10;

// Menggunakan operator perbandingan dengan pengecekan null
console.log("Hasil angka1 > angka2:", angka1 > angka2); // Lebih besar
console.log("Hasil angka1 <= angka2:", angka1 <= angka2); // Lebih kecil sama dengan
console.log("Hasil angka1 == angka2:", angka1 == angka2); // Sama dengan (loose equality)
console.log("Hasil angka1 === angka2:", angka1 === angka2); // Sama dengan (strict equality)
console.log("Hasil angka1 != angka2:", angka1 != angka2); // Tidak sama dengan
console.log("Hasil angka1 !== angka2:", angka1 !== angka2); // Tidak sama dengan (strict)

// Menggunakan operator logika
let kondisi1 = true;
let kondisi2 = false;

console.log("Hasil kondisi1 && kondisi2:", kondisi1 && kondisi2); // Logika AND (semua argumen harus benar)
console.log("Hasil kondisi1 || kondisi2:", kondisi1 || kondisi2); // Logika OR (satu benar, lainnya benar)
console.log("Hasil !kondisi1:", !kondisi1); // Logika NOT

//NULL Check
let user;
console.log(user ?? 'Anonymous'); // output Anonymous
let akun = 'Wito';
console.log(akun ?? 'Anonymous'); // output Wito