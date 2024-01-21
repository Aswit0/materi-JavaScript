// 1. Function Declaration
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // 2. Function Call
  greet("Nana"); // Output: Hello, Nana!
  
  // 3. Function Parameter
  function addNumbers(a, b) {
    console.log(`Sum: ${a + b}`);
  }
  
  addNumbers(5, 7); // Output: Sum: 12
  
  // 4. Default Value for Parameters
  function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  
  greetUser(); // Output: Hello, Guest!
  greetUser("Dimas"); // Output: Hello, Dimas!
  
  // 5. Return Value
  function multiply(a, b) {
    return a * b;
  }
  
  const result = multiply(3, 4);
  console.log(`Multiplication Result: ${result}`); // Output: Multiplication Result: 12
  
  // 6. Built-in Function Example (toUpperCase)
  const lowercaseString = "hello";
  const uppercaseString = lowercaseString.toUpperCase();
  console.log(`Uppercase: ${uppercaseString}`); // Output: Uppercase: HELLO
  