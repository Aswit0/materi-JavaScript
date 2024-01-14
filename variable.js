
    // Contoh penggunaan var
    var globalVar = "Ini variabel global";

    function exampleVar() {
      var localVar = "Ini variabel lokal (function scope)";
      console.log(globalVar);  // Bisa diakses karena variabel global
      console.log(localVar);   // Bisa diakses di dalam fungsi
    }

    // Contoh penggunaan let
    let globalLet = "Ini variabel global (block scope)";

    if (true) {
      let blockLet = "Ini variabel dalam blok if";
      console.log(globalLet);  // Bisa diakses karena block scope
      console.log(blockLet);   // Bisa diakses di dalam blok if
    }

    // Contoh penggunaan const
    const constantVar = "Ini variabel konstan";
    console.log(constantVar);  // Tetap dapat diakses

    //constantVar = "Tidak bisa diubah";  // Akan menyebabkan error, karena konstanta tidak dapat diubah

    // Contoh variabel di luar fungsi tidak dapat diakses di dalam blok if
    // console.log(localVar);  // Akan menyebabkan error

    // Output pada console
    console.log("Diluar fungsi:", globalVar);  // Dapat diakses di luar fungsi
    exampleVar();  // Memanggil fungsi yang menggunakan var

