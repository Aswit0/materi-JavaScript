// Membuat Object
const person = {
    name: "John",
    age: 25,
    address: {
      city: "New York",
      zip: "10001"
    }
  };
  
  // Mengakses properti pada Object
  console.log(person.name); // Output: John
  console.log(person.address.city); // Output: New York
  
  // Membuat Array
  const numbers = [1, 2, 3, 4, 5];
  
  // Mengakses value dari indeks array
  console.log(numbers[2]); // Output: 3
  
  // Menggunakan building function pada Object
  const keys = Object.keys(person);
  console.log(keys); // Output: ['name', 'age', 'address']
  
  // Menggunakan building function pada Array
  const slicedArray = numbers.slice(1, 4);
  console.log(slicedArray); // Output: [2, 3, 4]
  
  // Menggunakan building function pada Array untuk transformasi
  const doubledArray = numbers.map(num => num * 2);
  console.log(doubledArray); // Output: [2, 4, 6, 8, 10]
  